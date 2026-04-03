"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { VisitorCounter } from "./visitor-counter";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <div className="site-nav-left" />
        <div className="site-nav-center">
          <Link
            href="/"
            className={`site-nav-link${pathname === "/" ? " active" : ""}`}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`site-nav-link${pathname === "/blog" ? " active" : ""}`}
          >
            Blog
          </Link>
        </div>
        <div className="site-nav-right">
          <button className="site-nav-search" aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className="site-nav-search-kbd">⌘ K</span>
          </button>
          <VisitorCounter />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
