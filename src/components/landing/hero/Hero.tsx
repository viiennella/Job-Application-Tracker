/**
 * @file Hero.tsx
 * @description High-conversion hero section with bright pastel pink & warm yellow styling.
 */

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { StatMetric } from "../types";
import { DEFAULT_HERO_STATS } from "../data";

export interface HeroProps {
  /** Announcement tag above the headline */
  tagline?: string;
  /** Primary headline text */
  title?: React.ReactNode;
  /** Sub-headline paragraph */
  subtitle?: string;
  /** Target link for the main CTA */
  primaryCtaHref?: string;
  /** Label for the main CTA */
  primaryCtaText?: string;
  /** Target anchor for the demo preview CTA */
  secondaryCtaHref?: string;
  /** Label for the demo preview CTA */
  secondaryCtaText?: string;
  /** Highlight metrics rendered at the bottom of the hero */
  stats?: StatMetric[];
}

export function Hero({
  tagline = "The Bright Pastel Command Center for Tech Seekers",
  title = (
    <>
      Turn Job Applications Into{" "}
      <span className="text-gradient-accent">Dream Offers.</span>
    </>
  ),
  subtitle = "Eliminate messy spreadsheets. Track every role, automate recruiter follow-ups, tailor your resume with AI, and negotiate top-tier compensation with clarity.",
  primaryCtaHref = "/sign-up",
  primaryCtaText = "Get Started Free",
  secondaryCtaHref = "#pipeline",
  secondaryCtaText = "Explore Interactive Board",
  stats = DEFAULT_HERO_STATS,
}: HeroProps) {
  return (
    <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-28 text-center max-w-5xl mx-auto">
      {/* Floating Announcement Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-gradient-to-r from-pink-100 to-yellow-100 px-4 py-1.5 text-xs font-bold text-pink-900 shadow-md shadow-pink-100 mb-6 animate-float">
        <Sparkles className="h-3.5 w-3.5 text-pink-500 fill-yellow-300" aria-hidden="true" />
        <span>{tagline}</span>
        <span className="text-pink-300">•</span>
        <span className="text-slate-700">2,400+ Offers Landed This Month</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>

      {/* Action Buttons with Next.js Link */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={primaryCtaHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-8 py-4 text-base font-extrabold text-pink-950 shadow-xl shadow-pink-200 hover:from-pink-500 hover:to-yellow-400 transition-all active:scale-[0.98]"
        >
          <span>{primaryCtaText}</span>
          <ArrowRight className="h-5 w-5" />
        </Link>

        {secondaryCtaHref.startsWith("#") ? (
          <a
            href={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-pink-200 bg-white/90 px-8 py-4 text-base font-bold text-slate-800 hover:bg-pink-50 transition-all shadow-sm"
          >
            <Play className="h-4 w-4 text-pink-500 fill-yellow-300" />
            <span>{secondaryCtaText}</span>
          </a>
        ) : (
          <Link
            href={secondaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-pink-200 bg-white/90 px-8 py-4 text-base font-bold text-slate-800 hover:bg-pink-50 transition-all shadow-sm"
          >
            <Play className="h-4 w-4 text-pink-500 fill-yellow-300" />
            <span>{secondaryCtaText}</span>
          </Link>
        )}
      </div>

      {/* Social Proof Stats Bar */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-pink-200 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-3 rounded-2xl bg-white/60 border border-pink-100 shadow-xs">
            <div
              className={`text-3xl font-black ${
                stat.accentColor ?? "text-slate-900"
              }`}
            >
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
