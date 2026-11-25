/**
 * @file Navbar.tsx
 * @description Main sticky glass navigation header for the landing page.
 * Bright pastel pink & buttery sunshine yellow brand aesthetics.
 */

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { NavLinkItem } from "../types";
import { DEFAULT_NAV_LINKS } from "../data";

export interface NavbarProps {
  /** Optional custom navigation links */
  links?: NavLinkItem[];
  /** Route for signing in */
  signInHref?: string;
  /** Route for signing up */
  signUpHref?: string;
}

export function Navbar({
  links = DEFAULT_NAV_LINKS,
  signInHref = "/sign-in",
  signUpHref = "/sign-up",
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-pink-200/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo with bright pastel gradient */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-300 to-yellow-300 shadow-md shadow-pink-200 text-pink-950 font-bold transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 fill-yellow-200" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Career<span className="text-pink-500">Flow</span>
            </span>
            <span className="hidden sm:inline-block ml-2 rounded-full bg-yellow-200 border border-yellow-300 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-yellow-900 shadow-xs">
              PASTEL 2.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700"
        >
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-pink-600 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-pink-600 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Action CTAs with Bright Pastel Button */}
        <div className="flex items-center gap-3">
          <Link
            href={signInHref}
            className="hidden sm:inline-flex items-center text-sm font-bold text-slate-700 hover:text-pink-600 transition-colors px-3 py-2"
          >
            Sign In
          </Link>
          <Link
            href={signUpHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-300 px-5 py-2.5 text-sm font-extrabold text-pink-950 shadow-md shadow-pink-200/80 hover:from-pink-500 hover:to-yellow-400 transition-all active:scale-[0.98]"
          >
            <span>Start Free Today</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
