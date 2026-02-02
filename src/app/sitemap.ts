import type { MetadataRoute } from "next";
import { formations } from "@/data/formations";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smacademy.fr";
  
  // Pages statiques principales
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/formations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/nimes`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gard`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
  ];
  
  // Pages formations individuelles
  const formationRoutes: MetadataRoute.Sitemap = formations.map((f) => ({
    url: `${base}/formations/${f.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  
  // Articles de blog
  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: new Date(p.date),
  }));
  
  return [...staticRoutes, ...formationRoutes, ...blogRoutes];
}
