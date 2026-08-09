import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import TablaPrecios from "@/components/TablaPrecios";
import {
  Container,
  Section,
  Titular,
  Entrada,
  Rotulo,
  BotonExterno,
  IconoWhatsApp,
} from "@/components/ui";
import {
  niveles,
  paquetesDesarrollo,
  incluidoSiempre,
  noIncluido,
  planesMensuales,
  incluidoPlanes,
  waLink,
} from "@/data/servicios";
import { migaDePan } from "@/data/sitio";
import DatosEstructurados from "@/components/DatosEstructurados";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta una página web? Precios publicados",
  description:
    "Páginas web desde $6,000, sistemas desde $15,000 y plataformas a la medida desde $24,000 MXN. Mantenimiento desde $650 al mes. Sin cotizar ni esperar.",
  alternates: { canonical: "/precios" },
};

/**
 * La pantalla dedicada al dinero.
 *
 * Existe porque el precio es la pregunta que más se busca y no cabe entera en
 * una sección: son tres productos con lógicas de cobro distintas más los planes
 * mensuales. En el inicio y en /servicios queda el resumen con flecha; el
 * desglose vive aquí, y cada producto tiene su ancla para que esa flecha caiga
 * exactamente en su bloque, que se enciende al llegar.
 *
 * Solo la página tiene paquetes publicables, porque su precio depende de algo
 * contable: cuántas secciones lleva. Un sistema y una plataforma no tienen dos
 * casos iguales, así que en lugar de inventarles una tabla se explica de qué
 * depende el número y se ofrece cotizar.
 */

/**
 * Los bloques se alinean con el resto: el relleno se cancela con el margen.
 *
 * `scroll-mt-32` es lo que hace que el salto desde el inicio o desde servicios
 * caiga bien: el ancla vive en el bloque y no en la sección, así que el brinco
 * se salta el relleno de arriba y el título queda a la vista, no a media
 * pantalla. Son 8 rem: 6 del encabezado fijo y 2 de aire.
 */
const bloque =
  "resaltable scroll-mt-32 -mx-4 rounded-2xl p-4 sm:-mx-6 sm:p-6 lg:-mx-8 lg:p-8";

