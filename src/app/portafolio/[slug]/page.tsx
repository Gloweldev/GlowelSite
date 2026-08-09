import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import MarcoNavegador from "@/components/MarcoNavegador";
import {
  Container,
  Section,
  Titular,
  Entrada,
  Rotulo,
  BotonExterno,
  IconoWhatsApp,
} from "@/components/ui";
import DatosEstructurados from "@/components/DatosEstructurados";
import { casos, casoPorSlug } from "@/data/portafolio";
import { waLink } from "@/data/servicios";
import { SITIO, migaDePan } from "@/data/sitio";

export function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = casoPorSlug(slug);
  if (!caso) return {};

  return {
    title: caso.seo.titulo,
    description: caso.seo.descripcion,
    alternates: { canonical: `/portafolio/${caso.slug}` },
  };
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = casoPorSlug(slug);
  if (!caso) notFound();

  const otros = casos.filter((c) => c.slug !== caso.slug);

  /*
    El caso como obra publicada, con nosotros como autores. Es lo que le
    permite a Google entender que esto es trabajo propio y no una página de
    servicio más, y de paso enlaza el proyecto con la ficha de la empresa.
  */
  const jsonLdCaso = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caso.nombre,
    headline: `${caso.nombre} — ${caso.quees}`,
    description: caso.necesidad,
    url: `${SITIO}/portafolio/${caso.slug}`,
    inLanguage: "es-MX",
    creator: { "@id": `${SITIO}/#organization` },
    ...(caso.captura ? { image: `${SITIO}${caso.captura}` } : {}),
    ...(caso.url ? { sameAs: caso.url } : {}),
    keywords: caso.tecnologias.join(", "),
  };

  return (
    <div className="min-h-screen">
      <DatosEstructurados datos={jsonLdCaso} />
      <DatosEstructurados
        datos={migaDePan([
          { nombre: "Portafolio", ruta: "/portafolio" },
          { nombre: caso.nombre, ruta: `/portafolio/${caso.slug}` },
        ])}
      />
      <Header />
      <main>
        <Section tono="noche" className="pt-36 lg:pt-44" espaciado="normal">
          <Container>
            <Link
              href="/portafolio"
              className="group inline-flex items-center gap-2 text-sm text-suave transition-colors hover:text-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
            >
              <ArrowLeft
                className="size-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Portafolio
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-tenue">
                {caso.sector}
              </p>
              {!caso.url && (
                <span className="rounded-full border border-acento/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-acento">
                  En desarrollo
                </span>
              )}
            </div>
            <Titular nivel={1} className="mt-4 max-w-3xl">
              {caso.nombre}
            </Titular>
            <Entrada className="mt-5 max-w-2xl text-xl">{caso.quees}</Entrada>

            <div className="mt-12">
              <MarcoNavegador caso={caso} />
            </div>

            {/* Hasta dónde llegó el trabajo. Es lo que separa un caso de otro. */}
            <div className="mt-10 border-t border-linea pt-8">
              <Rotulo>Qué hicimos</Rotulo>
              <ul className="mt-5 flex flex-wrap gap-2">
                {caso.alcance.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-linea px-4 py-1.5 text-sm text-tinta"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section tono="claro" espaciado="amplio">
          <Container>
            <div className="max-w-3xl">
              <Rotulo>El problema</Rotulo>
              <p className="mt-5 text-xl leading-relaxed text-suave">
                {caso.necesidad}
              </p>
            </div>

            {/*
              El detalle a fondo. Va en dos columnas y cada punto se titula con
              lo que el negocio consigue: quien recorre la página en diagonal se
              lleva la idea sin abrir un párrafo.
            */}
            <dl className="mt-16 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:mt-20">
              {caso.detalles.map((d) => (
                <div key={d.titulo} className="revela">
                  <dt className="font-titular text-lg font-bold tracking-[-0.015em] text-tinta">
                    {d.titulo}
                  </dt>
                  <dd className="mt-2.5 leading-relaxed text-suave">
                    {d.detalle}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>

        <Section tono="noche" espaciado="normal">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
              <div>
                <Rotulo>Cómo quedó</Rotulo>
                <p className="mt-5 font-titular text-2xl leading-snug font-bold tracking-[-0.02em] text-tinta lg:text-3xl">
                  {caso.resultado}
                </p>
                {caso.url && (
                  <a
                    href={caso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
                  >
                    Ver el sitio en vivo →
                  </a>
                )}
              </div>

              <div className="lg:pt-2">
                <Rotulo>Con qué está construido</Rotulo>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {caso.tecnologias.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-linea px-3 py-1 text-sm text-suave"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-tenue">
                  Es el único lugar del sitio donde usamos nombres técnicos. Si
                  no te dicen nada, no importa: lo que cuenta es lo de arriba.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section tono="claro" espaciado="normal">
          <Container>
            <Rotulo>Otros casos</Rotulo>
            <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-3">
              {otros.map((otro) => (
                <li
                  key={otro.slug}
                  className="sm:border-l sm:border-linea sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
                >
                  <Link href={`/portafolio/${otro.slug}`} className="group block">
                    <p className="font-titular font-semibold text-tinta transition-colors group-hover:text-acento">
                      {otro.nombre}
                    </p>
                    <p className="mt-1.5 text-sm leading-snug text-tenue">
                      {otro.quees}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section tono="gris" espaciado="normal">
          <Container ancho="texto" className="text-center">
            <Titular nivel={2}>¿Quieres algo así para tu negocio?</Titular>
            <Entrada className="mt-5">
              Cuéntanos qué necesitas y en dos o tres días te enseñamos una
              versión funcionando, sin costo.
            </Entrada>
            <BotonExterno
              href={waLink(
                `Hola, vi el caso de ${caso.nombre} en su portafolio y quiero platicar de un proyecto`,
              )}
              className="mt-8"
            >
              <IconoWhatsApp className="size-5" />
              Escríbenos por WhatsApp
            </BotonExterno>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
