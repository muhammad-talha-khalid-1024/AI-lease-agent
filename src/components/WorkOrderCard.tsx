"use client";
import { useState } from "react";

export default function WorkOrderCard({ issue }: { issue: any }) {
  const [status, setStatus] = useState(issue.workOrder?.status ?? "pending");
  const [title, setTitle] = useState(issue.workOrder?.title ?? "");
  const [desc, setDesc] = useState(issue.workOrder?.description ?? "");

  async function review(next: "accepted" | "rejected") {
    setStatus(next);
    await fetch(`/api/work-orders/${issue.workOrder.id}/review`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: next, title, description: desc }),
    });
  }

  return (
    <div className="card border-0 shadow-sm rounded-3 mb-3">
      <div className="card-body p-3">
        <div className="row g-3 align-items-start">
          <div className="col-auto">
            <div className="d-flex gap-2 flex-wrap" style={{ maxWidth: "220px" }}>
              {issue.photoPaths.map((photo: string) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={photo}
                  src={photo}
                  alt="Issue"
                  className="rounded-3 border object-fit-cover"
                  style={{ width: "100px", height: "100px", }}
                />
              ))}
            </div>
          </div>

          <div className="col">
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="form-control fw-semibold border-0 bg-light mb-2"
              placeholder="Issue title"
            />

            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              className="form-control border-0 bg-light"
              rows={3}
              placeholder="Issue description"
            />

            <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="badge bg-light text-dark border">
                Condition: <strong>{issue.conditionScore}</strong>
              </span>

              {issue.contents.map((content: any) => (
                <span
                  key={content.name}
                  className="badge bg-light text-secondary border"
                >
                  {content.name}
                </span>
              ))}
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex flex-column gap-2">
              <button
                onClick={() => review("accepted")}
                className="btn btn-outline-success btn-sm px-4"
              >
                ✓ Accept
              </button>

              <button
                onClick={() => review("rejected")}
                className="btn btn-outline-danger btn-sm px-4"
              >
                ✕ Reject
              </button>

              {status && (
                <div className="text-center small text-secondary mt-1">
                  {status}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}