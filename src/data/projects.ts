export interface ProjectLink {
  url: string;
  text: string;
  primary: boolean;
}

export interface ProjectCaseStudy {
  why: string;
  useCase: string;
  learned: string;
  stuck: string;
}

export interface Project {
  id: string;
  title: string;
  status: string;
  statusClass: string;
  image: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  links: ProjectLink[];
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: "snippet-vault",
    title: "Snippet Vault",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/snippet-vault.png",
    description: "Your personal code memory system. Save, tag, and instantly retrieve battle-tested snippets without digging through chats or old repos.",
    fullDescription: "Snippet Vault is a high-performance snippet management system built for developers who value speed and mental clarity. Instead of losing reusable code across notes, chats, and repositories, Snippet Vault centralizes your proven patterns in a searchable, structured vault. It prioritizes retrieval speed, relevance ranking, and distraction-free UI — turning repeated coding tasks into instant actions.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: [
      { url: "https://snippetvault.abhijitamdubey.site", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I built Snippet Vault after realizing that most developer time is lost not writing code — but searching for code. My snippets were scattered across Notion, GitHub, and chats. I wanted a structured, searchable memory system for proven solutions.",
      useCase: "Developers can store reusable logic, tag snippets by language or framework, and retrieve them by intent rather than exact keywords. It’s especially useful during feature sprints, debugging sessions, and onboarding new team members to shared patterns.",
      learned: "I learned that search relevance builds trust. A tool like this lives or dies by how quickly it returns the right result. Indexing strategy, tagging structure, and preview clarity mattered more than adding extra features.",
      stuck: "Handling formatting edge cases across languages was difficult. Preserving indentation, escaping characters safely, and ensuring consistent copy behavior across browsers required multiple iterations and careful testing."
    }
  },
  {
    id: "solana-atlas",
    title: "Solana Atlas",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/solana-atlas.png?v=2",
    description: "An interactive Solana playground that makes blockchain mechanics visible, testable, and understandable.",
    fullDescription: "Solana Atlas bridges the gap between low-level blockchain concepts and real developer workflows. Instead of reading fragmented documentation, developers can experiment with accounts, instructions, and transactions in a live environment. It exposes internal state in a way that makes Solana programs easier to reason about — whether you're learning fundamentals or validating production ideas.",
    techStack: ["Solana", "Web3.js", "TypeScript", "Anchor"],
    links: [
      { url: "https://solana-atlas.xyz", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "Most blockchain documentation explains pieces in isolation — accounts here, transactions there. I built Solana Atlas to connect those pieces in a single interactive flow so developers can understand how everything works together.",
      useCase: "Developers can inspect account layouts, simulate instruction flows, analyze transaction behavior, and debug program logic before deploying. It’s useful for both beginners learning Solana and teams validating architectural decisions.",
      learned: "I learned to design for observability. When internal system state is visible and structured clearly, complex blockchain interactions become approachable and predictable.",
      stuck: "Coordinating wallet interactions, RPC calls, and program execution while maintaining a smooth UX was the hardest part. Handling inconsistent network states without overwhelming users required defensive design and strong error abstraction."
    }
  },
  {
    id: "erica",
    title: "Erica",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/erika.png",
    description: "A zero-friction CLI that scaffolds production-ready Turborepo + Next.js workspaces in seconds.",
    fullDescription: "Erica is an opinionated CLI tool built to eliminate repetitive project setup. With a single command, it scaffolds a fully configured Turborepo workspace powered by Next.js, Tailwind, and Prisma. It automates shared UI layers, API foundations, and sensible defaults — allowing developers to skip boilerplate and start building immediately.",
    techStack: ["CLI", "Node.js", "Turborepo", "Rust"],
    links: [
      { url: "https://github.com/Abhijitam01", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I was repeatedly bootstrapping monorepo setups for side projects and client work. The process was predictable but time-consuming. Erica was built to compress that setup time into a single reliable command.",
      useCase: "Teams can instantly spin up structured Turborepo + Next.js environments with shared configs and production-ready defaults. It’s ideal for hackathons, internal tooling, MVPs, and client projects.",
      learned: "I learned that great CLI tools prioritize predictability over complexity. Clear prompts, deterministic output, and safe re-runs matter more than offering too many configuration options.",
      stuck: "Managing template evolution without breaking previously generated projects was challenging. Balancing upgrade paths with user customization forced me to think carefully about versioning and maintainability."
    }
  },
  {
    id: "chess",
    title: "Chess Platform",
    status: "Building",
    statusClass: "badge-building",
    image: "/projects/chess.png",
    description: "A real-time chess platform focused on performance, competitive play, and deep analysis.",
    fullDescription: "This chess platform is designed for players who want competitive matchmaking, fast move latency, and serious analysis tools. Built with WebSockets for real-time synchronization, it supports ranked multiplayer, tactical puzzles, and advanced engine-backed analysis. The goal is to combine performance-grade infrastructure with a clean, distraction-free playing experience.",
    techStack: ["WebSockets", "React", "Node.js", "Stockfish"],
    links: [
      { url: "#", text: "Coming Soon", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I wanted to build a real-time system where performance truly matters. Chess is a perfect environment to test matchmaking logic, latency optimization, state synchronization, and analytical tooling in one cohesive product.",
      useCase: "Players can join ranked queues, play low-latency multiplayer games, review mistakes with engine insights, and train with tactical puzzles. The focus is on serious players who value clarity and speed over gamified distractions.",
      learned: "Real-time systems expose edge cases quickly. I learned how critical server authority, strict move validation, and deterministic state modeling are in multiplayer environments.",
      stuck: "Maintaining synchronized game state across unstable connections has been the biggest challenge. Preventing desync while keeping moves responsive required careful event ordering, reconciliation strategies, and robust reconnect logic."
    }
  }
];
