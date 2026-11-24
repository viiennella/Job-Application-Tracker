/**
 * @file index.ts
 * @description Central barrel export for all authentication components and types.
 * Enables clean imports: `import { AuthHeader, SignInForm, SignUpForm } from "@/components/auth";`
 */

export * from "./types";
export { AuthHeader } from "./AuthHeader";
export { SocialAuthButtons } from "./SocialAuthButtons";
export { AuthDivider } from "./AuthDivider";
export { PasswordInput } from "./PasswordInput";
export { RoleSelector } from "./RoleSelector";
export { AuthTestimonialCard } from "./AuthTestimonialCard";
export { AuthSuccessView } from "./AuthSuccessView";
export { AuthFooter } from "./AuthFooter";
export { SignInForm } from "./SignInForm";
export { SignUpForm } from "./SignUpForm";

