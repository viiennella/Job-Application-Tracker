import { requireAuth } from "@/src/lib/auth-guard";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await requireAuth();

    return <>{children}</>;
}