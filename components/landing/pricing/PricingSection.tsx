/**
 * @file PricingSection.tsx
 * @description Interactive pricing matrix with bright candy-pastel cards and monthly/annual switch.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { PricingTierItem } from "../types";
import { DEFAULT_PRICING_PLANS } from "../data";

export interface PricingSectionProps {
  /** Tagline */
  tagline?: string;
  /** Section heading */
  title?: string;
  /** Subheading */
  subtitle?: string;
  /** Pricing tiers data */
  plans?: PricingTierItem[];
}

export function PricingSection({
  tagline = "Simple, Honest Pricing",
  title = "Invest in Your Career Trajectory",
  subtitle = "Start completely free. Upgrade when you need advanced AI analysis and negotiation simulations.",
  plans = DEFAULT_PRICING_PLANS,
}: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100 border border-pink-200 px-3 py-1 rounded-full">
          {tagline}
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
          {title}
        </h2>
        <p className="text-sm text-slate-600 font-medium mt-2">
          {subtitle}
        </p>

        {/* Billing Switch */}
        <div className="mt-6 inline-flex items-center rounded-2xl bg-pink-100/70 p-1 border border-pink-200">
          <button
            type="button"
            onClick={() => setBillingPeriod("monthly")}
            className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all ${
              billingPeriod === "monthly"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingPeriod("annual")}
            className={`rounded-xl px-4 py-1.5 text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingPeriod === "annual"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>Annual</span>
            <span className="rounded-full bg-amber-200 text-amber-900 text-[10px] px-2 py-0.5 font-black">
              Save 25%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => {
          const displayPrice = plan.oneTimePrice
            ? `$${plan.oneTimePrice}`
            : billingPeriod === "annual"
            ? `$${plan.annualMonthlyPrice}`
            : `$${plan.monthlyPrice}`;

          const priceSubtext = plan.oneTimePrice
            ? "one-time payment"
            : plan.monthlyPrice === 0
            ? "free forever"
            : "/ month";

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? "relative border-3 border-pink-400 bg-gradient-to-b from-white via-pink-50/40 to-yellow-50/40 shadow-2xl shadow-pink-200/50 scale-[1.03]"
                  : "border-2 border-pink-100 bg-white shadow-sm hover:shadow-lg"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-4 py-1 text-[11px] font-black text-pink-950 shadow-md">
                  MOST POPULAR ✨
                </div>
              )}

              <div>
                <h3 className="font-black text-slate-900 text-lg">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">
                    {displayPrice}
                  </span>
                  <span className="text-xs text-slate-500 font-bold ml-1">
                    {priceSubtext}
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="mt-6 space-y-3 text-xs text-slate-700 font-medium">
                  {plan.features.map((feat, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${
                        feat.highlighted ? "font-bold text-slate-900" : ""
                      }`}
                    >
                      <Check className="h-3.5 w-3.5 text-pink-500 stroke-[3]" />
                      <span>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button using Next.js Link */}
              <Link
                href={plan.ctaLink}
                className={`mt-8 block w-full text-center rounded-2xl py-3 text-xs font-black transition-all ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-pink-950 shadow-lg shadow-pink-200 hover:from-pink-500 hover:to-yellow-400"
                    : "border-2 border-pink-200 text-slate-800 hover:bg-pink-50"
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
