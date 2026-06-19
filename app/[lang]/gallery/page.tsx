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
  {
    src: "/images/gallery/terrace-toubkal-snow.jpg",
    alt: "Snow-capped Atlas peak seen from the Gite Panorama terrace, with walnut trees and bamboo pergola in the foreground",
    altFr: "Sommet enneigé de l'Atlas vu depuis la terrasse du Gîte Panorama, avec noyers et pergola en bambou au premier plan",
    category: "Views",
  },
  {
    src: "/images/gallery/imlil-valley-panorama.jpg",
    alt: "Sweeping panoramic view of the Imlil valley and Atlas mountain ridges from the gite balcony",
    altFr: "Vue panoramique sur la vallée d'Imlil et les crêtes de l'Atlas depuis le balcon du gîte",
    category: "Views",
  },
  {
    src: "/images/gallery/imlil-night-stars.jpg",
    alt: "Imlil village glowing with lights at night beneath a clear starry Atlas sky, seen from above",
    altFr: "Le village d'Imlil illuminé la nuit sous un ciel étoilé de l'Atlas, vu depuis les hauteurs",
    category: "Views",
  },
  {
    src: "/images/gallery/aremd-village-toubkal.jpg",
    alt: "Traditional Berber mud-brick houses of Aremd village stacked on the hillside, with the Toubkal massif rising behind",
    altFr: "Maisons berbères en pisé du village d'Aremd étagées sur le flanc de montagne, avec le massif du Toubkal en arrière-plan",
    category: "Surroundings",
  },
  {
    src: "/images/gallery/mizane-valley-gorge.jpg",
    alt: "The Mizane valley gorge at dusk, with Imlil village perched on the rocky cliff and snow peaks glowing in the background",
    altFr: "Les gorges de la vallée du Mizane au crépuscule, avec le village d'Imlil sur la falaise et les sommets enneigés en fond",
    category: "Surroundings",
  },
  {
    src: "/images/gallery/imlil-mosque-valley.jpg",
    alt: "Imlil's main mosque minaret rising above a lush green valley, with terraced Berber villages covering the hillside beyond",
    altFr: "Le minaret de la mosquée principale d'Imlil se dressant sur une vallée verdoyante, avec les villages berbères en terrasses au loin",
    category: "Surroundings",
  },
  {
    src: "/images/gallery/cherry-orchard-imlil.jpg",
    alt: "Ripe red cherries hanging from a branch in the famous Imlil cherry orchards, harvested each June",
    altFr: "Cerises rouges mûres suspendues à une branche dans les célèbres cerisiers d'Imlil, récoltées chaque mois de juin",
    category: "Nature",
  },
];

const categoryColors: Record<string, string> = {
  Exterior: "bg-terracotta",
  Terrace: "bg-atlas-green",
  Rooms: "bg-saffron/80",
  Food: "bg-orange-600",
  Views: "bg-blue-600",
  Surroundings: "bg-purple-700",
  Nature: "bg-atlas-green",
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

      </div>
    </div>
  );
}
