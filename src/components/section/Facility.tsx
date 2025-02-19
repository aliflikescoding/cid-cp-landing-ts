import React from "react";
import CustomContainer from "../custom/CustomContainer";
import ProductCard from "../ui/ProductCard";
import ArrowLink from "../ui/ArrowLink";

interface FacilityProp {
  expanded: boolean;
}

interface FacilityItem {
  id: number;
  title: string;
  description: string;
  locationImageFile: string;
}

const Facility: React.FC<FacilityProp> = async ({ expanded }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/facility-preview`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const facility: FacilityItem[] = data.facilitiesPreview;
  const displayFacility = expanded ? facility : facility.slice(0, 3);

  return (
    <div className={`${expanded ? "py-12" : "py-20"}`}>
      <CustomContainer>
        <div className={`${expanded ? "mb-5" : "mb-10"}`}>
          <h1
            className={`capitalize font-bold ${
              expanded ? "text-4xl" : "text-5xl"
            }`}
          >
            {expanded ? "All of our facilities" : "Featured Facilities"}
          </h1>
          {!expanded && (
            <h4 className="text-xl font-normal mt-2">
              Some of our facilities here.
            </h4>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayFacility.map((cluster) => (
            <ProductCard
              key={cluster?.id}
              title={cluster?.title}
              description={cluster?.description}
              imageLink={cluster.locationImageFile}
              link={`/facility/${cluster?.id}`}
            />
          ))}
        </div>
        {!expanded && (
          <ArrowLink
            className="text-xl mt-10"
            link="/facility"
            title="see all facilities"
          />
        )}
      </CustomContainer>
    </div>
  );
};

export default Facility;
