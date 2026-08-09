import { Check } from "lucide-react";
import { BotonExterno } from "@/components/ui";
import { waLink, type ColumnaPrecio } from "@/data/servicios";

/**
 * Tres opciones lado a lado. La recomendada se distingue por estructura
 * —superficie elevada y borde marcado— no por decoración.
 *
 * Lo que comparten las tres va una sola vez debajo, en `comun`. Repetirlo
 * dentro de cada columna haría que las tres empezaran igual y la comparación
 * se perdería en las primeras líneas.
 */
export default function TablaPrecios({
  etiqueta,
  columnas,
  comun,
  comunTitulo = "Las tres incluyen",
  notaPie,
  variante = "primario",
}: {
  etiqueta: string;
  columnas: ColumnaPrecio[];
  comun: string[];
  comunTitulo?: string;
  notaPie?: string;
  variante?: "primario" | "secundario";
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-tenue">
        {etiqueta}
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-5">
        {columnas.map((col) => (
          <div
            key={col.nombre}
            // La recomendada flota sobre la superficie; las otras van al ras.
            className={`flex flex-col rounded-xl border p-6 lg:p-7 ${
              col.recomendado
                ? "border-acento bg-elevado shadow-sm ring-1 ring-acento"
                : "border-linea"
            }`}
          >
            <div className="flex min-h-6 items-center">
              {col.recomendado && (
                <span className="rounded-full bg-marca px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-noche">
                  Recomendado
                </span>
              )}
            </div>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-tinta">
              {col.nombre}
            </h3>

            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="text-3xl font-bold tracking-tight text-tinta">
                {col.precio}
              </span>
              {col.periodo && (
                <span className="text-sm text-tenue">{col.periodo}</span>
              )}
            </p>

            <p className="mt-3 border-b border-linea pb-5 text-suave">
              {col.alcance}
            </p>

            <ul className="mt-5 flex-grow space-y-2.5">
              {col.distingue.map((d) => (
                <li key={d} className="flex gap-2.5 text-sm text-tinta">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-acento"
                    aria-hidden="true"
                  />
                  <span>{d}</span>
                </li>
              ))}
              {col.distingue.length === 0 && col.carece && (
                <li className="text-sm text-tenue">{col.carece}</li>
              )}
            </ul>

            <BotonExterno
              href={waLink(col.mensaje)}
              // Solo la recomendada del bloque principal va en sólido: el
              // desarrollo es la decisión de compra, la mensualidad viene después.
              variante={
                variante === "primario" && col.recomendado
                  ? "primario"
                  : "secundario"
              }
              className="mt-7 w-full"
            >
              Me interesa
            </BotonExterno>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-linea pt-6">
        <p className="text-sm text-suave">
          <span className="font-semibold text-tinta">{comunTitulo}:</span>{" "}
          {comun.join(" · ")}.
        </p>
        {notaPie && <p className="mt-2 text-sm text-tenue">{notaPie}</p>}
      </div>
    </div>
  );
}
