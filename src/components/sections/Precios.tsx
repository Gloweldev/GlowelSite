import Link from "next/link";
import { Check } from "lucide-react";
import { Container, Section, Rotulo } from "@/components/ui";
import ResumenPrecios from "@/components/ResumenPrecios";
import { incluidoEnTodo } from "@/data/servicios";

/**
 * El resumen de precios en el inicio: los tres números y qué los mueve.
 *
 * El desglose completo —paquetes de página, cotización de sistemas y
 * plataformas, planes mensuales— vive en /precios. Aquí solo hace falta el
 * número y una flecha; meter las tablas convertía el inicio en un catálogo.
 *
 * La mensualidad se menciona aunque no se desglose. Enterarte de un cobro
 * recurrente después de aceptar el precio se siente a costo escondido, y es
 * justo lo contrario de lo que promete el titular.
 */
const Precios = () => {
  return (
    <Section tono="gris" id="precios">
      <Container>
        <ResumenPrecios />

        <div className="mt-12">
          <Rotulo>Los tres incluyen</Rotulo>
          <ul className="mt-6 grid gap-x-10 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {incluidoEnTodo.map((cosa) => (
              <li key={cosa} className="flex gap-3 text-tinta">
                <Check
                  className="mt-1 size-4 shrink-0 text-acento"
                  aria-hidden="true"
                />
                <span>{cosa}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 border-t border-linea pt-8 text-lg leading-relaxed text-suave">
          <span className="font-semibold text-tinta">
            Los dos primeros meses de mantenimiento van incluidos.
          </span>{" "}
          Después, desde $650 al mes, y puedes dejarlo cuando quieras.{" "}
          <Link
            href="/precios"
            className="font-semibold whitespace-nowrap text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
          >
            Ver todos los precios →
          </Link>
        </p>
      </Container>
    </Section>
  );
};

export default Precios;
