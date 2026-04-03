"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      fetch("https://api.counterapi.dev/v1/abhijitam/portfolio/up")
        .then((res) => res.json())
        .then((data) => setVisits(data.count))
        .catch(() => {});
    } else {
      fetch("https://api.counterapi.dev/v1/abhijitam/portfolio")
        .then((res) => res.json())
        .then((data) => setVisits(data.count))
        .catch(() => {});
    }
  }, []);

  if (visits === null) {
    return (
      <div className="visitor-counter" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-gray)", fontSize: "0.85rem", opacity: 0.7 }}>
        <Eye size={14} />
        <span>...</span>
      </div>
    );
  }

  return (
    <div className="visitor-counter" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-gray)", fontSize: "0.85rem" }}>
      <Eye size={14} />
      <span>{visits.toLocaleString()} views</span>
    </div>
  );
}
