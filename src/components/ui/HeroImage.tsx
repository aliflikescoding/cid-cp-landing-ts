import React from "react";
import Image from "next/image";
import { HouseSvg, SquareSvg } from "@/components/assets/CustomSvg";

interface HeroImageProps {
  image1link: string;
  image2link: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ image1link, image2link }) => {
  return (
    <div className="relative w-full lg:max-w-[50%] h-[200%] lg:h-auto">
      {/* Container with height double of the non-absolute image on mobile */}
      <div className="relative mt-5 h-full">
        {/* First standard positioned image (Non-absolute on mobile) */}
        <div className=" lg:hidden relative pb-[75%] lg:pb-0 w-[50%] lg:w-auto">
          <Image
            src={image1link}
            alt="Real estate 2"
            width={0}
            height={0}
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="h-auto w-full rounded-lg shadow-lg z-10"
          />
        </div>

        {/* Spacer to make the container height 2x the first image on mobile */}
        <div className="h-[130%] lg:h-0 block lg:hidden"></div>

        {/* Absolutely positioned images for larger screens */}
        <Image
          src={image2link}
          alt="Real estate 1"
          width={0}
          height={0}
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="absolute h-auto w-[50%] lg:w-auto z-30 lg:z-10 lg:min-w-[340px] bottom-[20%] right-10 lg:left-64 rounded-lg shadow-lg"
        />

        <Image
          src={image1link}
          alt="Real estate 2"
          width={0}
          height={0}
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="lg:absolute h-auto lg:w-auto z-10 lg:z-30 lg:min-w-[340px] lg:-top-40 rounded-lg shadow-lg hidden lg:block"
        />

        {/* SVG Elements */}
        <SquareSvg className="block lg:hidden absolute h-auto w-[50%] -z-10 left-[20%] top-[25%] drop-shadow-lg" />
        <SquareSvg className="hidden lg:block absolute h-auto w-auto top-24 -left-7 drop-shadow-lg" />
        <HouseSvg className="hidden lg:block absolute h-auto w-auto -right-4 top-[-25rem] drop-shadow-lg" />
      </div>
    </div>
  );
};

export default HeroImage;
