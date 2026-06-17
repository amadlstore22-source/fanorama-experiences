import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Mountain } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import { getFilteredTours } from "@/content/tours";
import TourCard from "@/components/tours/TourCard";
import TourFilter from "@/components/tours/TourFilter";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/tours">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Nos Excursions | Fanorama Experiences" : "Our Tours | Fanorama Experiences",
    description: lang === "fr"
      ? "Découvrez tous nos circuits VTT, e-bike, ski et randonnée dans les montagnes de l'Atlas."
      : "Explore all our MTB, e-bike, ski, and trekking tours in Morocco's Atlas Mountains.",
  };
}

export default async function ToursPage({ params, searchParams }: PageProps<"/[lang]/tours">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const sp = await searchParams;
  const tours = getFilteredTours(
    sp.type as string | undefined,
    sp.duration as string | undefined,
    sp.difficulty as string | undefined
  );
  const isFr = lang === "fr";

  return (
    <div className="min-h-screen bg-[#111110] pb-20">
      {/* Dark hero banner */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/60 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-saffron/60" />
            <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
              {isFr ? "Atlas Marocain" : "Moroccan Atlas"}
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {isFr ? "Nos Excursions" : "Our Tours"}
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            {isFr
              ? "Des aventures dans le cœur de l'Atlas marocain"
              : "Adventures in the heart of Morocco's Atlas Mountains"}
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white/5 border-y border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Suspense>
            <TourFilter dict={dict} />
          </Suspense>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {tours.length === 0 ? (
          <div className="text-center py-24 text-white/30">
            <Mountain className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">
              {isFr ? "Aucune excursion ne correspond aux filtres sélectionnés." : "No tours match the selected filters."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} lang={lang} bookLabel={isFr ? "Voir l'excursion" : "View Tour"} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
