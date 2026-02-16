"use client";

export function TechStack() {
  const stack = [
    {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "GSAP"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express", "Prisma"],
    },
    {
      label: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    },
    {
      label: "Languages",
      items: ["JavaScript", "TypeScript", "C++"],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Figma"],
    },
    {
      label: "Web3",
      items: ["Solana"],
    },
  ];

  return (
    <div className="skills-grid">
      {stack.map((group) => (
        <div key={group.label} className="skill-category">
          <span className="skill-label">{group.label}</span>
          <span className="skill-items">{group.items.join(" · ")}</span>
        </div>
      ))}
    </div>
  );
}
