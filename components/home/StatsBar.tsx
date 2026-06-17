"use client";

import { motion } from "framer-motion";

type Dict = { stats: { years: string; yearsLabel: string; guests: string; guestsLabel: string; rating: string; ratingLabel: string; countries: string; countriesLabel: string } };

export default function StatsBar({ dict }: { dict: Dict }) {
  const stats = [
    { value: dict.stats.years, label: dict.stats.yearsLabel, suffix: "" },
    { value: dict.stats.guests, label: dict.stats.guestsLabel, suffix: "" },
    { value: dict.stats.rating, label: dict.stats.ratingLabel, suffix: "" },
    { value: dict.stats.countries, label: dict.stats.countriesLabel, suffix: "" },
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-atlas-green">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 50%, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-saffron to-terracotta" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative"
            >
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10 hidden md:block" />
              )}
              <div className="font-heading text-5xl md:text-6xl font-bold mb-2 text-white drop-shadow-sm">
                {s.value}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-saffron to-terracotta" />
    </section>
  );
}
