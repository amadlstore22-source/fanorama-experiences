import { notFound } from "next/navigation";
import Image from "next/image";
import { Shield, Heart, Users, Star, Mountain, Utensils, Award } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Notre Histoire | Fanorama Experiences" : "Our Story | Fanorama Experiences",
    description: lang === "fr"
      ? "Famille Aitidar d'Imlil — guides de montagne passionnés depuis 2010."
      : "The Aitidar family from Imlil — passionate mountain guides since 2010.",
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang === "fr";

  const values = [
    {
      icon: Users,
      en: "Small groups, big experiences",
      fr: "Petits groupes, grandes expériences",
      descEn: "We cap every tour at 12 people maximum — so you get personal attention, flexible pacing, and a genuine connection with your guides and the landscape.",
      descFr: "Nous limitons chaque circuit à 12 personnes maximum — pour une attention personnalisée, un rythme flexible et une vraie connexion avec vos guides et les paysages.",
    },
    {
      icon: Heart,
      en: "Born and raised in Imlil",
      fr: "Nés et élevés à Imlil",
      descEn: "We are the Aitidar family — we grew up on these trails. We know every pass, every village, every hidden waterfall. This isn't a job for us, it's our home.",
      descFr: "Nous sommes la famille Aitidar — nous avons grandi sur ces pistes. Nous connaissons chaque col, chaque village, chaque cascade cachée. Ce n'est pas un métier pour nous, c'est notre maison.",
    },
    {
      icon: Shield,
      en: "Safety on every trail",
      fr: "Sécurité sur chaque piste",
      descEn: "All our guides are certified mountain professionals with first aid training. Every tour has a 4x4 support vehicle, mechanical assistance, and carefully planned routes.",
      descFr: "Tous nos guides sont des professionnels de montagne certifiés avec formation aux premiers secours. Chaque circuit dispose d'un véhicule 4x4, d'assistance mécanique et d'itinéraires soigneusement planifiés.",
    },
    {
      icon: Star,
      en: "Authentic cultural immersion",
      fr: "Immersion culturelle authentique",
      descEn: "Mint tea with Berber families, home-cooked tagines, overnight stays in mountain gites — we connect you with the real Morocco, not the tourist version.",
      descFr: "Thé à la menthe chez des familles berbères, tagines faits maison, nuits dans des gîtes de montagne — nous vous connectons au vrai Maroc, pas à sa version touristique.",
    },
    {
      icon: Mountain,
      en: "Every level welcome",
      fr: "Tous niveaux bienvenus",
      descEn: "From beginners on e-bikes to advanced enduro riders, from families trekking to solo skiers — we design experiences for everyone who loves the outdoors.",
      descFr: "Des débutants en e-bike aux riders enduro confirmés, des familles en randonnée aux skieurs solos — nous concevons des expériences pour tous les amoureux du plein air.",
    },
    {
      icon: Utensils,
      en: "Food that tells a story",
      fr: "Une cuisine qui raconte une histoire",
      descEn: "Breakfast, lunch, and dinner prepared with local ingredients. Our guests consistently say they had the best tagine of their life at Gite Panorama.",
      descFr: "Petit-déjeuner, déjeuner et dîner préparés avec des ingrédients locaux. Nos clients disent régulièrement avoir mangé le meilleur tagine de leur vie au Gîte Panorama.",
    },
  ];

  const guides = [
    {
      name: "Ismael Aitidar",
      roleEn: "Head Guide & Founder",
      roleFr: "Guide Principal & Fondateur",
      bioEn: "Expert mountain guide, cyclist, and the heart of Fanorama Experiences. Ismael has been leading tours in the Atlas for over 15 years and knows every trail intimately.",
      bioFr: "Guide de montagne expert, cycliste et âme de Fanorama Experiences. Ismael guide des circuits dans l'Atlas depuis plus de 15 ans et connaît chaque piste intimement.",
      initial: "I",
    },
    {
      name: "Youssuf Aitidar",
      roleEn: "Mountain Guide & Host",
      roleFr: "Guide de Montagne & Hôte",
      bioEn: "A kind, polite, and incredibly welcoming guide who manages Gite Panorama and leads trekking and biking tours. Guests love his warmth and local knowledge.",
      bioFr: "Un guide attentionné, poli et incroyablement accueillant qui gère le Gîte Panorama et mène des circuits de randonnée et de vélo.",
      initial: "Y",
    },
    {
      name: "Lason Aitidar",
      roleEn: "Senior Guide & Trek Specialist",
      roleFr: "Guide Senior & Spécialiste Trek",
      bioEn: "A really nice guy and experienced elder guide who helps guests choose the best trek for their level. Lason's route knowledge across the High Atlas is unmatched.",
      bioFr: "Un guide senior vraiment sympathique qui aide les clients à choisir le meilleur trek selon leur niveau. La connaissance des itinéraires de Lason dans le Haut Atlas est inégalée.",
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
      <div className="relative h-[70vh] min-h-[560px] overflow-hidden">
        <Image src="/images/about-team.jpg" alt="Fanorama team in Imlil" fill className="object-cover" sizes="100vw" />
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
              {isFr ? "Nés dans l'Atlas" : "Born in the Atlas"}
            </h2>
            <div className="space-y-4 text-white/55 leading-relaxed">
              {isFr ? (
                <>
                  <p>Tout a commencé dans le village d'Imlil, au pied du mont Toubkal — le plus haut sommet d'Afrique du Nord à 4 167m. La famille Aitidar vit et travaille ici depuis des générations, et c'est de cette passion profonde pour la montagne qu'est née Fanorama Experiences.</p>
                  <p>Depuis 2010, nous guidons des aventuriers du monde entier à travers nos montagnes. Chaque circuit est conçu pour être authentique, sécurisé et inoubliable.</p>
                  <p>Le Gîte Panorama, notre hébergement familial à Imlil, accueille les voyageurs avec des repas marocains faits maison et une chaleur berbère authentique.</p>
                </>
              ) : (
                <>
                  <p>It all started in the village of Imlil, at the foot of Mount Toubkal — North Africa's highest peak at 4,167m. The Aitidar family has lived and worked here for generations, and it is from this deep love of the mountains that Fanorama Experiences was born.</p>
                  <p>Since 2010, we've been guiding adventurers from around the world through our beloved mountains. Every experience is designed to be authentic, safe, and unforgettable.</p>
                  <p>Gite Panorama, our family-run guesthouse in Imlil, welcomes travelers with home-cooked Moroccan meals and a genuine Berber warmth that has earned glowing reviews from guests across 30+ countries.</p>
                </>
              )}
            </div>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden border border-white/10">
            <Image src="/images/about-team.jpg" alt="The Aitidar family in Imlil" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Meet the guides */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-saffron/60" />
              <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
                {isFr ? "L'équipe" : "The team"}
              </span>
              <div className="h-px w-10 bg-saffron/60" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-white mb-3">
              {isFr ? "Vos Guides" : "Your Guides"}
            </h2>
            <p className="text-white/40 text-sm">
              {isFr ? "Des montagnards passionnés qui connaissent chaque piste" : "Passionate mountaineers who know every trail"}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {guides.map((g) => (
              <div key={g.name} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-saffron rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="font-heading text-2xl font-bold text-white">{g.initial}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-0.5">{g.name}</h3>
                <p className="text-terracotta text-xs font-semibold mb-4 uppercase tracking-wider">
                  {isFr ? g.roleFr : g.roleEn}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  {isFr ? g.bioFr : g.bioEn}
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
              {isFr ? "Nos Valeurs" : "Our Values"}
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

        {/* Booking.com scores */}
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
