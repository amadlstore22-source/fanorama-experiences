import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Wifi, Coffee, Mountain, Wind, Clock, Car, Users, Utensils, Sun, Quote, MapPin, CheckCircle2 } from "lucide-react";
import { getDictionary, hasLocale } from "./dictionaries";
import { roomTypes } from "./accommodation/page";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr
      ? "Gîte Panorama Imlil — Maison d'Hôtes au Pied du Toubkal"
      : "Gite Panorama Imlil — Guesthouse at the Foot of Toubkal",
    description: isFr
      ? "Séjournez au Gîte Panorama à Imlil, Maroc. Vue panoramique sur l'Atlas, repas marocains, hospitalité berbère. Note 4.9★ Google, 9.1 Booking.com."
      : "Stay at Gite Panorama in Imlil, Morocco. Panoramic Atlas views, home-cooked Moroccan meals, Berber hospitality. Rated 4.9★ Google, 9.1 Booking.com.",
    alternates: { canonical: `/${lang}`, languages: { en: "/en", fr: "/fr" } },
  };
}

const amenities = [
  { icon: Mountain, labelEn: "Panoramic Atlas Views", labelFr: "Vue Panoramique Atlas" },
  { icon: Coffee, labelEn: "Breakfast Included", labelFr: "Petit-Déjeuner Inclus" },
  { icon: Wifi, labelEn: "Free WiFi", labelFr: "WiFi Gratuit" },
  { icon: Wind, labelEn: "Hammam / Steam Room", labelFr: "Hammam" },
  { icon: Clock, labelEn: "24h Front Desk", labelFr: "Réception 24h/24" },
  { icon: Car, labelEn: "Airport Shuttle", labelFr: "Navette Aéroport" },
  { icon: Sun, labelEn: "Sun Terrace & Garden", labelFr: "Terrasse & Jardin" },
  { icon: Utensils, labelEn: "Home-Cooked Moroccan Meals", labelFr: "Repas Marocains Maison" },
  { icon: Users, labelEn: "Family Rooms Available", labelFr: "Chambres Familiales" },
];

const reviews = [
  {
    name: "Rhys R.",
    country: "United Kingdom 🇬🇧",
    rating: 5,
    text: "A wonderful welcoming host family. Stunning views from the tranquil terrace overlooking Imlil and the walnut groves. A real sanctuary of peace.",
    highlights: ["Great view", "Quiet", "Great value"],
  },
  {
    name: "Oussama Z.",
    country: "Morocco 🇲🇦",
    rating: 5,
    text: "The view is simply magnificent — the most beautiful I have ever seen of the mountains and valley. I tasted the best tagine of my life here.",
    highlights: ["Great view", "Best tagine"],
  },
  {
    name: "Leïla C.",
    country: "France 🇫🇷",
    rating: 5,
    text: "What a view! That alone makes the experience incredible. We highly recommend this guesthouse in the hills above Imlil. We spent three nights there. Fantastic!",
    highlights: ["Great view", "Quiet", "3-night stay"],
  },
  {
    name: "Felicia M.",
    country: "Nigeria 🇳🇬",
    rating: 5,
    text: "My hosts welcomed me with classic Berber hospitality. The accommodation was truly lovely, the food was delicious, and the breakfast view is unforgettable.",
    highlights: ["Hospitality", "Great view", "Great value"],
  },
];

