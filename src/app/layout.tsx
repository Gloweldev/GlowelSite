import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ingeniería de Software, IA y Análisis de Datos | Glowel México",
  description: "Firma de ingeniería especializada en desarrollo web avanzado, software a medida, inteligencia artificial y automatización de procesos. Soluciones complejas para empresas.",
  keywords: "ingeniería de software, inteligencia artificial México, software a medida empresas, análisis de datos, desarrollo IA, consultora tecnológica México, automatización de procesos empresariales, arquitecturas web escalables, desarrollo web avanzado, sistemas empresariales",
  authors: [{ name: "Glowel - Ingeniería de Software y Datos" }],
  metadataBase: new URL("https://glowel.com.mx"),
  openGraph: {
    title: "Ingeniería de Software, IA y Análisis de Datos | Glowel",
    description: "Desarrollamos soluciones tecnológicas complejas y a medida para escalar la operación de empresas en México.",
    type: "website",
    url: "https://glowel.com.mx/",
    images: [
      {
        url: "https://glowel.com.mx/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glowel - Ingeniería de Software, IA y Análisis de Datos",
      },
    ],
    siteName: "Glowel",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingeniería de Software y IA | Glowel",
    description: "Automatización, software a medida y desarrollo web avanzado para empresas.",
    images: ["https://glowel.com.mx/og-image.jpg"],
    site: "@glowel_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "theme-color": "#020617",
    "geo.region": "MX",
    "geo.placename": "México",
    language: "es-MX",
  },
  icons: {
    icon: [
      { url: "/assets/GlowelClaro.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/assets/GlowelClaro.svg", sizes: "180x180" },
    ],
  },
};

// JSON-LD Structured Data
const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Glowel Ingeniería",
  alternateName: ["Glowel Software", "Glowel.com.mx"],
  url: "https://glowel.com.mx",
  logo: {
    "@type": "ImageObject",
    url: "https://glowel.com.mx/assets/GlowelClaro.svg",
    width: 512,
    height: 512,
  },
  image: "https://glowel.com.mx/og-image.jpg",
  description: "Firma de ingeniería especializada en desarrollo web avanzado, software a medida, inteligencia artificial y análisis de datos en México.",
  telephone: "+522223281100",
  email: "glowel.dev@gmail.com",
  foundingDate: "2024",
  slogan: "Ingeniería de Software, IA y Datos para Empresas",
  areaServed: [
    { "@type": "City", name: "Ciudad de México", alternateName: "CDMX" },
    { "@type": "City", name: "Puebla" },
    { "@type": "City", name: "Cholula" },
    { "@type": "City", name: "Veracruz" },
    { "@type": "City", name: "Monterrey" },
    { "@type": "State", name: "Nuevo León" },
    { "@type": "Country", name: "México" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Ingeniería de Software",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Desarrollo Web Avanzado", description: "Arquitecturas web escalables y de alto rendimiento" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Software a Medida", description: "Sistemas ERP/CRM y automatizaciones personalizadas" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Inteligencia Artificial", description: "Modelos de Machine Learning, NLP y visión por computadora" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Automatizaciones", description: "Optimización técnica de flujos de trabajo" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Análisis de Datos", description: "Dashboards e insights basados en datos corporativos" },
      },
    ],
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+522223281100", contactType: "customer service", availableLanguage: ["es"], areaServed: "MX" },
  ],
  sameAs: ["https://wa.me/522223281100"],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://glowel.com.mx/#organization",
  name: "Glowel Ingeniería",
  url: "https://glowel.com.mx",
  logo: {
    "@type": "ImageObject",
    "@id": "https://glowel.com.mx/#logo",
    url: "https://glowel.com.mx/assets/GlowelClaro.svg",
    contentUrl: "https://glowel.com.mx/assets/GlowelClaro.svg",
    caption: "Glowel - Ingeniería de Software y Datos",
  },
  sameAs: ["https://wa.me/522223281100"],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué tecnologías utilizan para el desarrollo de software a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Construimos con stacks modernos probados en producción. Para el frontend usamos React, Next.js y TypeScript. En el backend utilizamos Node.js, Python y bases de datos como PostgreSQL. Para IA implementamos TensorFlow y bibliotecas de Python alojadas en ecosistemas Cloud (AWS, Vercel).",
      },
    },
    {
      "@type": "Question",
      name: "¿Pueden integrar Inteligencia Artificial en mis sistemas actuales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Analizamos tus fuentes de datos actuales, desarrollamos modelos específicos (como procesamiento de lenguaje natural o visión computacional) y los integramos vía APIs a los sistemas ERP o CRM que ya esté usando tu empresa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Ofrecen evaluación técnica para proyectos complejos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, agendamos una consulta gratuita con uno de nuestros ingenieros para levantar requerimientos, analizar la viabilidad del proyecto de datos o software y generar un diagrama arquitectónico junto a la cotización sin compromiso.",
      },
    },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Glowel - Firma de Ingeniería",
  alternateName: "Glowel.com.mx",
  url: "https://glowel.com.mx",
  publisher: { "@id": "https://glowel.com.mx/#organization" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="mask-icon" href="/assets/GlowelClaro.svg" color="#020617" />
        <link rel="image_src" href="https://glowel.com.mx/assets/GlowelClaro.png?v=2" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="font-sans bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600/30">
        {children}
        <GoogleAnalytics gaId="G-0Q6EZE68P2" />
      </body>
    </html>
  );
}
