import { getProvider } from "./provider";

export async function runVisionAgent(files: { bytes: Buffer; mime: string; name: string }[]) {
  const provider = getProvider();
  const raw = await provider.analyzeImages({
    images: files,
    instructions:
      "Assess condition (new/worn/damaged), list visible contents/equipment, list damages with severity, " +
      "and draft a short work order title + description.",
  });
  return raw as {
    condition: string; conditionScore: string;
    damages: { part: string; severity: string; note: string }[];
    contents: { name: string; confidence: number }[];
    draftWorkOrder: { title: string; description: string };
  };
}