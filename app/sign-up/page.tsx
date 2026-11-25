/**
 * @file app/sign-up/page.tsx
 * @description Candidate Registration page built with modular, reusable components from `@/components/auth`.
 * Adheres to the warm pastel pink and honey yellow color theme.
 */

"use client";

import React, { useState } from "react";
import {
  AuthHeader,
  SignUpForm,
  AuthTestimonialCard,
  AuthSuccessView,
  AuthFooter,
} from "@/src/components/auth";

export default function SignUpPage() {
  const [registeredData, setRegisteredData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  return (
    <div className="relative min-h-screen text-[var(--foreground)] flex flex-col justify-between overflow-x-hidden selection:bg-pink-300/50 selection:text-pink-950">
      {/* Background ambient pretty pastel dots */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40"
        aria-hidden="true"
      />

      {/* 1. Header Navigation Bar */}
      <AuthHeader mode="sign-up" />

      {/* 2. Main Authentication Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Form or Success Confirmation */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-pink-200 p-6 sm:p-10 shadow-2xl shadow-pink-100/80 backdrop-blur-md">
            {registeredData ? (
              <AuthSuccessView
                mode="sign-up"
                userName={registeredData.name}
                userEmail={registeredData.email}
                targetHref="/"
              />
            ) : (
              <SignUpForm onSuccess={(data) => setRegisteredData(data)} />
            )}
          </div>

          {/* Right Column: Social Proof & Feature Highlights */}
          <div className="lg:col-span-5">
            <AuthTestimonialCard />
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <AuthFooter />
    </div>
  );
}
