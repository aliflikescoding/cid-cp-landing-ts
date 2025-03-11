import React from "react";
import CustomContainer from "../custom/CustomContainer";
import { Button } from "@headlessui/react";
import Link from "next/link";
import HeroImage from "../ui/HeroImage";
import ConveyerBelt from "../ui/ConveyerBelt";

type HeroData = {
  title: string;
  description: string;
  image1: string;
  image2: string;
};

type CompanyIcon = {
  id: number;
  companyIcon: string;
};

const Hero: React.FC = async () => {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hero`, {
        cache: "force-cache",
        next: { revalidate: 60 },
      }),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company-logos`, {
        cache: "force-cache",
        next: { revalidate: 60 },
      }),
    ]);

    if (!res1.ok || !res2.ok) {
      throw new Error("Failed to fetch data");
    }

    const [response1, response2] = await Promise.all([
      res1.json(),
      res2.json(),
    ]);

    const hero: HeroData = response1.hero;
    const logos: CompanyIcon[] = response2.companyLogos;

    return (
      <>
        <div className="font-poppins pt-[15vh] lg:py-[30vh]">
          <CustomContainer className="flex lg:flex-row flex-col justify-between items-center">
            <div className="lg:mr-12">
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
        <ConveyerBelt title="companies that we've worked with" logos={logos} />
      </>
    );
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
};

export default Hero;
