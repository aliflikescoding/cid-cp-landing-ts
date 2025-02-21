import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";

interface Company {
  name: string;
  slogan: string;
  address: string;
  email: string;
  phone: string;
  instagramUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  whatsappUrl: string;
}

interface ApiResponse {
  company: Company;
}

const LocationPage: React.FC = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch company data");
    return null;
  }

  const { company }: ApiResponse = await res.json();

  // Create a Google Maps embed URL without API key
  const mapUrl = `https://www.google.com/maps/embed?pb=place&q=${encodeURIComponent(
    company.address
  )}`;

  return (
    <div className="py-10">
      <CustomContainer>
        <div className="relative">
          <div className="absolute left-4 bottom-4 sm:left-7 sm:bottom-7 p-2 sm:p-4 text-md sm:text-xl font-normal rounded-2xl bg-secondary text-background">{company.address}</div>
          <iframe
            src={mapUrl}
            className="w-full h-[375px] sm:h-[550px] border-0 rounded-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CustomContainer>
    </div>
  );
};

export default LocationPage;
