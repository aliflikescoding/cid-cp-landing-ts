// facility/[slug]/route.ts
import { NextResponse } from "next/server";
import { facilityGaleries } from "@/app/data";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    // Simulate a 0.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Convert the slug param to number
    const facilityId = parseInt(params.slug);

    // Filter the facilityGaleries array to include only objects with matching facilityId
    const filteredGaleries = facilityGaleries.filter(
      (gallery) => gallery.facilityId === facilityId
    );

    // Return the filtered galleries in the expected format
    return NextResponse.json({
      facilityGaleries: filteredGaleries,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch facility galleries, ${error}` },
      { status: 500 }
    );
  }
}
