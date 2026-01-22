import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  try {
    // Get all booking IDs (newest first)
    const ids = await kv.lrange<string>("bookings:all", 0, -1);

    // Fetch all bookings
    const bookings = await Promise.all(
      ids.map((id) => kv.get(`booking:${id}`))
    );

    // Filter out any null values and return
    return NextResponse.json({
      bookings: bookings.filter(Boolean),
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
