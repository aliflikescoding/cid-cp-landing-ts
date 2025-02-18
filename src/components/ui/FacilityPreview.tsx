"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowLink from "./ArrowLink";

interface Facility {
  id: number;
  title: string;
  description: string;
  locationImageFile: string;
}

interface FacilityPreviewProps {
  facilities: Facility[];
}

const FacilityPreview: React.FC<FacilityPreviewProps> = ({ facilities }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility>(
    facilities[0]
  );

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-5">Facilities of Realestate</h1>
          <div className="flex gap-3 mb-4">
            {facilities.map((facility) => (
              <button
                key={facility.id}
                className={`px-4 py-2 text-normal hover:bg-primary hover:text-white transition-all duration-300 ease-in-out font-semibold rounded-2xl ${
                  selectedFacility.id === facility.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-slate-200"
                }`}
                onClick={() => setSelectedFacility(facility)}
              >
                {facility.title}
              </button>
            ))}
          </div>
          <p className="text-lg font-normal mt-6 mb-9">
            {selectedFacility.description}
          </p>
          <ArrowLink
            title="read more"
            link={`/facility/${selectedFacility.id}`}
          />
        </div>
        <div>
          <Image
            src={selectedFacility.locationImageFile}
            alt={`image of ${selectedFacility.title}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FacilityPreview;
