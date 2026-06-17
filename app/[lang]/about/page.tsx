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
      ? "Famille Aitidar d'Imlil — guides de montagne passionnés depuis 2010. Découvrez notre histoire, nos valeurs et notre engagement envers un tourisme authentique dans l'Atlas."
      : "The Aitidar family from Imlil — passionate mountain guides since 2010. Learn our story, values, and commitment to authentic adventure in the Atlas Mountains.",
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
    },
    {
      name: "Youssuf Aitidar",
      roleEn: "Mountain Guide & Host",
      roleFr: "Guide de Montagne & Hôte",
      bioEn: "A kind, polite, and incredibly welcoming guide who manages Gite Panorama and leads trekking and biking tours. Guests love his warmth and local knowledge.",
      bioFr: "Un guide attentionné, poli et incroyablement accueillant qui gère le Gîte Panorama et mène des circuits de randonnée et de vélo. Les clients adorent sa chaleur et sa connaissance locale.",
    },
    {
      name: "Lason Aitidar",
      roleEn: "Senior Guide & Trek Specialist",
      roleFr: "Guide Senior & Spécialiste Trek",
      bioEn: "A really nice guy and experienced elder guide who helps guests choose the best trek for their level. Lason's route knowledge across the High Atlas is unmatched.",
      bioFr: "Un guide senior vraiment sympathique qui aide les clients à choisir le meilleur trek selon leur niveau. La connaissance des itinéraires de Lason dans le Haut Atlas est inégalée.",
    },
  ];

  const stats = [
    { value: "2010", labelEn: "Founded in Imlil", labelFr: "Fondé à Imlil" },
    { value: "9.1", labelEn: "Booking.com Score", labelFr: "Score Booking.com" },
    { value: "4.9★", labelEn: "Google Rating", labelFr: "Note Google" },
    { value: "30+", labelEn: "Countries", labelFr: "Pays" },
  ];

  return (
    <div className="min-h-screen bg-sand pt-20 pb-20">
      {/* Hero */}
      <div className="relative bg-charcoal text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-team.jpg" alt="Fanorama team in Imlil" fill className="object-cover opacity-30" sizes="100vw" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-terracotta/20 text-terracotta text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-terracotta/30">
            <Award className="w-3.5 h-3.5" />
            {isFr ? "Famille Aitidar — Imlil, Maroc" : "The Aitidar Family — Imlil, Morocco"}
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">{dict.about.title}</h1>
          <p className="text-white/70 text-xl">{dict.about.subtitle}</p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-terracotta text-white py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <div className="font-heading text-3xl md:text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-white/70 text-xs uppercase tracking-wider">{isFr ? s.labelFr : s.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-5">
              {isFr ? "Nés dans l'Atlas" : "Born in the Atlas"}
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              {isFr ? (
                <>
                  <p>Tout a commencé dans le village d'Imlil, au pied du mont Toubkal — le plus haut sommet d'Afrique du Nord à 4 167m. La famille Aitidar vit et travaille ici depuis des générations, et c'est de cette passion profonde pour la montagne qu'est née Fanorama Experiences.</p>
                  <p>Depuis 2010, nous guidons des aventuriers du monde entier — des familles aux cyclistes confirmés, des randonneurs aux skieurs — à travers nos montagnes. Chaque circuit est conçu pour être authentique, sécurisé et inoubliable.</p>
                  <p>Le Gîte Panorama, notre hébergement familial à Imlil, accueille les voyageurs avec des repas marocains faits maison, des vues époustouflantes sur la vallée et l'Atlas, et une chaleur berbère qui a valu à notre famille des avis élogieux de voyageurs de plus de 30 pays.</p>
                </>
              ) : (
                <>
                  <p>It all started in the village of Imlil, at the foot of Mount Toubkal — North Africa's highest peak at 4,167m. The Aitidar family has lived and worked here for generations, and it is from this deep love of the mountains that Fanorama Experiences was born.</p>
                  <p>Since 2010, we've been guiding adventurers from around the world — families, experienced cyclists, trekkers, and skiers — through our beloved mountains. Every experience is designed to be authentic, safe, and unforgettable.</p>
                  <p>Gite Panorama, our family-run guesthouse in Imlil, welcomes travelers with home-cooked Moroccan meals, breathtaking views over the valley and Atlas mountains, and a genuine Berber warmth that has earned us glowing reviews from guests across 30+ countries.</p>
                </>
              )}
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-border">
            <Image src="/images/about-team.jpg" alt="The Aitidar family in Imlil" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>

        {/* Meet the guides */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-3">
            {isFr ? "Vos Guides" : "Your Guides"}
          </h2>
          <p className="text-center text-muted-warm mb-10 text-sm">
            {isFr ? "Des montagnards passionnés qui connaissent chaque piste" : "Passionate mountaineers who know every trail"}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {guides.map((g) => (
              <div key={g.name} className="bg-white rounded-2xl border border-border p-6 text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-0.5">{g.name}</h3>
                <p className="text-terracotta text-xs font-medium mb-3 uppercase tracking-wider">
                  {isFr ? g.roleFr : g.roleEn}
                </p>
                <p className="text-sm text-muted-warm leading-relaxed">
                  {isFr ? g.bioFr : g.bioEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-charcoal text-center mb-3">
            {isFr ? "Nos Valeurs" : "Our Values"}
          </h2>
          <p className="text-center text-muted-warm mb-10 text-sm">
            {isFr ? "Ce qui nous différencie depuis 2010" : "What sets us apart since 2010"}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.en} className="bg-white rounded-2xl border border-border p-6 flex gap-4">
                  <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1 text-sm">{isFr ? v.fr : v.en}</h3>
                    <p className="text-xs text-muted-warm leading-relaxed">{isFr ? v.descFr : v.descEn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking.com scores */}
        <div className="bg-white rounded-2xl border border-border p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="text-center shrink-0">
              <div className="font-heading text-6xl font-bold text-atlas-green">9.1</div>
              <div className="text-sm font-semibold text-charcoal mt-1">{isFr ? "Superbe" : "Superb"}</div>
              <div className="text-xs text-muted-warm">Booking.com · 95 {isFr ? "avis" : "reviews"}</div>
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
                <div key={item.label} className="flex items-center justify-between bg-sand rounded-xl px-4 py-3">
                  <span className="text-xs text-muted-warm">{item.label}</span>
                  <span className="font-bold text-charcoal text-sm">{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
