import { NextResponse } from "next/server";
import { clusterNames } from "@/app/data";

export async function GET(): Promise<NextResponse> {
  try {
    // Simulate a 1.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ clusterNames });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch cluster names, ${error}` },
      { status: 500 }
    );
  }
}
