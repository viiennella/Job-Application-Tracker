import Link from "next/link";
import { Sparkles } from "lucide-react";

export function NavBarBrand() {
    return (
        <Link href="/" className="flex items-center gap-3 group">
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-300 to-yellow-300 shadow-md shadow-pink-200 text-pink-950 font-bold transition-transform group-hover:scale-105">
                <Sparkles className="h-5 w-5 fill-yellow-200" />
            </div>

            {/* Brand Name */}
            <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                    Career<span className="text-pink-500">Flow</span>
                </span>

                {/* Brand Badge */}
                <span className="hidden sm:inline-block ml-2 rounded-full bg-yellow-200 border border-yellow-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-yellow-900 shadow-xs">
                    PASTEL 2.0
                </span>
            </div>
        </Link>
    );
}
