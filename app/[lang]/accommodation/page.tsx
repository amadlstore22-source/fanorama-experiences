import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, Wifi, Coffee, Mountain, Wind, Clock, Car, Users, Utensils, Sun, Quote } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import RoomSection from "@/components/accommodation/RoomSection";
import type { Metadata } from "next";

const giteReviews = [
  {
    name: "Rhys Rogers",
    country: "United Kingdom 🇬🇧",
    badge: "Local Guide · 27 reviews",
    rating: 5,
    text: "A wonderful welcoming host family. Ismael is also an expert guide. Stunning views from the tranquil terrace overlooking Imlil and the walnut groves. A real sanctuary of peace. Highly recommend.",
    highlights: ["Great view", "Quiet", "Great value"],
  },
  {
    name: "Oussama Z",
    country: "Morocco 🇲🇦",
    badge: "Local Guide · 31 reviews",
    rating: 5,
    text: "The Panorama Imlil guesthouse is absolutely exceptional. The view is simply magnificent — the most beautiful I have ever seen of the mountains and valley. I tasted the best tagine of my life here, and I am Moroccan.",
    highlights: ["Great view", "Quiet", "Great value"],
  },
  {
    name: "Tomas John",
    country: "Spain 🇪🇸",
    badge: "Verified Guest",
    rating: 5,
    text: "A fantastic experience. We arrived very late, and he was incredibly helpful from the very beginning. He even took us to a great restaurant and called ahead to let them know we were arriving. Highly recommended.",
    highlights: ["Great service", "Welcoming"],
  },
  {
    name: "Leïla Calmet",
    country: "France 🇫🇷",
    badge: "Verified Guest · 5 reviews",
    rating: 5,
    text: "What a view! That alone makes the experience incredible. We highly recommend this guesthouse in the hills above Imlil — less than 5 minutes from the village. We spent three nights there. Fantastic!",
    highlights: ["Great view", "Quiet"],
  },
  {
    name: "Luc Maessen",
    country: "Belgium 🇧🇪",
    badge: "Local Guide · 21 reviews",
    rating: 5,
    text: "Price/quality is perfect. Views from the balcony are lovely. We had a decent breakfast and for this price you get a perfect deal. The hotel is only 10–15 minutes walk from the Imlil waterfall.",
    highlights: ["Great value", "Great view"],
  },
  {
    name: "Felicia Meshach",
    country: "Nigeria 🇳🇬",
    badge: "Local Guide · 19 reviews",
    rating: 5,
    text: "This was one of the highlights of my trip through Morocco. My hosts, the Aitidar family, welcomed me with classic Berber hospitality. The accommodation was truly lovely, the food was delicious.",
    highlights: ["Hospitality", "Great view", "Great value"],
  },
];

export async function generateMetadata({ params }: PageProps<"/[lang]/accommodation">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Gîte Panorama Imlil | Fanorama Experiences" : "Gite Panorama Imlil | Fanorama Experiences",
    description: lang === "fr"
      ? "Séjournez au Gîte Panorama à Imlil, au pied du Toubkal. Vue panoramique sur l'Atlas, repas marocains, WiFi gratuit. Note 4.9★."
      : "Stay at Gite Panorama in Imlil at the foot of Toubkal. Panoramic Atlas views, Moroccan meals, free WiFi. Rated 4.9★.",
  };
}

const amenities = [
  { icon: Mountain, labelEn: "Panoramic Atlas Views", labelFr: "Vue Panoramique Atlas" },
  { icon: Coffee, labelEn: "Restaurant & Breakfast", labelFr: "Restaurant & Petit-Déjeuner" },
  { icon: Wifi, labelEn: "Free WiFi", labelFr: "WiFi Gratuit" },
  { icon: Wind, labelEn: "Steam Room / Hammam", labelFr: "Hammam" },
  { icon: Clock, labelEn: "24h Front Desk", labelFr: "Réception 24h/24" },
  { icon: Car, labelEn: "Airport Shuttle", labelFr: "Navette Aéroport" },
  { icon: Sun, labelEn: "Sun Terrace & Garden", labelFr: "Terrasse & Jardin" },
  { icon: Utensils, labelEn: "Home-Cooked Meals", labelFr: "Repas Maison" },
  { icon: Users, labelEn: "Family Rooms Available", labelFr: "Chambres Familiales" },
];

