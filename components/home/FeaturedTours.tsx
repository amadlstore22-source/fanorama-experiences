"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TourCard from "@/components/tours/TourCard";
import type { Tour } from "@/content/tours";

type Dict = { featured: { title: string; subtitle: string; viewAll: string } };

export default function FeaturedTours({ lang, dict, tours }: { lang: string; dict: Dict; tours: Tour[] }) {
  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {dict.featured.title}
          </h2>
          <p className="text-muted-warm text-lg max-w-xl mx-auto">{dict.featured.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TourCard tour={tour} lang={lang} bookLabel="View Tour" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${lang}/tours`}
            className="inline-flex items-center gap-2 text-terracotta font-medium hover:gap-3 transition-all"
          >
            {dict.featured.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
