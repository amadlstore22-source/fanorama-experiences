"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

type Dict = { testimonials: { title: string } };

const testimonials = [
  {
    name: "Rhys Rogers",
    country: "🇬🇧 United Kingdom",
    badge: "Local Guide · 27 reviews",
    rating: 5,
    text: "A wonderful welcoming host family. Ismael is also an expert guide. Stunning views from the tranquil terrace overlooking Imlil and the walnut groves. 10 minutes walk to waterfall and 15 minutes to Imlil centre. A real sanctuary of peace. Highly recommend.",
  },
  {
    name: "Oussama Z",
    country: "🇲🇦 Morocco",
    badge: "Local Guide · 31 reviews",
    rating: 5,
    text: "The Panorama Imlil guesthouse is absolutely exceptional. The view is simply magnificent — the most beautiful I have ever seen of the mountains and valley. I tasted the best tagine of my life here, surpassing anything I have ever experienced, and I am Moroccan.",
  },
  {
    name: "Tomas John",
    country: "🇪🇸 Spain",
    badge: "Verified Guest",
    rating: 5,
    text: "A fantastic experience. We arrived very late, and he was incredibly helpful from the very beginning. He even took us to a great restaurant and called ahead to let them know we were arriving. You can tell he truly cares about his guests' comfort. Highly recommended.",
  },
  {
    name: "Leïla Calmet",
    country: "🇫🇷 France",
    badge: "Verified Guest · 5 reviews",
    rating: 5,
    text: "What a view! That alone makes the experience incredible. We highly recommend this guesthouse in the hills above Imlil — less than 5 minutes from the village and its shops. We spent three nights there. Fantastic!",
  },
  {
    name: "Felicia Meshach",
    country: "🇳🇬 Nigeria",
    badge: "Local Guide · 19 reviews",
    rating: 5,
    text: "This was one of the highlights of my trip through Morocco. My hosts, the Aitidar family, welcomed me with classic Berber hospitality. The accommodation was truly lovely, the food was delicious, and the views of the Atlas mountains were stunning. I will certainly return.",
  },
  {
    name: "Remi Jouet",
    country: "🇫🇷 France",
    badge: "Verified Guest · 3 reviews",
    rating: 5,
    text: "This is a hotel in the hills above Imlil that you shouldn't miss. The view is magnificent, the location is peaceful, and the terrace is large. Plus, it's one of the cheapest in the area. We loved every moment.",
  },
];

export default function TestimonialsSection({ dict }: { dict: Dict }) {
  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-saffron text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Real Guests · Real Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {dict.testimonials.title}
          </h2>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-sm text-white/70">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-saffron text-saffron" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9</span>
            <span>· 31 reviews on Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-7 border border-white/10 hover:border-saffron/30 hover:bg-white/8 transition-all duration-300 flex flex-col group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Large quote mark */}
              <Quote className="absolute top-5 right-6 w-10 h-10 text-white/5 group-hover:text-saffron/10 transition-colors fill-current" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-saffron text-saffron" />
                ))}
              </div>

              <p className="text-white/75 text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-saffron flex items-center justify-center text-white font-bold text-sm font-heading shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.country}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] text-white/30 bg-white/5 px-2 py-1 rounded-full">
                    {t.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
