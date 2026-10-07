"use client";

const COLOR: Record<string,string> = {
  PASS: "badge bg-success",
  FAIL: "badge bg-danger",
  NOT_DETERMINABLE: " badge bg-info",
};

export default function RuleTable({ rules }: { rules: any[] }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Rule</th>
          <th>Status</th>
          <th>Severity</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {rules.map(r => (
          <tr key={r.id} >
            <td>{r.ruleId}</td>
            <td>
              <span className={COLOR[r.status]}>{r.status}</span>
            </td>
            <td>{r.severity}</td>
            <td>{r.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}