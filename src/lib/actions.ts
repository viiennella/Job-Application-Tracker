"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "@/src/db";
import { jobApplication } from "@/src/db/schema";
import { STAGES, type ActionResult } from "@/src/lib/applications";
import { requireAuth } from "@/src/lib/auth-guard";

/*
 * Server actions are public HTTP endpoints. Anyone can call them directly,
 * so every action must (1) check the session and (2) validate its input,
 * even though your UI already does both.
 */

const optionalText = (max: number) =>
    z
        .string()
        .trim()
        .max(max, `Keep this under ${max} characters`)
        .optional()
        .transform((v) => v || null);

// Only allow http(s) links, so nobody can save a `javascript:` URL.
function isHttpUrl(value: string) {
    try {
        const { protocol } = new URL(value);
        return protocol === "http:" || protocol === "https:";
    } catch {
        return false;
    }
}

const createSchema = z.object({
    company: z.string().trim().min(1, "Company is required").max(100),
    role: z.string().trim().min(1, "Role is required").max(120),
    location: optionalText(100),
    salary: optionalText(60),
    stage: z.enum(STAGES),
    nextStep: optionalText(140),
    jobUrl: optionalText(2048).refine((v) => v === null || isHttpUrl(v), "Enter a link starting with http:// or https://"),
    // "react, node, remote" -> ["react", "node", "remote"]
    tags: z
        .string()
        .optional()
        .transform((v) =>
            (v ?? "")
                .split(",")
                .map((t) => t.trim().slice(0, 24))
                .filter(Boolean)
                .slice(0, 8),
        ),
});

export async function createApplication(formData: FormData): Promise<ActionResult> {
    const { user } = await requireAuth();

    const parsed = createSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
        return { ok: false, error: parsed.error.issues[0]?.message ?? "Check the form and try again" };
    }

    await db.insert(jobApplication).values({ ...parsed.data, userId: user.id });
    revalidatePath("/dashboard");
    return { ok: true };
}

const moveSchema = z.object({ id: z.string().uuid(), stage: z.enum(STAGES) });

export async function moveApplication(id: string, stage: string): Promise<ActionResult> {
    const { user } = await requireAuth();

    const parsed = moveSchema.safeParse({ id, stage });
    if (!parsed.success) return { ok: false, error: "Invalid stage" };

    // `userId` in the WHERE clause is what stops one user editing another's data.
    await db
        .update(jobApplication)
        .set({ stage: parsed.data.stage })
        .where(and(eq(jobApplication.id, parsed.data.id), eq(jobApplication.userId, user.id)));

    revalidatePath("/dashboard");
    return { ok: true };
}

export async function deleteApplication(id: string): Promise<ActionResult> {
    const { user } = await requireAuth();

    const parsed = z.string().uuid().safeParse(id);
    if (!parsed.success) return { ok: false, error: "Invalid application" };

    await db
        .delete(jobApplication)
        .where(and(eq(jobApplication.id, parsed.data), eq(jobApplication.userId, user.id)));

    revalidatePath("/dashboard");
    return { ok: true };
}