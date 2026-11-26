"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/src/lib/auth/auth-client";

export function SignOutButton() {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() =>
                signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            router.push("/sign-in");
                            router.refresh();
                        },
                    },
                })
            }
            className="rounded-xl border-2 border-pink-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
        >
            Sign out
        </button>
    );
}