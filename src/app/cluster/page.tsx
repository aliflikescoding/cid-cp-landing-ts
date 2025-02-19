import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Clusters from "@/components/section/Clusters";
import Image from "next/image";
import TotalCard from "@/components/ui/TotalCard";

const AllClusters: React.FC = async () => {
  const [res1, res2] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/total-cluster`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/total-house-type`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    }),
  ]);

  if (!res1.ok || !res2.ok) {
    throw new Error("Failed to fetch data");
  }

  const [response1, response2] = await Promise.all([res1.json(), res2.json()]);

  const totalCluster: number = response1.totalClusters;
  const totalTypes: number = response2.totalHouseTypes;
  
  return (
    <>
      <div className="pt-12">
        <CustomContainer className="flex items-center">
          <div className="max-w-[50%] relative overflow-hidden">
            <Image
              src={`/bg-cluster.png`}
              alt="Background Image"
              height={543}
              width={800}
              className="w-full h-[543px] object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="ml-10">
            <h1 className="text-5xl font-bold">Our Clusters</h1>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <TotalCard title="Clusters" total={`${totalCluster}`} />
              <TotalCard title="House Types" total={`${totalTypes}`} />
            </div>
          </div>
        </CustomContainer>
      </div>
      <Clusters expanded={true} />
    </>
  );
};

export default AllClusters;
