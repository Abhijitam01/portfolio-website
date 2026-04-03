"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <div style={{ flex: 1 }} />

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
          <div className="site-nav-sep" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
