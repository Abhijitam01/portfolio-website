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
    fetch("/api/visitors/record", { method: "POST" })
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.count === "number") setCount(d.count);
        if (Array.isArray(d.visitors)) setVisitors(d.visitors);
        if (d.countryCount !== undefined) setCountryCount(d.countryCount);
        if (d.countries) setCountries(d.countries);
      })
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
