"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { openPRs, mergedPRs, type PR } from "@/data/oss";

type Tab = "open" | "merged";

function PRList({ prs }: { prs: PR[] }) {
  if (prs.length === 0) {
    return (
      <div className="oss-empty">
        No PRs to show yet.
      </div>
    );
  }

  return (
    <div className="oss-pr-list">
      {prs.map((pr) => (
        <a
          key={`${pr.repo}-${pr.number}`}
          href={pr.url}
          target="_blank"
          rel="noreferrer"
          className="oss-pr-item-link"
        >
          <article className="oss-pr-item">
            <div className="oss-pr-left">
              <span className="oss-pr-repo">{pr.repo}#{pr.number}</span>
              <span className="oss-pr-date">{pr.date}</span>
            </div>
            <div className="oss-pr-right">
              <h2 className="oss-pr-title">{pr.title}</h2>
              {pr.description && (
                <p className="oss-pr-description">{pr.description}</p>
              )}
              <span className="oss-pr-link">
                View PR <ArrowUpRight size={14} />
              </span>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}

export default function OSSPage() {
  const [activeTab, setActiveTab] = useState<Tab>("open");

  return (
    <main>
      <SiteNav />

      <div className="oss-page-header">
        <Link href="/" className="projects-back-link">
          <ArrowLeft size={14} />
          Back
        </Link>
        <h1 className="oss-page-title">Open Source</h1>
        <p className="oss-page-subtitle">
          Pull requests I&apos;ve opened and contributed to across open-source projects.
        </p>

        <div className="oss-tabs">
          <button
            className={`oss-tab-btn${activeTab === "open" ? " active" : ""}`}
            onClick={() => setActiveTab("open")}
          >
            Open PRs
            <span className="oss-tab-count">{openPRs.length}</span>
          </button>
          <button
            className={`oss-tab-btn${activeTab === "merged" ? " active" : ""}`}
            onClick={() => setActiveTab("merged")}
          >
            Merged PRs
            <span className="oss-tab-count">{mergedPRs.length}</span>
          </button>
        </div>
      </div>

      <PRList prs={activeTab === "open" ? openPRs : mergedPRs} />

      <Footer />
    </main>
  );
}
