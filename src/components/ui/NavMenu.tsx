"use state";

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, toggleMenu, isScrolled }) => {
  return (
    <>
      <RxHamburgerMenu className="text-2xl cursor-pointer" />
      {isOpen && isScrolled && (
        <div className="absolute top-0 left-0 z-[100] w-full h-[200vh]">
          <div
            onClick={toggleMenu}
            className="bg-black absolute top-0 left-0 opacity-70 w-full h-[200vh]"
          ></div>
        </div>
      )}
    </>
  );
};

export default NavMenu;
