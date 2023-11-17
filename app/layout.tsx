import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeProviders from "@/context/ThemeProviders";

import "./globals.css";
import NavBar from "@/components/shared/navbar/navBar";
import Footer from "@/components/shared/footer/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "KarChunT",
  description:
    "I'm an Infrastructure and DevOps Engineer at Intel. I love to code and design software architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} h-full w-full antialiased`}>
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
