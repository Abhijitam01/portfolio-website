export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Abu Dhabi-based Startup",
    period: "Feb 2026 — Present",
    bullets: [
      "Shipped full-stack features across frontend, backend, and infrastructure with end-to-end ownership",
      "Designed scalable APIs and systems, turning ambiguous product ideas into reliable production flows",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "CrowdFeuz",
    period: "Feb 2025 — Oct 2025",
    location: "New Delhi",
    bullets: [
      "Built a complete ticketing + booking system with integrated payments",
      "Simplified backend flows and UX to improve reliability and conversion",
    ],
  },
];
