import React from "react";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";

const Page: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <div className="bg-slate-400 w-full h-screen"></div>
    </div>
  );
};

export default Page;
