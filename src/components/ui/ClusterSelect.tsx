"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

interface ClusterFacilityItem {
  id: number;
  name: string;
  description: string;
  caption: string;
  imageFile: string;
  clusterId: number;
}

interface ClusterSelectProps {
  clusterName: string;
  siteplanDescription: string;
  siteplanImage: string;
  clusterFacilities: ClusterFacilityItem[];
}

const ClusterSelect: React.FC<ClusterSelectProps> = ({
  clusterName,
  siteplanDescription,
  siteplanImage,
  clusterFacilities = [],
}) => {
  const [isSelected, setIsSelected] = useState(true);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="py-10">
      <CustomContainer>
        <div className="mb-4">
          <h1 className="text-5xl font-bold mb-2">Learn More</h1>
          <p className="text-lg">Explore what cluster {clusterName} offers for your needs</p>
        </div>
        <div className="flex gap-3 mb-4">
          <div
            className={`cursor-pointer px-3 py-1 rounded-2xl text-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ${
              isSelected
                ? "bg-primary text-white"
                : "bg-secondary text-slate-200"
            }`}
            onClick={toggleSelection}
          >
            Facilities
          </div>
          <div
            className={`cursor-pointer px-3 py-1 rounded-2xl text-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ${
              !isSelected
                ? "bg-primary text-white"
                : "bg-secondary text-slate-200"
            }`}
            onClick={toggleSelection}
          >
            Site Plan
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isSelected ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h1 className="text-4xl font-bold mb-4">{clusterName} Gallery</h1>
              {clusterFacilities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
                  {clusterFacilities.map((image, index) => (
                    <GalleryCard
                      key={image.id}
                      index={index}
                      src={image.imageFile}
                      title={image.caption}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No images available in the gallery
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="location"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h1 className="text-4xl font-bold mb-2">Siteplan {clusterName}</h1>
              <p className="text-lg mb-4">{siteplanDescription}</p>
              <Image
                src={`${siteplanImage}`}
                alt="Mosque Location"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full md:w-[50%] h-auto object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </CustomContainer>
    </div>
  );
};

export default ClusterSelect;
