import React from "react";
import CustomContainer from "@/components/custom/CustomContainer";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "@headlessui/react";

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

const ContactPage: React.FC = async () => {
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
    <div className="py-[10vh] sm:py-[20vh]">
      <CustomContainer>
        {" "}
        <div className="py-10 sm:py-20 sm:mr-5 lg:mr-10 px-4 bg-secondary text-background rounded-2xl">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div>
              <h1 className="capitalize text-2xl font-semibold">
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
            <div className="w-full rounded-xl p-4">
              <h1 className="capitalize text-4xl font-bold">Contact Me</h1>

              <form className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium mb-1"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Your full address"
                  />
                </div>

                <div className="pt-2">
                  <Button className="rounded-md bg-primary py-4 px-7 text-md font-semibold text-white transition ease-in-out duration-300 data-[hover]:bg-secondary data-[active]:bg-accent">
                    Contact
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ContactPage;
