"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Dict = { giteTeaser: { title: string; subtitle: string; cta: string; badge: string } };

export default function GiteTeaser({ lang, dict }: { lang: string; dict: Dict }) {
  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[420px] border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <div className="relative min-h-[260px] md:min-h-0">
            <Image src="/images/gite/gite-panorama-exterior.jpg" alt="Gite Panorama Imlil" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="bg-charcoal text-white p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 bg-saffron/20 text-saffron text-xs font-medium px-3 py-1.5 rounded-full w-fit mb-6">
              <Star className="w-3.5 h-3.5 fill-saffron" /> {dict.giteTeaser.badge}
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">{dict.giteTeaser.title}</h2>
            <p className="text-white/70 leading-relaxed mb-8 text-sm md:text-base">{dict.giteTeaser.subtitle}</p>
            <Link
              href={`/${lang}/accommodation`}
              className={cn(buttonVariants(), "bg-terracotta hover:bg-terracotta-dark text-white rounded-full w-fit px-8 border-0 group")}
            >
              {dict.giteTeaser.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
