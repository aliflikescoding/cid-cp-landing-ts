import React from "react";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Advantage from "@/components/section/Advantage";
import HomeFacility from "@/components/section/HomeFacility";

const Page: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Advantage />
      <HomeFacility />
    </div>
  );
};

export default Page;
