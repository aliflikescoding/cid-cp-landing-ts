import React from "react";
import CustomContainer from "../custom/CustomContainer";

type HeroData = {
  title: string;
  description: string;
};

const Hero: React.FC = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hero`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch hero data");
      return null;
    }

    const { hero }: { hero: HeroData } = await res.json();

    return (
      <div className="font-poppins py-[30vh]">
        <CustomContainer>
          <div>
            <h1 className="text-5xl font-bold">{hero.title}</h1>
            <p className="text-xl max-w-[620px] mt-4 mb-8">
              {hero.description}
            </p>
          </div>
        </CustomContainer>
      </div>
    );
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
};

export default Hero;
