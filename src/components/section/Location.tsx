import React from "react";
import Image from "next/image";
import CustomContainer from "../custom/CustomContainer";
import Link from "next/link";
import TimeCard from "../ui/TimeCard";

interface LocationData {
  locationName: string;
  slogan: string;
  description: string;
  imageFile: string;
  locationLink: string;
}

interface HomeLocationItem {
  id: number;
  durationMinutes: string;
  name: string;
}

const Location: React.FC = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/location`,
  //   {
  //     cache: "force-cache",
  //     next: { revalidate: 60 },
  //   }
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // const data = await res.json();

  // const location: LocationData = data.location;

  const [res1, res2] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/location`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home-location-time`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    }),
  ]);

  if (!res1.ok || !res2.ok) {
    throw new Error("Failed to fetch data");
  }

  const [response1, response2] = await Promise.all([res1.json(), res2.json()]);

  const location: LocationData = response1.location;
  const time: HomeLocationItem[] = response2.homeLocationTime;

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Image Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/locationBackground.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-85 z-1"></div>

      {/* Content */}
      <CustomContainer className="relative z-10 py-20 text-background">
        <div>
          <div className="mb-9">
            <h3 className="text-2xl font-semibold opacity-80">
              {location.locationName}
            </h3>
            <h1 className="text-5xl font-bold my-4">{location.slogan}</h1>
            <h3 className="text-2xl font-semibold opacity-80">
              {location.description}
            </h3>
          </div>
          <Link href={`${location.locationLink}`} target="_blank">
            <Image
              src={`${location.imageFile}`}
              alt="location image"
              height={0}
              width={0}
              sizes="100vw"
              className="w-full h-[543px]"
            />
          </Link>
          <div className="flex flex-wrap gap-4 mt-9">
            {time.map((item) => (
              <TimeCard
                key={item.id}
                time={item.durationMinutes}
                location={item.name}
              />
            ))}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Location;
