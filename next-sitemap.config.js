/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://fanorama-experiences.vercel.app",
  generateRobotsTxt: false, // we have our own robots.txt in public/
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/en"),
    await config.transform(config, "/fr"),
    await config.transform(config, "/en/tours"),
    await config.transform(config, "/fr/tours"),
    await config.transform(config, "/en/accommodation"),
    await config.transform(config, "/fr/accommodation"),
    await config.transform(config, "/en/about"),
    await config.transform(config, "/fr/about"),
    await config.transform(config, "/en/contact"),
    await config.transform(config, "/fr/contact"),
    await config.transform(config, "/en/gallery"),
    await config.transform(config, "/fr/gallery"),
  ],
};
