import { PrismaClient } from "@prisma/client";
export const db = globalThis.__prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") (globalThis as any).__prisma = db;