import React from "react";
import NavBar from "@/components/ui/NavBar";

interface clusterItem {
  id: number;
  name: string;
}

interface FacilityItem {
  id: number;
  title: string;
}

const Header: React.FC = async () => {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cluster-names`, {
        cache: "force-cache", // This is the default, so you can also omit this line
        next: { revalidate: 60 }, // Revalidate the data every hour (3600 seconds)
      }),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/facility-names`, {
        cache: "force-cache", // This is the default, so you can also omit this line
        next: { revalidate: 60 }, // Revalidate the data every hour (3600 seconds)
      }),
    ]);

    if (!res1.ok || !res2.ok) {
      throw new Error("Failed to fetch data");
    }

    const [response1, response2] = await Promise.all([
      res1.json(),
      res2.json(),
    ]);

    const clusterNames: clusterItem[] = response1.clusterNames;
    const facilityNames: FacilityItem[] = response2.facilityNames;

    return (
      <>
        <NavBar clusterNames={clusterNames} facilityNames={facilityNames} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default Header;
