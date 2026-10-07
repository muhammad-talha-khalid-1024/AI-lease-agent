import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { runVisionAgent } from "@/lib/agents/visionAgent";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const unitId = String(form.get("unitId") ?? "");
  const files = form.getAll("photos") as File[];
  if (!unitId || files.length === 0)
    return NextResponse.json({ error: "Unit Id and photos required" }, { status: 400 });

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const stored: string[] = [];
  const buffers: { bytes: Buffer; mime: string; name: string }[] = [];
  for (const f of files) {
    const bytes = Buffer.from(await f.arrayBuffer());
    const id = crypto.randomBytes(8).toString("hex");
    const name = `${id}-${f.name}`;
    await writeFile(path.join(uploadDir, name), bytes);
    stored.push(`/uploads/${name}`);
    buffers.push({ bytes, mime: f.type || "image/jpeg", name: f.name });
  }

  const analysis = await runVisionAgent(buffers);

  const issue = await db.issue.create({
    data: {
      unitId,
      photoPaths: stored,
      condition: analysis.condition,
      conditionScore: analysis.conditionScore,
      contents: analysis.contents,
      damages: analysis.damages,
      workOrder: { create: {
        unitId,
        title: analysis.draftWorkOrder.title,
        description: analysis.draftWorkOrder.description,
      }},
    },
    include: { workOrder: true },
  });

  return NextResponse.json(issue);
}