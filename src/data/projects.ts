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
  launchTweetUrl?: string;
}

export const projects: Project[] = [
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
      { url: "https://github.com/Abhijitam01/chess", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I wanted to build a real-time system where performance truly matters. Chess is a perfect environment to test matchmaking logic, latency optimization, state synchronization, and analytical tooling in one cohesive product.",
      useCase: "Players can join ranked queues, play low-latency multiplayer games, review mistakes with engine insights, and train with tactical puzzles. The focus is on serious players who value clarity and speed over gamified distractions.",
      learned: "Real-time systems expose edge cases quickly. I learned how critical server authority, strict move validation, and deterministic state modeling are in multiplayer environments.",
      stuck: "Maintaining synchronized game state across unstable connections has been the biggest challenge. Preventing desync while keeping moves responsive required careful event ordering, reconciliation strategies, and robust reconnect logic."
    }
  },
  {
    id: "eyeswitch",
    title: "EyeSwitch",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/eyeswitch.png",
    description: "An interaction-first system exploring alternative human-computer interfaces — frictionless navigation without traditional input patterns.",
    fullDescription: "EyeSwitch is an exploration of what human-computer interaction looks like when you strip away conventional input assumptions. Built around real-time responsiveness, it reimagines navigation as a seamless, low-friction experience. The architecture prioritizes experience over features — every design decision is measured by how invisible the interface feels during use.",
    techStack: ["TypeScript", "React", "Node.js", "WebSockets"],
    links: [
      { url: "https://eyeswitch.abhijitamdubey.site", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    launchTweetUrl: "https://x.com/Abhijitam_",
    caseStudy: {
      why: "I wanted to challenge the assumption that keyboards and mice are the only natural way to interact with software. EyeSwitch started as a question: what if the interface stepped out of the way entirely?",
      useCase: "Useful for accessibility research, HCI experimentation, and any context where traditional input is limiting or unavailable. It demonstrates that frictionless interaction is achievable without sacrificing system responsiveness.",
      learned: "I learned that removing friction is harder than adding features. Every millisecond of latency and every unnecessary affordance breaks the illusion of a transparent interface.",
      stuck: "Calibrating real-time input to feel natural — not jittery or laggy — required deep iteration on signal smoothing and response curves. Getting the interaction to feel effortless took far more tuning than expected."
    }
  },
  {
    id: "sketchy",
    title: "Sketchy",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/sketchy.png",
    description: "An Excalidraw-like canvas drawing tool with real-time rendering and interactive shape handling.",
    fullDescription: "Sketchy is a canvas-based drawing system built around performance and intuitive visual interaction. It supports real-time shape rendering with smooth, responsive input handling — giving it the feel of drawing on actual paper. The focus throughout was on keeping the rendering loop fast and the interaction model simple enough that the tool stays out of the way.",
    techStack: ["TypeScript", "React", "Canvas API"],
    links: [
      { url: "https://github.com/Abhijitam01/sketchy", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01/sketchy", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "I wanted to understand how tools like Excalidraw achieve their performance and feel. Building a drawing canvas from scratch forced me to reason about rendering pipelines, input latency, and visual feedback in ways no tutorial could.",
      useCase: "Quick wireframes, diagrams, and visual thinking. The lightweight approach makes it fast to open and start sketching without the overhead of feature-heavy tools.",
      learned: "Canvas rendering performance comes down to minimizing redraws and batching operations. I learned how small decisions in the event loop — debouncing, requestAnimationFrame placement, dirty region tracking — compound into a noticeably smoother or jankier experience.",
      stuck: "Hit testing for shapes (knowing which shape the cursor is over) was harder than expected. Getting accurate, performant detection across overlapping shapes required implementing a proper scene graph rather than naive iteration."
    }
  },
  {
    id: "solana-atlas",
    title: "Solana Atlas",
    status: "Live",
    statusClass: "badge-live",
    image: "/projects/solana-atlas.png",
    description: "An interactive Solana playground that makes blockchain mechanics visible, testable, and understandable.",
    fullDescription: "Solana Atlas bridges the gap between low-level blockchain concepts and real developer workflows. Instead of reading fragmented documentation, developers can experiment with accounts, instructions, and transactions in a live environment. It exposes internal state in a way that makes Solana programs easier to reason about — whether you're learning fundamentals or validating production ideas.",
    techStack: ["Solana", "Web3.js", "TypeScript", "Anchor"],
    links: [
      { url: "https://solana-atlas.xyz", text: "Visit Site", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    caseStudy: {
      why: "Most blockchain documentation explains pieces in isolation — accounts here, transactions there. I built Solana Atlas to connect those pieces in a single interactive flow so developers can understand how everything works together.",
      useCase: "Developers can inspect account layouts, simulate instruction flows, analyze transaction behavior, and debug program logic before deploying. It's useful for both beginners learning Solana and teams validating architectural decisions.",
      learned: "I learned to design for observability. When internal system state is visible and structured clearly, complex blockchain interactions become approachable and predictable.",
      stuck: "Coordinating wallet interactions, RPC calls, and program execution while maintaining a smooth UX was the hardest part. Handling inconsistent network states without overwhelming users required defensive design and strong error abstraction."
    }
  },
  {
    id: "vizzy",
    title: "Vizzy",
    status: "Building",
    statusClass: "badge-building",
    image: "/projects/vizzy.png",
    description: "A drag-and-drop canvas that turns Express.js from intimidating code into a visual flow — and generates a working server.js as you build.",
    fullDescription: "Vizzy is a visual learning tool for Express.js. Every endpoint is a linear chain — Route, Middleware, Handler, Response — and Vizzy makes that chain literal. You drag four block types onto a canvas, connect them with wires, and a live code panel generates real, annotated server.js code as you build. The generated code includes comments that explain req, res, what each block does, and how to run it. Hit Export and the browser downloads a server.js and package.json. Open a terminal, run npm install && node server.js, and you have a working server on port 3000. The goal: a junior dev who has never written Express ships a working GET endpoint in under 5 minutes. There's also a Run button that simulates a request traveling through your route — blocks light up in sequence so you can see the flow before exporting.",
    techStack: ["React", "TypeScript", "Zustand", "Vite"],
    links: [
      { url: "#", text: "Coming Soon", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    launchTweetUrl: "#",
    caseStudy: {
      why: "Most Express tutorials throw a wall of code at beginners with no visual map of what's happening. I built Vizzy to make the mental model literal — if you can see the chain, you can understand it.",
      useCase: "Junior developers and students learning backend development for the first time. Vizzy lets them build a working Express server without memorizing syntax first — they learn by assembling, not by copying.",
      learned: "I learned that the code output matters as much as the canvas interaction. Beginners don't just need working code — they need code they can read. Writing annotated generation logic was the core design challenge.",
      stuck: "Keeping the canvas state, the wire connections, and the code panel in perfect sync required careful Zustand store design. Any inconsistency between what's on canvas and what's in the output breaks the learning experience entirely."
    }
  },
  {
    id: "photobooth",
    title: "Photobooth",
    status: "Building",
    statusClass: "badge-building",
    image: "/projects/photobooth.png",
    description: "Walk up, take 4 shots, get a beautiful film strip in seconds. No signup, no install — just a URL.",
    fullDescription: "Photobooth is as simple as it sounds: open a URL, take four shots with your camera, and walk away with a beautiful film strip. No account required, no app to install, no friction. The entire experience is designed around the joy of the moment — you show up, click, and share. The output is a classic photo strip layout, instantly shareable with one tap.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    links: [
      { url: "#", text: "Coming Soon", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    launchTweetUrl: "#",
    caseStudy: {
      why: "I wanted to build something joyful and immediate. Most photo booth apps require accounts, downloads, or subscriptions. The premise is simple: the whole experience should fit in a single URL.",
      useCase: "Events, parties, friend groups — any moment where you want a quick, shareable memory. The zero-friction constraint is the core product decision: if there's a signup screen, the magic is gone.",
      learned: "Simplicity is a design discipline. Removing every non-essential step means each remaining step has to be perfect. Camera access, capture timing, strip layout, and share UX each needed to be invisible.",
      stuck: "Cross-device camera access is inconsistently implemented across browsers. Getting reliable, high-quality capture on both desktop and mobile without specialized SDKs required careful constraint negotiation with the MediaDevices API."
    }
  },
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
      useCase: "Developers can store reusable logic, tag snippets by language or framework, and retrieve them by intent rather than exact keywords. It's especially useful during feature sprints, debugging sessions, and onboarding new team members to shared patterns.",
      learned: "I learned that search relevance builds trust. A tool like this lives or dies by how quickly it returns the right result. Indexing strategy, tagging structure, and preview clarity mattered more than adding extra features.",
      stuck: "Handling formatting edge cases across languages was difficult. Preserving indentation, escaping characters safely, and ensuring consistent copy behavior across browsers required multiple iterations and careful testing."
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
      useCase: "Teams can instantly spin up structured Turborepo + Next.js environments with shared configs and production-ready defaults. It's ideal for hackathons, internal tooling, MVPs, and client projects.",
      learned: "I learned that great CLI tools prioritize predictability over complexity. Clear prompts, deterministic output, and safe re-runs matter more than offering too many configuration options.",
      stuck: "Managing template evolution without breaking previously generated projects was challenging. Balancing upgrade paths with user customization forced me to think carefully about versioning and maintainability."
    }
  },
  {
    id: "loadzen",
    title: "LoadZen",
    status: "Building",
    statusClass: "badge-building",
    image: "/projects/loadzen.png",
    description: "Self-hosted load testing — enter a URL, set concurrent users and duration, get real-time metrics and AI-powered diagnosis.",
    fullDescription: "LoadZen is a self-hosted load testing tool designed for developers who want real answers about their system's limits. Enter a URL, configure concurrent users and test duration, and watch real-time metrics roll in as k6 runs load against your endpoint. When the test finishes, an AI-powered diagnosis interprets the results — surfacing bottlenecks, error patterns, and actionable recommendations. The stack is a pnpm monorepo: Next.js frontend, Fastify API, BullMQ + Redis worker queue, k6 spawned as a subprocess for the actual load generation, and PostgreSQL + Drizzle ORM for persistence. TanStack Query handles all server state on the frontend.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    links: [
      { url: "#", text: "Coming Soon", primary: true },
      { url: "https://github.com/Abhijitam01", text: "GitHub", primary: false }
    ],
    launchTweetUrl: "#",
    caseStudy: {
      why: "Load testing tools are either too complex (enterprise-grade overkill) or too limited (basic curl loops). I wanted something you could self-host in minutes that gives you production-quality insights without the setup tax.",
      useCase: "Developers and small teams testing API endpoints before a launch, after a deploy, or when investigating a performance regression. The AI diagnosis layer means you get actionable output, not just raw numbers to interpret yourself.",
      learned: "Orchestrating a subprocess-based test runner (k6) with a job queue and real-time metrics streaming required careful thinking about failure modes — what happens when k6 crashes mid-test, or when Redis goes down during a run.",
      stuck: "Cloudflare Workers and D1 are a natural deployment target, but k6 needs child_process.spawn — a Node.js primitive that Workers doesn't support. This forced a traditional server deployment model and shaped the entire infrastructure design."
    }
  }
];
