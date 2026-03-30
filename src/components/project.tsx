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

          <div className="view-project">
            View Project <ArrowUpRight size={16} />
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
