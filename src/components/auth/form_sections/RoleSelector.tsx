/**
 * @file RoleSelector.tsx
 * @description Candidate career focus pill selector with bright pastel pink & yellow styling.
 */

import React from "react";

export interface RoleSelectorProps {
  /** Currently selected role label */
  selectedRole: string;
  /** Role selection callback */
  onSelectRole: (role: string) => void;
  /** Available roles list */
  roles?: string[];
  /** Label for the group */
  label?: string;
}

const DEFAULT_ROLES = [
  "Software Engineering",
  "Product Design",
  "Product Management",
  "Data & AI",
  "Engineering Leadership",
  "Other",
];

export function RoleSelector({
  selectedRole,
  onSelectRole,
  roles = DEFAULT_ROLES,
  label = "Primary Career Focus",
}: RoleSelectorProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {roles.map((role) => {
          const isSelected = selectedRole === role;
          return (
            <button
              key={role}
              type="button"
              onClick={() => onSelectRole(role)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                isSelected
                  ? "bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 text-pink-950 shadow-sm shadow-pink-200 scale-102"
                  : "border-2 border-pink-100 bg-white text-slate-700 hover:bg-pink-50 hover:border-pink-200"
              }`}
            >
              {role}
            </button>
          );
        })}
      </div>
    </div>
  );
}
