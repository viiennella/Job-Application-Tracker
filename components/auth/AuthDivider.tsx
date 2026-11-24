/**
 * @file AuthDivider.tsx
 * @description Horizontal separator line between social sign-in and email form.
 */

import React from "react";

export interface AuthDividerProps {
  /** Text shown inside the divider */
  text?: string;
}

export function AuthDivider({ text = "Or continue with email" }: AuthDividerProps) {
  return (
    <div className="relative my-6 text-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-pink-200" />
      </div>
      <span className="relative bg-white px-3 text-[11px] font-bold text-pink-700 uppercase tracking-wider">
        {text}
      </span>
    </div>
  );
}
