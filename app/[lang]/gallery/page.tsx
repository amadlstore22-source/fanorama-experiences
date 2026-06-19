import { notFound } from "next/navigation";
import Image from "next/image";
import { Camera, MessageCircle } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";

const WHATSAPP = "212653936003";

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
  // Exterior & terrace
  {
    src: "/images/gallery/terrace-toubkal-snow.jpg",
    alt: "Snow-capped Toubkal massif seen from the Gite Panorama terrace in winter",
    altFr: "Massif enneigé du Toubkal vu depuis la terrasse du Gîte Panorama en hiver",
    category: "Terrace",
  },
  {
    src: "/images/gite/terrace-panorama-wide.jpg",
    alt: "Gite Panorama's rooftop terrace with mosaic tables and sweeping Atlas mountain views",
    altFr: "Terrasse panoramique du Gîte avec tables en mosaïque et vue sur l'Atlas",
    category: "Terrace",
  },
  {
    src: "/images/gite/gite-exterior-summer.jpg",
    alt: "Gite Panorama exterior in summer — wooden balconies surrounded by lush green valley trees",
    altFr: "Extérieur du Gîte Panorama en été — balcons en bois entourés d'arbres verdoyants",
    category: "Exterior",
  },
  {
    src: "/images/gallery/balcony-private.jpg",
    alt: "Private mosaic balcony table for two with Atlas valley and Berber village views",
    altFr: "Table de balcon privé en mosaïque pour deux avec vue sur la vallée et villages berbères",
    category: "Terrace",
  },
  // Rooms
  {
    src: "/images/gallery/room-double-purple.jpg",
    alt: "Deluxe double room with purple accent wall, bamboo ceiling, and Atlas mountain balcony",
    altFr: "Chambre double deluxe avec mur violet, plafond en bambou et balcon sur l'Atlas",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-double-purple-open.jpg",
    alt: "Double room with purple decor and Berber hand-woven rugs, viewed from the private terrace",
    altFr: "Chambre double décor violet et tapis berbères tissés à la main, vue depuis la terrasse",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-deluxe-twin.jpg",
    alt: "Deluxe twin room with bamboo ceiling, hand-carved wooden beds, and balcony access",
    altFr: "Chambre twin deluxe avec plafond en bambou, lits en bois sculptés et accès balcon",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-berber-twin.jpg",
    alt: "Berber-style twin room with vibrant orange striped blankets, Berber rug and carved ceiling lamp",
    altFr: "Chambre twin berbère avec couvertures rayées orange vif, tapis berbère et plafonnier sculpté",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-berber-wide.jpg",
    alt: "Berber twin room — warm colours, traditional hand-painted wall art and bamboo ceiling",
    altFr: "Chambre twin berbère — couleurs chaudes, art mural traditionnel peint à la main, plafond bambou",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-twin-blue.jpg",
    alt: "Twin room with blue bedding, Berber rug and ornate Moroccan ceiling medallion",
    altFr: "Chambre twin avec linge bleu, tapis berbère et médaillon de plafond marocain orné",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-twin-yellow.jpg",
    alt: "Twin room with yellow Moroccan quilts, wooden headboard and carved plaster ceiling detail",
    altFr: "Chambre twin avec couettes marocaines jaunes, tête de lit en bois et plafond sculpté",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-double-balcony.jpg",
    alt: "Double room with sliding glass door opening onto a private balcony with Atlas mountain view",
    altFr: "Chambre double avec porte vitrée coulissante ouvrant sur un balcon privé vue Atlas",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-single-view.jpg",
    alt: "Single room with panoramic mountain window, bamboo ceiling and Berber rug",
    altFr: "Chambre simple avec fenêtre panoramique montagne, plafond bambou et tapis berbère",
    category: "Rooms",
  },
  {
    src: "/images/gallery/room-view-door.jpg",
    alt: "Room door open to a private balcony overlooking the green Imlil valley",
    altFr: "Porte de chambre ouverte sur un balcon privé donnant sur la vallée verdoyante d'Imlil",
    category: "Rooms",
  },
  // Interior
  {
    src: "/images/gallery/salon-bamboo.jpg",
    alt: "Common salon with traditional Moroccan banquette seating, bamboo ceiling and walnut table",
    altFr: "Salon commun avec banquettes marocaines traditionnelles, plafond bambou et table en noyer",
    category: "Interior",
  },
  {
    src: "/images/gallery/corridor-bamboo.jpg",
    alt: "Gite corridor with hand-crafted bamboo ceiling and traditional carved wooden doors",
    altFr: "Couloir du gîte avec plafond en bambou artisanal et portes en bois sculpté traditionnel",
    category: "Interior",
  },
  {
    src: "/images/gallery/bathroom-zellige.jpg",
    alt: "Private bathroom with traditional Moroccan zellige tilework in terracotta and green",
    altFr: "Salle de bain privée avec zellige marocain traditionnel en terre cuite et vert",
    category: "Rooms",
  },
  // Surroundings & nature
  {
    src: "/images/gallery/imlil-valley-panorama.jpg",
    alt: "Sweeping panoramic view of the Imlil valley and Atlas mountain ridges from the gite balcony",
    altFr: "Vue panoramique sur la vallée d'Imlil et les crêtes de l'Atlas depuis le balcon du gîte",
    category: "Views",
  },
  {
    src: "/images/gallery/imlil-night-stars.jpg",
    alt: "Imlil village glowing with lights at night beneath a clear starry Atlas sky",
    altFr: "Le village d'Imlil illuminé la nuit sous un ciel étoilé de l'Atlas",
    category: "Views",
  },
  {
    src: "/images/gallery/aremd-village-toubkal.jpg",
    alt: "Traditional Berber village of Aremd with the Toubkal massif rising behind",
    altFr: "Village berbère d'Aremd avec le massif du Toubkal en arrière-plan",
    category: "Surroundings",
  },
  {
    src: "/images/gallery/mizane-valley-gorge.jpg",
    alt: "The Mizane valley gorge with Imlil village perched on the rocky cliff",
    altFr: "Les gorges de la vallée du Mizane avec le village d'Imlil sur la falaise rocheuse",
    category: "Surroundings",
  },
  {
    src: "/images/gallery/imlil-mosque-valley.jpg",
    alt: "Imlil mosque minaret rising above a lush green valley with terraced Berber villages",
    altFr: "Minaret de la mosquée d'Imlil dominant une vallée verdoyante avec villages en terrasses",
    category: "Surroundings",
  },
  {
    src: "/images/gallery/cherry-orchard-imlil.jpg",
    alt: "Ripe red cherries in the famous Imlil cherry orchards, harvested each June",
    altFr: "Cerises rouges mûres dans les célèbres cerisiers d'Imlil, récoltées chaque juin",
    category: "Nature",
  },
];

const categoryColors: Record<string, string> = {
  Exterior: "bg-terracotta",
  Terrace: "bg-atlas-green",
  Rooms: "bg-saffron/80",
  Interior: "bg-amber-700",
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

        {/* Feature your photo CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center shrink-0">
            <Camera className="w-6 h-6 text-[#25D366]" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              {isFr ? "Vous avez séjourné chez nous ?" : "Stayed with us?"}
            </h3>
            <p className="text-white/50 text-sm">
              {isFr
                ? "Envoyez-nous vos plus belles photos via WhatsApp et nous les publierons dans cette galerie."
                : "Send us your best shots via WhatsApp and we'll feature them right here in this gallery."}
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(isFr ? "Bonjour ! Je souhaite partager des photos de mon séjour au Gîte Panorama." : "Hi! I'd like to share some photos from my stay at Gite Panorama.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            {isFr ? "Envoyer mes photos" : "Share my photos"}
          </a>
        </div>
      </div>
    </div>
  );
}
