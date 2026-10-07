"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UploadLeasePage() {
    const router = useRouter();
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("lease.txt");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
        const f = e.target.files?.[0];

        if (!f || !f.type.startsWith("text/")) {
            e.target.value = "";
            setFileName("");
            setText("");
            setError("Only txt file can upload");
            return;
        }

        setFileName(f.name);

        const content = await f.text();
        setText(content);
    }

    async function submit() {
        setError(null);
        setBusy(true);
        if(!text){
            setError("Please upload file or paste text for analyzing.");
            setBusy(false);
            return;
        }else{
            try {
                const res = await fetch("/api/leases", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ fileName, text }),
                });
                if (!res.ok) throw new Error(await res.text());
                const { unitId, leaseId } = await res.json();
                router.push(unitId ? `/units/${unitId}` : `/leases/${leaseId}`);
            } catch (e: any) {
                setError(e.message ?? "Failed");
            } finally {
                setBusy(false);
            }
        }
    }

    return (
        <main className="px-5 py-3">
            <div className="d-flex justify-content-between">
                <h1>Upload Lease</h1>
                <Link href="/" className="btn btn-outline-primary my-auto">Back</Link>
            </div>
            <p>Upload a plain-text lease, or paste the text below.</p>
            <input className="form-control mb-3" type="file" accept=".txt,.md,text/plain" onChange={onFile} />
            <textarea className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={10}
                placeholder="Paste lease text here…"
            />
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