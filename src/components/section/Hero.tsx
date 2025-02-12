import React from "react";
import CustomContainer from "../custom/CustomContainer";
import { Button } from "@headlessui/react";
import Link from "next/link";
import HeroImage from "../ui/HeroImage";

type HeroData = {
  title: string;
  description: string;
  image1: string;
  image2: string;
};

const Hero: React.FC = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hero`,
      {
        cache: "force-cache", // This is the default, so you can also omit this line
        next: { revalidate: 3600 }, // Revalidate the data every hour (3600 seconds)
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch hero data");
      return null;
    }

    const { hero }: { hero: HeroData } = await res.json();

    return (
      <div className="font-poppins py-[30vh]">
        <CustomContainer className="flex xl:flex-row flex-col justify-between items-center">
          <div className="xl:mr-12">
            <h1 className="text-5xl font-bold capitalize">{hero.title}</h1>
            <p className="text-xl max-w-[620px] mt-8 mb-16">
              {hero.description}
            </p>
            <div className="flex gap-4">
              <Link href="/cluster">
                <Button className="rounded-md bg-primary py-4 px-7 text-md font-semibold text-white transition ease-in-out duration-300 data-[hover]:bg-secondary data-[active]:bg-accent">
                  See Clusters
                </Button>
              </Link>
              <Button className="rounded-md bg-none border-2 border-secondary py-4 px-7 text-md font-semibold text-secondary transition ease-in-out duration-300 data-[hover]:border-primary data-[hover]:text-primary data-[active]:border-accent data-[active]:text-accent">
                Get Brochure
              </Button>
            </div>
          </div>
          <HeroImage image1link={hero.image1} image2link={hero.image2} />
        </CustomContainer>
      </div>
    );
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
};

export default Hero;
