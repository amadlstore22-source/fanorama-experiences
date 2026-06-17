import { notFound } from "next/navigation";
import Image from "next/image";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr"
      ? "Notre Gîte en Photos | Gîte Panorama Imlil"
      : "Our Gite in Photos | Gite Panorama Imlil",
    description: lang === "fr"
      ? "Photos du Gîte Panorama à Imlil — chambres, terrasse, vues sur l'Atlas et repas marocains."
      : "Photos of Gite Panorama in Imlil — rooms, terrace, Atlas views and Moroccan meals.",
  };
}

const photos = [
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Gite Panorama exterior with Atlas views", altFr: "Extérieur du Gîte Panorama avec vue sur l'Atlas", category: "Exterior" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Panoramic terrace overlooking Imlil valley", altFr: "Terrasse panoramique sur la vallée d'Imlil", category: "Terrace" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Deluxe room with balcony and mountain view", altFr: "Chambre deluxe avec balcon et vue montagne", category: "Rooms" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Traditional Moroccan tagine breakfast", altFr: "Petit-déjeuner tajine marocain traditionnel", category: "Food" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Mount Toubkal view from Gite Panorama", altFr: "Vue sur le Mont Toubkal depuis le Gîte Panorama", category: "Views" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Cozy double room with Atlas mountain view", altFr: "Chambre double confortable avec vue sur l'Atlas", category: "Rooms" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Gite Panorama garden and mountain backdrop", altFr: "Jardin du Gîte Panorama avec montagne en fond", category: "Exterior" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Moroccan mint tea served on the terrace", altFr: "Thé à la menthe marocain servi en terrasse", category: "Food" },
  { src: "/images/gite/gite-panorama-exterior.jpg", alt: "Sunset over the Atlas Mountains from the gite", altFr: "Coucher de soleil sur l'Atlas depuis le gîte", category: "Views" },
];

const categoryColors: Record<string, string> = {
  Exterior: "bg-terracotta",
  Terrace: "bg-atlas-green",
  Rooms: "bg-saffron/80",
  Food: "bg-orange-600",
  Views: "bg-blue-600",
};

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang === "fr";

  return (
    <div className="min-h-screen bg-[#111110] pb-20">
      {/* Header */}
      <div className="relative pt-32 pb-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/60 to-transparent" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-saffron/60" />
            <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
              {isFr ? "Gîte Panorama · Imlil" : "Gite Panorama · Imlil"}
            </span>
            <div className="h-px w-10 bg-saffron/60" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4">{dict.gallery.title}</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">{dict.gallery.subtitle}</p>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 relative group cursor-pointer hover:border-terracotta/40 transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={isFr ? photo.altFr : photo.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white ${categoryColors[photo.category] ?? "bg-charcoal"} tracking-widest`}>
                    {photo.category}
                  </span>
                  <span className="text-white/70 text-xs">{isFr ? photo.altFr : photo.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/20 text-sm">
            {isFr
              ? "📷 De vraies photos seront ajoutées prochainement"
              : "📷 Real photos will be added soon"}
          </p>
        </div>
      </div>
    </div>
  );
}
