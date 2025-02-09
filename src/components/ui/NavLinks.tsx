import React from "react";
import NavLink from "./NavLink";
import NavList from "./NavList";

interface ListItem {
  id: number;
  name: string;
}

interface NavLinkProps {
  clusterNames: ListItem[];
}

const NavLinks: React.FC<NavLinkProps> = ({ clusterNames }) => {
  return (
    <div className="flex sm:flex-row text-sm flex-col items-center gap-4 xl:gap-7">
      <NavLink link="/">home</NavLink>
      <NavList listItems={clusterNames} title="cluster" />
      <NavLink link="/location">location</NavLink>
      <NavLink link="/facilities">facilities</NavLink>
      <NavLink link="/blog">promotions & events</NavLink>
      <NavLink link="/virtual-tour">virtual tour</NavLink>
      <NavLink link="/contact">contact</NavLink>
    </div>
  );
};

export default NavLinks;
