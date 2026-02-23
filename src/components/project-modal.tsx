"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Github, Globe, Share2 } from "lucide-react";
import { Project } from "@/data/projects";
import { HoverTag } from "./hover-tag";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            sizes="(max-width: 900px) 100vw, 800px"
            quality={90}
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="modal-action-bar">
          <a href={project.links.find(l => l.text === "GitHub")?.url || "#"} target="_blank" rel="noopener noreferrer" className="modal-action-btn">
            <Github size={18} />
            Github
          </a>
          <a href={project.links.find(l => l.primary)?.url || "#"} target="_blank" rel="noopener noreferrer" className="modal-action-btn">
            <Globe size={18} />
            Website
          </a>
          <button type="button" className="modal-action-btn" onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}>
            <Share2 size={18} />
            Share
          </button>
        </div>

        <div className="modal-title-row">
          <h2 className="modal-title">{project.title}</h2>
          <div className="project-status">
            <div className={`status-dot ${project.status.toLowerCase()}`} />
            {project.status}
          </div>
        </div>

        <p className="modal-description">
          {project.fullDescription}
          <br /><br />
          For early access, please <strong>contact me!</strong>
        </p>

        <div className="modal-case-study">
          <div className="case-study-block">
            <h3 className="case-study-title">Why I built this</h3>
            <p className="case-study-text">{project.caseStudy.why}</p>
          </div>

          <div className="case-study-block">
            <h3 className="case-study-title">Use case</h3>
            <p className="case-study-text">{project.caseStudy.useCase}</p>
          </div>

          <div className="case-study-block">
            <h3 className="case-study-title">What I learned</h3>
            <p className="case-study-text">{project.caseStudy.learned}</p>
          </div>

          <div className="case-study-block">
            <h3 className="case-study-title">Where I got stuck</h3>
            <p className="case-study-text">{project.caseStudy.stuck}</p>
          </div>
        </div>

        <div className="modal-stack-section">
          <h3 className="modal-stack-title">Stack used</h3>
          <div className="stack-pill-grid">
            {project.techStack.map((tech) => {
              // Map tech name to image path if exists
              const techImages: Record<string, string> = {
                "TypeScript": "/tags/typescript.png",
                "React": "/tags/react.png",
                "Next.js": "/tags/nextjs.png",
                "Solana": "/tags/solana.png",
                "Node.js": "/tags/nodejs.png",
                "Tailwind CSS": "/tags/tailwind.png",
                "Rust": "/tags/rust.png"
              };
              const imageSrc = techImages[tech];
              
              return (
                <span key={tech} className="stack-pill">
                  {imageSrc ? (
                    <HoverTag text={tech} imageSrc={imageSrc} />
                  ) : (
                    tech
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
