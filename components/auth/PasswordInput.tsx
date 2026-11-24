/**
 * @file PasswordInput.tsx
 * @description Reusable password input with show/hide eye toggle and dynamic pastel strength meter.
 */

"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { PasswordStrength } from "./types";

export interface PasswordInputProps {
  /** Current password value */
  value: string;
  /** Value change handler */
  onChange: (value: string) => void;
  /** Field label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether to display the live password strength meter */
  showStrengthMeter?: boolean;
  /** Optional right-side header node (e.g. 'Forgot password?' link) */
  rightHeaderAction?: React.ReactNode;
  /** Required validation flag */
  required?: boolean;
}

export function PasswordInput({
  value,
  onChange,
  label = "Password",
  placeholder = "Enter your password",
  showStrengthMeter = false,
  rightHeaderAction,
  required = true,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  // Compute password score according to character criteria
  const calculateStrength = (pass: string): PasswordStrength => {
    if (!pass) return { score: 0, text: "", color: "bg-slate-200", labelColor: "text-slate-400" };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 25, text: "Weak", color: "bg-rose-400", labelColor: "text-rose-600" };
      case 2:
        return { score: 50, text: "Fair", color: "bg-amber-400", labelColor: "text-amber-600" };
      case 3:
        return { score: 75, text: "Good", color: "bg-yellow-400", labelColor: "text-yellow-700" };
      case 4:
        return { score: 100, text: "Strong ✨", color: "bg-emerald-400", labelColor: "text-emerald-600" };
      default:
        return { score: 15, text: "Too short", color: "bg-pink-300", labelColor: "text-pink-500" };
    }
  };

  const strength = calculateStrength(value);

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="block text-xs font-bold text-slate-700">
          {label}
        </label>
        {rightHeaderAction ? (
          rightHeaderAction
        ) : showStrengthMeter && value ? (
          <span className={`text-[11px] font-black ${strength.labelColor}`}>
            {strength.text}
          </span>
        ) : null}
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-pink-500">
          <Lock className="h-4 w-4" />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border-2 border-pink-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-pink-300 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/50 shadow-2xs transition-all"
        />
        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-pink-400 hover:text-pink-600 transition-colors"
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      {/* Pastel Strength progress bar */}
      {showStrengthMeter && value && (
        <div className="mt-2 h-2 w-full bg-pink-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${strength.color} transition-all duration-300`}
            style={{ width: `${strength.score}%` }}
          />
        </div>
      )}
    </div>
  );
}
