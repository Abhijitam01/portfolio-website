"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Search } from "lucide-react";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1e1e24] bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        <div className="flex flex-1 items-center gap-6">
          {/* Empty left flex to balance center if needed, but in screenshot it's centered nav links */}
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm tracking-wide font-mono ${pathname === "/" ? "font-bold text-zinc-100" : "text-zinc-400 hover:text-zinc-100 transition-colors"}`}
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className={`text-sm tracking-wide font-mono ${pathname === "/blog" ? "font-bold text-zinc-100" : "text-zinc-400 hover:text-zinc-100 transition-colors"}`}
          >
            Blog
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end gap-3">
          <button className="flex items-center gap-2 rounded-full border border-[#27272a] bg-[#121214] px-3 py-1 text-xs text-zinc-400 transition-colors hover:bg-[#18181b] hover:text-white">
            <Search size={14} />
            <span className="flex items-center gap-1 rounded bg-[#1e1e24] border border-[#27272a] px-1.5 py-0.5 text-[10px]">
              <span className="text-[10px]">⌘</span> K
            </span>
          </button>
          
          <a href="https://github.com/sanskar0627" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-full border border-[#27272a] bg-[#121214] px-3 py-1 text-sm text-zinc-400 transition-colors hover:bg-[#18181b] hover:text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
            </svg>
            <span className="text-[13px] font-mono">17</span>
          </a>
          
          <div className="h-4 w-px bg-[#27272a]"></div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
