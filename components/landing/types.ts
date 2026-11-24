/**
 * @file types.ts
 * @description Centralized TypeScript type definitions for all landing page components.
 * Exported for modular use across the application.
 */

export type PipelineStage = "wishlist" | "applied" | "interviewing" | "offer";

/** Represents a single job opportunity card in the pipeline preview */
export interface JobCard {
  id: string;
  company: string;
  role: string;
  location: string;
  salary: string;
  stage: PipelineStage;
  stageLabel: string;
  tags: string[];
  appliedDate: string;
  matchScore: number;
  nextStep?: string;
  logoBg: string;
  logoLetter: string;
}

/** Represents a statistical highlight metric */
export interface StatMetric {
  value: string;
  label: string;
  accentColor?: string;
}

/** Represents a tabbed interactive feature highlight */
export interface FeatureTabItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  highlights: string[];
  previewStats: { label: string; value: string }[];
}

/** Represents an individual value proposition feature card */
export interface ValuePropCard {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  iconName: "detect" | "nudge" | "analytics" | "dossier" | "crm" | "shield";
}

/** Represents candidate testimonial feedback */
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
  content: string;
  rating: number;
}

/** Represents a pricing tier option */
export interface PricingTierItem {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  oneTimePrice?: number;
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  features: { text: string; included: boolean; highlighted?: boolean }[];
}

/** Represents an FAQ question and answer pair */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Navigation link item */
export interface NavLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
