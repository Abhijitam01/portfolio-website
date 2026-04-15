import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const DB_KEY = "portfolio:visitors";
const SEEN_KEY = "portfolio:seen_ips";

const LOCAL_IPS = new Set(["::1", "127.0.0.1", "::ffff:127.0.0.1"]);
const DAY_S = 24 * 60 * 60;

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

const EMPTY_DB: VisitorDB = {
  totalVisits: 0,
  uniqueVisitors: 0,
  countries: {},
  recentVisitors: [],
};

async function readDB(): Promise<VisitorDB> {
  const data = await redis.get<VisitorDB>(DB_KEY);
  return data ?? EMPTY_DB;
}

async function writeDB(db: VisitorDB): Promise<void> {
  await redis.set(DB_KEY, db);
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
  const ip =
    (forwarded ? forwarded.split(",")[0].trim() : null) ??
    req.headers.get("x-real-ip") ??
    (req as unknown as { ip?: string }).ip ??
    "unknown";

  // Unknown IP — return current stats without counting
  if (ip === "unknown") {
    const db = await readDB();
    return NextResponse.json(buildResponse(db));
  }

  // Check if this IP was seen in the last 24h (stored as a Redis key with TTL)
  const seenKey = `${SEEN_KEY}:${ip}`;
  const alreadySeen = await redis.exists(seenKey);
  const isNew = !alreadySeen;

  let geo: GeoData;
  try {
    geo = await geoLocate(ip);
  } catch {
    const db = await readDB();
    return NextResponse.json(buildResponse(db));
  }

  const db = await readDB();

  const updatedDB: VisitorDB = {
    ...db,
    totalVisits: db.totalVisits + 1,
    uniqueVisitors:
      isNew && !LOCAL_IPS.has(ip) ? db.uniqueVisitors + 1 : db.uniqueVisitors,
    countries: { ...db.countries },
    recentVisitors: [...db.recentVisitors],
  };

  if (isNew && !LOCAL_IPS.has(ip)) {
    // Mark IP as seen with 24h TTL
    await redis.set(seenKey, 1, { ex: DAY_S });
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

  await writeDB(updatedDB);

  return NextResponse.json(buildResponse(updatedDB));
}

export async function GET(): Promise<NextResponse> {
  const db = await readDB();
  return NextResponse.json(buildResponse(db));
}
