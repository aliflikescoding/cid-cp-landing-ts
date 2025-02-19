import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

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

const Redeem: React.FC = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company`,
    {
      cache: "force-cache", // This is the default, so you can also omit this line
      next: { revalidate: 60 }, // Revalidate the data every hour (3600 seconds)
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch company data");
    return null;
  }

  const { company }: ApiResponse = await res.json();

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Image Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={"/advantageBackground.png"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>

      {/* Content */}
      <CustomContainer className="relative z-10 py-3">
        <div className="flex flex-col-reverse sm:flex-row lex-nowrap">
          <div className="py-10 sm:py-20 sm:mr-5 lg:mr-10 px-4 bg-secondary text-background rounded-2xl">
            <h1 className="capitalize text-2xl font-semibold sm:mt-24 mb-10">
              build your dreams with us
            </h1>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-lg font-bold">Address</p>
                <p className="text-base font-normal opacity-80">
                  {company.address}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">Email</p>
                <p className="text-base font-normal opacity-80">
                  {company.email}
                </p>
              </div>
              <div>
                <p className="text-lg font-bold">Phone</p>
                <p className="text-base font-normal opacity-80">
                  {company.phone}
                </p>
              </div>
              <div className="text-lg gap-4 font-bold flex items-center">
                <p>Follow us on</p>
                <div className="flex text-xl gap-2">
                  <Link href={company.instagramUrl} target="_blank">
                    <FaInstagram />
                  </Link>
                  <Link href={company.facebookUrl} target="_blank">
                    <FaFacebook />
                  </Link>
                  <Link href={company.linkedinUrl} target="_blank">
                    <FaLinkedin />
                  </Link>
                  <Link href={company.youtubeUrl} target="_blank">
                    <FaYoutube />
                  </Link>
                  <Link href={company.whatsappUrl} target="_blank">
                    <FaWhatsapp />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-background rounded-xl p-4">
            <h1 className="capitalize text-4xl font-bold">Get Brochure</h1>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Redeem;
