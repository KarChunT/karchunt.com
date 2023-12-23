import React from "react";
import type { Metadata } from "next";
import { Arvo } from "next/font/google";

import ThemeProviders from "@/context/ThemeProviders";

import "./globals.css";
import NavBar from "@/components/shared/navbar/navBar";
import Footer from "@/components/shared/footer/footer";
import { siteMetaData } from "@/utils/siteMetaData";

const arvo = Arvo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arvo",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title,
  },
  description: siteMetaData.description,
  authors: [{ name: siteMetaData.author }],
  creator: siteMetaData.author,
  // icons: {
  //   icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/karchunt-removebg.png`,
  // },
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${arvo.className} h-full w-full antialiased`}>
        <ThemeProviders>
          <div className="max-container padding-container flex h-screen flex-col">
            <NavBar />
            <main className="relative grow">{children}</main>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
