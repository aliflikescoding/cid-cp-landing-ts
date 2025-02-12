import { NextResponse } from "next/server";
import { companyLogos } from "@/app/data";

export async function GET(): Promise<NextResponse> {
  try {
    // Simulate a 0.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ companyLogos });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch company data, ${error}` },
      { status: 500 }
    );
  }
}
