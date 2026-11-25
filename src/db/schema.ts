import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp,
    integer,
    index,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    name: varchar("name", { length: 255 }),
    createdAt: timestamp("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
});

export const applications = pgTable("applications", {
    id: uuid("id").primaryKey().defaultRandom(),

    userId: uuid("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),

    companyName: varchar("company_name", { length: 255 }).notNull(),

    jobTitle: varchar("job_title", { length: 255 }).notNull(),

    jobUrl: text("job_url"),

    location: varchar("location", { length: 255 }),

    employmentType: varchar("employment_type", { length: 100 }),

    salary: integer("salary"),

    status: varchar("status", { length: 50 })
        .notNull()
        .default("applied"),

    notes: text("notes"),

    appliedAt: timestamp("applied_at", { withTimezone: true })
        .defaultNow()
        .notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at", { withTimezone: true })
        .defaultNow()
        .notNull(),
},
    (table) => [
        index("applications_user_id_idx").on(table.userId),

        index("applications_user_status_idx").on(
            table.userId,
            table.status
        ),

        index("applications_user_applied_at_idx").on(
            table.userId,
            table.appliedAt
        ),
    ]


);