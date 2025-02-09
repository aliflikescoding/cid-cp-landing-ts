import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";

const FooterLoading: React.FC = () => {
  return (
    <div className="bg-secondary py-14 md:py-20 text-background font-poppins">
      <CustomContainer>
        {/* Divider Skeleton */}
        <div className="h-[1px] w-full bg-gray-500 mb-6 max-w-[85%] mx-auto opacity-50"></div>

        {/* Top section skeleton */}
        <div className="flex items-center flex-col gap-7 lg:gap-0 lg:flex-row justify-between mb-10">
          {/* Logo skeleton */}
          <div className="flex items-center gap-2">
            <div className="bg-gray-500 w-[35px] h-[35px] rounded" />
            <div className="bg-gray-500 w-[125px] h-[20px] rounded" />
          </div>

          {/* Links skeleton */}
          <div className="flex sm:flex-row flex-col items-center gap-4 xl:gap-7">
            {[...Array(7)].map((_, index: number) => (
              <div key={index} className="bg-gray-500 w-20 h-5 rounded" />
            ))}
          </div>

          {/* Social media icons skeleton */}
          <div className="flex gap-4 text-2xl">
            {[...Array(5)].map((_, index: number) => (
              <div key={index} className="bg-gray-500 w-8 h-8 rounded-full" />
            ))}
          </div>
        </div>

        {/* Bottom section skeleton */}
        <div className="flex flex-wrap-reverse gap-7 justify-between items-center text-sm">
          <div className="bg-gray-500 w-40 h-5 rounded" />
          <div className="bg-gray-500 w-60 h-5 rounded" />
          <div className="bg-gray-500 w-80 h-12 rounded" />
        </div>
      </CustomContainer>
    </div>
  );
};

export default FooterLoading;
