"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  const isBuilding = project.status === "Building";
  const screenLabel = isBuilding ? "Coming Soon" : null;

  return (
    <Link className="project-card" href={`/projects/${project.id}`}>
      <div className="project-card-image">
        <div className="project-image-inner" style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={88}
            style={{ objectFit: "cover" }}
          />
        </div>
        {screenLabel && (
          <span className="project-screen-label">{screenLabel}</span>
        )}
        {project.launchTweetUrl && project.launchTweetUrl !== "#" && (
          <span className="project-pin-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </span>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-header-row">
          <h3 className="project-name">{project.title}</h3>
          <div className="project-status">
            <div className={`status-dot ${project.status.toLowerCase()}`} />
            {project.status}
          </div>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="view-project">
          View Project <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export function ProjectList({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="project-grid">
        {children}
      </div>
      <div className="project-view-all-row">
        <a
          href="https://github.com/Abhijitam01"
          target="_blank"
          rel="noopener noreferrer"
          className="project-view-all-btn"
        >
          View All <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
