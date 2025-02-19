"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="relative overflow-hidden w-full group h-[550px] transition-all duration-300 ease-in-out cursor-pointer rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/locationBackground.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full transition-all duration-100 ease-in-out group-hover:bg-secondary bg-text opacity-40 group-hover:opacity-75 z-1"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full p-4 text-background">
        {/* Arrow icon at top right */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-4 right-4"
            >
              <FaArrowUpRightFromSquare className="text-xl" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content wrapper with absolute positioning */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl font-semibold">{title}</h1>

          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-sm mt-2"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
