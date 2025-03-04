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
  try {
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

    if (!res1.ok) {
      throw new Error(`Failed to fetch facility data: ${res1.statusText}`);
    }

    const response1 = await res1.json();
    const facility: Facility = response1.facility;

    // Even if res2 fails, we can still show the facility with empty gallery
    let facilityGallery: FacilityGalleryItem[] = [];

    if (res2.ok) {
      const response2 = await res2.json();
      facilityGallery = response2.facilityGaleries || [];
    }

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

                <div className="hidden sm:block absolute z-20 bg-background max-w-[566px] bottom-9 right-9 p-4 text-right rounded-2xl">
                  <h1 className="text-3xl font-bold mb-4">{facility.title}</h1>
                  <p className="text-sm">{facility.description}</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between sm:justify-center items-start text-background p-4 sm:p-9">
                  <div>
                    <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">
                      {facility.title}
                    </h1>
                    <p className="text-lg sm:text-xl font-normal">
                      {facility.subtitle}
                    </p>
                  </div>
                  <div className="block sm:hidden text-text bg-background max-w-[566px] bottom-9 right-9 p-2 text-left rounded-2xl">
                    <h1 className="text-3xl font-bold mb-2">
                      {facility.title}
                    </h1>
                    <p className="text-sm">{facility.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </CustomContainer>
        </div>
        <FacilitySelect
          title={facility.title}
          facilityGallery={facilityGallery}
        />
      </>
    );
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

export default FacilityPageRoute;
