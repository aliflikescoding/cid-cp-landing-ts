import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Clusters from "@/components/section/Clusters";
import Image from "next/image";

const AllClusters: React.FC = async () => {
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
            <h4 className="text-xl font-base opacity-90 mt-4">Cluster</h4>
          </div>
        </CustomContainer>
      </div>
      <Clusters expanded={true} />
    </>
  );
};

export default AllClusters;
