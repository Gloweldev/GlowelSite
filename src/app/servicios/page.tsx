import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import ResumenPrecios from "@/components/ResumenPrecios";
import {
  Container,
  Section,
  Titular,
  Entrada,
  Eyebrow,
  Rotulo,
  BotonExterno,
  IconoWhatsApp,
} from "@/components/ui";
import type { Nivel } from "@/data/servicios";
import { niveles, seccionesDisponibles, waLink } from "@/data/servicios";
import { migaDePan } from "@/data/sitio";
import DatosEstructurados from "@/components/DatosEstructurados";

export const metadata: Metadata = {
  title: "Diseño web, tiendas en línea y sistemas a la medida",
  description:
    "Qué consigue tu negocio con cada uno: una página que te encuentren en Google, un sistema que venda y agende por ti, o una plataforma a la medida.",
  alternates: { canonical: "/servicios" },
};

/**
 * Lo que el negocio consigue, en dos columnas.
 *
 * El título de cada punto está escrito para que se pueda leer solo: quien
 * recorre la página en diagonal se lleva la idea sin abrir un párrafo.
 */
function LoQueLogras({ nivel }: { nivel: Nivel }) {
  return (
    <dl className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
      {nivel.logras.map((cosa) => (
        <div key={cosa.titulo} className="revela">
          <dt className="font-titular text-lg font-bold tracking-[-0.015em] text-tinta">
            {cosa.titulo}
          </dt>
          <dd className="mt-2.5 leading-relaxed text-suave">{cosa.detalle}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ServiciosPage() {
  const [presencia, sistemas, plataformas] = niveles;

  return (
    <div className="min-h-screen">
      <DatosEstructurados
        datos={migaDePan([{ nombre: "Servicios", ruta: "/servicios" }])}
      />
      <Header />
      <main>
        {/*
          Índice, no portada.

          Quien llega aquí ya sabe que necesita algo; lo que no quiere es bajar
          leyendo tres bloques largos hasta topar con el suyo. Los tres caben
          arriba y cada uno salta a su detalle.

          Sin precios: si el número aparece junto a cada servicio, el visitante
          lee precio-precio-precio y nunca lee qué consigue. Todo el dinero vive
          en la sección de precios del inicio, en un solo lugar, y cada servicio
          cierra con la llamada que le toca —tabla para la página, cotización
          para el sistema y la plataforma.
        */}
        <Section tono="noche" className="pt-36 lg:pt-44">
          <Container>
            <Titular nivel={1} className="max-w-3xl">
              Tres formas de resolverlo. Esta es cada una a fondo.
            </Titular>
            <Entrada className="mt-6 max-w-2xl text-xl">
              Una página, un sistema o una plataforma a la medida. En las tres
              ves el trabajo funcionando antes de pagar, y el precio se cierra
              por escrito antes de empezar.
            </Entrada>

            <div className="mt-14 grid divide-y divide-linea border-y border-linea lg:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {niveles.map((nivel) => (
                <a
                  key={nivel.numero}
                  href={`#${nivel.ancla}`}
                  className="group flex flex-col py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento lg:px-8 lg:py-8 lg:first:pl-0 lg:last:pr-0"
                >
                  <p className="font-titular text-2xl font-bold tracking-[-0.02em] text-tinta transition-colors group-hover:text-acento">
                    {nivel.llano}
                  </p>
                  <p className="mt-3 leading-relaxed text-suave">
                    {nivel.entrega}
                  </p>
                  <p className="mt-4 text-sm leading-snug text-tenue">
                    Ideal para {nivel.idealPara.toLowerCase()}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-acento">
                    Ver a fondo
                    <ArrowDown
                      className="size-4 transition-transform group-hover:translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </div>

          </Container>
        </Section>

        {/*
          Tu página — encabezado fijo a la izquierda mientras el detalle corre.
          En pantalla ancha el lector nunca pierde de vista de qué servicio le
          están hablando.
        */}
        <Section tono="claro" espaciado="amplio">
          <Container>
            {/*
              El ancla va en el contenido y no en la sección: si va arriba, el
              salto aterriza en el relleno superior y el visitante llega a una
              franja vacía con el título a media pantalla.
            */}
            <div
              id={presencia.ancla}
              className="grid scroll-mt-32 gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20"
            >
              <div className="lg:sticky lg:top-32 lg:self-start">
                <Eyebrow>Servicio 1</Eyebrow>
                <Titular nivel={2} className="mt-3">
                  {presencia.llano}
                </Titular>
                <p className="mt-4 text-lg text-suave">{presencia.promesa}</p>
                <p className="mt-6 leading-relaxed text-suave">
                  {presencia.paraQuien}
                </p>
              </div>

              <div>
                <LoQueLogras nivel={presencia} />

                <div className="revela mt-14 border-t border-linea pt-8">
                  <Rotulo>Las secciones que puedes armar</Rotulo>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {seccionesDisponibles.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-linea px-4 py-1.5 text-sm text-tinta"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-suave">
                    Eliges las que necesite tu negocio. El paquete marca
                    cuántas páginas y cuántas secciones entran, y si quieres una
                    sección más se agrega por $800.
                  </p>
                </div>

                {/*
                  La página es la única con precio publicable, así que su
                  llamada lleva a la tabla en vez de a cotizar.
                */}
                <Link
                  href={`/precios#${presencia.ancla}`}
                  className="group mt-12 inline-flex items-center gap-2 font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
                >
                  Ver los paquetes y lo que cuesta cada uno
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/*
          Tu sistema — encabezado centrado y el detalle a todo lo ancho. Es el
          servicio con más que contar, y el cambio de eje corta la monotonía de
          tres bloques seguidos con la misma forma.
        */}
        <Section tono="noche" espaciado="amplio">
          <Container>
            <div
              id={sistemas.ancla}
              className="mx-auto max-w-2xl scroll-mt-32 text-center"
            >
              <Eyebrow>Servicio 2</Eyebrow>
              <Titular nivel={2} className="mt-3">
                {sistemas.llano}
              </Titular>
              <p className="mt-4 text-lg text-suave">{sistemas.promesa}</p>
              <p className="mt-6 leading-relaxed text-suave">
                {sistemas.paraQuien}
              </p>
            </div>

            <div className="mt-16 lg:mt-20">
              <LoQueLogras nivel={sistemas} />
            </div>

            <div className="revela mx-auto mt-16 max-w-3xl border-t border-linea pt-10 text-center">
              <p className="text-lg leading-relaxed text-suave">
                No hace falta que lleve todo. La mayoría empieza por lo que hoy
                le quita más tiempo, y lo demás se agrega después sin rehacer
                nada. Por eso no hay paquetes: el precio sale de lo que el tuyo
                tenga que hacer.
              </p>
              <BotonExterno
                href={waLink(
                  "Hola, quiero cotizar un sistema para mi negocio (tienda, reservas o inventario)",
                )}
                className="mt-8"
              >
                <IconoWhatsApp className="size-5" />
                Cotizar mi sistema
              </BotonExterno>
            </div>
          </Container>
        </Section>

        {/*
          Tu plataforma — a un solo lado, con aire. Es el servicio que menos se
          puede enumerar, así que se le da tamaño y espacio en vez de lista.
        */}
        <Section tono="claro" espaciado="amplio">
          <Container>
            <div id={plataformas.ancla} className="max-w-3xl scroll-mt-32">
              <Eyebrow>Servicio 3</Eyebrow>
              <Titular nivel={2} className="mt-3">
                {plataformas.llano}
              </Titular>
              <p className="mt-5 text-xl leading-relaxed text-suave">
                {plataformas.promesa}. {plataformas.paraQuien}
              </p>
            </div>

            <div className="mt-16 lg:mt-20">
              <LoQueLogras nivel={plataformas} />
            </div>

            <div className="revela mt-16 max-w-3xl">
              <p className="font-titular text-2xl leading-snug font-bold tracking-[-0.02em] text-tinta lg:text-3xl">
                Si nos lo puedes explicar con tus palabras, lo podemos
                construir.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-suave">
                Cada plataforma se calcula sola, después de una sesión donde
                entendemos qué tiene que hacer. Esa plática no cuesta ni te
                compromete a nada.
              </p>
              <BotonExterno
                href={waLink(
                  "Hola, quiero cotizar una plataforma a la medida. Les cuento la idea",
                )}
                className="mt-8"
              >
                <IconoWhatsApp className="size-5" />
                Cotizar mi plataforma
              </BotonExterno>
            </div>
          </Container>
        </Section>

        {/*
          El precio, después de haber explicado los tres. Es la pregunta que
          sigue, y aquí es donde toca: no arriba, compitiendo con lo que
          consigues. El desglose completo vive en /precios.
        */}
        <Section tono="gris" espaciado="amplio">
          <Container>
            <ResumenPrecios />
          </Container>
        </Section>

        <Section tono="noche" espaciado="normal">
          <Container ancho="texto" className="text-center">
            <Titular nivel={2}>¿No sabes cuál necesitas?</Titular>
            <Entrada className="mt-5">
              Cuéntanos qué quieres resolver, en tus palabras. Te decimos cuál de
              las tres es y cuánto cuesta, sin rodeos.
            </Entrada>
            <BotonExterno
              href={waLink(
                "Hola, vi los servicios en su sitio y quiero saber cuál de las tres necesito",
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
