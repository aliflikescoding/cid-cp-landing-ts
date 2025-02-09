import React, { ReactNode } from "react";

interface CustomContainerProps {
  children: ReactNode; // ReactNode is a type for anything that can be rendered in React (e.g., JSX, strings, numbers, etc.)
  className?: string; // Optional className prop
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`max-w-[1360px] mx-auto px-5 ${className}`}>{children}</div>
  );
};

export default CustomContainer;
