/**
 * @file index.ts
 * @description Centralized barrel export for all landing page components, types, and mock data.
 * Makes importing clean and easy: `import { Navbar, Hero, PipelineBoard } from "@/components/landing";`
 */

export * from "./types";
export * from "./data";

export { TopBanner } from "./top-banner/TopBanner";
export { NavBar } from "./navbar/NavBar";
export { Hero } from "./hero/Hero";

export { PipelineBoard } from "./pipeline-board/PipelineBoard";
export { PipelineJobCard } from "./pipeline-board/PipelineJobCard";
export { PipelineJobCardHeader } from "./pipeline-board/PipelineJobCardComponents/PipelineJobCardHeader";
export { PipelineJobCardDetails } from "./pipeline-board/PipelineJobCardComponents/PipelineJobCardDetails";
export { PipelineJobCardMatchScore } from "./pipeline-board/PipelineJobCardComponents/PipelineJobMatchScore";
export { PipelineJobCardTags } from "./pipeline-board/PipelineJobCardComponents/PipelineJobCardTags";
export { PipelineJobCardNextStep } from "./pipeline-board/PipelineJobCardComponents/PipelineJobCardNextStep";

export { CompanyLogos } from "./company-logos/CompanyLogos";
export { FeatureTabs } from "./features/FeatureTabs";
export { FeatureGrid } from "./features/FeatureGrid";
export { CompensationSection } from "./compensation/CompensationSection";
export { TestimonialsSection } from "./testimonials/TestimonialsSection";
export { PricingSection } from "./pricing/PricingSection";
export { FaqSection } from "./faq/FaqSection";
export { CtaBanner } from "./cta/CtaBanner";
export { Footer } from "./footer/Footer";
