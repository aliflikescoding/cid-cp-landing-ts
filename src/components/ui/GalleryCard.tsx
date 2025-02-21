"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface GalleryCardProps {
  index: number;
  src: string;
  title: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ index, src, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Effect to handle body scroll
  useEffect(() => {
    if (isExpanded) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Regular Card */}
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
          index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""
        } h-64`}
        onClick={toggleExpand}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={src}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Overlay with black background and 45% opacity */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {/* Expanded View Modal */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={toggleExpand}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-lg overflow-hidden">
            <div className="relative w-full h-[80vh]">
              <Image
                src={src}
                alt={title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="absolute top-4 right-4">
              <button
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-200"
                onClick={toggleExpand}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
