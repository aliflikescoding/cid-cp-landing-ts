"use client";

import React, { useState, useEffect } from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCard from "@/components/ui/GalleryCard";

interface StrategicPlace {
  id: number;
  name: string;
  timeDistanceId: number;
  imageFile: string;
}

interface TimeDictanceItem {
  id: number;
  durationMinutes: string;
  places: StrategicPlace[];
}

interface LocationSelectProps {
  timeDistanceItems: TimeDictanceItem[];
}

const LocationSelect: React.FC<LocationSelectProps> = ({
  timeDistanceItems = [],
}) => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [selectedPlaces, setSelectedPlaces] = useState<StrategicPlace[]>([]);

  useEffect(() => {
    const selected = timeDistanceItems?.find((item) => item.id === selectedId);
    setSelectedPlaces(selected?.places || []);
  }, [selectedId, timeDistanceItems]);

  if (!timeDistanceItems?.length) {
    return (
      <div className="py-10">
        <CustomContainer>
          <div className="text-center text-slate-200">
            Loading establishments...
          </div>
        </CustomContainer>
      </div>
    );
  }

  return (
    <div className="py-10">
      <CustomContainer>
        <h1 className="text-3xl sm:text-5xl font-semibold">Nearby Establishments</h1>
        <div className="flex flex-wrap gap-2 mt-4 mb-12">
          {timeDistanceItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`flex justify-between rounded-2xl px-2 py-2 cursor-pointer transition-all duration-300 ease-in-out
                ${
                  selectedId === item.id
                    ? "bg-primary text-background"
                    : "bg-secondary text-slate-200 hover:bg-primary hover:text-background"
                }`}
            >
              <div className="text:lg sm:text-xl font-semibold capitalize">
                {item.durationMinutes} Mins
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`gallery-content-${selectedId}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {selectedPlaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
                {selectedPlaces.map((place, index) => (
                  <GalleryCard
                    key={place.id}
                    index={index}
                    src={place.imageFile}
                    title={place.name}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No images available in the gallery
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </CustomContainer>
    </div>
  );
};

export default LocationSelect;
