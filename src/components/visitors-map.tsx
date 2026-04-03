"use client";

import { useEffect, useState, useMemo } from "react";
import DottedMap from "dotted-map";

interface Visitor {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

export function VisitorsMap() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () =>
      setIsDark(
        document.documentElement.getAttribute("data-theme") !== "light"
      );
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/api/visitors/record", { method: "POST" })
      .then((r) => r.json())
      .then((data: Visitor[]) => setVisitors(data))
      .catch(() => {});
  }, []);

  const svg = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    visitors.forEach((v) => {
      map.addPin({
        lat: v.lat,
        lng: v.lng,
        svgOptions: { color: "#22c55e", radius: 0.4 },
      });
    });
    return map.getSVG({
      radius: 0.22,
      color: isDark ? "#555560" : "#b0b0b8",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [visitors, isDark]);

  const countryCount = useMemo(
    () => new Set(visitors.map((v) => v.country)).size,
    [visitors]
  );

  return (
    <section className="visitors-map-section">
      <div className="main-wrapper">
        <div
          className="visitors-map-wrap"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        {visitors.length > 0 && (
          <p className="visitors-map-count">
            {visitors.length} {visitors.length === 1 ? "visitor" : "visitors"}{" "}
            from {countryCount} {countryCount === 1 ? "country" : "countries"}
          </p>
        )}
      </div>
    </section>
  );
}
