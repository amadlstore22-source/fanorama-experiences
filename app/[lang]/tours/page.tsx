import { notFound } from "next/navigation";
import { Suspense } from "react";
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

  return (
    <div className="min-h-screen bg-sand pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-heading text-5xl font-bold text-charcoal mb-3">
            {lang === "fr" ? "Nos Excursions" : "Our Tours"}
          </h1>
          <p className="text-muted-warm text-lg">
            {lang === "fr"
              ? "Des aventures dans le cœur de l'Atlas marocain"
              : "Adventures in the heart of Morocco's Atlas Mountains"}
          </p>
        </div>
        <Suspense>
          <TourFilter dict={dict} />
        </Suspense>
        {tours.length === 0 ? (
          <div className="text-center py-16 text-muted-warm">
            {lang === "fr" ? "Aucune excursion ne correspond aux filtres sélectionnés." : "No tours match the selected filters."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} lang={lang} bookLabel={lang === "fr" ? "Voir l'excursion" : "View Tour"} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
