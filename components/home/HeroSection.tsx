"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mountain, Wind } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type Dict = { hero: { tagline: string; subtitle: string; ctaTours: string; ctaStay: string } };

export default function HeroSection({ lang, dict }: { lang: string; dict: Dict }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: "url('/images/hero-atlas.jpg')", y }}
      />

      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      {/* Terrain SVG silhouette */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,80 L120,40 L280,70 L400,20 L520,55 L640,10 L760,45 L880,15 L1000,50 L1120,25 L1240,60 L1360,30 L1440,50 L1440,120 L0,120 Z" fill="#FAF7F2" fillOpacity="0.08"/>
          <path d="M0,100 L160,60 L320,85 L480,35 L600,70 L720,30 L840,65 L960,40 L1080,75 L1200,45 L1320,80 L1440,55 L1440,120 L0,120 Z" fill="#FAF7F2" fillOpacity="0.05"/>
          <path d="M0,120 L240,90 L480,110 L720,75 L960,105 L1200,80 L1440,100 L1440,120 Z" fill="#FAF7F2"/>
        </svg>
      </div>

      {/* Floating ambient elements */}
      <motion.div
        className="absolute top-1/4 left-[8%] text-white/10"
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <Mountain className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-[10%] text-white/10"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
      >
        <Wind className="w-10 h-10" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-saffron/60" />
          <span className="text-saffron text-xs font-semibold tracking-[0.3em] uppercase">
            Imlil · Atlas Mountains · Morocco
          </span>
          <div className="h-px w-12 bg-saffron/60" />
        </motion.div>

        <motion.h1
          className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] mb-6 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {dict.hero.tagline}
        </motion.h1>

        <motion.p
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            href={`/${lang}/tours`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-10 text-base border-0 shadow-lg shadow-terracotta/30 hover:shadow-terracotta/50 hover:scale-105 transition-all duration-200"
            )}
          >
            {dict.hero.ctaTours}
          </Link>
          <Link
            href={`/${lang}/accommodation`}
            className="inline-flex items-center justify-center h-11 px-8 text-base rounded-full border border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/70"
          >
            {dict.hero.ctaStay}
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/50 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-saffron">★★★★★</span> 4.9 · 31 Google Reviews
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span>9.1 Superb · Booking.com</span>
          <span className="w-px h-3 bg-white/20" />
          <span>15+ Years Experience</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
