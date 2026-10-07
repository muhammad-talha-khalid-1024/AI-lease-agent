"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UploadIssuePage() {
  const router = useRouter();
  const [unitId, setUnitId] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    if (!unitId) {
      setError("The unit id field is required.");
      return;
    } else if(!files || files.length === 0){
      setError("Upload minimum one photo.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("unitId", unitId);
      for (const f of Array.from(files)) {
        form.append("photos", f);
      } 
      
      const res = await fetch("/api/issues", { 
        method: "POST", 
        body: form 
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      router.push(`/units/${unitId}`);
    } catch (e: any) {
      setError(e.message ?? "Failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="px-5 py-3">
      <div className="d-flex justify-content-between">
        <h1>Report an issue</h1>
        <Link href="/" className="btn btn-outline-primary my-auto">Back</Link>
      </div>
      <div className="form-group">
        <label className="form-label">Unit ID: </label>
        <input className="form-control mb-3"
        value={unitId} 
        placeholder="MC-B-1204"
        onChange={(e) => setUnitId(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="form-label">Photos: </label>
        <input className="form-control mb-3"
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setFiles(e.target.files)} />
      </div>
      {error && (
          <div><small className="text-danger">Error: {error}</small></div>
      )}
      <button className="btn btn-outline-primary mt-3" onClick={submit} >
          {busy ? (
              <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
              </div>
          ) : (
              <span>Submit</span>
          )}
      </button>
    </main>
  );
}