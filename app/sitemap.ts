import type { MetadataRoute } from "next";
import { getAllTours } from "@/content/tours";

const BASE = "https://fanorama-experiences.vercel.app";
const LANGS = ["en", "fr"] as const;

const staticPages = [
  "",
  "/tours",
  "/accommodation",
  "/about",
  "/contact",
  "/gallery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const tours = getAllTours();

  const staticEntries = staticPages.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${BASE}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1.0 : 0.8,
    }))
  );

  const tourEntries = tours.flatMap((tour) =>
    LANGS.map((lang) => ({
      url: `${BASE}/${lang}/tours/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...tourEntries];
}
