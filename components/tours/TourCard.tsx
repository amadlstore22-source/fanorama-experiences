import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Tour } from "@/content/tours";

type Props = { tour: Tour; lang: string; bookLabel?: string };

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-red-100 text-red-700",
};

const categoryColors: Record<string, string> = {
  mtb: "bg-terracotta/10 text-terracotta",
  ebike: "bg-atlas-green/10 text-atlas-green",
  ski: "bg-blue-100 text-blue-700",
  trekking: "bg-saffron/10 text-amber-700",
};

export default function TourCard({ tour, lang, bookLabel = "View Tour" }: Props) {
  const title = lang === "fr" ? tour.title_fr : tour.title_en;
  const duration = lang === "fr" ? tour.duration_fr : tour.duration;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-terracotta/30 hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-52 overflow-hidden bg-sand-dark">
        <Image
          src={tour.images[0] || "/images/placeholder-tour.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[tour.category]}`}>
            {tour.category.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColors[tour.difficulty]}`}>
            {tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-charcoal mb-2 leading-snug group-hover:text-terracotta transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-warm mb-4">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{duration}</span>
          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{tour.groupSize.min}–{tour.groupSize.max}</span>
        </div>
        <div className="mt-auto pt-4 border-t border-border">
          <Link
            href={`/${lang}/tours/${tour.slug}`}
            className={cn(buttonVariants(), "w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-full border-0 justify-center")}
          >
            {bookLabel}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
