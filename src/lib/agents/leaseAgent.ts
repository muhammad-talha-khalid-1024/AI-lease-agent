import { getProvider } from "./provider";
import { LeaseExtractionSchema, type LeaseRecord } from "../schemas";

const SCHEMA_HINT = `
Return JSON: {
  fields: [{ key, value, confidence, sourceSnippet, sourceLocation }],
  missing: string[],
  contradictions: [{ message, evidence }]
}
Keys to attempt: landlord_name, landlord_signed, tenant_name, tenant_signed,
unit_label_raw, monthly_rent, annual_rent, deposit_amount, escalation_clause,
commencement_date (ISO), expiry_date (ISO), term_months, renewal_terms, termination_terms.
`;

export async function runLeaseAgent(rawText: string) {
  const provider = getProvider();
  const raw = await provider.extractLease({
    documentText: rawText,
    schemaHint: SCHEMA_HINT,
    instructions:
      "Extract each field with the smallest possible verbatim source snippet and a location hint (e.g. 'Page 2, Clause 4'). " +
      "If two clauses disagree about the same field, list it in contradictions AND emit both candidate values as fields with distinct keys.",
  });
  const parsed = LeaseExtractionSchema.parse(raw);
  return parsed;
}

export function toLeaseRecord(fields: { key: string; value: string }[]): LeaseRecord {
  const get = (k: string) => fields.find(f => f.key === k)?.value ?? null;
  const num = (v: string | null) => (v == null ? null : Number(String(v).replace(/[^\d.\-]/g, "")) || null);

  const monthly = num(get("monthly_rent"));
  const annual  = num(get("annual_rent"));
  const term    = num(get("term_months"));
  const esc     = get("escalation_clause");

  return {
    landlord_present: !!get("landlord_name"),
    landlord_signed: get("landlord_signed") === "yes",
    tenant_present: !!get("tenant_name"),
    tenant_signed: get("tenant_signed") === "yes",
    unit_id: get("unit_id"),
    unit_label_raw: get("unit_label_raw"),
    monthly_rent: monthly,
    annual_rent: annual,
    deposit_amount: num(get("deposit_amount")),
    escalation_clause: {
      is_defined: !!esc && /(\d+(\.\d+)?\s*%|CPI|fixed|per\s+annum)/i.test(esc),
      text: esc,
    },
    commencement_date: get("commencement_date"),
    expiry_date: get("expiry_date"),
    term_months: term,
  };
}