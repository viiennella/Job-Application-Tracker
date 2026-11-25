
/**
 * @file Footer.tsx
 * @description Comprehensive site footer with bright pastel styling.
 * Powered by Next.js Link.
 */

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-pink-200 bg-gradient-to-b from-white via-pink-50/40 to-yellow-50/30 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand identity column */}
        <div className="col-span-2">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-400 via-rose-300 to-yellow-300 text-pink-950 font-bold text-sm shadow-xs transition-transform group-hover:scale-105">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-black text-slate-900 tracking-tight">
              CareerFlow
            </span>
          </Link>
          <p className="text-xs text-slate-600 mt-3 max-w-sm leading-relaxed font-medium">
            The modern pastel job application tracker and career copilot. Helping professionals organize pipelines, master interviews, and negotiate top compensation packages.
          </p>
          <div className="text-[11px] text-pink-800 font-bold mt-6">
            © {currentYear} CareerFlow Technologies Inc. All rights reserved.
          </div>
        </div>

        {/* Product links */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-pink-900 mb-3">
            Product
          </h3>
          <ul className="space-y-2 text-xs font-medium text-slate-600">
            <li>
              <a href="#pipeline" className="hover:text-pink-600 transition-colors">
                Pipeline Kanban
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-pink-600 transition-colors">
                AI Resume Tailor
              </a>
            </li>
            <li>
              <a href="#compensation" className="hover:text-pink-600 transition-colors">
                Salary Comparator
              </a>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-pink-600 transition-colors">
                Chrome Extension
              </Link>
            </li>
            <li>
              <a href="#pricing" className="hover:text-pink-600 transition-colors">
                Pricing Plans
              </a>
            </li>
          </ul>
        </div>

        {/* Resources links */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-pink-900 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-xs font-medium text-slate-600">
            <li>
              <Link href="/sign-up" className="hover:text-pink-600 transition-colors">
                Interview STAR Guide
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-pink-600 transition-colors">
                Salary Benchmarks 2026
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-pink-600 transition-colors">
                Negotiation Scripts
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-pink-600 transition-colors">
                Resume ATS Checklist
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal links */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-pink-900 mb-3">
            Legal & Trust
          </h3>
          <ul className="space-y-2 text-xs font-medium text-slate-600">
            <li>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Security & SOC2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600 transition-colors">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
