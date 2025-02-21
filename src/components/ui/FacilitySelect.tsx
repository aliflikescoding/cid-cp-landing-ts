"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

interface FacilityGalleryItem {
  id: number;
  caption: string;
  locationImageFile: string;
}

interface FacilitySelectProps {
  title: string;
  facilityGallery: FacilityGalleryItem[];
}

const FacilitySelect: React.FC<FacilitySelectProps> = ({
  title,
  facilityGallery,
}) => {
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
              <h1 className="text-4xl font-bold mb-4">{title} Gallery</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
                {facilityGallery.map((image, index) => (
                  <GalleryCard
                    key={image.id}
                    index={index}
                    src={image.locationImageFile}
                    title={image.caption}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="location"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Added ease-in-out
            >
              <h1 className="text-4xl font-bold mb-4">{title} Location</h1>
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
