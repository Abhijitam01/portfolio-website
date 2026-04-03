"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface Visitor {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

interface VisitorContextValue {
  count: number | null;
  visitors: Visitor[];
}

const VisitorContext = createContext<VisitorContextValue>({ count: null, visitors: [] });

export function VisitorProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number | null>(null);
  const [visitors, setVisitors] = useState<Visitor[]>([]);

  useEffect(() => {
    fetch("/api/visitors/record")
      .then((r) => r.json())
      .then((d) => {
        setCount(d.count);
        if (Array.isArray(d.visitors)) setVisitors(d.visitors);
      })
      .catch(() => {});

    if (!sessionStorage.getItem("visitorRecorded")) {
      sessionStorage.setItem("visitorRecorded", "true");
      fetch("/api/visitors/record", { method: "POST" })
        .then((r) => r.json())
        .then((data: Visitor[]) => {
          setVisitors(data);
          setCount(data.length);
        })
        .catch(() => {});
    }

    const interval = setInterval(() => {
      fetch("/api/visitors/record")
        .then((r) => r.json())
        .then((d) => {
          setCount(d.count);
          if (Array.isArray(d.visitors)) setVisitors(d.visitors);
        })
        .catch(() => {});
    }, 30_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VisitorContext.Provider value={{ count, visitors }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitors() {
  return useContext(VisitorContext);
}
