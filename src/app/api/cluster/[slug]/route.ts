// facility/[slug]/route.ts
import { NextResponse } from "next/server";
import { cluster as clusters } from "@/app/data"; // Renamed to avoid conflict

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    // Simulate a 0.5-second delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Convert the slug param to number and find matching cluster
    const clusterId = parseInt(params.slug);
    const cluster = clusters.find((c) => c.id === clusterId); // Use the renamed variable

    if (!cluster) {
      return NextResponse.json({ error: "Cluster not found" }, { status: 404 });
    }

    return NextResponse.json({ cluster });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch cluster, ${error}` },
      { status: 500 }
    );
  }
}
