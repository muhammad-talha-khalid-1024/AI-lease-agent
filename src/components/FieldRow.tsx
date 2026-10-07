"use client";
import { useState } from "react";

export default function FieldRow({ leaseId, field }: { leaseId: string; field: any }) {
  const [status, setStatus] = useState(field.status);
  const [value, setValue] = useState(field.value);

  async function review(next: "accepted" | "rejected") {
    setStatus(next);
    await fetch(`/api/leases/${leaseId}/review`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind: "field", id: field.id, status: next, value }),
    });
  }

  return (
    <div className="row g-2 align-items-start small border-bottom py-2">
      <div className="col-3 font-monospace small pt-1">
        {field.key}
      </div>

      <div className="col-4">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className="form-control form-control-sm"
        />

        <div className="small text-secondary mt-1">
          {field.sourceLocation ?? "—"} · conf{" "}
          {(field.confidence * 100).toFixed(0)}%
        </div>

        <div className="small text-muted fst-italic mt-1">
          “{field.sourceSnippet}”
        </div>
      </div>

      <div className="col-3 small">
        status: <b>{status}</b>
      </div>

      <div className="col-2">
        <div className="btn-group btn-group-sm" role="group">
          <button
            onClick={() => review("accepted")}
            className="btn btn-success"
          >
            Accept
          </button>

          <button
            onClick={() => review("rejected")}
            className="btn btn-danger"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}