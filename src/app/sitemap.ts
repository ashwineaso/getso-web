import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://getso.app",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://getso.app/changelog",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://getso.app/contact",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://getso.app/privacy",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://getso.app/terms",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
