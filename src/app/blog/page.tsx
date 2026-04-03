import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    slug: "building-on-solana",
    title: "What I Learned Building on Solana",
    date: "March 2026",
    tags: ["Solana", "Rust", "Web3"],
    excerpt:
      "A walkthrough of the Solana programming model, account ownership, and the mistakes I made building Solana Atlas. What Ethereum developers get wrong when they first touch Solana.",
  },
  {
    slug: "real-time-canvas",
    title: "Real-Time Collaboration with Canvas API & WebSockets",
    date: "February 2026",
    tags: ["Node.js", "WebSockets", "Canvas"],
    excerpt:
      "How I built a low-latency collaborative drawing experience. Lessons from managing shared state across clients, CRDT tradeoffs, and why operational transforms are still underrated.",
  },
  {
    slug: "fullstack-mental-model",
    title: "The Full-Stack Mental Model I Wish I Had Earlier",
    date: "January 2026",
    tags: ["Engineering", "Career"],
    excerpt:
      "Most full-stack tutorials show you the happy path. This is about the mental model for how data flows end-to-end, where things go wrong, and how to debug across boundaries.",
  },
  {
    slug: "nextjs-performance",
    title: "Performance Patterns in Next.js 15",
    date: "December 2025",
    tags: ["Next.js", "TypeScript", "Performance"],
    excerpt:
      "Streaming, PPR, and Server Components changed how I think about rendering. A practical guide to picking the right rendering strategy for each part of your app.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <SiteNav />

      <div className="blog-page-header">
        <h1 className="blog-page-title">Writing</h1>
        <p className="blog-page-subtitle">
          Notes on building software, shipping products, and things I pick up along the way.
        </p>
      </div>

      <div className="blog-post-list">
        {posts.map((post) => (
          <article key={post.slug} className="blog-post-item">
            <div className="blog-post-meta">
              <span className="blog-post-date">{post.date}</span>
              <div className="blog-post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="blog-post-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <span className="blog-post-link">
                Read post <ArrowUpRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </main>
  );
}
