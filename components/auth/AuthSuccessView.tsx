/**
 * @file AuthSuccessView.tsx
 * @description Confirmation view shown after successful sign-in or sign-up.
 */

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AuthMode } from "./types";

export interface AuthSuccessViewProps {
  mode: AuthMode;
  userEmail?: string;
  userName?: string;
  targetHref?: string;
}

export function AuthSuccessView({
  mode,
  userEmail,
  userName,
  targetHref = "/",
}: AuthSuccessViewProps) {
  const isSignIn = mode === "sign-in";

  return (
    <div className="py-12 text-center space-y-4">
      {/* Checkmark icon with pastel glow */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700 shadow-sm">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
        {isSignIn
          ? "Welcome back!"
          : `Welcome to CareerFlow, ${userName ? userName.split(" ")[0] : "Explorer"}!`}
      </h2>

      <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed font-medium">
        {isSignIn ? (
          <>
            Signed in as{" "}
            <strong className="text-pink-700">
              {userEmail || "candidate"}
            </strong>
            . Redirecting to your active career pipeline...
          </>
        ) : (
          <>
            We sent a verification link to{" "}
            <strong className="text-pink-700">
              {userEmail || "your email"}
            </strong>
            . Your personal job hunt dashboard is ready.
          </>
        )}
      </p>

      <div className="pt-4">
        <Link
          href={targetHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-7 py-3.5 text-sm font-black text-pink-950 shadow-lg shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 transition-all"
        >
          <span>{isSignIn ? "Open Pipeline Board" : "Go to Your Pipeline Board"}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
