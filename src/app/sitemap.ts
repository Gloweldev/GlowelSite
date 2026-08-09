import type { MetadataRoute } from "next";
import { casos } from "@/data/portafolio";

const baseUrl = "https://glowel.com.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/precios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portafolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...casos.map((caso) => ({
      url: `${baseUrl}/portafolio/${caso.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
