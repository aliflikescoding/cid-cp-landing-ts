import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import IconCard from "../ui/IconCard";

interface AdvantageData {
  advantage: string;
  explanation: string;
  image: string;
  backgroundImage: string;
}

type AdvantageCardItem = {
  id: number;
  advantage: string;
  explanation: string;
  iconFile: string;
};

const Advantage: React.FC = async () => {
  const [res1, res2] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/advantages`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/advantage-card`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    }),
  ]);

  if (!res1.ok || !res2.ok) {
    throw new Error("Failed to fetch data");
  }

  const [response1, response2] = await Promise.all([res1.json(), res2.json()]);

  const advantage: AdvantageData = response1.advantage;
  const advantageCards: AdvantageCardItem[] = response2.advantageCards;

  return (
    <>
      <div className="py-20 md:py-24">
        <CustomContainer className="flex flex-col md:flex-row md:justify-between md:items-center text-left">
          <div className="lg:max-w-[55%]">
            <Image
              src={`${advantage.image}`}
              alt="Icon Image"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto w-auto rounded-2xl"
            />
          </div>
          <div className="max-w-[500px] md:ml-10 mt-8 md:mt-0">
            <h1 className="text-3xl lg:text-5xl font-bold">
              {advantage.advantage}
            </h1>
            <p className="text-md lg:text-lg font-normal mt-2 lg:mt-4 max-w-[420px]">
              {advantage.explanation}
            </p>
          </div>
        </CustomContainer>
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        {/* Image Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={advantage.backgroundImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-85 z-1"></div>

        {/* Content */}
        <CustomContainer className="relative z-10 py-20">
          <div>
            <h1 className="text-5xl font-semibold text-background mb-9">
              Why here?
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantageCards.map((card) => (
                <IconCard
                  key={card.id}
                  title={card.advantage}
                  paragraph={card.explanation}
                  iconLink={card.iconFile}
                />
              ))}
            </div>
          </div>
        </CustomContainer>
      </div>
    </>
  );
};

export default Advantage;
