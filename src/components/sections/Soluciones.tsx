import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, Titular, Entrada } from "@/components/ui";
import {
  VistaPagina,
  VistaSistema,
  VistaPlataforma,
} from "@/components/VistasPrevias";
import { niveles } from "@/data/servicios";

/**
 * Las tres soluciones, en el mismo orden que el espejo de arriba.
 *
 * Arriba el visitante se reconoció en una situación y bajó aquí por el enlace;
 * la tarjeta a la que llega se enciende sola —`:target`, sin una línea de
 * JavaScript— para que no tenga que buscar cuál era la suya.
 *
 * Sin precios: los tres números viven juntos en la sección de precios, que es
 * donde se comparan. Y una línea por tarjeta, no una lista: con listas las tres
 * columnas se alargaban y la sección se volvía un muro.
 *
 * Squarespace acompaña cada producto con los giros a los que les sirve, y es lo
 * mejor que tiene esa página: el lector busca el suyo antes de leer nada más.
 */
const vistas = [VistaPagina, VistaSistema, VistaPlataforma];

const Soluciones = () => {
  return (
    <Section tono="noche" id="soluciones">
      <Container>
        <div className="max-w-2xl">
          <Titular nivel={2}>Esto es lo que construimos.</Titular>
          <Entrada className="mt-5">
            De la página que te encuentran en Google al producto con lógica
            propia.
          </Entrada>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-4">
          {niveles.map((nivel, i) => {
            const Vista = vistas[i];
            return (
              <div
                key={nivel.numero}
                id={nivel.ancla}
                className="resaltable flex scroll-mt-32 flex-col rounded-2xl p-4 transition-colors"
              >
                <Vista />

                <h3 className="mt-6 font-titular text-2xl font-bold tracking-[-0.02em] text-tinta">
                  {nivel.llano}
                </h3>
                <p className="mt-3 leading-relaxed text-suave">
                  {nivel.entrega}
                </p>
                <p className="mt-4 text-sm leading-snug text-tenue">
                  Ideal para {nivel.idealPara.toLowerCase()}
                </p>

                <Link
                  href={`/servicios#${nivel.ancla}`}
                  className="group mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
                >
                  Ver {nivel.llano.toLowerCase()} a detalle
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Soluciones;
