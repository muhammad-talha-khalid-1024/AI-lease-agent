import type { LeaseRecord } from "../schemas";
import ruleset from "../../../data/owner_ruleset.json";
import { findUnit, matchUnitByLabel, unitStatus } from "../units";

export type RuleOutcome = {
  ruleId: string;
  status: "PASS" | "FAIL" | "NOT_DETERMINABLE";
  reason: string;
  severity: string;
  sourceRef?: string;
};

function monthsBetween(aIso: string, bIso: string): number | null {
  const a = new Date(aIso), b = new Date(bIso);
  if (isNaN(+a) || isNaN(+b)) return null;
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
}

export function evaluate(rec: LeaseRecord): RuleOutcome[] {
  const out: RuleOutcome[] = [];
  const add = (r: RuleOutcome) => out.push(r);
  const indet = (id: string, msg: string, sev: string) =>
    add({ ruleId: id, status: "NOT_DETERMINABLE", reason: msg, severity: sev });

  if (rec.deposit_amount == null || rec.monthly_rent == null) {
    indet("R1", "deposit or monthly rent missing", "high");
  } else {
    const ok = rec.deposit_amount >= rec.monthly_rent;
    add({ ruleId: "R1", status: ok ? "PASS" : "FAIL",
      reason: `deposit ${rec.deposit_amount} vs monthly ${rec.monthly_rent}`,
      severity: "high", sourceRef: "Deposit clause" });
  }

  add({
    ruleId: "R2",
    status: rec.escalation_clause.is_defined ? "PASS" : "FAIL",
    reason: rec.escalation_clause.is_defined
      ? `clause: "${rec.escalation_clause.text?.slice(0,80)}…"`
      : `clause text not a mechanism: "${rec.escalation_clause.text ?? "(none)"}"`,
    severity: "medium", sourceRef: "Rent review clause",
  });

  if (rec.term_months == null) indet("R3", "term_months missing", "medium");
  else add({ ruleId: "R3", status: rec.term_months <= 36 ? "PASS" : "FAIL",
    reason: `term ${rec.term_months} months`, severity: "medium" });

  if (!rec.commencement_date || !rec.expiry_date) {
    indet("R4", "one or both dates missing", "high");
  } else {
    const mb = monthsBetween(rec.commencement_date, rec.expiry_date);
    if (mb == null) indet("R4", "unparseable dates", "high");
    else if (mb <= 0) add({ ruleId: "R4", status: "FAIL",
      reason: `expiry ${rec.expiry_date} is not after commencement ${rec.commencement_date}`, severity: "high" });
    else if (rec.term_months != null && Math.abs(mb - rec.term_months) > 1) {
      add({ ruleId: "R4", status: "FAIL",
        reason: `stated term ${rec.term_months}mo vs dates imply ${mb}mo`, severity: "high" });
    } else {
      add({ ruleId: "R4", status: "PASS",
        reason: `term matches (${mb} months)`, severity: "high" });
    }
  }

  const r5ok = rec.landlord_present && rec.tenant_present && rec.landlord_signed && rec.tenant_signed;
  add({ ruleId: "R5", status: r5ok ? "PASS" : "FAIL",
    reason: `landlord present=${rec.landlord_present} signed=${rec.landlord_signed}; tenant present=${rec.tenant_present} signed=${rec.tenant_signed}`,
    severity: "high" });

  if (rec.annual_rent == null || rec.monthly_rent == null) {
    indet("R6", "annual or monthly missing", "low");
  } else {
    const expected = rec.monthly_rent * 12;
    add({ ruleId: "R6", status: rec.annual_rent === expected ? "PASS" : "FAIL",
      reason: `annual ${rec.annual_rent} vs ${expected}`, severity: "low" });
  }

  const unit = rec.unit_id ? findUnit(rec.unit_id) : matchUnitByLabel(rec.unit_label_raw);
  if (!unit) indet("R7", `no unit matched for id=${rec.unit_id} label=${rec.unit_label_raw}`, "high");
  else if (unit.status !== "available") {
    add({ ruleId: "R7", status: "FAIL",
      reason: `unit ${unit.unit_id} status is '${unit.status}', not 'available'`, severity: "high" });
  } else {
    add({ ruleId: "R7", status: "PASS",
      reason: `unit ${unit.unit_id} exists and is available`, severity: "high" });
  }

  return out;
}