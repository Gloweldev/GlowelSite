import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://glowel.com.mx";
  const currentDate = new Date();

  // Rutas principales
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ];

  // Servicios core (Alta prioridad para SEO)
  const services = [
    "desarrollo-web",
    "software-a-medida",
    "inteligencia-artificial",
    "automatizaciones",
    "analisis-de-datos",
  ].map((slug) => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Portafolio (Demos / Iframes indexables)
  const portfolio = [
    "ensenasai",
    "onyx-seguridad",
  ].map((slug) => ({
    url: `${baseUrl}/#portafolio`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...services, ...portfolio];
}
