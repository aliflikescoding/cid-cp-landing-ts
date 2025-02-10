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

const NavListCluster: React.FC<NavListProps> = ({ listItems, title }) => {
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
              className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out ${
                isActive ? "bg-primary" : "bg-text"
              } ${open ? "w-full" : "w-0"}`} // Explicitly use w-full and w-0
            ></span>
            <span
              className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-500 ease-in-out group-hover:w-full ${
                isActive ? "bg-primary" : "bg-text"
              }`}
            ></span>
          </PopoverButton>
          <PopoverPanel
            anchor="bottom start"
            transition
            className="flex origin-top flex-col font-poppins font-medium bg-background p-2 border-2 rounded-md text-text z-50 mt-2 transition duration-300 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <Link
              className="p-2 hover:bg-accent rounded-md transition duration-300 ease-in-out"
              href="/cluster"
            >
              All Clusters
            </Link>
            {listItems?.map((item) => (
              <Link
                className="p-2 hover:bg-accent rounded-md transition duration-300 ease-in-out"
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

export default NavListCluster;
