/**
 * @file types.ts
 * @description Type definitions for authentication components (sign-in, sign-up, forms).
 */

export type AuthMode = "sign-in" | "sign-up";

/** Password strength assessment result */
export interface PasswordStrength {
  score: number;
  text: string;
  color: string;
  labelColor: string;
}

/** Available social auth providers */
export type SocialAuthProvider = "google" | "github";

/** Target career option for candidate onboarding */
export interface CareerOption {
  id: string;
  label: string;
}

/** Testimonial featured on authentication showcase side */
export interface AuthShowcaseQuote {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  rating?: number;
}

