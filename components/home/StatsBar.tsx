"use client";

import { motion } from "framer-motion";

type Dict = { stats: { years: string; yearsLabel: string; guests: string; guestsLabel: string; rating: string; ratingLabel: string; countries: string; countriesLabel: string } };

export default function StatsBar({ dict }: { dict: Dict }) {
  const stats = [
    { value: dict.stats.years, label: dict.stats.yearsLabel },
    { value: dict.stats.guests, label: dict.stats.guestsLabel },
    { value: dict.stats.rating, label: dict.stats.ratingLabel },
    { value: dict.stats.countries, label: dict.stats.countriesLabel },
  ];
  return (
    <section className="py-14 bg-terracotta text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-heading text-4xl md:text-5xl font-bold mb-1">{s.value}</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
