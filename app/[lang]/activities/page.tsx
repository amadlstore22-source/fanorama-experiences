import { notFound } from "next/navigation";
import { Clock, Users, MessageCircle } from "lucide-react";
import { getDictionary, hasLocale } from "../dictionaries";
import { getAllActivities } from "@/content/activities";
import BookingForm from "@/components/tours/BookingForm";
import type { Metadata } from "next";

export async function generateMetadata({ params }: PageProps<"/[lang]/activities">): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr"
      ? "Activités à la Journée | Gîte Panorama Imlil"
      : "Day Activities | Gite Panorama Imlil",
    description: lang === "fr"
      ? "Cours de cuisine marocaine, randonnées guidées et expériences locales à Imlil avec la famille Aitidar."
      : "Moroccan cooking classes, guided day hikes, and local experiences in Imlil with the Aitidar family.",
  };
}

const WHATSAPP = "212653936003";

export default async function ActivitiesPage({ params }: PageProps<"/[lang]/activities">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const activities = getAllActivities();
  const isFr = lang === "fr";
  const a = dict.activities;

  return (
    <div className="min-h-screen bg-[#111110] pb-24">
      {/* Header */}
      <div className="relative pt-32 pb-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/60 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-saffron/60" />
            <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
              {isFr ? "Avec la famille Aitidar" : "With the Aitidar family"}
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">{a.title}</h1>
          <p className="text-white/40 text-lg max-w-xl">{a.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Activity cards */}
          <div className="lg:col-span-2 space-y-6">
            {activities.map((activity) => {
              const name = isFr ? activity.nameFr : activity.nameEn;
              const description = isFr ? activity.descriptionFr : activity.descriptionEn;
              const duration = isFr ? activity.durationFr : activity.duration;
              const included = isFr ? activity.includedFr : activity.includedEn;
              const waMessage = `Hi! I'd like to book the "${name}" activity at Gite Panorama.`;

              return (
                <div key={activity.slug} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-terracotta/30 transition-all duration-300 group">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        {activity.highlight && (
                          <span className="inline-block bg-saffron/20 text-saffron text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-saffron/30">
                            {isFr ? "Populaire" : "Popular"}
                          </span>
                        )}
                        <h2 className="font-heading text-2xl font-bold text-white">{name}</h2>
                      </div>
                      <div className="text-right shrink-0">
                        {activity.priceMAD ? (
                          <>
                            <div className="font-heading text-2xl font-bold text-white">{activity.priceMAD} MAD</div>
                            <div className="text-white/40 text-xs">{a.perPerson}</div>
                          </>
                        ) : (
                          <div className="text-white/40 text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                            {isFr ? "Prix sur demande" : "Price on request"}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-white/55 leading-relaxed mb-6">{description}</p>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-white/50">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-terracotta" />
                        {a.duration}: <span className="text-white/70 ml-1">{duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-terracotta" />
                        {isFr ? `Max ${activity.maxPersons} pers.` : `Max ${activity.maxPersons} guests`}
                      </div>
                    </div>

                    {/* Included */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                      <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                        {isFr ? "Ce qui est inclus" : "What's included"}
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {included.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-atlas-green shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMessage)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-[#128C4A] hover:bg-[#0e6e3a] text-white text-sm font-semibold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" /> {isFr ? "Réserver sur WhatsApp" : "Book via WhatsApp"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Coming soon placeholder */}
            <div className="border border-dashed border-white/10 rounded-2xl p-10 text-center">
              <div className="text-3xl mb-3">🏔️</div>
              <p className="text-white/30 text-sm">{a.comingSoon}</p>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm
                tourName={isFr ? "Activité — Gîte Panorama" : "Activity — Gite Panorama"}
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
