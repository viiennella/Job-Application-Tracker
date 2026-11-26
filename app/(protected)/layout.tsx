
import { Suspense, type ReactNode } from "react";
import { requireAuth } from "@/src/lib/auth-guard";
import { Skeleton } from "@/components/ui/skeleton";

function ProtectedLayoutFallback() {
    return (
        <div className="space-y-6 p-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-32 w-full rounded-xl" />
            <div className="grid gap-4 md:grid-cols-3">
                <Skeleton className="h-28 rounded-xl" />
                <Skeleton className="h-28 rounded-xl" />
                <Skeleton className="h-28 rounded-xl" />
            </div>
        </div>
    );
}

async function ProtectedContent({
    children,
}: {
    children: ReactNode;
}) {
    await requireAuth();

    return <>{children}</>;
}

export default function ProtectedLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <Suspense fallback={<ProtectedLayoutFallback />}>
            <ProtectedContent>
                {children}
            </ProtectedContent>
        </Suspense>
    );
}