export default function PreciosPage() {
  const [pagina, sistema, plataforma] = niveles;

  return (
    <div className="min-h-screen">
      <DatosEstructurados
        datos={migaDePan([{ nombre: "Precios", ruta: "/precios" }])}
      />
      <Header />
      <main>
        <Section tono="noche" className="pt-36 lg:pt-44">
          <Container>
            <Titular nivel={1} className="max-w-3xl">
              Todo el dinero, en un solo lugar
            </Titular>
            <Entrada className="mt-6 max-w-2xl text-xl">
              Lo que cuesta construirlo y lo que cuesta mantenerlo vivo después.
              Sin formulario, sin llamada de ventas y sin esperar días a que
              alguien te conteste.
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
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="text-sm text-tenue">desde</span>
                    <span className="font-titular text-3xl font-bold tracking-[-0.025em] text-tinta">
                      {nivel.precio}
                    </span>
                    <span className="text-sm text-tenue">MXN</span>
                  </p>
                  <p className="mt-3 leading-relaxed text-suave">
                    {nivel.precioDepende}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-acento">
                    Ver el desglose
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

        {/* ------------------------------------------------ Tu página */}
        <Section tono="claro" espaciado="amplio">
          <Container>
            <div id={pagina.ancla} className={bloque}>
              <Rotulo>Precio cerrado, sin cotizar</Rotulo>
              <Titular nivel={2} className="mt-3">
                {pagina.llano}
              </Titular>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-suave">
                Es la única que sí se puede publicar en paquetes, porque su
                precio depende de algo que se cuenta: cuántas secciones lleva.
                Eliges las que necesite tu negocio y el paquete marca cuántas
                entran.
              </p>

              <div className="mt-10">
                <TablaPrecios
                  etiqueta="Pago único"
                  columnas={paquetesDesarrollo}
                  comun={incluidoSiempre}
                  comunTitulo="Los tres paquetes traen además"
                  notaPie="¿Necesitas una sección más de las que trae tu paquete? $800 cada una."
                />
              </div>

              <div className="mt-10 border-t border-linea pt-6">
                <Rotulo>Lo que no incluye</Rotulo>
                <p className="mt-4 text-suave">
                  {noIncluido.join(" · ")}. Si no los tienes, te decimos cómo
                  conseguirlos y con quién.
                </p>
              </div>

              <Link
                href={`/servicios#${pagina.ancla}`}
                className="mt-8 inline-block font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
              >
                Ver qué consigues con una página →
              </Link>
            </div>
          </Container>
        </Section>

        {/* ---------------------------------------------- Tu sistema */}
        <Section tono="noche" espaciado="amplio">
          <Container>
            <div id={sistema.ancla} className={bloque}>
              <Rotulo>Se cotiza</Rotulo>
              <Titular nivel={2} className="mt-3">
                {sistema.llano}
              </Titular>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-suave">
                No hay paquetes porque no hay dos sistemas iguales. El precio
                sale de qué tiene que hacer el tuyo: cuántas cosas resuelve,
                cuánta gente lo va a usar y con qué programas tiene que hablar.
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-suave">
                <span className="font-semibold text-tinta">
                  Lo cerramos por escrito antes de tocar nada
                </span>{" "}
                y ese número no se mueve, salvo que tú pidas algo nuevo. Los
                sistemas arrancan en {sistema.precio} MXN.
              </p>

              <BotonExterno
                href={waLink(
                  "Hola, quiero cotizar un sistema para mi negocio (tienda, reservas o inventario)",
                )}
                className="mt-9"
              >
                <IconoWhatsApp className="size-5" />
                Cotizar mi sistema
              </BotonExterno>

              <Link
                href={`/servicios#${sistema.ancla}`}
                className="mt-8 block font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
              >
                Ver qué consigues con un sistema →
              </Link>
            </div>
          </Container>
        </Section>

        {/* -------------------------------------------- Tu plataforma */}
        <Section tono="claro" espaciado="amplio">
          <Container>
            <div id={plataforma.ancla} className={bloque}>
              <Rotulo>Se cotiza</Rotulo>
              <Titular nivel={2} className="mt-3">
                {plataforma.llano}
              </Titular>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-suave">
                Se calcula proyecto por proyecto, después de una sesión donde
                entendemos qué tiene que hacer. Esa plática no cuesta ni te
                compromete a nada.
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-suave">
                Cuando hay claridad, la cotización se cierra completa:{" "}
                <span className="font-semibold text-tinta">
                  no cobramos por avance ni aparecen extras a la mitad
                </span>
                . Las plataformas arrancan en {plataforma.precio} MXN.
              </p>

              <BotonExterno
                href={waLink(
                  "Hola, quiero cotizar una plataforma a la medida. Les cuento la idea",
                )}
                className="mt-9"
              >
                <IconoWhatsApp className="size-5" />
                Cotizar mi plataforma
              </BotonExterno>

              <Link
                href={`/servicios#${plataforma.ancla}`}
                className="mt-8 block font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
              >
                Ver qué consigues con una plataforma →
              </Link>
            </div>
          </Container>
        </Section>

        {/* -------------------------------------------- Mantenimiento */}
        <Section tono="gris" espaciado="amplio">
          <Container>
            <div id="mantenimiento" className="max-w-2xl scroll-mt-32">
              <Rotulo>Después de entregar</Rotulo>
              <Titular nivel={2} className="mt-3">
                Que siga funcionando, sin que estés al pendiente
              </Titular>
              <p className="mt-5 text-lg leading-relaxed text-suave">
                <span className="font-semibold text-tinta">
                  Los dos primeros meses van incluidos con el desarrollo.
                </span>{" "}
                A partir del tercero eliges plan, y puedes dejarlo cuando
                quieras.
              </p>
            </div>

            <div className="mt-12">
              <TablaPrecios
                etiqueta="Cada mes"
                columnas={planesMensuales}
                comun={incluidoPlanes}
                comunTitulo="Los tres incluyen"
                notaPie="Sin permanencia forzosa. Si lo dejas, te entregamos todo sin costo."
                variante="secundario"
              />
            </div>
          </Container>
        </Section>

        <Section tono="noche" espaciado="normal">
          <Container ancho="texto" className="text-center">
            <Titular nivel={2}>¿No sabes en cuál cae lo tuyo?</Titular>
            <Entrada className="mt-5">
              Cuéntanos qué quieres resolver, en tus palabras. Te decimos cuál de
              los tres es y cuánto cuesta, sin rodeos.
            </Entrada>
            <BotonExterno
              href={waLink(
                "Hola, vi los precios en su sitio y quiero saber cuánto costaría lo mío",
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
