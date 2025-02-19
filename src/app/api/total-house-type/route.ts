import { NextResponse } from "next/server";
import { totalHouseTypes } from "@/app/data";

export async function GET(): Promise<NextResponse> {
  try {
    // Simulate a 1.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ totalHouseTypes });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch hero data, ${error}` },
      { status: 500 }
    );
  }
}
