/**
 * @file TopBanner.tsx
 * @description Promotional announcement banner at the very top of the page.
 * Styled with bright pastel pink & sunshine yellow tones.
 */

import React from "react";
import Link from "next/link";

export interface TopBannerProps {
  /** Optional badge text, defaults to 'NEW' */
  badgeText?: string;
  /** Main announcement message */
  message?: string;
  /** Link text for the call to action */
  ctaText?: string;
  /** URL or anchor target for the call to action */
  ctaHref?: string;
}

export function TopBanner({
  badgeText = "NEW ✨",
  message = "AI Interview Preparation & Offer Negotiation Copilot is now live",
  ctaText = "Learn more →",
  ctaHref = "#features",
}: TopBannerProps) {
  return (
    <aside
      aria-label="Product announcement"
      className="relative z-20 border-b border-pink-200 bg-gradient-to-r from-pink-100 via-yellow-100 to-rose-100 px-4 py-2 text-center text-xs font-semibold text-pink-900 shadow-xs"
    >
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        {/* Pulsing sunny yellow indicator light */}
        <span
          className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse shadow-xs"
          aria-hidden="true"
        />

        {/* Highlight pill */}
        <span className="rounded-full bg-white/90 border border-pink-300 px-2.5 py-0.5 text-[11px] font-bold text-pink-700 shadow-xs">
          {badgeText}
        </span>

        {/* Message */}
        <span>{message}</span>

        {/* Action Link */}
        {ctaHref.startsWith("#") ? (
          <a
            href={ctaHref}
            className="hidden sm:inline-flex items-center font-bold text-pink-700 underline underline-offset-2 hover:text-pink-950 transition-colors ml-1"
          >
            {ctaText}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="hidden sm:inline-flex items-center font-bold text-pink-700 underline underline-offset-2 hover:text-pink-950 transition-colors ml-1"
          >
            {ctaText}
          </Link>
        )}
      </span>
    </aside>
  );
}
