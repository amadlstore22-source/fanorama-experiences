import { notFound } from "next/navigation";
import Image from "next/image";
import { Star, Wifi, Coffee, Mountain, Wind, Clock, Car, Users, Utensils, Sun } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import BookingForm from "@/components/tours/BookingForm";
import type { Metadata } from "next";

const giteReviews = [
  {
    name: "Rhys Rogers",
    country: "United Kingdom 🇬🇧",
    badge: "Local Guide · 27 reviews",
    rating: 5,
    text: "A wonderful welcoming host family. Ismael is also an expert guide. Stunning views from the tranquil terrace overlooking Imlil and the walnut groves. 10 minutes walk to waterfall and 15 minutes to Imlil centre. A real sanctuary of peace. Highly recommend.",
    highlights: ["Great view", "Quiet", "Great value"],
  },
  {
    name: "Oussama Z",
    country: "Morocco 🇲🇦",
    badge: "Local Guide · 31 reviews",
    rating: 5,
    text: "The Panorama Imlil guesthouse is absolutely exceptional. The view is simply magnificent — the most beautiful I have ever seen of the mountains and valley. The rooms are clean and spacious. I tasted the best tagine of my life here, surpassing anything I have ever experienced, and I am Moroccan.",
    highlights: ["Great view", "Quiet", "Great value"],
  },
  {
    name: "Tomas John",
    country: "Spain 🇪🇸",
    badge: "Verified Guest",
    rating: 5,
    text: "A fantastic experience. We arrived very late, and he was incredibly helpful from the very beginning. He even took us to a great restaurant and called ahead to let them know we were arriving. You can tell he truly cares about his guests' comfort. Highly recommended.",
    highlights: ["Great service", "Welcoming"],
  },
  {
    name: "Leïla Calmet",
    country: "France 🇫🇷",
    badge: "Verified Guest · 5 reviews",
    rating: 5,
    text: "What a view! That alone makes the experience incredible. We highly recommend this guesthouse in the hills above Imlil — less than 5 minutes from the village and its shops. We spent three nights there. Fantastic!",
    highlights: ["Great view", "Quiet"],
  },
  {
    name: "Luc Maessen",
    country: "Belgium 🇧🇪",
    badge: "Local Guide · 21 reviews",
    rating: 5,
    text: "Price/quality is perfect. Views from the balcony are lovely. We had a decent breakfast and for this price you get a perfect deal. The hotel is located only 10–15 minutes walk from the Imlil waterfall. Our host advised us to do the hike up Talamrout mountain, which had 360° views over the entire area.",
    highlights: ["Great value", "Great view"],
  },
  {
    name: "Felicia Meshach",
    country: "Nigeria 🇳🇬",
    badge: "Local Guide · 19 reviews",
    rating: 5,
    text: "This was one of the highlights of my trip through Morocco. My hosts, the Aitidar family, welcomed me with classic Berber hospitality. The accommodation was truly lovely, the food was delicious, and the views of the Atlas mountains were stunning. I will certainly return.",
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

const roomTypes = [
  {
    nameEn: "Single Room with Mountain View",
    nameFr: "Chambre Simple Vue Montagne",
    size: "15 m²",
    beds: "1 single bed",
    bedsFr: "1 lit simple",
    maxPersons: 1,
    priceMAD: 206,
    features: ["Mountain view", "Private bathroom", "Terrace", "Coffee machine", "Hairdryer"],
    featuresFr: ["Vue montagne", "Salle de bain privée", "Terrasse", "Machine à café", "Sèche-cheveux"],
  },
  {
    nameEn: "Double Room",
    nameFr: "Chambre Double",
    size: "16 m²",
    beds: "2 double beds",
    bedsFr: "2 lits doubles",
    maxPersons: 2,
    priceMAD: 233,
    features: ["Mountain & garden view", "Private bathroom", "Terrace", "Fireplace", "Washing machine"],
    featuresFr: ["Vue montagne & jardin", "Salle de bain privée", "Terrasse", "Cheminée", "Machine à laver"],
  },
  {
    nameEn: "Deluxe Double Room with Balcony",
    nameFr: "Chambre Double Deluxe avec Balcon",
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
    nameEn: "Deluxe Double or Twin Room with Balcony",
    nameFr: "Chambre Double ou Twin Deluxe avec Balcon",
    size: null,
    beds: "2 single beds",
    bedsFr: "2 lits simples",
    maxPersons: 2,
    priceMAD: 403,
    features: ["Balcony", "Private bathroom", "Breakfast included"],
    featuresFr: ["Balcon", "Salle de bain privée", "Petit-déjeuner inclus"],
  },
  {
    nameEn: "Double or Twin Room with Terrace",
    nameFr: "Chambre Double ou Twin avec Terrasse",
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
    <div className="min-h-screen bg-sand pt-20 pb-20">
      {/* Hero */}
      <div className="relative h-80 md:h-[480px] bg-charcoal">
        <Image src="/images/gite/gite-panorama-exterior.jpg" alt="Gite Panorama Imlil" fill priority className="object-cover opacity-80" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 bg-saffron/20 text-saffron text-xs font-medium px-3 py-1.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-saffron" /> 4.9★ · 31 Google Reviews
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full">
              9.1 Superb · Booking.com
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">{a.title}</h1>
          <p className="text-white/70 mt-2 text-lg">{a.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            <p className="text-charcoal/80 leading-relaxed text-lg">{a.description}</p>

            {/* Booking.com score */}
            <div className="bg-white rounded-2xl border border-border p-6 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="text-center shrink-0">
                <div className="font-heading text-5xl font-bold text-atlas-green">9.1</div>
                <div className="text-sm font-semibold text-charcoal mt-1">{isFr ? "Superbe" : "Superb"}</div>
                <div className="text-xs text-muted-warm">Booking.com · 95 {isFr ? "avis" : "reviews"}</div>
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
                  <div key={item.label} className="flex items-center justify-between bg-sand rounded-xl px-3 py-2">
                    <span className="text-xs text-muted-warm">{item.label}</span>
                    <span className="font-bold text-charcoal text-sm">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
                {isFr ? "Types de Chambres" : "Room Types"}
              </h2>
              <div className="space-y-4">
                {roomTypes.map((room) => (
                  <div
                    key={room.nameEn}
                    className={`bg-white rounded-2xl border p-5 ${room.highlight ? "border-terracotta/40 ring-1 ring-terracotta/20" : "border-border"}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-charcoal">{isFr ? room.nameFr : room.nameEn}</h3>
                          {room.highlight && (
                            <span className="text-xs bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-full font-medium">
                              {isFr ? "Populaire" : "Most Popular"}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-warm mt-1">
                          {isFr ? room.bedsFr : room.beds}
                          {room.size ? ` · ${room.size}` : ""}
                          {" · "}{isFr ? `Max ${room.maxPersons} pers.` : `Max ${room.maxPersons} person${room.maxPersons > 1 ? "s" : ""}`}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {(isFr ? room.featuresFr : room.features).map((f) => (
                            <span key={f} className="text-xs bg-sand text-muted-warm px-2 py-0.5 rounded-full border border-border">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-xs text-muted-warm">{isFr ? "À partir de" : "From"}</div>
                        <div className="font-heading text-2xl font-bold text-terracotta">MAD {room.priceMAD}</div>
                        <div className="text-xs text-muted-warm">{isFr ? "/ nuit" : "/ night"}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-warm mt-3">
                {isFr
                  ? "* Prix incluant taxes. Petit-déjeuner inclus dans la plupart des chambres. Contactez-nous pour disponibilités."
                  : "* Prices include taxes. Breakfast included in most rooms. Contact us for availability."}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">{a.amenities}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {amenities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.labelEn} className="flex items-center gap-3 bg-white rounded-xl border border-border p-4">
                      <div className="w-9 h-9 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-terracotta" />
                      </div>
                      <span className="text-sm font-medium text-charcoal">
                        {isFr ? item.labelFr : item.labelEn}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">{a.location}</h2>
              <p className="text-muted-warm text-sm mb-4">Douar Imlil Asni, Imlil 42152 — 6km from Toubkal National Park entrance</p>
              <div className="rounded-2xl overflow-hidden border border-border h-64">
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-2xl font-bold text-charcoal">Guest Reviews</h2>
                <div className="flex items-center gap-2 bg-saffron/10 border border-saffron/30 rounded-full px-4 py-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-saffron text-saffron" />
                    ))}
                  </div>
                  <span className="font-bold text-charcoal text-sm">4.9</span>
                  <span className="text-muted-warm text-xs">· 31 Google reviews</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {giteReviews.map((r) => (
                  <div key={r.name} className="bg-white rounded-2xl border border-border p-5 flex flex-col gap-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-saffron text-saffron" />
                      ))}
                    </div>
                    <p className="text-charcoal/80 text-sm leading-relaxed italic flex-1">"{r.text}"</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {r.highlights.map((h) => (
                        <span key={h} className="text-xs bg-terracotta/10 text-terracotta px-2.5 py-0.5 rounded-full font-medium">{h}</span>
                      ))}
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="font-semibold text-charcoal text-sm">{r.name}</div>
                      <div className="text-muted-warm text-xs">{r.country}</div>
                      <div className="text-muted-warm/70 text-xs mt-0.5">{r.badge}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm
                tourName={isFr ? "Gîte Panorama — Séjour" : "Gite Panorama — Accommodation"}
                lang={lang}
                dict={dict}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
