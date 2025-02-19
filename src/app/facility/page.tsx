import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Facility from "@/components/section/Facility";
import Image from "next/image";
import TotalCard from "@/components/ui/TotalCard";

const AllClusters: React.FC = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/total-facility`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const totalFacility: number = data.totalFacility;

  return (
    <>
      <div className="pt-12">
        <CustomContainer className="flex md:flex-row flex-col-reverse items-center">
          <div className="md:max-w-[50%] relative overflow-hidden">
            <Image
              src={`/bg-facility.jpg`}
              alt="Background Image"
              height={543}
              width={800}
              className="w-full h-[343px] md:h-[543px] object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="md:ml-10 mb-6 md:mb-0">
            <h1 className="text-5xl font-bold">Our Facilities</h1>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <TotalCard title="Facilities" total={`${totalFacility}`} />
            </div>
          </div>
        </CustomContainer>
      </div>
      <Facility expanded={true} />
    </>
  );
};

export default AllClusters;
