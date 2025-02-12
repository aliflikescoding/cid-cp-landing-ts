"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomContainer from "@/components/custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/ui/NavLinks";
import NavMenu from "./NavMenu";

interface clusterItem {
  id: number;
  name: string;
}

interface FacilityItem {
  id: number;
  title: string;
}

interface NavBarProps {
  clusterNames: clusterItem[];
  facilityNames: FacilityItem[];
}

const NavBar: React.FC<NavBarProps> = ({ clusterNames, facilityNames }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`font-poppins transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-3 w-full z-50"
            : "relative"
        } ${isOpen && "p-4"}`}
      >
        <CustomContainer
          className={`flex justify-between transition-all duration-300 ease-in-out items-center ${
            isOpen ? "bg-accent rounded-xl px-4 py-3" : "py-4"
          } ${
            isScrolled && !isOpen ? "bg-background shadow-lg rounded-xl" : ""
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
          <div className="hidden lg:block">
            <NavLinks
              clusterNames={clusterNames}
              facilityNames={facilityNames}
            />
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleMenu}>
              <NavMenu
                isScrolled={isScrolled}
                toggleMenu={toggleMenu}
                isOpen={isOpen}
              />
            </button>
          </div>
        </CustomContainer>
      </div>
      {isOpen && !isScrolled && (
        <div className="absolute top-0 left-0 z-[100] w-full h-[200vh]">
          <div
            onClick={toggleMenu}
            className="bg-black absolute top-0 left-0 opacity-70 w-full h-[200vh]"
          ></div>
        </div>
      )}
      {isOpen && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`bg-background fixed bottom-0 z-[150] w-full h-fit shadow-lg p-6 text-xl rounded-t-3xl drop-shadow-md`}
        >
          <div className="flex justify-center items-center">
            <div className="w-[25%] h-[10px] rounded-full bg-slate-400 drop-shadow-md"></div>
          </div>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
