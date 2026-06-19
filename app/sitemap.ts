import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://fanorama-experiences.vercel.app";
const LANGS = ["en", "fr"] as const;
const LAST_MODIFIED = "2026-06-19";

const staticPages = [
  "",
  "/accommodation",
  "/activities",
  "/about",
  "/contact",
  "/gallery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${BASE}/${lang}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1.0 : path === "/accommodation" ? 0.9 : 0.8,
    }))
  );
}
