/**
 * @file data.ts
 * @description Centralized mock data and constants for the landing page.
 * Developers can easily update or fetch this from an API/CMS in the future.
 */

import {
  JobCard,
  StatMetric,
  FeatureTabItem,
  ValuePropCard,
  TestimonialItem,
  PricingTierItem,
  FaqItem,
  NavLinkItem,
} from "./types";

/** Navigation links shown in the top header */
export const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { label: "Pipeline Board", href: "#pipeline" },
  { label: "Features", href: "#features" },
  { label: "Salary Intelligence", href: "#compensation" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const AUTHENTICATED_NAV_LINKS: NavLinkItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Applications", href: "/applications" },
  { label: "Interviews", href: "/interviews" },
];

/** Quick summary statistics displayed in the Hero section */
export const DEFAULT_HERO_STATS: StatMetric[] = [
  { value: "48,000+", label: "Applications Tracked" },
  { value: "3.4x", label: "More Interview Callbacks", accentColor: "text-indigo-600 dark:text-indigo-400" },
  { value: "+$31.5k", label: "Avg. Negotiation Gain" },
  { value: "4.9 / 5", label: "From 1,800+ Verified Reviews", accentColor: "text-emerald-600 dark:text-emerald-400" },
];

/** Mock opportunities rendered in the interactive Kanban board preview */
export const DEFAULT_MOCK_JOBS: JobCard[] = [
  {
    id: "1",
    company: "Stripe",
    role: "Staff Frontend Engineer",
    location: "Remote / San Francisco",
    salary: "$195k – $230k",
    stage: "interviewing",
    stageLabel: "System Design",
    tags: ["React", "Architecture", "Design Systems"],
    appliedDate: "3d ago",
    matchScore: 98,
    nextStep: "Round 3 tomorrow at 2:00 PM",
    logoBg: "bg-indigo-600",
    logoLetter: "S",
  },
  {
    id: "2",
    company: "Figma",
    role: "Senior Product Designer",
    location: "San Francisco, CA",
    salary: "$180k – $210k",
    stage: "offer",
    stageLabel: "Offer Received 🎉",
    tags: ["Systems", "Prototyping", "Design Ops"],
    appliedDate: "2w ago",
    matchScore: 95,
    nextStep: "Decision deadline in 4 days",
    logoBg: "bg-purple-600",
    logoLetter: "F",
  },
  {
    id: "3",
    company: "Linear",
    role: "Full-Stack Engineer",
    location: "Remote",
    salary: "$170k – $195k",
    stage: "interviewing",
    stageLabel: "Take-home Review",
    tags: ["TypeScript", "GraphQL", "Sync Engine"],
    appliedDate: "1w ago",
    matchScore: 92,
    nextStep: "Engineering Director Chat on Fri",
    logoBg: "bg-zinc-800",
    logoLetter: "L",
  },
  {
    id: "4",
    company: "Datadog",
    role: "Lead Cloud Architect",
    location: "New York / Hybrid",
    salary: "$210k – $245k",
    stage: "offer",
    stageLabel: "Verbal Offer",
    tags: ["Kubernetes", "Distributed", "Go"],
    appliedDate: "3w ago",
    matchScore: 91,
    nextStep: "Equity negotiation call",
    logoBg: "bg-violet-700",
    logoLetter: "D",
  },
  {
    id: "5",
    company: "Airbnb",
    role: "Senior UI/UX Engineer",
    location: "Remote",
    salary: "$175k – $200k",
    stage: "applied",
    stageLabel: "Under Review",
    tags: ["Design Systems", "Next.js", "Accessibility"],
    appliedDate: "Yesterday",
    matchScore: 89,
    nextStep: "Recruiter screening pending",
    logoBg: "bg-rose-500",
    logoLetter: "A",
  },
  {
    id: "6",
    company: "OpenAI",
    role: "Product Infrastructure Specialist",
    location: "San Francisco, CA",
    salary: "$220k – $270k",
    stage: "wishlist",
    stageLabel: "Drafting Resume",
    tags: ["AI Tools", "Python", "Scale"],
    appliedDate: "Added today",
    matchScore: 94,
    nextStep: "Referral connection via Alex",
    logoBg: "bg-emerald-600",
    logoLetter: "O",
  },
];

/** Logos/names of prominent companies candidates join */
export const DEFAULT_COMPANIES: string[] = [
  "Google",
  "Stripe",
  "Figma",
  "Airbnb",
  "Linear",
  "Vercel",
  "Netflix",
  "OpenAI",
];

