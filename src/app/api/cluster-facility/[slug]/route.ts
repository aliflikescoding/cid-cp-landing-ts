// src/app/api/cluster-facility/[slug]/route.ts
import { NextResponse } from "next/server";
import { clusterFacilities } from "@/app/data"; // Import the clusterFacilities array

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    // Simulate a 0.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Convert the slug param to number
    const clusterId = parseInt(params.slug);

    // Filter facilities where clusterId matches the slug
    const facilities = clusterFacilities.filter(
      (facility) => facility.clusterId === clusterId
    );

    if (facilities.length === 0) {
      return NextResponse.json(
        { error: "No facilities found for this cluster" },
        { status: 404 }
      );
    }

    return NextResponse.json({ facilities });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch facilities, ${error}` },
      { status: 500 }
    );
  }
}
