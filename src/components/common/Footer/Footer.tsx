import React, { Suspense } from "react";
import FooterLoading from "./FooterLoading";
import CustomContainer from "@/components/custom/CustomContainer";
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

const Footer = async () => {
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
    <Suspense fallback={<FooterLoading />}>
      <div className="bg-secondary py-14 md:py-20 text-background font-poppins">
        <CustomContainer>
          <div className="h-[1px] w-full bg-background mb-6 max-w-[85%] mx-auto opacity-50"></div>
          {/* top section */}
          <div className="flex items-center flex-col gap-7 lg:gap-0 lg:flex-row justify-between mb-10">
            {/* logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="realestate logo"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto max-w-[35px]"
              />
              <Image
                src="/logo-text.svg"
                alt="realestate logo"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-full max-w-[125px]"
              />
            </Link>
            <div className="flex sm:flex-row flex-col items-center gap-4 xl:gap-7">
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/"
              >
                home
              </Link>
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/cluster"
              >
                cluster
              </Link>
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/location"
              >
                location
              </Link>
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/facilities"
              >
                facilities
              </Link>
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/blog"
              >
                promotions & events
              </Link>
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/virtual-tour"
              >
                virtual tour
              </Link>
              <Link
                className="text-sm capitalize font-semibold hover:underline"
                href="/contact"
              >
                contact
              </Link>
            </div>
            <div className="flex gap-4 text-2xl">
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
          {/* bottom section */}
          <div className="flex flex-wrap-reverse gap-7 justify-between items-center text-sm">
            <p>© {company.name} 2025, All rights reserved</p>
            <p className="sm:text-center">{company.slogan}</p>
            <p className="xl:text-right">
              {company.address}
              <br></br> {company.email}
              <br></br> {company.phone}
            </p>
          </div>
        </CustomContainer>
      </div>
    </Suspense>
  );
};

export default Footer;
