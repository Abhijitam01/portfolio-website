import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "visitors.json");
const SEEN_FILE = path.join(DATA_DIR, "seen_ips.json");

const LOCAL_IPS = new Set(["::1", "127.0.0.1", "::ffff:127.0.0.1"]);
const DAY_MS = 24 * 60 * 60 * 1000;

interface GeoData {
  country: string;
  countryCode: string;
  region?: string;
  city: string;
  lat: number;
  lon: number;
  isp?: string;
  flag: string;
}

interface RecentVisitor extends GeoData {
  ip: string;
  time: string;
}

interface CountryEntry {
  name: string;
  flag: string;
  count: number;
  cities: string[];
}

interface VisitorDB {
  totalVisits: number;
  uniqueVisitors: number;
  countries: Record<string, CountryEntry>;
  recentVisitors: RecentVisitor[];
}

interface SeenIPs {
  [ip: string]: number;
}

function readJSON<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function writeJSON(file: string, data: unknown): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

async function geoLocate(ip: string): Promise<GeoData> {
  if (LOCAL_IPS.has(ip)) {
    return { country: "Local", countryCode: "LO", city: "localhost", lat: 0, lon: 0, flag: "" };
  }
  const res = await fetch(
    `http://ip-api.com/json/${ip}?fields=status,country,countryCode,regionName,city,lat,lon,isp`,
    { cache: "no-store" }
  );
  const data = await res.json();
  if (data.status !== "success") throw new Error("geo lookup failed");
  return {
    country: data.country,
    countryCode: data.countryCode,
    region: data.regionName,
    city: data.city,
    lat: data.lat,
    lon: data.lon,
    isp: data.isp,
    flag: `https://flagcdn.com/24x18/${(data.countryCode as string).toLowerCase()}.png`,
  };
}

function buildResponse(db: VisitorDB) {
  const publicVisitors = db.recentVisitors.map(({ lat, lon, city, country }) => ({
    lat,
    lng: lon,
    city,
    country,
  }));
  return {
    count: db.uniqueVisitors,
    visitors: publicVisitors,
    countryCount: Object.keys(db.countries).length,
    countries: db.countries,
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = (forwarded ? forwarded.split(",")[0].trim() : null)
    ?? req.headers.get("x-real-ip")
    ?? (req as unknown as { ip?: string }).ip
    ?? "unknown";

  const emptyDB: VisitorDB = { totalVisits: 0, uniqueVisitors: 0, countries: {}, recentVisitors: [] };

  // Unknown IP — can't geo-locate, return current stats without counting
  if (ip === "unknown") {
    const db = readJSON<VisitorDB>(DB_FILE, emptyDB);
    return NextResponse.json(buildResponse(db));
  }

  const seenIPs = readJSON<SeenIPs>(SEEN_FILE, {});
  const now = Date.now();
  const isNew = !seenIPs[ip] || now - seenIPs[ip] > DAY_MS;

  let geo: GeoData;
  try {
    geo = await geoLocate(ip);
  } catch {
    // Geo failed — still return current stats so the UI isn't broken
    const db = readJSON<VisitorDB>(DB_FILE, emptyDB);
    return NextResponse.json(buildResponse(db));
  }

  const emptyDB: VisitorDB = { totalVisits: 0, uniqueVisitors: 0, countries: {}, recentVisitors: [] };
  const db = readJSON<VisitorDB>(DB_FILE, emptyDB);

  const updatedDB: VisitorDB = {
    ...db,
    totalVisits: db.totalVisits + 1,
    uniqueVisitors: isNew && !LOCAL_IPS.has(ip) ? db.uniqueVisitors + 1 : db.uniqueVisitors,
    countries: { ...db.countries },
    recentVisitors: [...db.recentVisitors],
  };

  if (isNew && !LOCAL_IPS.has(ip)) {
    writeJSON(SEEN_FILE, { ...seenIPs, [ip]: now });
  }

  if (!LOCAL_IPS.has(ip)) {
    const code = geo.countryCode;
    const existing = updatedDB.countries[code];
    const cities = existing ? [...existing.cities] : [];
    if (geo.city && !cities.includes(geo.city)) cities.push(geo.city);

    updatedDB.countries = {
      ...updatedDB.countries,
      [code]: {
        name: geo.country,
        flag: geo.flag,
        count: (existing?.count ?? 0) + 1,
        cities,
      },
    };

    const visitor: RecentVisitor = {
      ip: ip.slice(0, 8) + "***",
      ...geo,
      time: new Date().toISOString(),
    };
    updatedDB.recentVisitors = [visitor, ...updatedDB.recentVisitors].slice(0, 200);
  }

  writeJSON(DB_FILE, updatedDB);

  return NextResponse.json(buildResponse(updatedDB));
}

export async function GET(): Promise<NextResponse> {
  const emptyDB: VisitorDB = { totalVisits: 0, uniqueVisitors: 0, countries: {}, recentVisitors: [] };
  const db = readJSON<VisitorDB>(DB_FILE, emptyDB);
  return NextResponse.json(buildResponse(db));
}
