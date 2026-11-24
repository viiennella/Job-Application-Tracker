/**
 * @file CompensationSection.tsx
 * @description Salary Intelligence and 4-Year Equity comparison card.
 * Styled with bright radiant pastel pink & sunshine yellow tones.
 */

import React from "react";
import Link from "next/link";
import { Sparkles, TrendingUp } from "lucide-react";

export interface CompensationSectionProps {
  /** Target CTA URL */
  ctaHref?: string;
  /** Button label */
  ctaText?: string;
}

export function CompensationSection({
  ctaHref = "/sign-up",
  ctaText = "Compare Your Offers Now",
}: CompensationSectionProps) {
  return (
    <section id="compensation" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-pink-100 via-yellow-100/70 to-rose-100 p-8 sm:p-12 text-slate-900 relative overflow-hidden shadow-2xl shadow-pink-100">
        {/* Ambient background light spheres */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Descriptions */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-pink-300 px-3.5 py-1 text-xs font-bold text-pink-700 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-yellow-300" />
              <span>Compensation Benchmark AI</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-4 text-slate-900">
              Never Leave Money on the Table Again
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-3 max-w-xl leading-relaxed font-medium">
              Evaluate total compensation packages like a financial analyst. Model equity growth scenarios, compare 401(k) matches, and calculate after-tax take-home across cities.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-pink-200 bg-white/90 p-4 shadow-xs">
                <div className="text-xs font-extrabold text-pink-700">Equity Grant Simulators</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  RSU vs ISO/NSO modeling with strike price discount projections.
                </div>
              </div>
              <div className="rounded-2xl border border-yellow-200 bg-white/90 p-4 shadow-xs">
                <div className="text-xs font-extrabold text-amber-700">Counter-Offer Generator</div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Scientifically proven scripts that netted +$28k on average.
                </div>
              </div>
            </div>

            {/* Action CTA with Bright Pastel Gradient */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href={ctaHref}
                className="rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-7 py-3.5 text-sm font-extrabold text-pink-950 hover:from-pink-500 hover:to-yellow-400 transition-colors shadow-lg shadow-pink-200"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Comp Matrix Card */}
          <div className="lg:col-span-5 rounded-3xl border-2 border-pink-200 bg-white p-6 shadow-xl shadow-pink-100">
            <div className="flex items-center justify-between pb-4 border-b border-pink-100 text-xs">
              <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                Total Compensation Comparison
              </span>
              <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-black text-[11px]">+18.4% Delta</span>
            </div>

            <div className="space-y-4 mt-4">
              {/* Offer A */}
              <div className="rounded-2xl bg-pink-50/70 p-4 border border-pink-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Figma (Senior Role)</span>
                  <span className="text-xs font-black text-pink-700">$238,000 / yr</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-600 font-semibold flex justify-between">
                  <span>Base: $185k</span>
                  <span>Equity: $45k/yr</span>
                  <span>Bonus: $8k</span>
                </div>
                <div className="mt-2 h-2.5 w-full bg-pink-200/60 rounded-full overflow-hidden flex">
                  <div className="bg-pink-400 h-full w-[75%]" />
                  <div className="bg-purple-300 h-full w-[20%]" />
                  <div className="bg-emerald-300 h-full w-[5%]" />
                </div>
              </div>

              {/* Offer B */}
              <div className="rounded-2xl bg-yellow-50/70 p-4 border border-yellow-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Stripe (Staff Role)</span>
                  <span className="text-xs font-black text-amber-700">$282,000 / yr</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-600 font-semibold flex justify-between">
                  <span>Base: $205k</span>
                  <span>Equity: $62k/yr</span>
                  <span>Sign-on: $15k</span>
                </div>
                <div className="mt-2 h-2.5 w-full bg-yellow-200/60 rounded-full overflow-hidden flex">
                  <div className="bg-yellow-400 h-full w-[70%]" />
                  <div className="bg-pink-400 h-full w-[22%]" />
                  <div className="bg-amber-400 h-full w-[8%]" />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>Recommendation:</span>
              <span className="text-pink-700 font-bold">Counter offer B base by +$12k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
