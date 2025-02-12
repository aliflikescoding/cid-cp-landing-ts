"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type CompanyIcon = {
  id: number;
  companyIcon: string;
};

interface ConveyerBeltProps {
  title: string;
  logos: CompanyIcon[];
}

const ConveyerBelt: React.FC<ConveyerBeltProps> = ({ title, logos }) => {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-6">
      <h2 className="text-center text-gray-600">{title}</h2>
      <div className="relative w-full flex justify-center mt-4">
        <motion.div
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 100, // Adjust for natural scrolling speed
            repeatType: "loop",
            repeatDelay: 0, // Pause for 3 seconds before restarting
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex flex-none gap-16 pr-16"
        >
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex items-center">
              <Image
                src={logo.companyIcon}
                alt="Collab Company Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-24 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ConveyerBelt;
