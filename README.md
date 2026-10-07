# AI Lease & Issue Agent

A small full-stack service where two AI agents sit on top of a single **unit** record. The lease agent reads a lease document into a structured, human-reviewable record and validates it against the owner's ruleset. The vision agent reads property photos into a condition report and a draft work order. Both agents write against a shared `unit_id`, so an owner can open one screen and see a unit's lease and its open issues in one place.

---

## Prerequisites

- Node.js 18.17 or later (Node 20 LTS recommended)
- MySQL or MariaDB 8 or later (XAMPP / LAMPP works)
- npm

---

## Setup after pulling from GitHub

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment file
cp .env.example .env
```

If XAMPP has no root password by default, which is why the URL has no password segment — just `root@host`.

Create the database (once) either through phpMyAdmin or the command line:

```bash
/opt/lampp/bin/mysql -u root -e "CREATE DATABASE lease_ai_agent CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
```

Then run:

```bash
# 3. Generate the Prisma client
npx prisma generate

# 4. Apply the schema to the database
npx prisma migrate dev --name init

# 5. Seed the units from units.json
npx prisma db seed

# 6. Start the app
npm run dev
```

Open http://localhost:3000.

---

## What you'll see

- **`/`** — the units list, seeded from `units.json`
- **`/upload/lease`** — paste or upload a lease text file
- **`/upload/issue`** — upload photos against a unit
- **`/units/MC-B-1204`** — the "bring them together" screen showing a unit's lease record, rule results, flags, and open work orders

---

## How the AI lease agent works

The lease agent is triggered when a lease is uploaded through the upload page. Everything below happens automatically in sequence.

**Extraction.** The agent sends the lease text to a model provider and asks it to pull out a fixed set of fields: landlord name, tenant name, unit identifier, monthly rent, annual rent, deposit amount, escalation clause, commencement date, expiry date, term length, renewal terms, and termination terms. For every field the model returns not just the value, but also a confidence score, the exact snippet of text the value came from, and a location hint like "Page 2, Clause 4." This is what makes the output traceable — an owner can always see where a value came from without re-running the model.

**Problem detection.** While extracting, the agent also reports two things. First, a list of missing fields — anything from the required set that it could not find in the document. Second, a list of contradictions — cases where two clauses disagree about the same field. Both are stored against the lease so a human can review them.

**Normalization.** The extracted fields are then projected into a clean numeric view: monthly rent becomes a number, dates become ISO strings, the escalation clause becomes a flag saying whether it is a real mechanism (a percentage, a CPI link, a fixed increase) or just vague language like "as mutually agreed." This normalized view is what the rules engine consumes. This step is deliberate — it separates "what the model said" from "what the rules check," so the rules never depend on the model's formatting choices.

**Rule validation.** The rules engine runs every rule from `owner_ruleset.json` against the normalized record and returns one of three outcomes per rule: PASS, FAIL, or NOT DETERMINABLE. Each outcome carries a short human-readable reason and, where possible, a reference to the clause it relied on. NOT DETERMINABLE is used when a rule cannot be evaluated because a required input is missing — for example, deposit-to-rent comparison when the deposit was never found. This is different from FAIL, which means the rule was evaluated and the lease violates it.

**Unit matching.** The agent tries to resolve the lease to a real unit. It first attempts an exact match on the unit identifier returned by extraction. If that fails, it falls back to a fuzzy match on the raw label — extracting the digits from something like "Apartment 1204" and looking for a unit whose ID ends with those digits. If neither approach resolves, the lease is still stored but R7 (the rule that checks unit existence and availability) reports NOT DETERMINABLE with the raw label in the reason, so a human can resolve the ambiguity.

**Persistence.** The lease, its extracted fields, its flags, and its rule results are all written to the database in a single transaction. Nothing is stored outside a table that can be queried later.

**Human review.** On the unit page, every extracted field is shown with its source snippet and its confidence. The owner can accept a field as-is, reject it, or edit the value before accepting. When any of those actions happens, the review endpoint re-runs the rules engine against the accepted view of the record and updates the rule results accordingly. So if a human corrects the deposit amount, the deposit-to-rent rule re-evaluates immediately and may flip from FAIL to PASS. This is what makes the human-in-the-loop a real mechanism rather than a cosmetic one.

**Traceability as a first-class concern.** Every field, every flag, every rule result, and every work order has a `status` column recording whether a human has accepted or rejected it. Nothing is a log line; everything is a row that can be queried. If the owner asks "why did the agent think the rent was twelve thousand?", the answer is in the source snippet and location stored against that field.

---

## How the vision agent works

A user uploads one or more photos against a unit. The agent sends the images to the model provider and receives back a condition assessment (new, worn, or damaged), a list of contents and equipment visible in the photos, a list of visible damages with severity, and a draft work order with a title and description. All of this is stored against the unit as an issue with a linked draft work order. On the unit page, the work order title and description are editable inline, and the owner can accept or reject the draft. Accepted work orders appear alongside the lease on the same screen, which is what ties the two agents together around the unit.

---

## Running without an API key

The default `MODEL_PROVIDER=stub` uses a local stub that does real regex-based extraction on the lease text and returns a deterministic vision result based on the byte length of the uploaded photos. This means the entire app is demonstrable offline, with no key, no network calls, and no cost. To switch to a real model, set `MODEL_PROVIDER=openai` in `.env`, add your `OPENAI_API_KEY`, and implement the OpenAI provider against the existing interface. The rest of the code does not change.

---

## Troubleshooting

- **`No command registered for 'generate'`** — wrong Prisma CLI on PATH. Reinstall with `npm install -D prisma@7.10.0 --save-exact`.
- **`Argument "url" is missing in data source block`** — Prisma 6 CLI reading a Prisma 7 schema. Align the CLI version with the schema.
- **`Column count of mysql.proc is wrong`** — XAMPP MariaDB upgrade skipped. Run the `mysql_upgrade` commands above.
- **`No seed command configured`** — the seed entry is missing from `prisma.config.ts`.
- **Units table empty in the UI** — the seed didn't run. Run `npx prisma db seed` and confirm it prints a success message.
- **`The default export is not a React Component in page: "/upload/lease"`** — a page file is missing its default export. Every `page.tsx` in the App Router must export a default React component.

If you hit something else, run `npx prisma validate` first. It gives cleaner errors than `migrate dev` and will point at the exact line.