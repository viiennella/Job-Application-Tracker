/**
 * @file Navbar.tsx
 * @description Main sticky glass navigation header for the landing page.
 * Bright pastel pink & buttery sunshine yellow brand aesthetics.
 */


import { headers } from "next/headers";

import { auth } from "@/src/lib/auth/auth";

import { DEFAULT_NAV_LINKS, AUTHENTICATED_NAV_LINKS } from "../data";
import { NavBarBrand } from "./NavBarBrand";
import { NavBarLinks } from "./NavBarLinks";
import { NavbarActions } from "./NavBarActions";
import { NavBarUserMenu } from "./NavBarUserMenu";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";



async function NavBarContent() {


  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="sticky top-0 z-40 glass-nav border-b border-pink-200/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo with bright pastel gradient */}
        <NavBarBrand />


        {/* Desktop Navigation Links */}


        <NavBarLinks links={
          session
            ? AUTHENTICATED_NAV_LINKS
            : DEFAULT_NAV_LINKS
        } />




        {/* Action CTAs with Bright Pastel Button */}

        {session ? (

          <NavBarUserMenu
            name={session.user.name}
            email={session.user.email}
          />
        ) : (
          <NavbarActions
            signInHref="/sign-in"
            signUpHref="/sign-up"
          />
        )}


      </div>
    </header >
  );
}

function NavbarFallback() {
  return (
    <header className="sticky top-0 z-40 border-b border-pink-200/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo placeholder */}
        <Skeleton className="h-8 w-32 rounded-lg" />

        {/* Navigation links placeholder */}
        <div className="hidden items-center gap-6 md:flex">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* User menu placeholder */}
        <Skeleton className="h-10 w-10 rounded-full" />

      </div>
    </header>
  );
}

export function NavBar() {
  return (
    <Suspense fallback={<NavbarFallback />}>
      <NavBarContent />
    </Suspense>
  );
}