/** Tabbed detailed features walkthrough */
export const DEFAULT_FEATURE_TABS: FeatureTabItem[] = [
  {
    id: "kanban",
    title: "Interactive Kanban Pipeline",
    subtitle: "Visualize every opportunity at a glance",
    desc: "Drag and drop your applications effortlessly across customizable hiring stages. Track recruiter emails, interview rounds, deadlines, and follow-ups with zero cognitive overload.",
    badge: "Real-time sync",
    highlights: [
      "Color-coded urgency & follow-up countdown timers",
      "Direct one-click link to application portals & job postings",
      "Automatic calendar sync for upcoming interview loops",
    ],
    previewStats: [
      { label: "Active Loops", value: "3 rounds" },
      { label: "Avg. Response", value: "3.4 days" },
      { label: "Pipeline Value", value: "$210k avg" },
    ],
  },
  {
    id: "ats",
    title: "AI Resume & ATS Fit Score",
    subtitle: "Tailor your application before you click apply",
    desc: "Our neural parser compares your resume with job descriptions in real-time, detecting missing keywords, analyzing qualification matches, and suggesting high-impact bullet point tweaks.",
    badge: "Powered by Gemini & GPT",
    highlights: [
      "Instant 0-100% ATS readiness score",
      "Skill gap detector for hard and soft requirements",
      "STAR-method achievement re-phraser",
    ],
    previewStats: [
      { label: "ATS Pass Rate", value: "94.8%" },
      { label: "Keywords Added", value: "+12 avg" },
      { label: "Match Accuracy", value: "99.2%" },
    ],
  },
  {
    id: "interview",
    title: "Interview Copilot & Notes",
    subtitle: "Ace behavioral and technical rounds",
    desc: "Keep structured STAR-method stories, company research, interviewer cheat sheets, and past question repositories linked directly to each application card.",
    badge: "Prep Hub",
    highlights: [
      "Pre-populated company dossiers and recent news alerts",
      "Curated question lists for engineering, design & PM roles",
      "Post-interview debrief notes and salary question scripts",
    ],
    previewStats: [
      { label: "Notes Saved", value: "128 cards" },
      { label: "Interview Confidence", value: "+46%" },
      { label: "Success Rate", value: "72%" },
    ],
  },
  {
    id: "offers",
    title: "Offer & Equity Comparator",
    subtitle: "Negotiate with data, not guesswork",
    desc: "Normalize complex multi-year equity grants, sign-on bonuses, cost of living differentials, and healthcare perks to evaluate total compensation with crystal clarity.",
    badge: "Compensation Intelligence",
    highlights: [
      "Side-by-side total compensation graphs over 4 years",
      "Vesting schedule and cliff tax simulators",
      "Proven negotiation counter-offer templates",
    ],
    previewStats: [
      { label: "Avg. Uplift", value: "+$28,500" },
      { label: "Offers Compared", value: "Side-by-side" },
      { label: "ROI Multiple", value: "24x" },
    ],
  },
];

/** 6 core value proposition pillars */
export const DEFAULT_VALUE_PILLARS: ValuePropCard[] = [
  {
    id: "auto-detect",
    title: "Automated Status Detection",
    description: "Connect your inbox with zero hassle. CareerFlow detects interview invites, rejection letters, and offer emails, auto-updating your pipeline.",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconName: "detect",
  },
  {
    id: "nudge-engine",
    title: "Follow-Up Nudge Engine",
    description: "Never leave a recruiter hanging. Get notified when 5 business days have elapsed with pre-crafted, polite follow-up email templates.",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    iconName: "nudge",
  },
  {
    id: "funnel-analytics",
    title: "Search Funnel Analytics",
    description: "Uncover where candidates fall off: Application to Screen ratio, Technical round pass rate, and time-to-offer velocity graphs.",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    iconName: "analytics",
  },
  {
    id: "dossier",
    title: "Company Research Dossier",
    description: "Automatic enrichment with funding stage, recent press, tech stack, glassdoor sentiment, and interview difficulty index.",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    iconName: "dossier",
  },
  {
    id: "crm",
    title: "Recruiter & Contact CRM",
    description: "Index every hiring manager, internal referral, and talent partner with email, phone, and conversation logs.",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    iconName: "crm",
  },
  {
    id: "privacy",
    title: "Zero-Knowledge Privacy",
    description: "Your search remains 100% confidential. No employer telemetry, no tracking pixels, and client-side encryption options available.",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    iconName: "shield",
  },
];

