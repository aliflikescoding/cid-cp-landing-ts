import React from "react";
import NavBar from "@/components/ui/NavBar";

interface ListItem {
  id: number;
  name: string;
}

const Header: React.FC = async () => {
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cluster-names`,
    { cache: "no-store" }
  );

  if (!res1.ok) {
    console.error("Failed to fetch company data");
    return null;
  }

  const response = await res1.json();
  const clusterNames: ListItem[] = response.clusterNames;

  return (
    <>
      <NavBar clusterNames={clusterNames} />
    </>
  );
};

export default Header;