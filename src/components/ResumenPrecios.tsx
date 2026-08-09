import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Titular, Entrada } from "@/components/ui";
import { niveles } from "@/data/servicios";

/**
 * Los tres precios, con su flecha a la pantalla de precios.
 *
 * Vive en dos lugares —el inicio y /servicios— porque en los dos aparece la
 * misma pregunta en el mismo momento: ya entendí qué hacen, ¿cuánto cuesta?
 * Al ser un solo componente, los tres números no se pueden desincronizar.
 *
 * Cada renglón manda a la sección de su producto en /precios, que se enciende
 * al llegar. El detalle no se repite aquí: para eso existe esa pantalla.
 */
const ResumenPrecios = () => {
  return (
    <>
      <div className="max-w-2xl">
        <Titular nivel={2}>¿Y cuánto cuesta? Sin rodeos:</Titular>
        <Entrada className="mt-5">
          Aquí están los tres precios y lo que cuesta mantenerlo vivo después.
          Sin formulario, sin llamada de ventas y sin esperar días a que alguien
          te conteste.
        </Entrada>
      </div>

      <ul className="mt-14 divide-y divide-linea border-y border-linea">
        {niveles.map((nivel) => (
          <li key={nivel.numero}>
            <Link
              href={`/precios#${nivel.ancla}`}
              className="group grid gap-3 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-12"
            >
              <div>
                <h3 className="font-titular text-2xl font-bold tracking-[-0.02em] text-tinta transition-colors group-hover:text-acento">
                  {nivel.llano}
                </h3>
                <p className="mt-2.5 max-w-xl leading-relaxed text-suave">
                  {nivel.precioDepende}
                </p>
              </div>

              <p className="flex items-baseline gap-2 sm:justify-end">
                <span className="text-sm text-tenue">desde</span>
                <span className="font-titular text-3xl font-bold tracking-[-0.025em] text-tinta sm:text-4xl">
                  {nivel.precio}
                </span>
                <span className="text-sm text-tenue">MXN</span>
                <ArrowRight
                  className="size-5 self-center text-acento transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResumenPrecios;
