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
      color: "#3a3a3a",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [visitors]);

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
