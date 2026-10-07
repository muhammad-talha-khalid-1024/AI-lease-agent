import Link from "next/link";
import { db } from "@/lib/db";

export default async function Home() {
  const units = await db.unit.findMany({
    include: { _count: { select: { leases: true, issues: true } } },
    orderBy: { unitId: "asc" },
  });
  return (
    <main className="p-5">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between mb-3">
            <h1 className="my-auto">Units</h1>
            <div className="btn-group">
              <Link href="/upload/lease" className="btn btn-outline-primary m-auto">Upload lease</Link>
              <Link href="/upload/issue" className="btn btn-outline-primary m-auto">Report issue</Link>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Unit</th>
                <th>Type</th>
                <th>Status</th>
                <th>Leases</th>
                <th>Issues</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit : any) => (
                <tr key={unit.unitId}>
                  <td>
                    <Link className="text-blue-600 underline"
                      href={`/units/${unit.unitId}`}>{unit.unitId} — {unit.label}</Link>
                  </td>
                  <td>{unit.type}</td>
                  <td>{unit.status}</td>
                  <td>{unit._count.leases}</td>
                  <td>{unit._count.issues}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}