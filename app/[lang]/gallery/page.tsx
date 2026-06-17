import { notFound } from "next/navigation";
import Image from "next/image";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Galerie | Fanorama Experiences" : "Gallery | Fanorama Experiences",
  };
}

const photos = [
  { src: "/images/tours/atlas-mtb-2day-1.jpg", alt: "Atlas Mountains MTB", category: "mtb" },
  { src: "/images/tours/ebike-berber-1.jpg", alt: "E-Bike Berber Valley", category: "ebike" },
  { src: "/images/tours/kik-plateau-1.jpg", alt: "Kik Plateau", category: "ebike" },
  { src: "/images/tours/atlas-atlantic-1.jpg", alt: "Atlas to Atlantic", category: "mtb" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Gite Panorama", category: "gite" },
  { src: "/images/tours/enduro-8day-1.jpg", alt: "Enduro MTB", category: "mtb" },
  { src: "/images/tours/anti-atlas-1.jpg", alt: "Anti-Atlas", category: "mtb" },
  { src: "/images/tours/atlas-mtb-3day-1.jpg", alt: "Atlas 3-Day MTB", category: "mtb" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Mountain Views from Gite", category: "gite" },
];

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-sand pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 text-center">
          <h1 className="font-heading text-5xl font-bold text-charcoal mb-3">{dict.gallery.title}</h1>
          <p className="text-muted-warm text-lg">{dict.gallery.subtitle}</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={i} className="break-inside-avoid rounded-xl overflow-hidden border border-border relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
