import React from "react";
import Image from "next/image";

interface HeroImageProps {
  image1link: string;
  image2link: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ image1link, image2link }) => {
  return (
    <div className="relative w-full pl-12 max-w-[50%]">
      {/* First Image (Top Left) */}
      <Image
        src={image2link}
        alt="Real estate 1"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute h-auto w-auto z-10 left-64 rounded-lg shadow-lg"
      />

      {/* Second Image (Bottom Right) */}
      <Image
        src={image1link}
        alt="Real estate 2"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute h-auto w-auto z-30 -top-40 rounded-lg shadow-lg"
      />

      <Image
        src={"/square.svg"}
        alt="Real estate 2"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute h-auto w-auto top-24 -left-7"
      />

      <Image
        src={"/house.svg"}
        alt="Real estate 2"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute h-auto w-auto max-w-[350px] -right-4 top-[-150%]"
      />
    </div>
  );
};

export default HeroImage;
