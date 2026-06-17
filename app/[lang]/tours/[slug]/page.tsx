import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Users, Clock, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

const difficultyColor: Record<string, string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-red-100 text-red-700",
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

  return (
    <div className="min-h-screen bg-sand pt-20">
      {/* Hero image */}
      <div className="relative h-72 md:h-96 bg-charcoal">
        <Image
          src={tour.images[0] || "/images/placeholder-tour.jpg"}
          alt={title}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex gap-2 mb-3 flex-wrap">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {tour.category.toUpperCase()}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficultyColor[tour.difficulty]}`}>
              {t[`difficulty_${tour.difficulty}` as keyof typeof t]}
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">{title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Quick info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-warm mb-8 pb-6 border-b border-border">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-terracotta" />{duration}</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-terracotta" />{tour.groupSize.min}–{tour.groupSize.max} {t.persons}</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-terracotta" />{meetingPoint}</span>
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="bg-sand-dark mb-6">
                <TabsTrigger value="overview">{t.overview}</TabsTrigger>
                <TabsTrigger value="itinerary">{t.itinerary}</TabsTrigger>
                <TabsTrigger value="included">{t.included}</TabsTrigger>
                <TabsTrigger value="practical">{t.practical}</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <p className="text-charcoal/80 leading-relaxed">{description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle className="w-4 h-4 text-atlas-green mt-0.5 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="itinerary">
                <Accordion defaultValue={["day-0"]}>
                  {tour.itinerary.map((day, i) => (
                    <AccordionItem key={i} value={`day-${i}`}>
                      <AccordionTrigger className="font-medium text-charcoal">
                        {isFr ? day.title_fr : day.title_en}
                      </AccordionTrigger>
                      <AccordionContent className="text-charcoal/70 leading-relaxed">
                        {isFr ? day.description_fr : day.description_en}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="included">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-atlas-green" /> {t.included}
                    </h4>
                    <ul className="space-y-2">
                      {included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <CheckCircle className="w-3.5 h-3.5 text-atlas-green mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400" /> {t.notIncluded}
                    </h4>
                    <ul className="space-y-2">
                      {notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="practical" className="space-y-4">
                <div className="bg-white rounded-xl border border-border p-6 space-y-3 text-sm">
                  <div className="flex gap-4"><span className="font-medium text-charcoal w-36">{t.meetingPoint}</span><span className="text-charcoal/70">{meetingPoint}</span></div>
                  <div className="flex gap-4"><span className="font-medium text-charcoal w-36">{t.groupSize}</span><span className="text-charcoal/70">{tour.groupSize.min}–{tour.groupSize.max} {t.persons}</span></div>
                  <div className="flex gap-4"><span className="font-medium text-charcoal w-36">{t.difficulty}</span><span className="text-charcoal/70">{t[`difficulty_${tour.difficulty}` as keyof typeof t]}</span></div>
                  <div className="flex gap-4"><span className="font-medium text-charcoal w-36">{t.duration}</span><span className="text-charcoal/70">{duration}</span></div>
                </div>
                <div className="rounded-xl overflow-hidden border border-border h-64">
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
