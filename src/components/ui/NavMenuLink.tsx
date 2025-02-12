import React from "react";
import Link from "next/link";

interface NavMenuLinkProps {
  text: string;
  route: string;
  onClick: () => void;
}

const NavMenuLink: React.FC<NavMenuLinkProps> = ({ text, route, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={route}
      className="py-2 sm:py-4 px-4 block font-semibold sm:font-bold active:bg-accent cursor-pointer bg-slate-200 transition-all ease-in-out duration-300 mt-4 w-full rounded-xl text-primary"
    >
      {text}
    </Link>
  );
};

export default NavMenuLink;
