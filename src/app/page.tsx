import { Header } from "@/components/header";
import { SiteNav } from "@/components/site-nav";
import { Section } from "@/components/section";
import { GitHubGraph } from "@/components/github-graph";
import { ProjectList, ProjectItem } from "@/components/project";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { HoverTag } from "@/components/hover-tag";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { experience } from "@/data/experience";
import { ReadingSection } from "@/components/reading";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Header />

      <Section title="ABOUT">
        <p>
          I&apos;m a software developer focused on building tools and platforms that make developers&apos; lives easier.
          I work across the stack, specializing in <HoverTag text="TypeScript" imageSrc="/tags/typescript.png" />, <HoverTag text="React" imageSrc="/tags/react.png" />, and <HoverTag text="Solana" imageSrc="/tags/solana.png" /> development.
          Currently exploring new ways to streamline development workflows and experimenting with interactive tools.
        </p>
      </Section>

      <Section title="EXPERIENCE">
        <Experience items={experience} />
      </Section>

      <Section title="STACK">
        <TechStack />
      </Section>

      <Section title="PROJECTS">
        <ProjectList>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
            />
          ))}
        </ProjectList>
      </Section>

      <Section title="GITHUB">
        <GitHubGraph />
      </Section>

      <Section title="WHAT I'M READING">
        <ReadingSection />
      </Section>

      <Footer />
    </main>
  );
}
