import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src/db"; // your drizzle instance
import * as schema from "@/src/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: { ...schema, user: schema.users },
    }),

    // email and password auth
    emailAndPassword: {
        enabled: true,
    },
});