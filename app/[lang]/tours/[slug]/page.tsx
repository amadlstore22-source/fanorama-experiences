import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Users, Clock, CheckCircle, XCircle, Mountain } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDictionary, hasLocale, locales } from "../../dictionaries";
import { getTourBySlug, getAllTours } from "@/content/tours";
import BookingForm from "@/components/tours/BookingForm";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    getAllTours().map((tour) => ({ lang, slug: tour.slug }))
  );
}

export async function generateMetadata({ params }: PageProps<"/[lang]/tours/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  const title = lang === "fr" ? tour.title_fr : tour.title_en;
  return {
    title: `${title} | Fanorama Experiences`,
    description: lang === "fr" ? tour.description_fr : tour.description_en,
  };
}

const difficultyConfig: Record<string, { label: string; color: string; dot: string }> = {
  beginner: { label: "Beginner", color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", dot: "bg-emerald-400" },
  intermediate: { label: "Intermediate", color: "bg-amber-500/15 text-amber-400 border-amber-500/30", dot: "bg-amber-400" },
  advanced: { label: "Advanced", color: "bg-red-500/15 text-red-400 border-red-500/30", dot: "bg-red-400" },
};

const categoryConfig: Record<string, { label: string; color: string }> = {
  mtb: { label: "MTB", color: "bg-terracotta" },
  ebike: { label: "E-BIKE", color: "bg-atlas-green" },
  ski: { label: "SKI", color: "bg-blue-500" },
  trekking: { label: "TREK", color: "bg-saffron" },
};

export default async function TourDetailPage({ params }: PageProps<"/[lang]/tours/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const tour = getTourBySlug(slug);
  if (!tour) notFound();
  const dict = await getDictionary(lang);
  const t = dict.tour;
  const isFr = lang === "fr";

  const title = isFr ? tour.title_fr : tour.title_en;
  const description = isFr ? tour.description_fr : tour.description_en;
  const duration = isFr ? tour.duration_fr : tour.duration;
  const meetingPoint = isFr ? tour.meetingPoint_fr : tour.meetingPoint_en;
  const included = isFr ? tour.included_fr : tour.included_en;
  const notIncluded = isFr ? tour.notIncluded_fr : tour.notIncluded_en;
  const highlights = isFr ? tour.highlights_fr : tour.highlights_en;
  const mapQuery = encodeURIComponent(meetingPoint + ", Morocco");

  const cat = categoryConfig[tour.category] ?? categoryConfig.mtb;
  const diff = difficultyConfig[tour.difficulty] ?? difficultyConfig.beginner;

  return (
    <div className="min-h-screen bg-[#111110]">
      {/* Cinematic hero */}
      <div className="relative h-[60vh] min-h-[480px] bg-charcoal overflow-hidden">
        <Image
          src={tour.images[0] || "/images/placeholder-tour.jpg"}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 md:left-10 text-white/40 text-xs flex items-center gap-2">
          <span>{isFr ? "Excursions" : "Tours"}</span>
          <span>/</span>
          <span className="text-white/70">{title}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-10">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full text-white ${cat.color} tracking-widest shadow-lg`}>
              {cat.label}
            </span>
            <span className={`text-xs font-medium px-3 py-1.5 rounded-full border ${diff.color}`}>
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${diff.dot} mr-1.5`} />
              {t[`difficulty_${tour.difficulty}` as keyof typeof t]}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">{title}</h1>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-5 text-sm text-white/60">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-saffron" />{duration}</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4 text-saffron" />{tour.groupSize.min}–{tour.groupSize.max} {t.persons}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-saffron" />{meetingPoint}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="bg-white/5 border border-white/10 mb-8 p-1 rounded-xl">
                {[
                  { val: "overview", label: t.overview },
                  { val: "itinerary", label: t.itinerary },
                  { val: "included", label: t.included },
                  { val: "practical", label: t.practical },
                ].map(({ val, label }) => (
                  <TabsTrigger
                    key={val}
                    value={val}
                    className="text-white/50 data-[state=active]:bg-terracotta data-[state=active]:text-white rounded-lg text-sm"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <p className="text-white/70 leading-relaxed text-base">{description}</p>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-saffron" />
                    {isFr ? "Points forts" : "Highlights"}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                        <CheckCircle className="w-4 h-4 text-atlas-green mt-0.5 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="itinerary">
                <Accordion defaultValue={["day-0"]} className="space-y-2">
                  {tour.itinerary.map((day, i) => (
                    <AccordionItem
                      key={i}
                      value={`day-${i}`}
                      className="bg-white/5 border border-white/10 rounded-xl px-5 data-[state=open]:border-terracotta/30"
                    >
                      <AccordionTrigger className="font-medium text-white hover:text-saffron hover:no-underline py-4">
                        <span className="flex items-center gap-3">
                          <span className="text-xs font-bold text-terracotta bg-terracotta/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          {isFr ? day.title_fr : day.title_en}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60 leading-relaxed pb-5 pl-11">
                        {isFr ? day.description_fr : day.description_en}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="included">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-atlas-green/10 border border-atlas-green/20 rounded-2xl p-6">
                    <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-atlas-green" /> {t.included}
                    </h4>
                    <ul className="space-y-3">
                      {included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckCircle className="w-3.5 h-3.5 text-atlas-green mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6">
                    <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" /> {t.notIncluded}
                    </h4>
                    <ul className="space-y-3">
                      {notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                          <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="practical" className="space-y-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 text-sm">
                  {[
                    { label: t.meetingPoint, val: meetingPoint },
                    { label: t.groupSize, val: `${tour.groupSize.min}–${tour.groupSize.max} ${t.persons}` },
                    { label: t.difficulty, val: t[`difficulty_${tour.difficulty}` as keyof typeof t] },
                    { label: t.duration, val: duration },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="font-medium text-white/50 w-36 shrink-0">{label}</span>
                      <span className="text-white/80">{val as string}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                  <iframe
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tour meeting point"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm tourName={title} lang={lang} dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
