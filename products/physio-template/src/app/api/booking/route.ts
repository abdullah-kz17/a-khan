import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { patientName, phone, date, time, service } = body;

    // Basic server-side validation
    if (!patientName || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();

    const booking = {
      id,
      patientName,
      phone,
      date,
      time,
      service: service || "General Consultation",
      status: "PENDING",
      createdAt: new Date().toISOString(),
    };

    // Save booking to KV
    await kv.set(`booking:${id}`, booking);

    // Add to index for listing (newest first)
    await kv.lpush("bookings:all", id);

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error("Booking creation error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
