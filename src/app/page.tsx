"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Section } from "@/components/section";
import { GitHubGraph } from "@/components/github-graph";
import { ProjectList, ProjectItem } from "@/components/project";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { HoverTag } from "@/components/hover-tag";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <main>
      <ThemeToggle />
      <Header />
      
      <Section title="ABOUT">
        <p>
          I&apos;m a software developer focused on building tools and platforms that make developers&apos; lives easier. 
          I work across the stack, specializing in <HoverTag text="TypeScript" imageSrc="/tags/typescript.png" />, <HoverTag text="React" imageSrc="/tags/react.png" />, and <HoverTag text="Solana" imageSrc="/tags/solana.png" /> development.
          Currently exploring new ways to streamline development workflows and experimenting with interactive tools.
        </p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <a href="https://github.com/Abhijitam01" className="underline-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/Abhijitam_" className="underline-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:work.abhijitam@gmail.com" className="underline-link">Email</a>
        </div>
      </Section>

      <Section title="STACK">
        <TechStack />
      </Section>

      <Section title="GITHUB">
        <GitHubGraph />
      </Section>

      <Section title="PROJECTS">
        <ProjectList>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              onModalOpenChange={setIsProjectModalOpen}
            />
          ))}
        </ProjectList>
      </Section>

      {!isProjectModalOpen && <Footer />}
    </main>
  );
}
