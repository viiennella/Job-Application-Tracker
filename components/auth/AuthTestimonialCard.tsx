/**
 * @file AuthTestimonialCard.tsx
 * @description Right-side promotional showcase card on authentication pages.
 * Styled with bright radiant pastel pink & warm sunshine yellow tones.
 */

import React from "react";
import { Star, Check, TrendingUp } from "lucide-react";
import { AuthShowcaseQuote } from "./types";

export interface AuthTestimonialCardProps {
  /** Testimonial quote object */
  testimonial?: AuthShowcaseQuote;
  /** Feature list to highlight */
  features?: string[];
}

const DEFAULT_TESTIMONIAL: AuthShowcaseQuote = {
  quote: "CareerFlow completely removed my job search anxiety. Landed 3 offers in 4 weeks.",
  author: "Sarah Kovacs",
  role: "Senior Product Designer",
  company: "Figma",
  initials: "SK",
  rating: 5,
};

const DEFAULT_FEATURES = [
  "Visual Drag-and-Drop Pipeline with Stage Reminders",
  "AI Resume & ATS Keyword Fit Analysis",
  "4-Year Equity Grant & Total Compensation Comparator",
];

export function AuthTestimonialCard({
  testimonial = DEFAULT_TESTIMONIAL,
  features = DEFAULT_FEATURES,
}: AuthTestimonialCardProps) {
  return (
    <div className="space-y-6">
      {/* Testimonial glowing pastel card */}
      <div className="rounded-3xl border-2 border-pink-200 bg-gradient-to-br from-pink-100 via-yellow-100/70 to-rose-100 p-6 sm:p-8 text-slate-900 shadow-xl shadow-pink-200/50 relative overflow-hidden">
        {/* Pastel ambient light spheres */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />

        <div className="relative z-10">
          {/* Star rating */}
          <div className="flex items-center gap-1.5 text-amber-400 mb-3" aria-label="5 out of 5 stars">
            {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-400" />
            ))}
            <span className="text-xs font-black text-pink-800 ml-1">4.9 / 5 rating</span>
          </div>

          <blockquote className="text-xl font-black tracking-tight text-slate-900 leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <p className="text-xs text-slate-700 font-medium mt-3 leading-relaxed">
            Join candidates from Google, Stripe, Figma, and Airbnb who master their job search pipeline.
          </p>

          {/* Candidate Bio */}
          <div className="mt-5 flex items-center gap-3 pt-4 border-t border-pink-200">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-300 to-yellow-300 flex items-center justify-center font-black text-sm text-pink-950 shadow-xs">
              {testimonial.initials}
            </div>
            <div>
              <div className="font-extrabold text-xs text-slate-900">{testimonial.author}</div>
              <div className="text-[11px] text-pink-700 font-bold">
                {testimonial.role} @ {testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Card */}
      <div className="rounded-3xl border-2 border-pink-200 bg-white p-6 shadow-xl shadow-pink-100/60">
        <div className="flex items-center justify-between pb-3 border-b border-pink-100 text-xs">
          <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-pink-500" />
            <span>Platform Highlights</span>
          </span>
          <span className="rounded-full bg-pink-100 text-pink-800 border border-pink-200 px-2.5 py-0.5 font-bold text-[10px]">
            ALL INCLUDED
          </span>
        </div>

        <ul className="mt-4 space-y-3">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-pink-400 to-yellow-300 text-pink-950 shadow-xs">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span className="text-xs text-slate-800 font-medium leading-relaxed">
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* Live offer preview chip */}
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-pink-50 to-yellow-50 p-3.5 border border-pink-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-pink-500 text-white font-black flex items-center justify-center text-xs shadow-xs">
              S
            </div>
            <div>
              <div className="font-bold text-xs text-slate-900">Stripe</div>
              <div className="text-[10px] text-pink-700 font-bold">
                Offer: $210k + Equity
              </div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-black px-2.5 py-0.5">
            Ready to Sign
          </span>
        </div>
      </div>
    </div>
  );
}
