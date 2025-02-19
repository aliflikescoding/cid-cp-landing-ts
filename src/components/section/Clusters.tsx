import React from "react";
import CustomContainer from "../custom/CustomContainer";
import ProductCard from "../ui/ProductCard";

interface ClustersProp {
  expanded: boolean;
}

const Clusters: React.FC<ClustersProp> = ({ expanded }) => {
  return (
    <div className="py-20">
      <CustomContainer>
        <div className="mb-10">
          <h1 className="capitalize text-5xl font-bold">
            {expanded ? "Our clusters" : "Featured Clusters"}
          </h1>
          {!expanded && (
            <h4 className="text-xl font-normal mt-2">
              Our clusters that we recommend
            </h4>
          )}
        </div>
        <div className="grid grid-cols-3">
          
        </div>
      </CustomContainer>
    </div>
  );
};

export default Clusters;
