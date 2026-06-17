"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-3">
            {dict.testimonials.title}
          </h2>
          <div className="inline-flex items-center gap-1.5 text-sm text-muted-warm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-saffron text-saffron" />
              ))}
            </div>
            <span className="font-semibold text-charcoal">4.9</span>
            <span>· 31 reviews on Google</span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-sand rounded-2xl p-6 border border-border flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-saffron text-saffron" />
                ))}
              </div>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-5 italic flex-1">"{t.text}"</p>
              <div>
                <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                <div className="text-muted-warm text-xs">{t.country}</div>
                <div className="text-muted-warm/70 text-xs mt-0.5">{t.badge}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
