import React from "react";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Advantage from "@/components/section/Advantage";

const Page: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Advantage />
    </div>
  );
};

export default Page;
