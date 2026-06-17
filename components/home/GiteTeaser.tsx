"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight, MapPin, Wifi, Coffee } from "lucide-react";

type Dict = { giteTeaser: { title: string; subtitle: string; cta: string; badge: string } };

export default function GiteTeaser({ lang, dict }: { lang: string; dict: Dict }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-[2rem] overflow-hidden grid md:grid-cols-2 min-h-[520px] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image side */}
          <div className="relative min-h-[300px] md:min-h-0 overflow-hidden">
            <Image
              src="/images/gite/gite-panorama-exterior.jpg"
              alt="Gite Panorama Imlil"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

            {/* Floating score card */}
            <motion.div
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="text-2xl font-bold text-charcoal font-heading">9.1</div>
                <div>
                  <div className="text-xs font-semibold text-charcoal">Superb</div>
                  <div className="text-[10px] text-muted-warm">Booking.com</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-saffron text-saffron" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content side */}
          <div className="bg-charcoal text-white p-10 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 bg-saffron/15 text-saffron text-xs font-semibold px-4 py-2 rounded-full w-fit mb-6 border border-saffron/20">
              <Star className="w-3.5 h-3.5 fill-saffron" /> {dict.giteTeaser.badge}
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              {dict.giteTeaser.title}
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
              {dict.giteTeaser.subtitle}
            </p>

            {/* Quick amenities */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Wifi, label: "Free WiFi" },
                { icon: Coffee, label: "Breakfast" },
                { icon: MapPin, label: "Imlil Village" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Icon className="w-3 h-3" /> {label}
                </div>
              ))}
            </div>

            <Link
              href={`/${lang}/accommodation`}
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white rounded-full px-8 py-3.5 w-fit text-sm font-semibold shadow-lg shadow-terracotta/30 hover:shadow-terracotta/50 hover:gap-3 transition-all duration-300"
            >
              {dict.giteTeaser.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
