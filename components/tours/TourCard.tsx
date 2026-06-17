import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight, Mountain } from "lucide-react";
import type { Tour } from "@/content/tours";

type Props = { tour: Tour; lang: string; bookLabel?: string };

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  mtb: { label: "MTB", color: "text-terracotta", bg: "bg-terracotta" },
  ebike: { label: "E-BIKE", color: "text-atlas-green", bg: "bg-atlas-green" },
  ski: { label: "SKI", color: "text-blue-500", bg: "bg-blue-500" },
  trekking: { label: "TREK", color: "text-saffron", bg: "bg-saffron" },
};

const difficultyDot: Record<string, string> = {
  beginner: "bg-emerald-400",
  intermediate: "bg-amber-400",
  advanced: "bg-red-400",
};

export default function TourCard({ tour, lang, bookLabel = "View Tour" }: Props) {
  const title = lang === "fr" ? tour.title_fr : tour.title_en;
  const duration = lang === "fr" ? tour.duration_fr : tour.duration;
  const cat = categoryConfig[tour.category] ?? categoryConfig.mtb;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col border border-border/50">
      {/* Image area */}
      <div className="relative h-56 overflow-hidden bg-sand-dark">
        <Image
          src={tour.images[0] || "/images/placeholder-tour.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full text-white ${cat.bg} shadow-lg tracking-widest`}>
            {cat.label}
          </span>
        </div>

        {/* Duration on image */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </div>
        </div>

        {/* Group size on image */}
        <div className="absolute bottom-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <Users className="w-3.5 h-3.5" />
            {tour.groupSize.min}–{tour.groupSize.max}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`w-2 h-2 rounded-full ${difficultyDot[tour.difficulty] ?? "bg-gray-300"}`} />
          <span className="text-xs text-muted-warm capitalize font-medium">{tour.difficulty}</span>
          <span className="ml-auto flex items-center gap-1 text-xs text-muted-warm">
            <Mountain className="w-3 h-3" /> Atlas
          </span>
        </div>

        <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3 leading-snug group-hover:text-terracotta transition-colors duration-300">
          {title}
        </h3>

        <div className="mt-auto pt-4 border-t border-border/60">
          <Link
            href={`/${lang}/tours/${tour.slug}`}
            className="flex items-center justify-between w-full group/btn"
          >
            <span className="text-sm font-semibold text-terracotta group-hover/btn:text-terracotta-dark transition-colors">
              {bookLabel}
            </span>
            <div className="w-9 h-9 rounded-full bg-terracotta/10 flex items-center justify-center group-hover/btn:bg-terracotta group-hover/btn:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-terracotta group-hover/btn:text-white transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
