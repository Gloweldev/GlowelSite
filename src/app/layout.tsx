import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import DatosEstructurados from "@/components/DatosEstructurados";
import { niveles } from "@/data/servicios";
import { SITIO, REDES, TELEFONO, CORREO } from "@/data/sitio";

// Dos caras con trabajos distintos: la de titulares tiene carácter y se usa
// poco; la de cuerpo es la que se lee en párrafos largos.
const fuenteTitular = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--fuente-titular",
  display: "swap",
});

const fuenteCuerpo = Instrument_Sans({
  subsets: ["latin"],
  variable: "--fuente-cuerpo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  /*
    La plantilla deja que cada página ponga solo su nombre y la marca se pega
    sola. Antes cada archivo repetía «| Glowel» a mano, y bastaba olvidarlo una
    vez para tener un resultado de búsqueda sin marca.
  */
  title: {
    default: "Diseño de páginas web y sistemas a la medida | Glowel",
    template: "%s | Glowel",
  },
  description:
    "Diseñamos la página de tu negocio, tu tienda en línea o tu sistema de reservas. En Puebla y todo México. Lo ves funcionando antes de pagar. Desde $6,000.",
  applicationName: "Glowel",
  creator: "Glowel",
  publisher: "Glowel",
  category: "Desarrollo web",
  /* El teléfono ya es un enlace donde debe serlo; que Safari no invente más. */
  formatDetection: { telephone: false, address: false, email: false },
  keywords: [
    "paginas web mexico",
    "crear pagina web para mi negocio",
    "diseño de paginas web",
    "cuanto cuesta una pagina web",
    "hacer tienda en linea",
    "sistema de inventario a medida",
    "sistema de reservas y citas",
    "desarrollo de software a la medida",
    "pagina web para negocio pequeño",
    "programador de paginas web",
    "plataforma web a la medida",
    "sitio web profesional mexico",
  ],
  authors: [{ name: "Glowel" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sitios y sistemas hechos para tu negocio | Glowel",
    description:
      "Páginas web, tiendas en línea y sistemas a la medida. Lo ves funcionando antes de pagar nada. Desde $6,000 MXN.",
    type: "website",
    url: SITIO,
    siteName: "Glowel",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitios y sistemas hechos para tu negocio | Glowel",
    description:
      "Páginas web, tiendas en línea y sistemas a la medida. Lo ves funcionando antes de pagar. Desde $6,000 MXN.",
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
    "theme-color": "#0b1b27",
    "geo.region": "MX-PUE",
    "geo.placename": "San Andrés Cholula, Puebla",
    language: "es-MX",
  },
  /*
    El icono de Apple estaba en SVG, formato que Safari no acepta ahí: en un
    iPhone que guardara el sitio en la pantalla de inicio salía un cuadro en
    blanco. Ahora apunta al PNG de la marca.
  */
  icons: {
    icon: [{ url: "/assets/GlowelClaro.svg", type: "image/svg+xml" }],
    apple: [
      {
        url: "/assets/perfil/glowel-perfil-marca.png",
        sizes: "1000x1000",
        type: "image/png",
      },
    ],
  },
};

const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://glowel.com.mx/#organization",
  name: "Glowel",
  url: "https://glowel.com.mx",
  /*
    Mapa de bits, no SVG: Google rechaza el vectorial para el logotipo del
    panel de marca, así que apuntaba a un archivo que nunca iba a usar.
  */
  logo: {
    "@type": "ImageObject",
    url: `${SITIO}/assets/perfil/glowel-perfil-marca.png`,
    width: 1000,
    height: 1000,
  },
  image: `${SITIO}/opengraph-image`,
  description:
    "Desarrollo de páginas web y sistemas a la medida para negocios en México: sitios de negocio, tiendas en línea, reservas, inventarios y plataformas propias.",
  telephone: TELEFONO,
  email: CORREO,
  foundingDate: "2024",
  slogan: "Del sitio web al sistema completo",
  priceRange: "$$",
  // La plaza real, para que Google pueda ubicarnos en búsquedas locales. La
  // cobertura va aparte: el país entero, que es a donde sí llegamos.
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Andrés Cholula",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  areaServed: [
    { "@type": "City", name: "San Andrés Cholula" },
    { "@type": "City", name: "Puebla" },
    { "@type": "Country", name: "México" },
  ],
  /*
    El catálogo se arma desde los mismos datos que dibujan el sitio, con los
    nombres que el visitante ve y la dirección de su bloque de precios. Antes
    era una copia a mano con los nombres internos: cuando cambió el precio, la
    página decía una cosa y Google seguía leyendo otra.
  */
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Desarrollo web y sistemas a la medida",
    itemListElement: niveles.map((nivel) => ({
      "@type": "Offer",
      url: `${SITIO}/precios#${nivel.ancla}`,
      itemOffered: {
        "@type": "Service",
        name: nivel.llano,
        description: nivel.promesa,
        serviceType: nivel.nombre,
        provider: { "@id": `${SITIO}/#organization` },
        areaServed: { "@type": "Country", name: "México" },
      },
      priceCurrency: "MXN",
      price: nivel.precio.replace(/[^0-9]/g, ""),
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: nivel.precio.replace(/[^0-9]/g, ""),
        priceCurrency: "MXN",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
    })),
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: TELEFONO,
      email: CORREO,
      contactType: "customer service",
      availableLanguage: ["es"],
      areaServed: "MX",
    },
  ],
  // Así confirma Google que el negocio del sitio y el de las redes son el mismo.
  sameAs: [REDES.whatsapp, REDES.facebook, REDES.instagram],
};

/*
  Las preguntas frecuentes vivían aquí, en el layout, así que se declaraban en
  /precios, /portafolio y en cada caso — páginas donde no hay ni una pregunta a
  la vista. Google pide que este marcado corresponda a contenido visible en esa
  URL y penaliza cuando no; ahora lo monta el inicio, que es donde se muestran.
*/
const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Glowel",
  url: SITIO,
  inLanguage: "es-MX",
  publisher: { "@id": `${SITIO}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior lo pide Next para saber que el scroll suave es
    // nuestro: sin él no lo desactiva durante un cambio de ruta, y el salto a
    // un ancla de otra página puede quedarse a medio camino.
    <html
      lang="es-MX"
      data-scroll-behavior="smooth"
      className={`${fuenteTitular.variable} ${fuenteCuerpo.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Abre la conexión con Google antes de pedirle el archivo. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0Q6EZE68P2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0Q6EZE68P2');
            `,
          }}
        />
        <link rel="mask-icon" href="/assets/GlowelClaro.svg" color="#0b1b27" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <DatosEstructurados datos={jsonLdProfessionalService} />
        <DatosEstructurados datos={jsonLdWebSite} />
      </head>
      <body className="overflow-x-hidden bg-white font-sans text-noche selection:bg-marca/35">
        {children}
      </body>
    </html>
  );
}
