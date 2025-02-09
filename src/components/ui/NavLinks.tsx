import React from "react";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  return (
    <div className="flex sm:flex-row text-sm flex-col items-center gap-4 xl:gap-7">
      <NavLink link="/">home</NavLink>
      <NavLink link="/cluster">cluster</NavLink>
      <NavLink link="/location">location</NavLink>
      <NavLink link="/facilities">facilities</NavLink>
      <NavLink link="/blog">promotions & events</NavLink>
      <NavLink link="/virtual-tour">virtual tour</NavLink>
      <NavLink link="/contact">contact</NavLink>
    </div>
  );
};

export default NavLinks;