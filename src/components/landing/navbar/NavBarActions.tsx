import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NavbarActionsProps {
    signInHref: string;
    signUpHref: string;
}

export function NavbarActions({
    signInHref,
    signUpHref,
}: NavbarActionsProps) {
    return (
        <div className="flex items-center gap-3">
            {/* Sign In */}
            <Link
                href={signInHref}
                className="hidden sm:inline-flex items-center text-sm font-bold text-slate-700 hover:text-pink-600 transition-colors px-3 py-2"
            >
                Sign In
            </Link>

            {/* Sign Up CTA */}
            <Link
                href={signUpHref}
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-5 py-2.5 text-sm font-extrabold text-pink-950 shadow-md shadow-pink-200/80 hover:from-pink-500 hover:to-yellow-400 transition-all active:scale-[0.98]"
            >
                <span>Start Free Today</span>
                <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    );
}