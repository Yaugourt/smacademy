import type { MetadataRoute } from "next";
import { formations } from "@/data/formations";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smacademy.fr";
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/formations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/nimes`, changeFrequency: "monthly", priority: 0.8 },
  ];
  const formationRoutes: MetadataRoute.Sitemap = formations.map((f) => ({
    url: `${base}/formations/${f.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const cityFormationRoutes: MetadataRoute.Sitemap = formations.map((f) => ({
    url: `${base}/nimes/formations/${f.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const blogRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      lastModified: new Date(p.date),
    })),
  ];
  return [...staticRoutes, ...formationRoutes, ...cityFormationRoutes, ...blogRoutes];
}


