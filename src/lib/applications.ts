/**
 * Shared by the database schema, server actions AND client components.
 * Rule: never import `db` or anything server-only in this file.
 */
import type { jobApplication } from "@/src/db/schema";

export const STAGES = ["wishlist", "applied", "interviewing", "offer"] as const;
export type Stage = (typeof STAGES)[number];

/** A row from the job_application table. */
export type Application = typeof jobApplication.$inferSelect;

export type ActionResult = { ok: true } | { ok: false; error: string };

/**
 * Tailwind only generates classes it can find as full strings in your source,
 * so keep these written out in full (no string building like `bg-${color}-100`).
 */
export const STAGE_CONFIG: Record<
    Stage,
    { label: string; badge: string; tabActive: string; tabIdle: string; dot: string }
> = {
    wishlist: {
        label: "Wishlist",
        badge: "bg-amber-100 text-amber-900 border-amber-300",
        tabActive: "bg-amber-200 text-amber-950 border-amber-300 shadow-sm",
        tabIdle: "border-transparent text-slate-700 hover:bg-amber-50",
        dot: "bg-amber-400",
    },
    applied: {
        label: "Applied",
        badge: "bg-sky-100 text-sky-900 border-sky-300",
        tabActive: "bg-sky-200 text-sky-950 border-sky-300 shadow-sm",
        tabIdle: "border-transparent text-slate-700 hover:bg-sky-50",
        dot: "bg-sky-400",
    },
    interviewing: {
        label: "Interviewing",
        badge: "bg-purple-100 text-purple-900 border-purple-300",
        tabActive: "bg-purple-200 text-purple-950 border-purple-300 shadow-sm",
        tabIdle: "border-transparent text-slate-700 hover:bg-purple-50",
        dot: "bg-purple-400",
    },
    offer: {
        label: "Offers",
        badge: "bg-emerald-100 text-emerald-900 border-emerald-300",
        tabActive: "bg-emerald-200 text-emerald-950 border-emerald-300 shadow-sm",
        tabIdle: "border-transparent text-slate-700 hover:bg-emerald-50",
        dot: "bg-emerald-400",
    },
};

const LOGO_COLORS = [
    "bg-pink-500",
    "bg-violet-500",
    "bg-sky-600",
    "bg-emerald-600",
    "bg-amber-600",
    "bg-rose-500",
] as const;

/** Same company name always gets the same avatar colour. */
export function logoColor(company: string) {
    let hash = 0;
    for (const char of company) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
    return LOGO_COLORS[hash % LOGO_COLORS.length];
}

/** Fixed to UTC so the server and browser render the same text (no hydration mismatch). */
export function formatAdded(date: Date) {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}