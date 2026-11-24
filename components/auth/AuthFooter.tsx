/**
 * @file AuthFooter.tsx
 * @description Consistent footer for authentication pages with legal links and copyright.
 */

import React from "react";
import Link from "next/link";

export function AuthFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-pink-200 bg-white/70 py-6 px-6 text-center text-xs text-slate-600 font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {currentYear} CareerFlow Inc. All rights reserved.
        </div>
        <div className="flex items-center gap-4 font-semibold text-pink-700">
          <Link href="/" className="hover:text-pink-900 transition-colors">
            Home
          </Link>
          <a href="#" className="hover:text-pink-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-pink-900 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-pink-900 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
