import React from "react";
import CustomContainer from "../custom/CustomContainer";
import IconCard from "../ui/IconCard";

type AboutData = {
  title: string;
  description: string;
  imageFile: string;
};

type AboutCardItem = {
  id: number;
  title: string;
  description: string;
  iconFile: string;
};

const About: React.FC = async () => {
  try {
    const [res1, res2] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about`, {
        cache: "force-cache",
        next: { revalidate: 60 },
      }),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about-cards`, {
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

    const about: AboutData = response1.about;
    const aboutcards: AboutCardItem[] = response2.aboutCards;

    return (
      <div className="relative overflow-hidden rounded-2xl">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={`${about.imageFile}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-1"></div>

        {/* Content */}
        <CustomContainer className="relative z-10 py-10">
          <h1 className="text-5xl font-bold text-background">{about.title}</h1>
          <p className="mt-4 text-lg font-normal text-background max-w-[600px]">
            {about.description}
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutcards.map((card) => (
              <IconCard
                key={card.id}
                title={card.title}
                paragraph={card.description}
                iconLink={card.iconFile}
              />
            ))}
          </div>
        </CustomContainer>
      </div>
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
};

export default About;
