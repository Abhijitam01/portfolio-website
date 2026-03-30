import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { HoverTag } from "@/components/hover-tag";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <div className="project-page-shell">
        <Link href="/" className="project-page-back">
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="project-page-hero">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 900px) 100vw, 860px"
            quality={90}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div
          className="project-page-action-bar"
          style={{ gridTemplateColumns: project.launchTweetUrl ? "repeat(3, 1fr)" : "repeat(2, 1fr)" }}
        >
          <a
            href={project.links.find((link) => link.text === "GitHub")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-action-btn"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={project.links.find((link) => link.primary)?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-action-btn"
          >
            <Globe size={18} />
            Website
          </a>
          {project.launchTweetUrl && (
            <a
              href={project.launchTweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-page-action-btn"
            >
              <ExternalLink size={18} />
              Launch Tweet
            </a>
          )}
        </div>

        <div className="project-page-title-row">
          <h1 className="project-page-title">{project.title}</h1>
          <div className="project-status">
            <div className={`status-dot ${project.status.toLowerCase()}`} />
            {project.status}
          </div>
        </div>

        <p className="project-page-description">{project.fullDescription}</p>

        <div className="project-page-case-study">
          <div className="case-study-block">
            <h2 className="case-study-title">Why I built this</h2>
            <p className="case-study-text">{project.caseStudy.why}</p>
          </div>
          <div className="case-study-block">
            <h2 className="case-study-title">Use case</h2>
            <p className="case-study-text">{project.caseStudy.useCase}</p>
          </div>
          <div className="case-study-block">
            <h2 className="case-study-title">What I learned</h2>
            <p className="case-study-text">{project.caseStudy.learned}</p>
          </div>
          <div className="case-study-block">
            <h2 className="case-study-title">Where I got stuck</h2>
            <p className="case-study-text">{project.caseStudy.stuck}</p>
          </div>
        </div>

        <div className="project-page-stack-section">
          <h2 className="project-page-stack-title">Stack used</h2>
          <div className="stack-pill-grid">
            {project.techStack.map((tech) => {
              const techImages: Record<string, string> = {
                TypeScript: "/tags/typescript.png",
                React: "/tags/react.png",
                "Next.js": "/tags/nextjs.png",
                Solana: "/tags/solana.png",
                "Node.js": "/tags/nodejs.png",
                "Tailwind CSS": "/tags/tailwind.png",
                Rust: "/tags/rust.png",
              };
              const imageSrc = techImages[tech];

              return (
                <span key={tech} className="stack-pill">
                  {imageSrc ? <HoverTag text={tech} imageSrc={imageSrc} /> : tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
