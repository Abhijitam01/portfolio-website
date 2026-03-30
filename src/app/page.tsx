import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Section } from "@/components/section";
import { GitHubGraph } from "@/components/github-graph";
import { ProjectList, ProjectItem } from "@/components/project";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { HoverTag } from "@/components/hover-tag";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { ScrollReveal } from "@/components/scroll-reveal";
import { experience } from "@/data/experience";

export default function Home() {
  return (
    <main>
      <ThemeToggle />
      <Header />

      <Section title="ABOUT">
        <ScrollReveal>
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
        </ScrollReveal>
      </Section>

      <Section title="EXPERIENCE">
        <ScrollReveal>
          <Experience items={experience} />
        </ScrollReveal>
      </Section>

      <Section title="STACK">
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
      </Section>

      <Section title="GITHUB">
        <GitHubGraph />
      </Section>

      <Section title="PROJECTS">
        <ScrollReveal>
          <ProjectList>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
              />
            ))}
          </ProjectList>
        </ScrollReveal>
      </Section>

      <Footer />
    </main>
  );
}