/** Candidate reviews and quotes */
export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "David Lin",
    role: "Staff Frontend Engineer",
    company: "Stripe",
    avatarBg: "bg-indigo-600",
    initials: "DL",
    content: "I was managing 40+ active applications and losing track of recruiter follow-ups. CareerFlow gave me immediate clarity. Landed my Staff Engineer offer at Stripe with a $35k signing bonus increase!",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Kovacs",
    role: "Senior Product Designer",
    company: "Figma",
    avatarBg: "bg-purple-600",
    initials: "SK",
    content: "The ATS keyword match score was a complete game changer. I optimized my resume for Figma and received an email for the recruiter phone screen within 36 hours. Best career tool I have ever used.",
    rating: 5,
  },
  {
    id: "3",
    name: "Marcus Reed",
    role: "Head of Product",
    company: "Series B Startup",
    avatarBg: "bg-emerald-600",
    initials: "MR",
    content: "Comparing startup ISO options against big tech RSUs used to give me headaches. CareerFlow modeled the 4-year equity trajectories side by side, making my final decision effortless.",
    rating: 5,
  },
];

/** Pricing tiers */
export const DEFAULT_PRICING_PLANS: PricingTierItem[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Ideal for casual browsing or first-time job seekers.",
    monthlyPrice: 0,
    annualMonthlyPrice: 0,
    ctaText: "Start Free",
    ctaLink: "/sign-up",
    features: [
      { text: "Up to 25 Active Applications", included: true },
      { text: "Drag-and-drop Kanban Board", included: true },
      { text: "Chrome Extension 1-Click Saver", included: true },
      { text: "Basic Interview Calendar", included: true },
    ],
  },
  {
    id: "pro",
    name: "Career Accelerator",
    description: "For engineers, designers & leads aiming for top compensation.",
    monthlyPrice: 16,
    annualMonthlyPrice: 12,
    isPopular: true,
    ctaText: "Start 14-Day Free Trial",
    ctaLink: "/sign-up",
    features: [
      { text: "Unlimited Applications & Boards", included: true, highlighted: true },
      { text: "AI ATS Resume Match & Scoring", included: true },
      { text: "Automated Follow-up Reminders", included: true },
      { text: "STAR Interview Notes & Question Bank", included: true },
      { text: "Equity & Offer Comparison Model", included: true },
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime Pass",
    description: "Pay once, own forever for all future job hunt cycles.",
    monthlyPrice: 99,
    annualMonthlyPrice: 99,
    oneTimePrice: 99,
    ctaText: "Claim Lifetime Deal",
    ctaLink: "/sign-up",
    features: [
      { text: "Everything in Accelerator", included: true },
      { text: "Lifetime Feature Updates", included: true },
      { text: "Priority 1-on-1 Support", included: true },
      { text: "Early Access to Beta AI Features", included: true },
    ],
  },
];

/** Frequently Asked Questions */
export const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "How is CareerFlow different from using a Google Sheet or Notion?",
    answer: "Spreadsheets require manual formatting and don't integrate with your email, reminders, or interview prep. CareerFlow is purpose-built for job hunting: it automates follow-up schedules, calculates ATS resume match scores, provides structured STAR interview cheat sheets, and models 4-year total compensation side-by-side.",
  },
  {
    question: "Can I import my existing applications from CSV or LinkedIn?",
    answer: "Yes! You can import existing spreadsheets via our 1-click CSV wizard or use our lightweight browser bookmarklet to capture job postings directly from LinkedIn, Indeed, Greenhouse, and Lever in under 2 seconds.",
  },
  {
    question: "Is my personal data and job hunt confidential?",
    answer: "Absolutely. We adhere to enterprise-grade SOC2 and GDPR compliance. Your resumes, notes, interview logs, and salary details are strictly end-to-end encrypted and are never shared with employers or sold to third-party recruiters.",
  },
  {
    question: "Can I use CareerFlow for free?",
    answer: "Yes. Our Starter plan is 100% free forever and allows you to track up to 25 active applications with our visual Kanban board, status alerts, and note-taking system.",
  },
  {
    question: "How does the AI Resume Tailor work?",
    answer: "Paste the target job description or link, and our AI analyzes key requirements against your uploaded resume. It pinpoints missing domain keywords, evaluates seniority signals, and gives you actionable rewrites to maximize recruiter callbacks.",
  },
];
