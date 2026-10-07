import { z } from "zod";

export const ExtractedFieldSchema = z.object({
  key: z.string(),
  value: z.string(),
  confidence: z.number().min(0).max(1),
  sourceSnippet: z.string(),
  sourceLocation: z.string().optional(),
});

export type ExtractedField = z.infer<typeof ExtractedFieldSchema>;

export const LeaseExtractionSchema = z.object({
  fields: z.array(ExtractedFieldSchema),
  missing: z.array(z.string()),
  contradictions: z.array(
    z.object({ message: z.string(), evidence: z.string().optional() })
  ),
});

export type LeaseExtraction = z.infer<typeof LeaseExtractionSchema>;

export type LeaseRecord = {
  landlord_present: boolean;
  landlord_signed: boolean;
  tenant_present: boolean;
  tenant_signed: boolean;
  unit_id: string | null;
  unit_label_raw: string | null;
  monthly_rent: number | null;
  annual_rent: number | null;
  deposit_amount: number | null;
  escalation_clause: { is_defined: boolean; text: string | null };
  commencement_date: string | null; // ISO
  expiry_date: string | null;
  term_months: number | null;
};