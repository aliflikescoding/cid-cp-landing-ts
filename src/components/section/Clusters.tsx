import React from "react";
import CustomContainer from "../custom/CustomContainer";
import ProductCard from "../ui/ProductCard";

interface ClustersProp {
  expanded: boolean;
}

interface ClusterItem {
  id: number;
  name: string;
  description: string;
  imageFile: string;
}

const Clusters: React.FC<ClustersProp> = async ({ expanded }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cluster-preview`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const clusters: ClusterItem[] = data.clusterPreview;
  const displayClusters = expanded ? clusters : clusters.slice(0, 3);

  return (
    <div className="py-20">
      <CustomContainer>
        <div className="mb-10">
          <h1 className="capitalize text-5xl font-bold">
            {expanded ? "Our clusters" : "Featured Clusters"}
          </h1>
          {!expanded && (
            <h4 className="text-xl font-normal mt-2">
              Our clusters that we recommend
            </h4>
          )}
        </div>
        <div className="grid grid-cols-3 gap-6">
          {displayClusters.map((cluster) => (
            <ProductCard
              key={cluster?.id}
              title={cluster?.name}
              description={cluster?.description}
              imageLink={cluster.imageFile}
              link={`/cluster/${cluster?.id}`}
            />
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default Clusters;
