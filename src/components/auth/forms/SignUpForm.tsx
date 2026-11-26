/**
 * @file SignUpForm.tsx
 * @description Dedicated Sign Up form component with trial badge, social auth,
 * password strength indicator, target role selector, and terms agreements in bright pastel aesthetics.
 */

"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { SocialAuthButtons } from "../form_sections/SocialAuthButtons";
import { AuthDivider } from "../form_components/AuthDivider";
import { PasswordInput } from "../form_components/PasswordInput";
import { RoleSelector } from "../form_sections/RoleSelector";
import { SubmitButton } from "../form_components/SubmitButton";
import { NameInput } from "../form_components/NameInput";

import { signUp } from "@/src/lib/auth/auth-client";
import { AuthEmail } from "../form_components/AuthEmail";
import { TermsAndNewsCheckBox } from "../form_components/TermsAndNewsCheckBox";

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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedTerms) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signUp.email({
        name: fullName,
        email,
        password,
        careerFocus: selectedRole,
        newsletter,
        callbackURL: "/dashboard",
      });

      if (error) {
        setErrorMessage(error.message ?? "Something went wrong.");
        return;
      }

      onSuccess?.({ name: fullName, email });
    } catch (error) {
      setErrorMessage("Unable to create your account. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
        <NameInput fullName={fullName} onChange={setFullName} />

        {/* Email */}
        <AuthEmail email={email} setEmail={setEmail} text="Work or Personal Email" />


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
        <TermsAndNewsCheckBox agreedTerms={agreedTerms} setAgreedTerms={setAgreedTerms} newsletter={newsletter} setNewsletter={setNewsletter} />

        {errorMessage && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {errorMessage}
          </div>
        )}


        <SubmitButton isLoading={isLoading} agreedTerms={agreedTerms} text="Create Account & Launch Board" />



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
