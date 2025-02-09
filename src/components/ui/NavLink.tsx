"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: ReactNode;
  link: string;
};

const NavLink: React.FC<NavLinkProps> = ({ children, link }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`relative text-sm capitalize font-semibold font-poppins leading-[175.7%] group ${
        isActive ? "text-primary" : "text-text"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-500 ease-in-out group-hover:w-full ${
          isActive ? "bg-primary" : "bg-text"
        }`}
      ></span>
    </Link>
  );
};

export default NavLink;
