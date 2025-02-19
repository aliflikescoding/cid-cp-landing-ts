import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface ArrowLinkProps {
  link: string;
  title: string;
  className?: string;
  color?: string;
  bg?: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({
  link,
  title,
  className,
  color,
  bg,
}) => {
  return (
    <Link className={`group relative inline-block ${className}`} href={link}>
      <div
        className={`mt-auto flex items-center capitalize transition-all ease-in-out ${
          color ? `text-${color}` : "text-primary"
        }`}
      >
        {title}
        <FaArrowRightLong className="ml-2 transition-all group-hover:ml-3" />
      </div>
      <span
        className={`absolute left-0 bottom-0 w-0 h-[2px] ease-in-out transition-all duration-300 group-hover:w-full ${
          bg ? `bg-${bg}` : "bg-primary"
        }`}
      ></span>
    </Link>
  );
};

export default ArrowLink;
