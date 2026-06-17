import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { getFeaturedTours } from "@/content/tours";
import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturedTours from "@/components/home/FeaturedTours";
import StatsBar from "@/components/home/StatsBar";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GiteTeaser from "@/components/home/GiteTeaser";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr
      ? "Fanorama Experiences — Aventures Atlas & Gîte Panorama"
      : "Fanorama Experiences — Atlas Mountain Adventures & Gite Panorama",
    description: isFr
      ? "Circuits VTT, e-bike, ski et randonnée guidés dans les montagnes de l'Atlas au Maroc. Hébergement authentique au Gîte Panorama à Imlil."
      : "Expert-guided bike tours, e-bike, ski, and trekking adventures in Morocco's Atlas Mountains. Authentic accommodation at Gite Panorama in Imlil.",
    alternates: { canonical: `/${lang}`, languages: { en: "/en", fr: "/fr" } },
  };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const featured = getFeaturedTours();

  return (
    <>
      <HeroSection lang={lang} dict={dict} />
      <CategoryStrip lang={lang} dict={dict} />
      <FeaturedTours lang={lang} dict={dict} tours={featured} />
      <StatsBar dict={dict} />
      <TestimonialsSection dict={dict} />
      <GiteTeaser lang={lang} dict={dict} />
    </>
  );
}
