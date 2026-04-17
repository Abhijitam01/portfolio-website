"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectItem } from "./project";

type Filter = "all" | "systems" | "frontend" | "web3";

const TABS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "systems", label: "Systems" },
  { value: "frontend", label: "Frontend" },
  { value: "web3", label: "Web3" },
];

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="projects-filter-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`projects-filter-tab${active === tab.value ? " active" : ""}`}
            onClick={() => setActive(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="projects-page-grid">
        {filtered.map((p) => (
          <ProjectItem key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
