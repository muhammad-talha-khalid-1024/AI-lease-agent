import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { toLeaseRecord } from "@/lib/agents/leaseAgent";
import { evaluate } from "@/lib/agents/rulesEngine";

type Body =
  | { kind: "field"; id: string; status: "accepted" | "rejected"; value?: string }
  | { kind: "flag"; id: string; status: "accepted" | "rejected" }
  | { kind: "rule"; id: string; status: "accepted" | "rejected" };

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const body = (await req.json()) as Body;

  if (body.kind === "field") {
    await db.leaseField.update({
      where: { id: body.id },
      data: { status: body.status, value: body.value,
              reviewedAt: new Date(), reviewedBy: "owner" },
    });
  } else if (body.kind === "flag") {
    await db.leaseFlag.update({ where: { id: body.id },
      data: { status: body.status } });
  } else {
    await db.ruleResult.update({ where: { id: body.id },
      data: { status2: body.status } });
  }

  const lease = await db.lease.findUnique({
    where: { id: params.id }, include: { fields: true },
  });
  if (!lease) return NextResponse.json({ error: "not found" }, { status: 404 });

  const usable = lease.fields.filter(f => f.status !== "rejected");
  const record = toLeaseRecord(usable.map(f => ({ key: f.key, value: f.value })));
  const fresh = evaluate(record);

  await Promise.all(fresh.map(r =>
    db.ruleResult.upsert({
      where: { leaseId_ruleId: { leaseId: lease.id, ruleId: r.ruleId } },
      update: { status: r.status, reason: r.reason },
      create: { leaseId: lease.id, ruleId: r.ruleId, status: r.status,
                reason: r.reason, severity: r.severity },
    })
  ));

  return NextResponse.json({ ok: true });
}