const stats = [
  { value: "4.9★", labelEn: "Google Rating", labelFr: "Note Google" },
  { value: "9.2", labelEn: "Booking.com Score", labelFr: "Score Booking.com" },
  { value: "500+", labelEn: "Happy Guests", labelFr: "Clients Satisfaits" },
  { value: "30+", labelEn: "Countries", labelFr: "Pays" },
];

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang === "fr";

  return (
    <div className="min-h-screen bg-[#111110]">

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/gite/gite-panorama-exterior.jpg')" }} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-saffron/60" />
            <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
              Imlil · Atlas Mountains · Morocco
            </span>
            <div className="h-px w-12 bg-saffron/60" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
            {dict.hero.tagline}
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {dict.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/accommodation`}
              className="inline-flex items-center justify-center h-12 px-10 text-base rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold shadow-lg shadow-terracotta/30 hover:shadow-terracotta/50 hover:scale-105 transition-all duration-200">
              {dict.hero.ctaRooms}
            </Link>
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center justify-center h-12 px-8 text-base rounded-full border border-white/60 text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white font-medium">
              {dict.hero.ctaContact}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="text-saffron">★★★★★</span> 4.9 · Google Reviews
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>9.2 Superb · Booking.com</span>
            <span className="w-px h-3 bg-white/20" />
            <span>Family-run · Imlil, Morocco</span>
          </div>
        </div>

        {/* Terrain fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111110] to-transparent" />
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative bg-atlas-green overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={s.value} className={`relative ${i < 3 ? "md:border-r border-white/10" : ""}`}>
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">{isFr ? s.labelFr : s.labelEn}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />
      </section>

      {/* ── STORY TEASER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-[420px] order-2 md:order-1">
            <Image
              src="/images/gite/gite-panorama-exterior.jpg"
              alt="Gite Panorama family guesthouse in Imlil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="flex gap-2">
                {["Lahsen", "Smail", "Mohamed"].map((name) => (
                  <div key={name} className="w-9 h-9 rounded-full bg-terracotta/80 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {name[0]}
                  </div>
                ))}
                <div className="ml-2 text-white/70 text-xs self-center leading-tight">
                  {isFr ? "Lahsen, Smail & Mohamed\nVotre famille d'hôtes" : "Lahsen, Smail & Mohamed\nYour host family"}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-saffron/60" />
              <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                {isFr ? "Notre histoire" : "Our story"}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {isFr ? "Un héritage né dans l'Atlas" : "A Legacy Born in the Atlas"}
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 text-lg">
              {isFr
                ? "Notre père Lahsen a grandi dans les montagnes du Haut Atlas et est devenu guide de montagne professionnel dans les années 1980. Depuis lors, il a accueilli des voyageurs du monde entier avec la même chaleur berbère."
                : "Our father Lahsen grew up in the High Atlas mountains and became a professional mountain guide in the 1980s. Since then, he has welcomed travellers from around the world with the same Berber warmth."}
            </p>
            <p className="text-white/40 leading-relaxed mb-8">
              {isFr
                ? "Ses fils Smail et Mohamed ont perpétué cet héritage, transformant la maison familiale en ce gîte — un lieu où authenticité et hospitalité se conjuguent au quotidien."
                : "His sons Smail and Mohamed carried that legacy forward, turning the family home into this gite — a place where authenticity and hospitality are a way of life."}
            </p>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-light transition-colors group"
            >
              {isFr ? "Rencontrer la famille" : "Meet the family"}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ROOMS PREVIEW ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-6 bg-saffron/60" />
          <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
            {isFr ? "Hébergement" : "Accommodation"}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            {dict.rooms.title}
          </h2>
          <Link href={`/${lang}/accommodation`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta hover:text-terracotta-light transition-colors shrink-0">
            {dict.rooms.viewAll} →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roomTypes.slice(0, 3).map((room) => {
            const name = isFr ? room.nameFr : room.nameEn;
            const beds = isFr ? room.bedsFr : room.beds;
            return (
              <Link key={room.nameEn} href={`/${lang}/accommodation`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-terracotta/40 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 bg-white/5">
                  <Image
                    src="/images/gite/gite-panorama-exterior.jpg"
                    alt={name}
                    fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {room.highlight && (
                    <div className="absolute top-3 right-3 bg-saffron text-[#111110] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {isFr ? "Populaire" : "Popular"}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-bold text-lg">{room.priceMAD} MAD</span>
                    <span className="text-white/60 text-xs"> {dict.rooms.perNight}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{name}</h3>
                  <p className="text-white/40 text-sm mb-3">{beds}{room.size ? ` · ${room.size}` : ""} · {isFr ? `Max ${room.maxPersons} pers.` : `Max ${room.maxPersons} guest${room.maxPersons > 1 ? "s" : ""}`}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(isFr ? room.featuresFr : room.features).slice(0, 3).map((f) => (
                      <span key={f} className="flex items-center gap-1 text-xs text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-atlas-green" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="bg-[#0d0d0c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-saffron/60" />
            <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
              {isFr ? "Services" : "Facilities"}
            </span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-white mb-10">
            {dict.accommodation.amenities}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
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
      </section>

      {/* ── REVIEWS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-saffron/60" />
              <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                {isFr ? "Avis vérifiés" : "Verified reviews"}
              </span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white">{dict.testimonials.title}</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-saffron/10 border border-saffron/20 rounded-full px-4 py-2 shrink-0">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-saffron text-saffron" />
              ))}
            </div>
            <span className="font-bold text-white text-sm">4.9</span>
            <span className="text-white/40 text-xs">· 31 Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reviews.map((r) => (
            <div key={r.name} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-saffron/20 transition-colors">
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
                <div className="text-white/30 text-xs">{r.country}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATION STRIP ── */}
      <section className="bg-[#0d0d0c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-saffron/60" />
                <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                  {isFr ? "Emplacement" : "Location"}
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-white mb-4">
                {isFr ? "Au cœur d'Imlil" : "In the Heart of Imlil"}
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                {isFr
                  ? "À seulement 400m de la cascade d'Imlil et à l'entrée du Parc National du Toubkal, notre gîte est idéalement placé pour explorer le Haut Atlas. Marrakech est à 63 km."
                  : "Just 400m from Imlil waterfall and at the gateway to Toubkal National Park, our gite is the perfect base for the High Atlas. Marrakech is 63 km away."}
              </p>
              <div className="flex flex-col gap-2 text-white/40 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                  <span>Douar Imlil Asni, Imlil 42152, Morocco</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-1 text-white/30 text-xs">
                  <span>🏔 Cascade Imlil · 400m</span>
                  <span>✈️ Marrakech Airport · 63 km</span>
                  <span>🏙 Marrakech · 55 km</span>
                </div>
              </div>
            </div>
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
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-saffron/60" />
          <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
            {isFr ? "Réservez votre séjour" : "Book your stay"}
          </span>
          <div className="h-px w-10 bg-saffron/60" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
          {isFr ? "Prêt à venir nous voir ?" : "Ready to visit us?"}
        </h2>
        <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
          {isFr
            ? "Réservez directement avec nous pour le meilleur tarif. Réponse garantie sous 24h."
            : "Book directly with us for the best rate. Response guaranteed within 24 hours."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${lang}/accommodation`}
            className="inline-flex items-center justify-center h-12 px-10 text-base rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-semibold shadow-lg shadow-terracotta/30 hover:scale-105 transition-all duration-200">
            {dict.rooms.viewAll}
          </Link>
          <a href="https://wa.me/212653936003?text=Hello! I'd like to book a room at Gite Panorama."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 text-base rounded-full border border-[#25D366]/40 text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all duration-200 font-medium hover:scale-105">
            💬 WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
