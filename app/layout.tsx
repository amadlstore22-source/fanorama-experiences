import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fanorama Experiences — Atlas Mountain Adventures & Gite Panorama",
  description: "Discover Morocco's Atlas Mountains with expert-guided bike tours, e-bike adventures, ski tours, trekking, and authentic accommodation at Gite Panorama in Imlil.",
  keywords: ["morocco adventure tours", "atlas mountains bike tour", "imlil trekking", "morocco ski tour", "e-bike morocco", "gite imlil"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fanorama Experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
