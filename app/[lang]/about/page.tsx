import { notFound } from "next/navigation";
import Image from "next/image";
import { Heart, Star, Utensils, Award, Home, Globe } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr"
      ? "Notre Histoire | Gîte Panorama Imlil"
      : "Our Story | Gite Panorama Imlil",
    description: lang === "fr"
      ? "La famille Aitidar vous accueille au Gîte Panorama à Imlil depuis 2010 avec une hospitalité berbère authentique."
      : "The Aitidar family welcomes you to Gite Panorama in Imlil since 2010 with authentic Berber hospitality.",
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang === "fr";

  const values = [
    {
      icon: Heart,
      en: "Warm Berber hospitality",
      fr: "Hospitalité berbère chaleureuse",
      descEn: "The Aitidar family treats every guest like family. From the moment you arrive, you'll feel the warmth of genuine Berber hospitality that has earned glowing reviews from guests worldwide.",
      descFr: "La famille Aitidar traite chaque client comme un membre de la famille. Dès votre arrivée, vous ressentirez la chaleur d'une hospitalité berbère authentique qui a valu des avis élogieux de clients du monde entier.",
    },
    {
      icon: Home,
      en: "A true home in the mountains",
      fr: "Un vrai foyer en montagne",
      descEn: "Gite Panorama is our family home. We've designed every room to be comfortable and welcoming, with views of the Atlas Mountains that guests consistently describe as breathtaking.",
      descFr: "Le Gîte Panorama est notre maison familiale. Nous avons conçu chaque chambre pour être confortable et accueillante, avec des vues sur l'Atlas que les clients décrivent toujours comme époustouflantes.",
    },
    {
      icon: Utensils,
      en: "Food that tells a story",
      fr: "Une cuisine qui raconte une histoire",
      descEn: "Breakfast, lunch, and dinner prepared with local ingredients. Our guests consistently say they had the best tagine of their life at Gite Panorama.",
      descFr: "Petit-déjeuner, déjeuner et dîner préparés avec des ingrédients locaux. Nos clients disent régulièrement avoir mangé le meilleur tagine de leur vie au Gîte Panorama.",
    },
    {
      icon: Star,
      en: "Rated among the best in Imlil",
      fr: "Parmi les meilleurs d'Imlil",
      descEn: "4.9★ on Google with 31 reviews. 9.1 Superb on Booking.com with 95 reviews. These scores reflect our commitment to making every stay exceptional.",
      descFr: "4.9★ sur Google avec 31 avis. 9.1 Superbe sur Booking.com avec 95 avis. Ces scores reflètent notre engagement à rendre chaque séjour exceptionnel.",
    },
    {
      icon: Globe,
      en: "Guests from 30+ countries",
      fr: "Clients de plus de 30 pays",
      descEn: "We've welcomed travelers from over 30 countries who come to experience the magic of Imlil, the gateway to Toubkal National Park.",
      descFr: "Nous avons accueilli des voyageurs de plus de 30 pays qui viennent découvrir la magie d'Imlil, la porte d'entrée du Parc National du Toubkal.",
    },
    {
      icon: Award,
      en: "Born and raised in Imlil",
      fr: "Nés et élevés à Imlil",
      descEn: "We are the Aitidar family — we grew up in this village. We know every corner, every trail, every neighbor. This is our home and we're proud to share it with the world.",
      descFr: "Nous sommes la famille Aitidar — nous avons grandi dans ce village. Nous connaissons chaque recoin, chaque sentier, chaque voisin. C'est notre maison et nous sommes fiers de la partager avec le monde.",
    },
  ];

  const hosts = [
    {
      name: "Ismael Aitidar",
      roleEn: "Host & Founder",
      roleFr: "Hôte & Fondateur",
      bioEn: "The heart and soul of Gite Panorama. Ismael has been welcoming guests for over 15 years and knows how to make everyone feel at home in Imlil.",
      bioFr: "Le cœur et l'âme du Gîte Panorama. Ismael accueille des clients depuis plus de 15 ans et sait comment mettre tout le monde à l'aise à Imlil.",
      initial: "I",
    },
    {
      name: "Youssuf Aitidar",
      roleEn: "Host & Manager",
      roleFr: "Hôte & Responsable",
      bioEn: "Kind, attentive, and incredibly welcoming. Youssuf manages the day-to-day running of the gite and ensures every guest has everything they need.",
      bioFr: "Attentionné, généreux et incroyablement accueillant. Youssuf gère le quotidien du gîte et s'assure que chaque client a tout ce dont il a besoin.",
      initial: "Y",
    },
    {
      name: "Lason Aitidar",
      roleEn: "Host & Local Guide",
      roleFr: "Hôte & Guide Local",
      bioEn: "A warm and experienced host who helps guests explore the area around Imlil. Lason's deep knowledge of the local area is unmatched.",
      bioFr: "Un hôte chaleureux et expérimenté qui aide les clients à explorer la région d'Imlil. La connaissance approfondie de Lason de la région locale est inégalée.",
      initial: "L",
    },
  ];

  const stats = [
    { value: "2010", labelEn: "Founded in Imlil", labelFr: "Fondé à Imlil" },
    { value: "9.1", labelEn: "Booking.com Score", labelFr: "Score Booking.com" },
    { value: "4.9★", labelEn: "Google Rating", labelFr: "Note Google" },
    { value: "30+", labelEn: "Countries", labelFr: "Pays" },
  ];

  return (
    <div className="min-h-screen bg-[#111110] pb-20">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[500px] overflow-hidden">
        <Image src="/images/about-team.jpg" alt="The Aitidar family at Gite Panorama Imlil" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-14">
          <div className="inline-flex items-center gap-2 bg-terracotta/20 text-terracotta text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-terracotta/30">
            <Award className="w-3.5 h-3.5" />
            {isFr ? "Famille Aitidar — Imlil, Maroc" : "The Aitidar Family — Imlil, Morocco"}
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">{dict.about.title}</h1>
          <p className="text-white/50 text-xl max-w-xl">{dict.about.subtitle}</p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative bg-atlas-green overflow-hidden">
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
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-saffron/60" />
              <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                {isFr ? "Notre Histoire" : "Our Story"}
              </span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              {isFr ? "Nés à Imlil" : "Born in Imlil"}
            </h2>
            <div className="space-y-4 text-white/55 leading-relaxed">
              {isFr ? (
                <>
                  <p>Tout a commencé dans le village d'Imlil, au pied du mont Toubkal — le plus haut sommet d'Afrique du Nord à 4 167m. La famille Aitidar vit et travaille ici depuis des générations.</p>
                  <p>En 2010, nous avons ouvert les portes du Gîte Panorama pour partager notre coin de paradis avec les voyageurs du monde entier. Ce n'est pas un hôtel — c'est notre maison, et vous êtes nos invités.</p>
                  <p>Chaque repas est préparé avec des ingrédients locaux. Chaque chambre a été aménagée avec soin. Et chaque client repart avec le sourire — et souvent avec la recette du tagine.</p>
                </>
              ) : (
                <>
                  <p>It all started in the village of Imlil, at the foot of Mount Toubkal — North Africa's highest peak at 4,167m. The Aitidar family has lived and worked here for generations.</p>
                  <p>In 2010, we opened the doors of Gite Panorama to share our corner of paradise with travelers from around the world. This isn't a hotel — it's our home, and you are our guests.</p>
                  <p>Every meal is prepared with local ingredients. Every room has been set up with care. And every guest leaves with a smile — and often with the tagine recipe.</p>
                </>
              )}
            </div>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden border border-white/10">
            <Image src="/images/about-team.jpg" alt={isFr ? "La famille Aitidar à Imlil" : "The Aitidar family in Imlil"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Meet the hosts */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-saffron/60" />
              <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                {isFr ? "Vos hôtes" : "Your hosts"}
              </span>
              <div className="h-px w-10 bg-saffron/60" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-3">
              {isFr ? "La Famille Aitidar" : "The Aitidar Family"}
            </h2>
            <p className="text-white/40 text-sm">
              {isFr ? "Des hôtes passionnés qui connaissent chaque coin d'Imlil" : "Passionate hosts who know every corner of Imlil"}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {hosts.map((h) => (
              <div key={h.name} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-saffron rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="font-heading text-2xl font-bold text-white">{h.initial}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-0.5">{h.name}</h3>
                <p className="text-terracotta text-xs font-semibold mb-4 uppercase tracking-wider">
                  {isFr ? h.roleFr : h.roleEn}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  {isFr ? h.bioFr : h.bioEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-saffron/60" />
              <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                {isFr ? "Nos engagements" : "Our commitment"}
              </span>
              <div className="h-px w-10 bg-saffron/60" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-3">
              {isFr ? "Pourquoi Choisir le Gîte Panorama" : "Why Choose Gite Panorama"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.en} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 hover:border-terracotta/30 transition-colors group">
                  <div className="w-10 h-10 bg-terracotta/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-terracotta/20 transition-colors">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1.5 text-sm">{isFr ? v.fr : v.en}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{isFr ? v.descFr : v.descEn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking.com score card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="text-center shrink-0 bg-atlas-green/10 border border-atlas-green/20 rounded-2xl p-6">
              <div className="font-heading text-6xl font-bold text-atlas-green">9.1</div>
              <div className="text-sm font-semibold text-white mt-1">{isFr ? "Superbe" : "Superb"}</div>
              <div className="text-xs text-white/30">Booking.com · 95 {isFr ? "avis" : "reviews"}</div>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: isFr ? "Hôte" : "Host", score: "9.6" },
                { label: isFr ? "Propreté" : "Cleanliness", score: "9.5" },
                { label: isFr ? "Confort" : "Comfort", score: "9.5" },
                { label: isFr ? "Rapport qualité/prix" : "Value for money", score: "9.4" },
                { label: isFr ? "Équipements" : "Facilities", score: "9.2" },
                { label: isFr ? "Emplacement" : "Location", score: "9.2" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-xs text-white/40">{item.label}</span>
                  <span className="font-bold text-white text-sm">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
