import { Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "RealEstate",
  description: "RealEstate landing page",
  icons: {
    icon: "/logo.svg", // This sets the favicon to /logo.svg
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${poppins.variable} ${notoSans.variable} antialiased relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
