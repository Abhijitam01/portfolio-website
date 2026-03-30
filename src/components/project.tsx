"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ProjectItemProps {
  project: Project;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] as const
    } 
  }
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div variants={itemVariants}>
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
          </div>

          <div className="project-header-row">
            <h3 className="project-name">{project.title}</h3>
            <div className="project-status">
              <div className={`status-dot ${project.status.toLowerCase()}`} />
              {project.status}
            </div>
          </div>

          <p className="project-desc">{project.description}</p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
            <div className="view-project">
              View Project <ArrowUpRight size={16} />
            </div>
            {project.launchTweetUrl && project.launchTweetUrl !== "#" && (
              <a 
                href={project.launchTweetUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-project"
                style={{ color: "var(--accent)", zIndex: 10, position: "relative" }}
                onClick={(e) => e.stopPropagation()}
              >
                Launch Tweet <ArrowUpRight size={16} />
              </a>
            )}
          </div>
      </Link>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProjectList({ children }: { children: React.ReactNode }) {
  return (
    <motion.div 
      className="project-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  );
}
