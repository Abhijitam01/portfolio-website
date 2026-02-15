export interface Project {
  id: string;
  title: string;
  status: 'Live' | 'Building';
  statusClass: 'badge-live' | 'badge-building';
  image: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  links: {
    url: string;
    text: string;
    primary: boolean;
  }[];
  caseStudy: {
    why: string;
    useCase: string;
    learned: string;
    stuck: string;
  };
}

export const projects: Project[] = [
  {
    id: "snippet-vault",
    title: "Snippet Vault",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/snippet-vault.png",
    description: "A vault for your code snippets. Store, organize, and retrieve your most-used code blocks efficiently.",
    fullDescription: "Snippet Vault is a production-ready code management tool designed for developers who need quick access to their most-used code patterns. It features a high-performance search engine, local caching for offline access, and a clean, distraction-free UI. Built with a focus on speed and developer experience, it helps streamline the repetitive parts of coding.",
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: [
      { url: "https://snippetvault.abhijitamdubey.site", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I built Snippet Vault after noticing how much context gets lost when snippets are scattered across chats, notes, and old repos. I wanted one place where I could save proven code with metadata and find it instantly.",
      useCase: "Developers and teams can store reusable snippets, tag them by language/framework, and search by intent. It is useful during feature delivery when speed matters and when onboarding new developers to shared patterns.",
      learned: "I learned how search quality affects developer trust more than UI polish. Building indexing, tagging, and preview behavior taught me to prioritize relevance and retrieval speed over feature bloat.",
      stuck: "The hardest part was balancing flexible snippet formats with consistent rendering. Escaping edge cases, preserving formatting, and making copy actions reliable across browsers took multiple iterations."
    }
  },
  {
    id: "solana-atlas",
    title: "Solana Atlas",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/solana-atlas.png",
    description: "A comprehensive playground for Solana developers. Experiment, test, and build Solana programs in an interactive environment.",
    fullDescription: "Solana Atlas provides a bridge between low-level blockchain development and high-level developer experience. It offers a suite of interactive tools to test Solana programs on-the-fly, visualize account structures, and debug transactions in real-time. It's the ultimate sandbox for both beginners and experienced Solana architects.",
    techStack: ["Solana", "Web3.js", "TypeScript", "Anchor"],
    links: [
      { url: "https://solana-atlas.xyz", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I built Solana Atlas to reduce the gap between protocol-level Solana concepts and practical builder workflows. Most docs explain parts in isolation, but developers need an interactive way to connect everything.",
      useCase: "It is for developers learning Solana and teams validating ideas quickly. They can inspect account layouts, test instruction flows, and reason about transaction behavior before shipping to production.",
      learned: "I learned to design tooling around observability. Exposing internal transaction state in a simple way is what makes blockchain systems understandable for day-to-day development.",
      stuck: "The biggest blocker was managing wallet, RPC, and program interactions while keeping UX smooth. Handling errors from different network states without overwhelming users required a lot of defensive design."
    }
  },
  {
    id: "erica",
    title: "Erica",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/erica.png",
    description: "A package manager that scaffolds production-ready Turborepo Next.js projects. Install and start building immediately.",
    fullDescription: "Erica is a powerful CLI tool that eliminates the boilerplate friction of starting new projects. It scaffolds a fully configured Turborepo environment with Next.js, Tailwind, and Prisma out of the box. Designed for speed, it automates the setup of shared UI components and API layers, getting developers from zero to code in seconds.",
    techStack: ["CLI", "Node.js", "Turborepo", "Rust"],
    links: [
      { url: "https://github.com/Abhijitam01", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I built Erica because bootstrapping monorepo projects repeatedly was slowing me down. I wanted a single command that creates a clean, opinionated baseline without manual setup overhead.",
      useCase: "Teams can scaffold production-ready Turborepo + Next.js workspaces with consistent structure, shared configs, and sane defaults. It is useful for hackathons, internal tools, and new client projects.",
      learned: "I learned that great CLIs are mostly about clarity and idempotency. Clear prompts, predictable output, and reliable reruns matter more than adding too many options.",
      stuck: "Template drift was the toughest problem. Keeping generated projects up to date while preserving user customizations forced me to rethink versioning and upgrade paths."
    }
  },
  {
    id: "chess",
    title: "Chess Platform",
    status: "Building",
    statusClass: "badge-building",
    image: "/projects/snippet-vault.png", // Reusing a placeholder for now
    description: "A modern chess platform with real-time multiplayer, AI opponents, and analysis tools.",
    fullDescription: "This chess platform is built for serious players who want a sleek, distraction-free environment. Utilizing WebSockets for sub-100ms move latency, it supports ranked matchmaking, real-time move analysis, and a library of tactical puzzles. Currently in active development to integrate Stockfish 16 for advanced AI insights.",
    techStack: ["WebSockets", "React", "Node.js", "Stockfish"],
    links: [
      { url: "#", text: "Coming Soon", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I started this chess platform to build a real-time system where performance and product depth both matter. Chess is a good testbed for matchmaking, latency, and analytical tooling in one product.",
      useCase: "Players can queue for fast multiplayer games, review mistakes, and practice tactics. The platform targets users who want cleaner UX and faster analysis than typical casual chess apps.",
      learned: "I learned how quickly real-time edge cases accumulate in multiplayer systems. Presence, reconnect logic, and move validation need strong server authority and careful state modeling.",
      stuck: "Synchronizing game state across flaky connections has been the hardest part. Avoiding desync while keeping moves responsive required strict event ordering and reconciliation logic."
    }
  }
];
