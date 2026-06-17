"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bike, Zap, Snowflake, Footprints, Home } from "lucide-react";

type Dict = { categories: { mtb: string; ebike: string; ski: string; trekking: string; stay: string } };

const categories_config = [
  {
    key: "mtb",
    icon: Bike,
    gradient: "from-terracotta/20 to-terracotta/5",
    iconBg: "bg-terracotta",
    border: "hover:border-terracotta/50",
    glow: "hover:shadow-terracotta/20",
  },
  {
    key: "ebike",
    icon: Zap,
    gradient: "from-atlas-green/20 to-atlas-green/5",
    iconBg: "bg-atlas-green",
    border: "hover:border-atlas-green/50",
    glow: "hover:shadow-atlas-green/20",
  },
  {
    key: "ski",
    icon: Snowflake,
    gradient: "from-blue-500/15 to-blue-500/5",
    iconBg: "bg-blue-500",
    border: "hover:border-blue-400/50",
    glow: "hover:shadow-blue-400/20",
  },
  {
    key: "trekking",
    icon: Footprints,
    gradient: "from-saffron/20 to-saffron/5",
    iconBg: "bg-saffron",
    border: "hover:border-saffron/50",
    glow: "hover:shadow-saffron/20",
  },
  {
    key: "stay",
    icon: Home,
    gradient: "from-charcoal/10 to-charcoal/5",
    iconBg: "bg-charcoal",
    border: "hover:border-charcoal/40",
    glow: "hover:shadow-charcoal/10",
  },
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
    <section className="py-14 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => {
            const cfg = categories_config[i];
            const Icon = cfg.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={cat.href}
                  className={`group flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-gradient-to-br ${cfg.gradient} ${cfg.border} hover:shadow-lg ${cfg.glow} transition-all duration-300 hover:-translate-y-1 text-center`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${cfg.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-charcoal group-hover:text-terracotta transition-colors leading-tight">
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
