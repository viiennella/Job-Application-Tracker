import { sql } from "drizzle-orm";
import { index, integer, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
// Relative import on purpose: drizzle-kit doesn't always resolve the "@/" alias.
import { STAGES } from "@/src/lib/applications";
import { user } from "./auth-schema";

export * from "./auth-schema";

export const applicationStage = pgEnum("application_stage", STAGES);

export const jobApplication = pgTable(
    "job_application",
    {
        id: uuid("id").defaultRandom().primaryKey(),
        userId: text("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        company: text("company").notNull(),
        role: text("role").notNull(),
        location: text("location"),
        salary: text("salary"),
        stage: applicationStage("stage").notNull().default("wishlist"),
        jobUrl: text("job_url"),
        tags: text("tags").array().notNull().default(sql`'{}'::text[]`),
        nextStep: text("next_step"),
        /** Optional 0-100. Not collected yet; the card hides the bar when null. */
        matchScore: integer("match_score"),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => new Date())
            .notNull(),
    },
    // Every dashboard query is "this user's applications", so index for it.
    (t) => [index("job_application_user_stage_idx").on(t.userId, t.stage)],
);