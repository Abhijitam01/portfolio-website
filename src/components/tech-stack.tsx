const techs = [
  // Row 1
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", url: "https://react.dev" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", darkIcon: "https://cdn.simpleicons.org/nextdotjs/ffffff", url: "https://nextjs.org" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", url: "https://nodejs.org" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/000000", darkIcon: "https://cdn.simpleicons.org/express/ffffff", url: "https://expressjs.com" },
  { name: "Bun", icon: "https://cdn.simpleicons.org/bun/000000", darkIcon: "https://cdn.simpleicons.org/bun/ffffff", url: "https://bun.sh" },
  // Row 2
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", url: "https://www.postgresql.org" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", url: "https://www.mongodb.com" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438", url: "https://redis.io" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/000000", darkIcon: "https://cdn.simpleicons.org/prisma/ffffff", url: "https://www.prisma.io" },
  { name: "Zustand", icon: "https://cdn.simpleicons.org/zustand/000000", darkIcon: "https://cdn.simpleicons.org/zustand/ffffff", url: "https://zustand-demo.pmnd.rs" },
  { name: "Tanstack Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154", url: "https://tanstack.com/query" },
  // Row 3
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", url: "https://tailwindcss.com" },
  { name: "shadcn", icon: "https://cdn.simpleicons.org/shadcnui/000000", darkIcon: "https://cdn.simpleicons.org/shadcnui/ffffff", url: "https://ui.shadcn.com" },
  { name: "Motion", icon: "https://cdn.simpleicons.org/framer/000000", darkIcon: "https://cdn.simpleicons.org/framer/ffffff", url: "https://motion.dev" },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02", url: "https://gsap.com" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", url: "https://www.postman.com" },
  // Row 4
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", url: "https://www.typescriptlang.org" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", url: "https://www.python.org" },
  { name: "Rust", icon: "https://cdn.simpleicons.org/rust/000000", darkIcon: "https://cdn.simpleicons.org/rust/ffffff", url: "https://www.rust-lang.org" },
  { name: "Solana", icon: "https://cdn.simpleicons.org/solana/9945FF", url: "https://solana.com" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", url: "https://git-scm.com" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/000000", darkIcon: "https://cdn.simpleicons.org/github/ffffff", url: "https://github.com" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", url: "https://www.docker.com" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", url: "https://www.figma.com" },
];

export function TechStack() {
  return (
    <section className="tech-stack-section">
      <span className="section-title">Skills</span>
      <h2 className="section-heading">Technologies</h2>
      <div className="tech-pill-grid">
        {techs.map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-pill"
          >
            {/* Light mode icon */}
            <img
              src={tech.icon}
              alt={tech.name}
              className={tech.darkIcon ? "tech-pill-icon light-only" : "tech-pill-icon"}
              width={16}
              height={16}
            />
            {/* Dark mode icon (only for icons that differ) */}
            {tech.darkIcon && (
              <img
                src={tech.darkIcon}
                alt={tech.name}
                className="tech-pill-icon dark-only"
                width={16}
                height={16}
              />
            )}
            <span>{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
