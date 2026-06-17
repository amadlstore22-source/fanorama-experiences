"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TourCard from "@/components/tours/TourCard";
import type { Tour } from "@/content/tours";

type Dict = { featured: { title: string; subtitle: string; viewAll: string } };

export default function FeaturedTours({ lang, dict, tours }: { lang: string; dict: Dict; tours: Tour[] }) {
  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C4622D 0, #C4622D 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="inline-block text-terracotta text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Curated Adventures
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              {dict.featured.title}
            </h2>
          </div>
          <p className="text-muted-warm text-base max-w-xs md:text-right md:pb-1">{dict.featured.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TourCard tour={tour} lang={lang} bookLabel="View Tour" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/${lang}/tours`}
            className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-terracotta transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-terracotta/30"
          >
            {dict.featured.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
