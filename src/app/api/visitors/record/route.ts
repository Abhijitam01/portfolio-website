import { NextRequest, NextResponse } from "next/server";

const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_BIN_ID}`;
const MASTER_KEY = process.env.JSONBIN_MASTER_KEY ?? "";

interface VisitorRecord {
  lat: number;
  lng: number;
  city: string;
  country: string;
  ip: string;
  ts: number;
}

interface PublicVisitor {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

async function readBin(): Promise<VisitorRecord[]> {
  if (!MASTER_KEY || !process.env.JSONBIN_BIN_ID) return [];
  try {
    const res = await fetch(`${JSONBIN_URL}/latest`, {
      headers: { "X-Master-Key": MASTER_KEY },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.record?.visitors ?? [];
  } catch {
    return [];
  }
}

async function writeBin(records: VisitorRecord[]): Promise<void> {
  if (!MASTER_KEY || !process.env.JSONBIN_BIN_ID) return;
  try {
    await fetch(JSONBIN_URL, {
      method: "PUT",
      headers: {
        "X-Master-Key": MASTER_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ visitors: records }),
    });
  } catch {
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  const records = await readBin();
  const now = Date.now();

  const alreadySeen = records.some(
    (r) => r.ip === ip && now - r.ts < 86_400_000
  );

  if (!alreadySeen && ip !== "unknown" && ip !== "127.0.0.1" && ip !== "::1") {
    try {
      const geo = await fetch(
        `http://ip-api.com/json/${ip}?fields=status,lat,lon,city,country`,
        { cache: "no-store" }
      ).then((r) => r.json());

      if (geo.status === "success") {
        records.push({
          lat: geo.lat,
          lng: geo.lon,
          city: geo.city,
          country: geo.country,
          ip,
          ts: now,
        });
        await writeBin(records);
      }
    } catch {
    }
  }

  const publicRecords: PublicVisitor[] = records.map(
    ({ lat, lng, city, country }) => ({ lat, lng, city, country })
  );

  return NextResponse.json({ count: records.length, visitors: publicRecords });
}

export async function GET(): Promise<NextResponse> {
  const records = await readBin();
  const publicRecords: PublicVisitor[] = records.map(
    ({ lat, lng, city, country }) => ({ lat, lng, city, country })
  );
  return NextResponse.json({ count: records.length, visitors: publicRecords });
}
