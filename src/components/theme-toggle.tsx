"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <div style={{ width: 24, height: 24 }} />
      </button>
    );
  }

  const triggerWaveTransition = () => {
    if (isTransitioning) return;

    const activeTheme = resolvedTheme ?? theme ?? "light";
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const rootStyles = getComputedStyle(root);
    const waveColor = rootStyles.getPropertyValue("--bg-primary").trim();

    setIsTransitioning(true);
    root.style.setProperty("--theme-wave-color", waveColor);
    root.classList.add("theme-wave-active");
    root.classList.remove("theme-wave-sweep");

    setTheme(nextTheme);

    requestAnimationFrame(() => {
      root.classList.add("theme-wave-sweep");
    });

    window.setTimeout(() => {
      root.classList.remove("theme-wave-active", "theme-wave-sweep");
      root.style.removeProperty("--theme-wave-color");
      setIsTransitioning(false);
    }, 820);
  };

  return (
    <button
      className="theme-toggle"
      onClick={triggerWaveTransition}
      aria-label="Toggle theme"
      disabled={isTransitioning}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="sun-icon" />
      ) : (
        <Moon className="moon-icon" />
      )}
    </button>
  );
}
