"use client";

import React, { useState, useEffect } from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/ui/NavLinks";

interface ListItem {
  id: number;
  name: string;
}

interface NavBarProps {
  clusterNames: ListItem[];
}

const NavBar: React.FC<NavBarProps> = ({ clusterNames }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`font-poppins transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-3 w-full z-50"
          : "relative"
      }`}
    >
      <CustomContainer
        className={`flex justify-between items-center py-4  ${
          isScrolled && "bg-white shadow-lg rounded-xl"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="realestate logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto max-w-[45px]"
          />
          <Image
            src="/logo-text.svg"
            alt="realestate logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-full max-w-[135px]"
          />
        </Link>
        <NavLinks clusterNames={clusterNames} />
      </CustomContainer>
    </div>
  );
};

export default NavBar;
