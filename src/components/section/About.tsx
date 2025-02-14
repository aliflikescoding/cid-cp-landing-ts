import React from "react";
import CustomContainer from "../custom/CustomContainer";

const About: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-t-2xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-1"></div>

      {/* Content */}
      <CustomContainer className="relative z-10 py-5">
        <h1 className="text-5xl font-bold text-background">Real Estate</h1>
        <p className="mt-4 text-lg font-normal text-background max-w-[600px]">
          PT HK Realtindo is a subsidiary of PT Hutama Karya (Persero) engaged
          in the property sector. It was established on May 10, 2010, and has
          been developing H City Sawangan since 2018. The company has delivered
          various residential, office, and commercial area projects with modern
          and innovative concepts.
        </p>
      </CustomContainer>
    </div>
  );
};

export default About;
