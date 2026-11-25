/**
 * @file SignInForm.tsx
 * @description Dedicated Sign In form component with social login, email/password fields,
 * remember me preference, and bright pastel pink/yellow styling.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { AuthDivider } from "./AuthDivider";
import { PasswordInput } from "./PasswordInput";

export interface SignInFormProps {
  /** Callback fired upon successful form submission */
  onSuccess?: (email: string) => void;
}

export function SignInForm({ onSuccess }: SignInFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSuccess?.(email);
    }, 900);
  };

  return (
    <div className="space-y-6">
      {/* Title & Subtitle */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
          Welcome back
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Sign in to access your application board and interview notes.
        </p>
      </div>

      {/* Social login buttons */}
      <SocialAuthButtons disabled={isLoading} />

      {/* Divider */}
      <AuthDivider text="Or sign in with email" />

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-pink-500">
              <Mail className="h-4 w-4" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full rounded-2xl border-2 border-pink-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 placeholder-pink-300 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/50 shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <PasswordInput
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          rightHeaderAction={
            <Link
              href="#"
              className="text-[11px] font-bold text-pink-600 hover:text-amber-600 transition-colors underline"
            >
              Forgot password?
            </Link>
          }
        />

        {/* Remember Me */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-medium">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-400"
            />
            <span>Remember this device for 30 days</span>
          </label>
        </div>

        {/* Submit Button with Bright Pastel Pink-to-Yellow gradient */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 py-3.5 text-sm font-black text-pink-950 shadow-lg shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {isLoading ? (
              <div className="h-4 w-4 border-2 border-pink-950/30 border-t-pink-950 rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign In & Open Pipeline</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Trust Footer */}
      <div className="flex flex-wrap items-center justify-center gap-4 border-t border-pink-100 pt-4 text-[11px] text-slate-500 font-medium">
        <span className="flex items-center gap-1 text-emerald-700">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
          SOC2 Type II Encrypted
        </span>
        <span>•</span>
        <span>256-bit SSL Security</span>
      </div>
    </div>
  );
}
