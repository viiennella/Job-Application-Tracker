/**
 * @file SignInForm.tsx
 * @description Dedicated Sign In form component with social login, email/password fields,
 * remember me preference, and bright pastel pink/yellow styling.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SocialAuthButtons } from "../form_sections/SocialAuthButtons";
import { AuthDivider } from "../form_components/AuthDivider";
import { PasswordInput } from "../form_components/PasswordInput";
import { SubmitButton } from "../form_components/SubmitButton";
import { AuthEmail } from "../form_components/AuthEmail";
import { RememberMe } from "../form_components/RememberMe";
import { signIn } from "@/src/lib/auth/auth-client";

export interface SignInFormProps {
  /** Callback fired upon successful form submission */
  onSuccess?: (email: string) => void;
}

export function SignInForm({ onSuccess }: SignInFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signIn.email({
        email,
        password,
        rememberMe,
        callbackURL: "/dashboard",
      });

      if (error) {
        setErrorMessage(error.message ?? "Invalid email or password.");
        return;
      }

      onSuccess?.(email);
    } catch (error) {
      setErrorMessage("Unable to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }


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
        <AuthEmail email={email} setEmail={setEmail} text="Email Address" />


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
        <RememberMe rememberMe={rememberMe} setRememberMe={setRememberMe} />


        {errorMessage && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {errorMessage}
          </div>
        )}

        {/* Submit Button with Bright Pastel Pink-to-Yellow gradient */}
        <SubmitButton
          isLoading={isLoading}
          text="Sign In & Open Pipeline"
        />



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
