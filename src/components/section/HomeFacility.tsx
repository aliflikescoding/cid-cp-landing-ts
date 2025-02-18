import React from "react";
import CustomContainer from "../custom/CustomContainer";
import FacilityPreview from "../ui/FacilityPreview";

interface FacilityPreviewItem {
  id: number;
  title: string;
  description: string;
  locationImageFile: string;
}

const HomeFacility: React.FC = async () => {
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

  const facitliyPreviews: FacilityPreviewItem[] = data.facilitiesPreview;

  return (
    <div className="py-28">
      <CustomContainer>
        <FacilityPreview facilities={facitliyPreviews} />
      </CustomContainer>
    </div>
  );
};

export default HomeFacility;
