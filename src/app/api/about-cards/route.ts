import { NextResponse } from "next/server";
import { aboutCards } from "@/app/data";

export async function GET(): Promise<NextResponse> {
  try {
    // Simulate a 0.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ aboutCards });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch cluster names, ${error}` },
      { status: 500 }
    );
  }
}
