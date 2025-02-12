import React from "react";
import Image from "next/image";
import { HouseSvg, SquareSvg } from "@/components/assets/CustomSvg";

interface HeroImageProps {
  image1link: string;
  image2link: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ image1link, image2link }) => {
  return (
    <div className="relative w-full xl:max-w-[50%]">
      {/* First Image (Top Left) */}
      <div className="relative">
        <Image
          src={image2link}
          alt="Real estate 1"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute h-auto w-auto z-10 min-w-[340px] left-64 rounded-lg shadow-lg"
        />

        {/* Second Image (Bottom Right) */}
        <Image
          src={image1link}
          alt="Real estate 2"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute h-auto w-auto z-30 min-w-[340px] -top-40 rounded-lg shadow-lg"
        />
        <SquareSvg className="absolute h-auto w-auto top-24 -left-7 drop-shadow-lg" />
        <HouseSvg className="absolute h-auto w-auto -right-4 top-[-25rem] drop-shadow-lg" />
      </div>
    </div>
  );
};

export default HeroImage;
