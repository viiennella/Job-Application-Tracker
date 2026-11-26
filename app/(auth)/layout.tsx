import { requireGuest } from "@/src/lib/auth-guard";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await requireGuest();

    return <>{children}</>;
}