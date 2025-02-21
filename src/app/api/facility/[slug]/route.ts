// facility/[slug]/route.ts
import { NextResponse } from "next/server";
import { facilities } from "@/app/data";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    // Simulate a 0.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Convert the slug param to number and find matching facility
    const facilityId = parseInt(params.slug);
    const facility = facilities.find((f) => f.id === facilityId);

    if (!facility) {
      return NextResponse.json(
        { error: "Facility not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ facility });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch facility, ${error}` },
      { status: 500 }
    );
  }
}
