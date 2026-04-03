import Image from "next/image";

const techIcons = [
  { name: "TypeScript", src: "/tags/typescript.png" },
  { name: "React", src: "/tags/react.png" },
  { name: "Next.js", src: "/tags/nextjs.png" },
  { name: "Node.js", src: "/tags/nodejs.png" },
  { name: "Tailwind", src: "/tags/tailwind.png" },
  { name: "Solana", src: "/tags/solana.png" },
  { name: "Rust", src: "/tags/rust.png" },
  { name: "PostgreSQL", src: "/tags/postgresql.svg" },
  { name: "MongoDB", src: "/tags/mongodb.svg" },
  { name: "Docker", src: "/tags/docker.svg" },
  { name: "Git", src: "/tags/git.svg" },
  { name: "Redis", src: "/tags/redis.svg" },
  { name: "Figma", src: "/tags/figma.svg" },
];

export function TechStack() {
  return (
    <div className="tech-icon-grid">
      {techIcons.map((tech) => (
        <div key={tech.name} className="tech-icon-item" title={tech.name}>
          <Image
            src={tech.src}
            alt={tech.name}
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}