export const roomTypes = [
  {
    id: "single-mountain-view",
    nameEn: "Single Room with Mountain View",
    nameFr: "Chambre Simple Vue Montagne",
    photo: "/images/gallery/room-single-view.jpg",
    size: "15 m²",
    beds: "1 single bed",
    bedsFr: "1 lit simple",
    maxPersons: 1,
    priceMAD: 206,
    features: ["Mountain view", "Private bathroom", "Terrace", "Coffee machine", "Hairdryer"],
    featuresFr: ["Vue montagne", "Salle de bain privée", "Terrasse", "Machine à café", "Sèche-cheveux"],
  },
  {
    id: "double-room",
    nameEn: "Double Room",
    nameFr: "Chambre Double",
    photo: "/images/gallery/room-twin-yellow.jpg",
    size: "16 m²",
    beds: "2 double beds",
    bedsFr: "2 lits doubles",
    maxPersons: 2,
    priceMAD: 233,
    features: ["Mountain & garden view", "Private bathroom", "Terrace", "Fireplace", "Washing machine"],
    featuresFr: ["Vue montagne & jardin", "Salle de bain privée", "Terrasse", "Cheminée", "Machine à laver"],
  },
  {
    id: "deluxe-double-balcony",
    nameEn: "Deluxe Double Room with Balcony",
    nameFr: "Chambre Double Deluxe avec Balcon",
    photo: "/images/gallery/room-double-purple.jpg",
    size: "15 m²",
    beds: "1 single + 1 large double bed",
    bedsFr: "1 lit simple + 1 grand lit double",
    maxPersons: 2,
    priceMAD: 385,
    features: ["Balcony", "Mountain & garden view", "Private bathroom", "Coffee machine", "Dishwasher"],
    featuresFr: ["Balcon", "Vue montagne & jardin", "Salle de bain privée", "Machine à café", "Lave-vaisselle"],
    highlight: true,
  },
  {
    id: "deluxe-twin-balcony",
    nameEn: "Deluxe Double or Twin Room with Balcony",
    nameFr: "Chambre Double ou Twin Deluxe avec Balcon",
    photo: "/images/gallery/room-berber-twin.jpg",
    size: null,
    beds: "2 single beds",
    bedsFr: "2 lits simples",
    maxPersons: 2,
    priceMAD: 403,
    features: ["Balcony", "Private bathroom", "Breakfast included"],
    featuresFr: ["Balcon", "Salle de bain privée", "Petit-déjeuner inclus"],
  },
  {
    id: "double-twin-terrace",
    nameEn: "Double or Twin Room with Terrace",
    nameFr: "Chambre Double ou Twin avec Terrasse",
    photo: "/images/gallery/room-double-balcony.jpg",
    size: null,
    beds: "2 single beds",
    bedsFr: "2 lits simples",
    maxPersons: 2,
    priceMAD: 412,
    features: ["Private terrace", "Private bathroom", "Breakfast included"],
    featuresFr: ["Terrasse privée", "Salle de bain privée", "Petit-déjeuner inclus"],
  },
];

