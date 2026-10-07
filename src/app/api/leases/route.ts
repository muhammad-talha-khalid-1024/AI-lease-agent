import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { runLeaseAgent, toLeaseRecord } from "@/lib/agents/leaseAgent";
import { evaluate } from "@/lib/agents/rulesEngine";
import { findUnit, matchUnitByLabel } from "@/lib/units";

export async function POST(req: NextRequest) {
  const { fileName, text } = await req.json();
  if (!text) return NextResponse.json({ error: "no text" }, { status: 400 });

  const extraction = await runLeaseAgent(text);
  const record = toLeaseRecord(extraction.fields);
  const ruleResults = evaluate(record);

  const unit = (record.unit_id && findUnit(record.unit_id)) ||
               matchUnitByLabel(record.unit_label_raw);

  const lease = await db.lease.create({
    data: {
      fileName: fileName ?? "lease.txt",
      rawText: text,
      unitId: unit?.unit_id ?? null,
      fields: { create: extraction.fields.map(f => ({
        key: f.key, value: f.value, confidence: f.confidence,
        sourceSnippet: f.sourceSnippet, sourceLocation: f.sourceLocation ?? null,
      })) },
      flags: { create: [
        ...extraction.missing.map(m => ({
          kind: "missing", severity: "medium",
          message: `Field not found in document: ${m}`,
        })),
        ...extraction.contradictions.map(c => ({
          kind: "contradiction", severity: "high",
          message: c.message, evidence: c.evidence ?? null,
        })),
      ]},
      ruleResults: { create: ruleResults.map(r => ({
        ruleId: r.ruleId, status: r.status, reason: r.reason,
        severity: r.severity, sourceRef: r.sourceRef ?? null,
      }))},
    },
    include: { fields: true, flags: true, ruleResults: true },
  });

  return NextResponse.json({ leaseId: lease.id, unitId: lease.unitId });
}

export async function GET() {
  const leases = await db.lease.findMany({
    orderBy: { createdAt: "desc" },
    include: { fields: true, flags: true, ruleResults: true },
  });
  return NextResponse.json(leases);
}