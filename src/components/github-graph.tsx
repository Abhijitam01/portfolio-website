"use client";

import { useEffect, useState } from "react";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";

export function GitHubGraph() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentYear = new Date().getFullYear();

  const theme = {
    light: [
      "#ebedf0",
      "#9be9a8",
      "#40c463",
      "#30a14e",
      "#216e39",
    ],
    dark: [
      "#161b22",
      "#0e4429",
      "#006d32",
      "#26a641",
      "#39d353",
    ],
  };

  const tooltipText = (activity: { count: number; date: string }) => {
    if (!activity?.date) return "View contributions";
    const contributions =
      activity.count === 1 ? "1 contribution" : `${activity.count} contributions`;
    return `${contributions} on ${activity.date}`;
  };

  return (
    <div className="github-minimal">
      <div className="github-header">
        <div className="github-title-wrapper">
          <h3>Contribution Activity</h3>
        </div>
        <a
          href="https://github.com/Abhijitam01"
          className="underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </div>

      <div className="github-graph-outer">
        <div className="github-graph-scroll">
          <GitHubCalendar
            username="Abhijitam01"
            year={currentYear}
            theme={theme}
            fontSize={12}
            blockSize={11}
            blockMargin={4}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                title: tooltipText(activity),
              })
            }
          />
        </div>
      </div>

      <p className="activity-text">
        Building in public · {currentYear} Contributions
      </p>
    </div>
  );
}
