/**
 * @file SignUpForm.tsx
 * @description Dedicated Sign Up form component with trial badge, social auth,
 * password strength indicator, target role selector, and terms agreements in bright pastel aesthetics.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { AuthDivider } from "./AuthDivider";
import { PasswordInput } from "./PasswordInput";
import { RoleSelector } from "./RoleSelector";

export interface SignUpFormProps {
  /** Callback fired upon successful form submission */
  onSuccess?: (data: { name: string; email: string }) => void;
}

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("Software Engineering");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSuccess?.({ name: fullName, email });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Title & Trial Badge */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 border border-pink-200 px-3.5 py-1 text-[11px] font-bold text-pink-800 shadow-2xs">
          <Sparkles className="h-3 w-3 text-pink-500 fill-yellow-300" />
          <span>Free 14-Day Pro Trial Included</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
          Create your account
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Track applications, prepare STAR answers, and accelerate job offers.
        </p>
      </div>

      {/* Social login buttons */}
      <SocialAuthButtons disabled={isLoading} />

      {/* Divider */}
      <AuthDivider text="Or register with email" />

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-pink-500">
              <User className="h-4 w-4" />
            </div>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Alex Morgan"
              className="w-full rounded-2xl border-2 border-pink-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-900 placeholder-pink-300 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/50 shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Work or Personal Email
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

        {/* Password with Strength meter */}
        <PasswordInput
          value={password}
          onChange={setPassword}
          placeholder="At least 8 characters"
          showStrengthMeter={true}
        />

        {/* Role Selector */}
        <RoleSelector
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
        />

        {/* Terms & Newsletter Checkboxes */}
        <div className="space-y-2.5 pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
            <input
              type="checkbox"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-400"
            />
            <span>
              I agree to the{" "}
              <Link href="#" className="font-bold text-pink-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-bold text-pink-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-pink-300 text-pink-600 focus:ring-pink-400"
            />
            <span>
              Send me weekly tech compensation radar & hiring trend updates.
            </span>
          </label>
        </div>

        {/* Submit Button with Bright Pastel Pink-to-Yellow gradient */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading || !agreedTerms}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 py-3.5 text-sm font-black text-pink-950 shadow-lg shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 transition-all active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? (
              <div className="h-4 w-4 border-2 border-pink-950/30 border-t-pink-950 rounded-full animate-spin" />
            ) : (
              <>
                <span>Create Account & Launch Board</span>
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
        <span>No credit card required</span>
        <span>•</span>
        <span>Cancel anytime</span>
      </div>
    </div>
  );
}
