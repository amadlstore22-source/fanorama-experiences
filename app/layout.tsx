import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fanorama-experiences.vercel.app"),
  title: {
    default: "Fanorama Experiences — Atlas Mountain Adventures & Gite Panorama",
    template: "%s | Fanorama Experiences",
  },
  description:
    "Discover Morocco's Atlas Mountains with expert-guided MTB tours, e-bike adventures, ski tours, trekking, and authentic accommodation at Gite Panorama in Imlil.",
  keywords: [
    "morocco adventure tours",
    "atlas mountains bike tour",
    "imlil trekking",
    "morocco ski tour",
    "e-bike morocco",
    "gite imlil",
    "gite panorama imlil",
    "mountain bike morocco",
    "atlas mountains accommodation",
    "toubkal trekking",
    "morocco guided tours",
    "fanorama experiences",
  ],
  authors: [{ name: "Fanorama Experiences" }],
  creator: "Fanorama Experiences",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    siteName: "Fanorama Experiences",
    title: "Fanorama Experiences — Atlas Mountain Adventures & Gite Panorama",
    description:
      "Expert-guided MTB, e-bike, ski and trekking adventures in Morocco's Atlas Mountains. Authentic accommodation at Gite Panorama in Imlil.",
    url: "https://fanorama-experiences.vercel.app",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fanorama Experiences — Atlas Mountain Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanorama Experiences — Atlas Mountain Adventures",
    description:
      "Expert-guided MTB, e-bike, ski and trekking in Morocco's Atlas Mountains. Book your adventure at Gite Panorama, Imlil.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      en: "/en",
      fr: "/fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
