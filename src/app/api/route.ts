import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const country = request.headers.get("X-Vercel-IP-Country");
  const region = request.headers.get("X-Vercel-IP-Country-Region");
  const city = request.headers.get("X-Vercel-IP-City");
  return NextResponse.json({
    data: { country: country, region: region, city: city },
  });
}
