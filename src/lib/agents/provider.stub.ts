import type { ModelProvider } from "./types";

const MONTHS: Record<string, number> = {
  jan:1, feb:2, mar:3, apr:4, may:5, jun:6,
  jul:7, aug:8, sep:9, oct:10, nov:11, dec:12,
};

function parseDate(s: string): string | null {
  // Matches "12 March 2025", "March 12, 2025", "2025-03-12"
  const iso = s.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return iso[0];
  const dmy = s.match(/(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})/);
  if (dmy) {
    const m = MONTHS[dmy[2].slice(0,3).toLowerCase()];
    if (m) return `${dmy[3]}-${String(m).padStart(2,"0")}-${dmy[1].padStart(2,"0")}`;
  }
  const mdy = s.match(/([A-Za-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})/);
  if (mdy) {
    const m = MONTHS[mdy[1].slice(0,3).toLowerCase()];
    if (m) return `${mdy[3]}-${String(m).padStart(2,"0")}-${mdy[2].padStart(2,"0")}`;
  }
  return null;
}

function snippet(text: string, at: number, len = 120) {
  const start = Math.max(0, at - 30);
  return text.slice(start, Math.min(text.length, start + len)).replace(/\s+/g, " ").trim();
}

export const stubProvider: ModelProvider = {
  name: "stub",

  async extractLease({ documentText }) {
    const text = documentText;
    const lines = text.split(/\r?\n/);
    const fields: any[] = [];
    const push = (key: string, value: string, m: RegExpExecArray | null, location: string, conf = 0.85) => {
      fields.push({
        key, value, confidence: conf,
        sourceSnippet: m ? snippet(text, m.index) : "",
        sourceLocation: location,
      });
    };

    // Landlord / tenant names
    const landlord = /(?:landlord|owner)[^\n:]*[:\-]\s*([A-Z][^\n]{2,80})/i.exec(text);
    if (landlord) push("landlord_name", landlord[1].trim(), landlord, "Header");

    const tenant = /(?:tenant|lessee)[^\n:]*[:\-]\s*([A-Z][^\n]{2,80})/i.exec(text);
    if (tenant) push("tenant_name", tenant[1].trim(), tenant, "Header");

    // Signatures
    push("landlord_signed", /landlord[^\n]{0,40}signature\s*[:\-]?\s*\S+/i.test(text) ? "yes" : "no", null, "Signature block", 0.7);
    push("tenant_signed", /tenant[^\n]{0,40}signature\s*[:\-]?\s*\S+/i.test(text) ? "yes" : "no", null, "Signature block", 0.7);

    // Unit
    const unitM = /(?:unit|apartment|premises)[^\n:]*[:\-]\s*([A-Z0-9\- ]{3,20})/i.exec(text);
    if (unitM) push("unit_label_raw", unitM[1].trim(), unitM, "Premises clause");

    // Rent
    const monthly = /monthly\s+rent[^\n]*?([\d,]{3,})/i.exec(text);
    if (monthly) push("monthly_rent", monthly[1].replace(/,/g, ""), monthly, "Rent clause", 0.9);

    const annual = /annual\s+rent[^\n]*?([\d,]{3,})/i.exec(text);
    if (annual) push("annual_rent", annual[1].replace(/,/g, ""), annual, "Rent clause", 0.85);

    const deposit = /(?:security\s+)?deposit[^\n]*?([\d,]{3,})/i.exec(text);
    if (deposit) push("deposit_amount", deposit[1].replace(/,/g, ""), deposit, "Deposit clause", 0.85);

    // Escalation
    const esc = /(?:escalation|increase|review)[^\n]{0,180}/i.exec(text);
    if (esc) {
      const isDefined = /(\d+(\.\d+)?\s*%|CPI|fixed\s+increase|per\s+annum)/i.test(esc[0]);
      push("escalation_clause", esc[0].trim(), esc, "Rent review clause", isDefined ? 0.85 : 0.55);
    }

    // Dates
    const start = /(?:commence(?:ment)?|start\s+date|beginning)[^\n]{0,40}?(\d{4}-\d{2}-\d{2}|\d{1,2}\s+[A-Za-z]+\s+\d{4}|[A-Za-z]+\s+\d{1,2},?\s+\d{4})/i.exec(text);
    if (start) {
      const iso = parseDate(start[1]);
      if (iso) push("commencement_date", iso, start, "Term clause", 0.9);
    }
    const end = /(?:expir(?:y|ation)|end\s+date)[^\n]{0,40}?(\d{4}-\d{2}-\d{2}|\d{1,2}\s+[A-Za-z]+\s+\d{4}|[A-Za-z]+\s+\d{1,2},?\s+\d{4})/i.exec(text);
    if (end) {
      const iso = parseDate(end[1]);
      if (iso) push("expiry_date", iso, end, "Term clause", 0.9);
    }

    // Term months
    const term = /(\d{1,2})\s*(?:months?|month\s+term)/i.exec(text);
    if (term) push("term_months", term[1], term, "Term clause", 0.9);

    // Renewal / termination (free text snippets)
    const renewal = /renewal[^\n]{0,220}/i.exec(text);
    if (renewal) push("renewal_terms", renewal[0].trim(), renewal, "Renewal clause", 0.7);

    const termination = /(?:termination|early\s+termination)[^\n]{0,220}/i.exec(text);
    if (termination) push("termination_terms", termination[0].trim(), termination, "Termination clause", 0.7);

    const required = [
      "landlord_name","tenant_name","unit_label_raw","monthly_rent",
      "deposit_amount","commencement_date","expiry_date","term_months","escalation_clause",
    ];
    const seen = new Set(fields.map(f => f.key));
    const missing = required.filter(k => !seen.has(k));

    return { fields, missing, contradictions: [] };
  },

  async analyzeImages({ images }) {
    // Deterministic-ish: pick based on file size so demo output varies per image
    const seed = images.reduce((a, i) => a + i.bytes.length, 0) % 3;
    const catalogs = [
      { condition: "worn", conditionScore: "worn",
        damages: [{ part: "AC unit", severity: "medium", note: "Visible dust build-up on coils; unit running but low airflow reported." }],
        contents: [{ name: "Split AC", confidence: 0.92 }, { name: "Window", confidence: 0.8 }, { name: "Curtains", confidence: 0.7 }],
        title: "AC servicing required — Apartment 1204" },
      { condition: "damaged", conditionScore: "damaged",
        damages: [{ part: "Kitchen sink", severity: "high", note: "Active drip under the P-trap; cabinet base shows water staining." }],
        contents: [{ name: "Sink", confidence: 0.95 }, { name: "Cabinets", confidence: 0.85 }, { name: "Faucet", confidence: 0.88 }],
        title: "Leak under kitchen sink" },
      { condition: "new", conditionScore: "new",
        damages: [],
        contents: [{ name: "Water heater", confidence: 0.9 }, { name: "Pipework", confidence: 0.75 }],
        title: "Routine inspection photo — no action" },
    ];
    const c = catalogs[seed];
    return {
      condition: c.condition,
      conditionScore: c.conditionScore,
      damages: c.damages,
      contents: c.contents,
      draftWorkOrder: {
        title: c.title,
        description: c.damages.map(d => `${d.part}: ${d.note}`).join("\n") || "No visible defect.",
      },
    };
  },
};