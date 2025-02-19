import React from "react";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Advantage from "@/components/section/Advantage";
import HomeFacility from "@/components/section/HomeFacility";
import Location from "@/components/section/Location";
import Clusters from "@/components/section/Clusters";

const Page: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Advantage />
      <HomeFacility />
      <Location />
      <Clusters expanded={false} />
    </div>
  );
};

export default Page;
