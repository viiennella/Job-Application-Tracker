import Link from "next/link";
import { requireAuth } from "@/src/lib/auth-guard";
import { SignOutButton } from "@/src/components/dashboard/SignOutButton";
import { NavBar } from "@/src/components/landing";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = await requireAuth();

    return (
        <div className="min-h-dvh">
            <NavBar />

            <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">{children}</main>
        </div>
    );
}