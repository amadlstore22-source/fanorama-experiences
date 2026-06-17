"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Dict = { hero: { tagline: string; subtitle: string; ctaTours: string; ctaStay: string } };

export default function HeroSection({ lang, dict }: { lang: string; dict: Dict }) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-atlas.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-saffron text-sm font-medium tracking-widest uppercase mb-4">
            Imlil · Atlas Mountains · Morocco
          </span>
        </motion.div>
        <motion.h1
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {dict.hero.tagline}
        </motion.h1>
        <motion.p
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {dict.hero.subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Link
            href={`/${lang}/tours`}
            className={cn(buttonVariants({ size: "lg" }), "bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 text-base border-0")}
          >
            {dict.hero.ctaTours}
          </Link>
          <Link
            href={`/${lang}/accommodation`}
            className="inline-flex items-center justify-center h-9 px-8 text-base rounded-full border border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            {dict.hero.ctaStay}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
