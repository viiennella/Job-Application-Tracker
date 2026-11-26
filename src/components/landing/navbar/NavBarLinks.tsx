import Link from "next/link";
import { NavLinkItem } from "../types";

interface NavBarLinksProps {
    links: NavLinkItem[];
}

export function NavBarLinks({ links }: NavBarLinksProps) {
    return (
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
    );
}
