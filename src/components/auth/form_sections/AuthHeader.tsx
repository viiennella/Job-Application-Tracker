/**
 * @file AuthHeader.tsx
 * @description Top header bar on authentication pages featuring brand logo and switch route.
 * Bright pastel pink & sunshine yellow gradient with Next.js Link.
 */

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { AuthMode } from "../types";

export interface AuthHeaderProps {
  /** Mode of the current auth screen */
  mode: AuthMode;
}

export function AuthHeader({ mode }: AuthHeaderProps) {
  const isSignIn = mode === "sign-in";

  return (
    <header className="relative z-20 border-b border-pink-200 glass-nav">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo with warm pastel gradient */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-300 to-yellow-300 shadow-md shadow-pink-200 text-pink-950 font-bold transition-transform group-hover:scale-105">
            <Sparkles className="h-4.5 w-4.5 fill-yellow-200" />
          </div>
          <span className="text-lg font-black tracking-tight text-slate-900">
            Career<span className="text-pink-500">Flow</span>
          </span>
        </Link>

        {/* Switch Route Link */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span>
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
          </span>
          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="font-extrabold text-pink-600 hover:text-amber-600 transition-colors underline underline-offset-4"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
    </header>
  );
}
