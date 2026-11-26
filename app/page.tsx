/**
 * @file app/page.tsx
 * @description Main Landing Page for CareerFlow - Modern Job Application Tracker & Pipeline.
 *
 * Architecture:
 * - Highly modular: Every section is broken down into reusable, self-contained components under `@/components/landing/`.
 * - Developer-friendly: Clean imports via centralized barrel export (`@/components/landing`).
 * - High performance: Uses Next.js `Link` for rapid client-side transitions to auth routes (`/sign-up`, `/sign-in`).
 * - Maintainable: Custom data and types can be easily configured or fetched from an external source via `@/components/landing/data.ts`.
 */

import {
  TopBanner,
  NavBar,
  Hero,
  PipelineBoard,
  CompanyLogos,
  FeatureTabs,
  FeatureGrid,
  CompensationSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
  CtaBanner,
  Footer,
} from "@/src/components/landing";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[var(--foreground)] overflow-x-hidden selection:bg-pink-300/50 selection:text-pink-950">
      {/* Pretty ambient pastel confetti dots */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40"
        aria-hidden="true"
      />

      {/* 1. Promotional Announcement Bar */}
      <TopBanner />

      {/* 2. Main Navigation Bar with Next.js Link */}
      <NavBar />

      {/* Main Page Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 3. Hero Section: Headline, dual CTAs, and key stats. */}
        <Hero />

        {/* 4. Interactive Pipeline Board: Live filterable Kanban preview */}
        <PipelineBoard />

        {/* 5. Company Logos: Social proof strip */}
        <CompanyLogos />

        {/* 6. Feature Tabs: Deep dive into 4 major capabilities */}
        <FeatureTabs />

        {/* 7. Feature Grid: 6 modular value pillars */}
        <FeatureGrid />

        {/* 8. Compensation Section: 4-year equity and offer comparator */}
        <CompensationSection />

        {/* 9. Candidate Testimonials: Reviews from real candidates */}
        <TestimonialsSection />

        {/* 10. Pricing Section: Monthly / Annual toggle matrix */}
        <PricingSection />

        {/* 11. FAQ Section: Expandable accordion answers */}
        <FaqSection />

        {/* 12. Final Call-to-Action Banner */}
        <CtaBanner />
      </main>

      {/* 13. Footer: Site navigation, resources, legal, and copyright */}
      <Footer />
    </div>
  );
}
