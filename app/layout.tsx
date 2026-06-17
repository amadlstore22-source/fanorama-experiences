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
    default: "Gite Panorama Imlil — Guesthouse at the Foot of Toubkal",
    template: "%s | Gite Panorama Imlil",
  },
  description:
    "Stay at Gite Panorama in Imlil, Morocco. Panoramic Atlas views, home-cooked Moroccan meals, and warm Berber hospitality. Rated 4.9★ Google · 9.1 Booking.com.",
  keywords: [
    "gite panorama imlil",
    "gite imlil",
    "accommodation imlil morocco",
    "imlil guesthouse",
    "toubkal guesthouse",
    "atlas mountains accommodation",
    "berber guesthouse morocco",
    "imlil bed and breakfast",
    "gite atlas mountains",
    "morocco mountain accommodation",
    "imlil hotel",
    "toubkal national park accommodation",
  ],
  authors: [{ name: "Fanorama Experiences" }],
  creator: "Fanorama Experiences",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    siteName: "Fanorama Experiences",
    title: "Gite Panorama Imlil — Guesthouse at the Foot of Toubkal",
    description:
      "Stay at Gite Panorama in Imlil, Morocco. Panoramic Atlas views, home-cooked Moroccan meals, and warm Berber hospitality. Rated 4.9★ on Google.",
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
    title: "Gite Panorama Imlil — Guesthouse at the Foot of Toubkal",
    description:
      "Stay at Gite Panorama in Imlil, Morocco. Panoramic Atlas views, Moroccan meals, Berber hospitality. 4.9★ Google · 9.1 Booking.com.",
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
