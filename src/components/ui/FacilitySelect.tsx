"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";

const FacilitySelect: React.FC = () => {
  const [isSelected, setIsSelected] = useState(true);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="py-10">
      <CustomContainer>
        <div className="flex gap-3 mb-4">
          <div
            className={`cursor-pointer px-3 py-1 rounded-2xl text-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ${
              isSelected
                ? "bg-primary text-white"
                : "bg-secondary text-slate-200"
            }`}
            onClick={toggleSelection}
          >
            Details
          </div>
          <div
            className={`cursor-pointer px-3 py-1 rounded-2xl text-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ${
              !isSelected
                ? "bg-primary text-white"
                : "bg-secondary text-slate-200"
            }`}
            onClick={toggleSelection}
          >
            Location
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isSelected ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Added ease-in-out
            >
              <h1 className="text-4xl font-bold">Mosque Gallery</h1>
            </motion.div>
          ) : (
            <motion.div
              key="location"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Added ease-in-out
            >
              <h1 className="text-4xl font-bold mb-4">Mosque Location</h1>
              <Image
                src="/facilityLocation.png"
                alt="Mosque Location"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[50%] h-auto object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CustomContainer>
    </div>
  );
};

export default FacilitySelect;
