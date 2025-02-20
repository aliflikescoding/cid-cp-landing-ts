import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";

interface HomeVirtualTour {
  name: string;
  slogan: string;
  mediaFile: string;
  caption: string;
}

const HomeTour: React.FC = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home-virtual-tour`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const virtual: HomeVirtualTour = data.homeVirtualTour;

  return (
    <div className="py-10">
      <CustomContainer>
        <div>
          <h3 className="text-2xl font-semibold opacity-90">
            {virtual.slogan}
          </h3>
          <h1 className="text-5xl font-semibold py-4">Virtual Tour</h1>
          <h3 className="text-2xl font-semibold opacity-90">{virtual.name}</h3>
        </div>
        <div className="w-full mt-14">
          <Image
            src={virtual.mediaFile}
            alt={virtual.caption}
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-auto lg:h-[543px] rounded-2xl"
          />
        </div>
      </CustomContainer>
    </div>
  );
};

export default HomeTour;
