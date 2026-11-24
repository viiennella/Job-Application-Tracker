/**
 * @file CompanyLogos.tsx
 * @description Social proof strip displaying companies that candidates have joined.
 * Bright pastel ribbon styling.
 */

import React from "react";
import { DEFAULT_COMPANIES } from "../data";

export interface CompanyLogosProps {
  /** Optional title over the logos */
  title?: string;
  /** List of company names to display */
  companies?: string[];
}

export function CompanyLogos({
  title = "Our candidates have landed dream offers at world-class teams",
  companies = DEFAULT_COMPANIES,
}: CompanyLogosProps) {
  return (
    <section className="py-12 border-y border-pink-200 bg-gradient-to-r from-pink-50/80 via-yellow-50/80 to-pink-50/80">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-pink-800 mb-6">
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-90 text-lg font-bold tracking-tight text-slate-800">
          {companies.map((company) => {
            const firstLetter = company.charAt(0);
            const rest = company.slice(1);
            return (
              <span
                key={company}
                className="flex items-center gap-1.5 hover:text-pink-600 transition-colors"
              >
                <span className="font-black text-xl text-pink-500">
                  {firstLetter}
                </span>
                <span>{rest}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
