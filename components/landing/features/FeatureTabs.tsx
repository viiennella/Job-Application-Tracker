/**
 * @file FeatureTabs.tsx
 * @description Interactive tabbed feature walkthrough with bright pastel card styling.
 */

"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { FeatureTabItem } from "../types";
import { DEFAULT_FEATURE_TABS } from "../data";

export interface FeatureTabsProps {
  /** Tagline above title */
  tagline?: string;
  /** Main section title */
  title?: string;
  /** Subtitle description */
  subtitle?: string;
  /** Feature tabs dataset */
  tabs?: FeatureTabItem[];
}

export function FeatureTabs({
  tagline = "Engineered For Results",
  title = "Every Tool You Need to Land the 1% Offers",
  subtitle = "Stop guessing why your applications disappear into black holes. CareerFlow provides systematic leverage at every stage of the cycle.",
  tabs = DEFAULT_FEATURE_TABS,
}: FeatureTabsProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = tabs[activeTabIdx] ?? tabs[0];

  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-700 bg-pink-100 border border-pink-200 px-3 py-1 rounded-full">
          {tagline}
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          {title}
        </h2>
        <p className="mt-4 text-base text-slate-600 font-medium">
          {subtitle}
        </p>
      </div>

      {/* Tabs Selector & Active Content View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Interactive Buttons */}
        <div className="lg:col-span-5 flex flex-col gap-3" role="tablist">
          {tabs.map((tab, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTabIdx(idx)}
                className={`text-left p-5 rounded-3xl border-2 transition-all ${
                  isActive
                    ? "border-pink-400 bg-gradient-to-br from-pink-50 via-yellow-50/50 to-rose-50 shadow-md shadow-pink-100"
                    : "border-pink-100 bg-white hover:bg-pink-50/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                    {tab.badge}
                  </span>
                  <span className="text-xs font-bold text-pink-400">0{idx + 1}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mt-1">
                  {tab.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1 line-clamp-2">
                  {tab.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Side: Active Tab Detailed Preview Card */}
        <div className="lg:col-span-7 rounded-3xl border-2 border-pink-200 bg-white p-8 shadow-xl shadow-pink-100/60">
          <div className="inline-block rounded-full bg-gradient-to-r from-pink-100 to-yellow-100 border border-pink-300 px-3.5 py-1 text-xs font-bold text-pink-800 mb-4">
            {activeTab.badge}
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            {activeTab.title}
          </h3>
          <p className="text-slate-700 text-sm mt-3 leading-relaxed font-medium">
            {activeTab.desc}
          </p>

          {/* Bulleted Highlights */}
          <div className="mt-6 space-y-3">
            {activeTab.highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-slate-800 font-medium"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-pink-400 to-yellow-300 text-pink-950 shadow-xs">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Key Metric Chips */}
          <div className="mt-8 grid grid-cols-3 gap-3 pt-6 border-t border-pink-100">
            {activeTab.previewStats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gradient-to-b from-pink-50 to-yellow-50 p-3 text-center border border-pink-100 shadow-xs"
              >
                <div className="text-lg font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-pink-700 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
