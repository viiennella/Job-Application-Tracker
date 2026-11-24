/**
 * @file CtaBanner.tsx
 * @description High-impact bright pastel sunset call to action banner.
 */

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface CtaBannerProps {
  /** Heading */
  title?: string;
  /** Subheading description */
  subtitle?: string;
  /** Primary button label */
  buttonText?: string;
  /** Button target route */
  buttonHref?: string;
  /** Disclaimer or guarantee subtext */
  footnote?: string;
}

export function CtaBanner({
  title = "Ready to Take Control of Your Career Pipeline?",
  subtitle = "Join thousands of engineers, designers, and managers landing their dream roles with poise and data-backed confidence.",
  buttonText = "Get Started Free",
  buttonHref = "/sign-up",
  footnote = "No credit card required • Free 14-day trial on Pro features • Cancel anytime",
}: CtaBannerProps) {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="rounded-3xl bg-gradient-to-r from-pink-200 via-yellow-100 to-rose-200 border-2 border-pink-300 p-8 sm:p-14 text-center text-slate-900 shadow-2xl shadow-pink-200/60 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-700 max-w-xl mx-auto font-medium">
          {subtitle}
        </p>

        {/* Quick action container with Next.js Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            aria-label="Your email address"
            className="w-full sm:w-auto flex-1 rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 placeholder-pink-400 border-2 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          />
          <Link
            href={buttonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 px-6 py-3 text-sm font-black text-white shadow-md hover:from-pink-600 hover:to-amber-500 transition-colors"
          >
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="text-[11px] text-pink-800 font-bold mt-4">
          {footnote}
        </p>
      </div>
    </section>
  );
}
