export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  structuredData: object;
}

export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: "Desarrollo Web Profesional en México | Páginas Web, E-commerce y Software | Glowel",
    description: "Desarrollo web profesional en México. Páginas web, tiendas online y software a medida para empresas. Prototipo gratis, soporte 24/7. Monterrey, Puebla, Veracruz.",
    keywords: "desarrollo web México, páginas web profesionales, tienda online, ecommerce México, software a medida, desarrollo web Monterrey, desarrollo web Puebla, desarrollo web Veracruz, páginas web empresariales, tiendas online México, software personalizado, desarrollo web profesional, páginas web responsive, tiendas ecommerce, automatizaciones empresariales, desarrollo web México 2025",
    canonical: "https://glowel.dev",
    ogImage: "https://glowel.dev/og-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Glowel",
      "alternateName": "Glowel Desarrollo Web México",
      "url": "https://glowel.dev",
      "logo": "https://glowel.dev/assets/GlowelClaro.svg",
      "description": "Desarrollo web profesional en México. Páginas web, tiendas online y software a medida para empresas.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+52-222-328-1100",
        "contactType": "customer service",
        "availableLanguage": ["Spanish"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MX",
        "addressRegion": "Nuevo León",
        "addressLocality": "Monterrey"
      },
      "areaServed": "MX",
      "serviceType": ["Desarrollo Web", "Páginas Web", "E-commerce", "Software a Medida"]
    }
  },
  
  blog: {
    title: "Blog de Desarrollo Web | Tips, Recursos y Tendencias | Glowel",
    description: "Blog especializado en desarrollo web, SEO, marketing digital y tendencias tecnológicas. Tips prácticos para hacer crecer tu negocio con tecnología.",
    keywords: "blog desarrollo web, tips SEO, marketing digital, tendencias tecnología, desarrollo web México, blog tecnología",
    canonical: "https://glowel.dev/blog",
    ogImage: "https://glowel.dev/blog-og-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog de Glowel",
      "description": "Blog especializado en desarrollo web y tecnología",
      "url": "https://glowel.dev/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Glowel",
        "logo": "https://glowel.dev/assets/GlowelOscuro.svg"
      }
    }
  },
  
  "blog-post-1": {
    title: "5 Razones Clave para Invertir en una Página Web Profesional | Glowel",
    description: "Descubre por qué tu negocio necesita una página web profesional más allá de las redes sociales. 5 razones clave para aumentar tus ventas y credibilidad.",
    keywords: "página web profesional, desarrollo web México, sitio web empresarial, credibilidad digital, presencia online, desarrollo web Monterrey",
    canonical: "https://glowel.dev/blog/5-razones-clave-invertir-pagina-web-profesional",
    ogImage: "https://glowel.dev/blog-post-1-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "5 Razones Clave para Invertir en una Página Web Profesional",
      "description": "Descubre por qué tu negocio necesita una página web profesional más allá de las redes sociales.",
      "url": "https://glowel.dev/blog/5-razones-clave-invertir-pagina-web-profesional",
      "datePublished": "2025-01-27",
      "dateModified": "2025-01-27",
      "author": {
        "@type": "Organization",
        "name": "Glowel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Glowel",
        "logo": "https://glowel.dev/assets/GlowelOscuro.svg"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://glowel.dev/blog/5-razones-clave-invertir-pagina-web-profesional"
      }
    }
  },
  
  "blog-post-2": {
    title: "5 Errores Comunes en el Diseño de Sitios E-commerce que Debes Evitar | Glowel",
    description: "Evita estos 5 errores comunes en el diseño de tu tienda online que pueden reducir tus ventas hasta en un 70%. Consejos prácticos para optimizar tu e-commerce.",
    keywords: "errores diseño ecommerce, tienda online México, diseño tienda online, optimización ecommerce, desarrollo ecommerce México",
    canonical: "https://glowel.dev/blog/5-errores-comunes-diseno-ecommerce-evitar",
    ogImage: "https://glowel.dev/blog-post-2-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "5 Errores Comunes en el Diseño de Sitios E-commerce que Debes Evitar",
      "description": "Evita estos errores comunes en el diseño de tu tienda online que pueden reducir tus ventas.",
      "url": "https://glowel.dev/blog/5-errores-comunes-diseno-ecommerce-evitar",
      "datePublished": "2025-01-27",
      "dateModified": "2025-01-27",
      "author": {
        "@type": "Organization",
        "name": "Glowel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Glowel",
        "logo": "https://glowel.dev/assets/GlowelOscuro.svg"
      }
    }
  },
  
  "blog-post-3": {
    title: "Optimización SEO: Guía Completa para Principiantes | Glowel",
    description: "Guía completa de SEO para principiantes. Aprende desde conceptos básicos hasta estrategias avanzadas para mejorar tu posicionamiento en Google.",
    keywords: "SEO México, optimización SEO, posicionamiento web, SEO principiantes, desarrollo web SEO, marketing digital México",
    canonical: "https://glowel.dev/blog/optimizacion-seo-guia-completa-principiantes",
    ogImage: "https://glowel.dev/blog-post-3-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Optimización SEO: Guía Completa para Principiantes",
      "description": "Guía completa de SEO para principiantes. Aprende desde conceptos básicos hasta estrategias avanzadas.",
      "url": "https://glowel.dev/blog/optimizacion-seo-guia-completa-principiantes",
      "datePublished": "2025-01-27",
      "dateModified": "2025-01-27",
      "author": {
        "@type": "Organization",
        "name": "Glowel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Glowel",
        "logo": "https://glowel.dev/assets/GlowelOscuro.svg"
      }
    }
  },
  
  "blog-post-4": {
    title: "Tendencias en Marketing Digital para 2025: 5 Claves para No Quedarte Atrás | Glowel",
    description: "Descubre las 5 tendencias más importantes del marketing digital para 2025. IA generativa, hiperpersonalización y más estrategias para destacar.",
    keywords: "marketing digital 2025, tendencias marketing digital, IA marketing, personalización marketing, marketing digital México",
    canonical: "https://glowel.dev/blog/tendencias-marketing-digital-2025-claves-no-quedarse-atras",
    ogImage: "https://glowel.dev/blog-post-4-og.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Tendencias en Marketing Digital para 2025: 5 Claves para No Quedarte Atrás",
      "description": "Descubre las 5 tendencias más importantes del marketing digital para 2025.",
      "url": "https://glowel.dev/blog/tendencias-marketing-digital-2025-claves-no-quedarse-atras",
      "datePublished": "2025-01-27",
      "dateModified": "2025-01-27",
      "author": {
        "@type": "Organization",
        "name": "Glowel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Glowel",
        "logo": "https://glowel.dev/assets/GlowelOscuro.svg"
      }
    }
  },
  
  "not-found": {
    title: "Página No Encontrada | Glowel - Desarrollo Web México",
    description: "La página que buscas no existe. Regresa al inicio de Glowel para encontrar nuestros servicios de desarrollo web profesional en México.",
    keywords: "página no encontrada, error 404, desarrollo web México, Glowel",
    canonical: "https://glowel.dev/404",
    ogImage: "https://glowel.dev/404-og-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Página No Encontrada",
      "description": "La página que buscas no existe en nuestro sitio web",
      "url": "https://glowel.dev/404",
      "mainEntity": {
        "@type": "Organization",
        "name": "Glowel",
        "url": "https://glowel.dev"
      }
    }
  },
  
  "server-error": {
    title: "Error del Servidor | Glowel - Desarrollo Web México",
    description: "Estamos experimentando problemas técnicos temporales. Por favor intenta más tarde o contacta a nuestro equipo de soporte.",
    keywords: "error servidor, error 500, problemas técnicos, desarrollo web México, Glowel soporte",
    canonical: "https://glowel.dev/500",
    ogImage: "https://glowel.dev/500-og-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Error del Servidor",
      "description": "Página de error del servidor - problemas técnicos temporales",
      "url": "https://glowel.dev/500",
      "mainEntity": {
        "@type": "Organization",
        "name": "Glowel",
        "url": "https://glowel.dev",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+52-222-328-1100",
          "contactType": "technical support",
          "availableLanguage": ["Spanish"]
        }
      }
    }
  }
};
