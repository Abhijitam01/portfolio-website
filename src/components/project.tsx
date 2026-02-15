"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ProjectModal } from "./project-modal";
import { ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  project: Project;
  onModalOpenChange?: (isOpen: boolean) => void;
}

export function ProjectItem({ project, onModalOpenChange }: ProjectItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="project-card" 
        onClick={() => {
          setIsModalOpen(true);
          onModalOpenChange?.(true);
        }}
      >
        <div className="project-card-image">
          <div className="project-image-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              style={{ objectFit: 'cover' }}
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
      </div>

      {isModalOpen && (
        <ProjectModal 
          project={project} 
          onClose={() => {
            setIsModalOpen(false);
            onModalOpenChange?.(false);
          }} 
        />
      )}
    </>
  );
}

export function ProjectList({ children }: { children: React.ReactNode }) {
  return <div className="project-grid">{children}</div>;
}
