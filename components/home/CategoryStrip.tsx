"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bike, Zap, Snowflake, Footprints, Home } from "lucide-react";

type Dict = { categories: { mtb: string; ebike: string; ski: string; trekking: string; stay: string } };

const icons = [Bike, Zap, Snowflake, Footprints, Home];
const colors = [
  "bg-terracotta/10 text-terracotta",
  "bg-atlas-green/10 text-atlas-green",
  "bg-blue-50 text-blue-600",
  "bg-saffron/10 text-saffron",
  "bg-muted-warm/10 text-muted-warm",
];

export default function CategoryStrip({ lang, dict }: { lang: string; dict: Dict }) {
  const categories = [
    { key: "mtb", label: dict.categories.mtb, href: `/${lang}/tours?type=mtb` },
    { key: "ebike", label: dict.categories.ebike, href: `/${lang}/tours?type=ebike` },
    { key: "ski", label: dict.categories.ski, href: `/${lang}/tours?type=ski` },
    { key: "trekking", label: dict.categories.trekking, href: `/${lang}/tours?type=trekking` },
    { key: "stay", label: dict.categories.stay, href: `/${lang}/accommodation` },
  ];

  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={cat.href}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border hover:border-terracotta hover:shadow-md transition-all duration-200 group text-center"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colors[i]} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-charcoal group-hover:text-terracotta transition-colors">
                    {cat.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
