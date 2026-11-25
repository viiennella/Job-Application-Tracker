/**
 * @file FeatureGrid.tsx
 * @description 6-card grid with bright candy-pastel icon accents and cheerful card styling.
 */

import React from "react";
import {
  FileSearch,
  Zap,
  BarChart3,
  BookOpen,
  Users,
  ShieldCheck,
} from "lucide-react";
import { ValuePropCard } from "../types";
import { DEFAULT_VALUE_PILLARS } from "../data";

export interface FeatureGridProps {
  /** Section heading */
  title?: string;
  /** Section subheading */
  subtitle?: string;
  /** Array of feature pillars */
  features?: ValuePropCard[];
}

export function FeatureGrid({
  title = "Everything Organized in One Beautiful Place",
  subtitle = "Designed with precision so you spend less time administering and more time preparing.",
  features = DEFAULT_VALUE_PILLARS,
}: FeatureGridProps) {
  // Helper to map icon identifier to Lucide component
  const renderIcon = (name: ValuePropCard["iconName"]) => {
    switch (name) {
      case "detect":
        return <FileSearch className="h-5 w-5" />;
      case "nudge":
        return <Zap className="h-5 w-5" />;
      case "analytics":
        return <BarChart3 className="h-5 w-5" />;
      case "dossier":
        return <BookOpen className="h-5 w-5" />;
      case "crm":
        return <Users className="h-5 w-5" />;
      case "shield":
      default:
        return <ShieldCheck className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-pink-50/50 via-yellow-50/30 to-pink-50/50 border-y border-pink-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {title}
          </h2>
          <p className="text-sm text-slate-600 font-medium mt-2">
            {subtitle}
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl border-2 border-pink-100 bg-white p-6 shadow-sm hover:border-pink-300 hover:shadow-lg transition-all duration-200"
            >
              <div
                className={`h-11 w-11 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-4 shadow-xs`}
              >
                {renderIcon(feature.iconName)}
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
