import { db } from "@/lib/db";
import FieldRow from "@/components/FieldRow";
import RuleTable from "@/components/RuleTable";
import WorkOrderCard from "@/components/WorkOrderCard";

export default async function UnitPage({ params }: { params: { unitId: string } }) {
  const unit = await db.unit.findUniqueOrThrow({
    where: { unitId: params.unitId },
    include: {
      leases: {
        include: { fields: true, flags: true, ruleResults: true },
        orderBy: { createdAt: "desc" }, take: 1
      },
      issues: { include: { workOrder: true }, orderBy: { createdAt: "desc" } },
    },
  });
  const lease = unit.leases[0];

  return (
    <main className="p-5"><div className="card">
      <div className="card-header">
        <h1 className="">{unit.unitId} — {unit.label}</h1>
      </div>
      <div className="card-body">
        <h2 className="card-title">{unit.type} · {unit.areaSqm} sqm · {unit.status}</h2>
        <div className="row">
          <div className="col-md-6 col-12 mb-3">

            <h4>Lease record</h4>
            {!lease ? <p className="text-gray-500">No lease on file.</p> : (
              <>
                <RuleTable rules={lease.ruleResults} />
                <div className="mt-4">
                  {lease.fields.map((field : any) => <FieldRow key={field.id} leaseId={lease.id} field={field} />)}
                </div>
                {lease.flags.length > 0 && (
                  <div className="mt-4">
                    <h5 className="mb-1">Flags</h5>
                    <ul className="list-group">
                      {lease.flags.map((flag : any) => (
                        <li className="list-item" key={flag.id}>
                          <span className="font-mono text-xs mr-2">[{flag.severity}]</span>
                          {flag.message}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="col-md-6 col-12 mb-3">
            <h4>Open issues</h4>
            {unit.issues.length === 0 && <p className="text-gray-500">No issues reported.</p>}
            <div className="space-y-3">
              {unit.issues.map((issue : any) => (
                <WorkOrderCard key={issue.id} issue={issue} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}