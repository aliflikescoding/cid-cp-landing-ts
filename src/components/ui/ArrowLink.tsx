import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface ArrowLinkProps {
  link: string;
  title: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ link, title }) => {
  return (
    <Link className="group relative inline-block text-lg" href={link}>
      <div className="text-primary mt-auto flex items-center capitalize transition-all ease-in-out">
        {title}
        <FaArrowRightLong className="ml-2 transition-all group-hover:ml-3" />
      </div>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default ArrowLink;