export default async function AccommodationPage({ params }: PageProps<"/[lang]/accommodation">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const a = dict.accommodation;
  const isFr = lang === "fr";

  return (
    <div className="min-h-screen bg-[#111110] pb-20">
      {/* Cinematic hero */}
      <div className="relative h-[65vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/gite/gite-panorama-exterior.jpg"
          alt="Gite Panorama Imlil"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="inline-flex items-center gap-1.5 bg-saffron/20 text-saffron text-xs font-semibold px-4 py-2 rounded-full border border-saffron/30">
              <Star className="w-3.5 h-3.5 fill-saffron" /> 4.9★ · 31 Google Reviews
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              9.1 Superb · Booking.com
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-3 leading-tight">{a.title}</h1>
          <p className="text-white/50 text-lg">{a.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-14">
            <p className="text-white/60 leading-relaxed text-lg">{a.description}</p>

            {/* Booking.com score */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="text-center shrink-0 bg-atlas-green/10 border border-atlas-green/20 rounded-2xl p-5">
                <div className="font-heading text-5xl font-bold text-atlas-green">9.1</div>
                <div className="text-sm font-semibold text-white mt-1">{isFr ? "Superbe" : "Superb"}</div>
                <div className="text-xs text-white/30">Booking.com · 95 {isFr ? "avis" : "reviews"}</div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                {[
                  { label: isFr ? "Hôte" : "Host", score: "9.6" },
                  { label: isFr ? "Propreté" : "Cleanliness", score: "9.5" },
                  { label: isFr ? "Confort" : "Comfort", score: "9.5" },
                  { label: isFr ? "Rapport qualité/prix" : "Value for money", score: "9.4" },
                  { label: isFr ? "Équipements" : "Facilities", score: "9.2" },
                  { label: isFr ? "Emplacement" : "Location", score: "9.2" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                    <span className="text-xs text-white/40">{item.label}</span>
                    <span className="font-bold text-white text-sm">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types — interactive */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-6 bg-saffron/60" />
                <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                  {isFr ? "Hébergement" : "Accommodation"}
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                {isFr ? "Choisissez votre chambre" : "Choose Your Room"}
              </h2>
              <p className="text-white/40 text-sm mb-8">
                {isFr
                  ? "Cliquez sur une chambre pour voir les détails complets et réserver"
                  : "Click a room to see full details and book"}
              </p>
              <RoomSection rooms={roomTypes} lang={lang} dict={dict} />
              <p className="text-xs text-white/25 mt-4">
                {isFr
                  ? "* Prix incluant taxes. Petit-déjeuner inclus dans la plupart des chambres."
                  : "* Prices include taxes. Breakfast included in most rooms."}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">{a.amenities}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amenities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.labelEn} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-terracotta/30 transition-colors">
                      <div className="w-9 h-9 bg-terracotta/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-terracotta" />
                      </div>
                      <span className="text-sm font-medium text-white/70">
                        {isFr ? item.labelFr : item.labelEn}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-3">{a.location}</h2>
              <p className="text-white/40 text-sm mb-5">Douar Imlil Asni, Imlil 42152 — 6km from Toubkal National Park entrance</p>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src="https://www.google.com/maps?q=31.1324771,-7.9203727&output=embed"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gite Panorama location"
                />
              </div>
            </div>

            {/* Guest Reviews */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-3xl font-bold text-white">
                  {isFr ? "Avis Clients" : "Guest Reviews"}
                </h2>
                <div className="flex items-center gap-2 bg-saffron/10 border border-saffron/20 rounded-full px-4 py-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-saffron text-saffron" />
                    ))}
                  </div>
                  <span className="font-bold text-white text-sm">4.9</span>
                  <span className="text-white/40 text-xs">· 31 Google</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {giteReviews.map((r) => (
                  <div key={r.name} className="relative bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-saffron/20 transition-colors">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5 fill-current" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-saffron text-saffron" />
                      ))}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed italic flex-1">"{r.text}"</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.highlights.map((h) => (
                        <span key={h} className="text-xs bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full font-medium border border-terracotta/20">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <div className="font-semibold text-white text-sm">{r.name}</div>
                      <div className="text-white/30 text-xs">{r.country} · {r.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
