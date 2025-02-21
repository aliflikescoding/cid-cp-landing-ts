import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Image from "next/image";
import FacilitySelect from "@/components/ui/FacilitySelect";

type Props = {
  params: {
    slug: string;
  };
};

interface Facility {
  id: number;
  title: string;
  description: string;
  locationImageFile: string;
  subtitle: string;
  slogan: string;
}

interface FacilityGalleryItem {
  id: number;
  caption: string;
  locationImageFile: string;
}

const FacilityPageRoute = async ({ params }: Props) => {
  const [res1, res2] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/facility/${params.slug}`,
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/facility-galleries/${params.slug}`,
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    ),
  ]);

  if (!res1.ok || !res2.ok) {
    throw new Error("Failed to fetch data");
  }

  const [response1, response2] = await Promise.all([res1.json(), res2.json()]);

  const facility: Facility = response1.facility;
  const facilityGallery: FacilityGalleryItem[] = response2.facilityGaleries;

  return (
    <>
      <div>
        <CustomContainer>
          <div className="py-10">
            {/* Container for the background image and content */}
            <div className="relative w-full h-[550px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <Image
                src={facility.locationImageFile}
                alt={facility.title}
                fill // This makes the image fill the parent container
                sizes="100vw"
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-45"></div>
              {/* Content */}

              <div className="absolute z-20 bg-background max-w-[566px] bottom-9 right-9 p-4 text-right rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">{facility.title}</h1>
                <p className="text-sm">{facility.description}</p>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start text-background p-9">
                <h1 className="text-5xl font-bold mb-4">{facility.title}</h1>
                <p className="text-xl font-normal">{facility.subtitle}</p>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
      <FacilitySelect
        title={`${facility.title}`}
        facilityGallery={facilityGallery}
      />
    </>
  );
};

export default FacilityPageRoute;
