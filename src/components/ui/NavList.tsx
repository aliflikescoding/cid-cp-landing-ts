"use client";

import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ListItem {
  id: number;
  name: string;
}

interface NavListProps {
  listItems: ListItem[];
  title: string;
}

const NavList: React.FC<NavListProps> = ({ listItems, title }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/cluster");

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            className={`text-sm flex gap-2 items-center capitalize font-semibold font-poppins leading-[175.7%] group relative ${
              isActive ? "text-primary" : "text-text"
            } focus:outline-none focus:ring-0 transition-all duration-300 ease-in-out`} // Added transition classes
          >
            {title} {open ? <FaChevronUp /> : <FaChevronDown />}
            <span
              className={`absolute left-0 bottom-0 w-${
                open ? "full" : "0"
              } h-[2px] transition-all duration-300 ease-in-out ${
                isActive ? "bg-primary" : "bg-text"
              }`}
            ></span>
          </PopoverButton>
          <PopoverPanel
            anchor="top"
            className="flex flex-col font-poppins font-medium bg-background p-2 border-2 rounded-md text-text z-50 mt-2 transition-all duration-300 ease-in-out transform origin-top translate-y-0"
          >
            {listItems?.map((item) => (
              <Link
                className="p-2 hover:bg-accent rounded-md transition-all duration-300 ease-in-out"
                key={item?.id}
                href={`/cluster/${item.id}`}
              >
                {item.name}
              </Link>
            ))}
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};

export default NavList;
