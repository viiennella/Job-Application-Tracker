import { auth } from "@/src/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getSession() {
    return await auth.api.getSession({
        headers: await headers(),
    });
}

export async function requireAuth() {
    const session = await getSession();

    if (!session) {
        redirect("/sign-in");
    }

    return session;
}

export async function requireGuest() {
    const session = await getSession();

    if (session) {
        redirect("/dashboard");
    }

    return null;
}