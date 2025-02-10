import React from "react";
import NavLink from "./NavLink";
import NavListCluster from "./NavListCluster";
import NavListFacilities from "./NavListFacilities";
import { PopoverGroup } from "@headlessui/react";

interface clusterItem {
  id: number;
  name: string;
}

interface FacilityItem {
  id: number;
  title: string;
}

interface NavLinkProps {
  clusterNames: clusterItem[];
  facilityNames: FacilityItem[];
}

const NavLinks: React.FC<NavLinkProps> = ({ clusterNames, facilityNames }) => {
  return (
    <PopoverGroup>
      <div className="flex sm:flex-row text-sm flex-col items-center gap-4 xl:gap-7">
        <NavLink link="/">home</NavLink>
        <NavListCluster listItems={clusterNames} title="clusters" />
        <NavLink link="/location">location</NavLink>
        <NavListFacilities listItems={facilityNames} title="facilities" />
        <NavLink link="/blog">promotions & events</NavLink>
        <NavLink link="/virtual-tour">virtual tour</NavLink>
        <NavLink link="/contact">contact</NavLink>
      </div>
    </PopoverGroup>
  );
};

export default NavLinks;
