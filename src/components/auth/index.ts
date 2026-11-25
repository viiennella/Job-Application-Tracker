/**
 * @file index.ts
 * @description Central barrel export for all authentication components and types.
 * Enables clean imports: `import { AuthHeader, SignInForm, SignUpForm } from "@/components/auth";`
 */

export * from "./types";


export { AuthDivider } from "./form_components/AuthDivider";
export { AuthEmail } from "./form_components/AuthEmail";
export { NameInput } from "./form_components/NameInput";
export { PasswordInput } from "./form_components/PasswordInput";
export { RememberMe } from "./form_components/RememberMe";
export { SubmitButton } from "./form_components/SubmitButton";
export { TermsAndNewsCheckBox } from "./form_components/TermsAndNewsCheckBox";


export { AuthFooter } from "./form_sections/AuthFooter";
export { AuthHeader } from "./form_sections/AuthHeader";
export { AuthSuccessView } from "./form_sections/AuthSuccessView";
export { AuthTestimonialCard } from "./form_sections/AuthTestimonialCard";
export { RoleSelector } from "./form_sections/RoleSelector";
export { SocialAuthButtons } from "./form_sections/SocialAuthButtons";


export { SignInForm } from "./forms/SignInForm";
export { SignUpForm } from "./forms/SignUpForm";

