"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface Visitor {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

export interface CountryEntry {
  name: string;
  flag: string;
  count: number;
  cities: string[];
}

interface VisitorContextValue {
  count: number | null;
  visitors: Visitor[];
  countryCount: number;
  countries: Record<string, CountryEntry>;
}

const VisitorContext = createContext<VisitorContextValue>({
  count: null,
  visitors: [],
  countryCount: 0,
  countries: {},
});

export function VisitorProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number | null>(null);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [countryCount, setCountryCount] = useState(0);
  const [countries, setCountries] = useState<Record<string, CountryEntry>>({});

  useEffect(() => {
    const applyGeo = (d: {
      visitors?: Visitor[];
      countryCount?: number;
      countries?: Record<string, CountryEntry>;
    }) => {
      if (Array.isArray(d.visitors)) setVisitors(d.visitors);
      if (d.countryCount !== undefined) setCountryCount(d.countryCount);
      if (d.countries) setCountries(d.countries);
    };

    const recorded = sessionStorage.getItem("visitorRecorded");

    // Count: proxy through our API route to avoid CORS issues with counterapi.dev
    const countUrl = recorded
      ? "/api/visitors/count"
      : "/api/visitors/count?increment=1";
    if (!recorded) sessionStorage.setItem("visitorRecorded", "true");
    fetch(countUrl)
      .then((r) => r.json())
      .then((d) => { if (typeof d.count === "number") setCount(d.count); })
      .catch(() => {});

    // Geo: always POST so the route geolocates the current visitor — map always has ≥1 dot
    fetch("/api/visitors/record", { method: "POST" })
      .then((r) => r.json())
      .then(applyGeo)
      .catch(() => {});
  }, []);

  return (
    <VisitorContext.Provider value={{ count, visitors, countryCount, countries }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitors() {
  return useContext(VisitorContext);
}
