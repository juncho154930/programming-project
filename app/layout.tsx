import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Palanquin, Raleway } from "next/font/google";

import Footer from "@/components/Footer";
import ToasterProvider from "@/components/ToasterProvider";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const palanquin = Palanquin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-palanquin",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Programming Project",
  description:
    "This programming project is a startup with Jun, Steven, Jay and Brandon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${palanquin.variable} ${raleway.variable} ${montserrat.variable} font-raleway`}
      >
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
