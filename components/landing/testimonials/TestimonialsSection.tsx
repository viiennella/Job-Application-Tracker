/**
 * @file TestimonialsSection.tsx
 * @description Social proof candidate reviews and ratings in bright pastel cards.
 */

import React from "react";
import { Star } from "lucide-react";
import { TestimonialItem } from "../types";
import { DEFAULT_TESTIMONIALS } from "../data";

export interface TestimonialsSectionProps {
  /** Tagline above heading */
  tagline?: string;
  /** Main section heading */
  title?: string;
  /** Testimonials dataset */
  testimonials?: TestimonialItem[];
}

export function TestimonialsSection({
  tagline = "Candidate Success Stories",
  title = "Trusted by Hundreds of High-Impact Professionals",
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsSectionProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100 border border-pink-200 px-3 py-1 rounded-full">
          {tagline}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          {title}
        </h2>
      </div>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl border-2 border-pink-100 bg-white p-7 shadow-sm hover:border-pink-300 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-300" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-pink-100">
              <div
                className={`h-10 w-10 rounded-2xl ${t.avatarBg} text-white flex items-center justify-center font-black text-xs shadow-xs`}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <div className="font-extrabold text-xs text-slate-900">
                  {t.name}
                </div>
                <div className="text-[11px] text-pink-700 font-bold">
                  {t.role} @ {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
