import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { nextCookies } from "better-auth/next-js";

import { db } from "@/src/db"; // your drizzle instance
import * as schema from "@/src/db/schema";
import * as authSchema from "@/src/db/auth-schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", schema: {
            ...schema,
            ...authSchema,
        },
    }),

    emailAndPassword: { enabled: true },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
    },

    // Extra columns on the user table
    user: {
        additionalFields: {
            careerFocus: { type: "string", required: false },
            newsletter: { type: "boolean", required: false, defaultValue: false },
        },
    },

    // Sessions last 30 days
    session: {
        expiresIn: 60 * 60 * 24 * 30,
        updateAge: 60 * 60 * 24, // refresh once a day
        cookieCache: { enabled: true, maxAge: 5 * 60 }
    },

    plugins: [nextCookies()], // keep this LAST
});