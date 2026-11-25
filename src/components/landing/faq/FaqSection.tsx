/**
 * @file FaqSection.tsx
 * @description Accessible accordion FAQ section with bright pastel card styling.
 */

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "../types";
import { DEFAULT_FAQS } from "../data";

export interface FaqSectionProps {
  /** Tagline */
  tagline?: string;
  /** Section heading */
  title?: string;
  /** FAQs dataset */
  faqs?: FaqItem[];
}

export function FaqSection({
  tagline = "Got Questions?",
  title = "Frequently Asked Questions",
  faqs = DEFAULT_FAQS,
}: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100 border border-pink-200 px-3 py-1 rounded-full">
          {tagline}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          {title}
        </h2>
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="rounded-3xl border-2 border-pink-100 bg-white overflow-hidden shadow-xs transition-all hover:border-pink-300"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full p-5 text-left flex items-center justify-between text-sm font-extrabold text-slate-900 hover:text-pink-600 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-700 text-xs font-black">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs text-slate-700 leading-relaxed border-t border-pink-100 pt-3 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
