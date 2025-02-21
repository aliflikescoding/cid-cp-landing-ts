"use client";

import React, { useState, useEffect } from "react";
import CustomContainer from "@/components/custom/CustomContainer";

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
        <h1 className="text-5xl font-semibold">Nearby Establishments</h1>
        <div className="flex flex-wrap gap-2 mt-4">
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
              <div className="text-xl font-semibold capitalize">
                {item.durationMinutes} Mins
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          {selectedPlaces.map((place) => (
            <div key={place.id} className="mb-2">
              {place.name}
            </div>
          ))}
        </div>

        {selectedPlaces.length === 0 && (
          <div className="text-center mt-8">
            No establishments found for this time distance
          </div>
        )}
      </CustomContainer>
    </div>
  );
};

export default LocationSelect;
