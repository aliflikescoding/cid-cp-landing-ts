import { NextResponse } from "next/server";
import { clusterPreview } from "@/app/data";

export async function GET(): Promise<NextResponse> {
  try {
    // Simulate a 1.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ clusterPreview });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch cluster preview, ${error}` },
      { status: 500 }
    );
  }
}
