"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Section, Titular, Entrada } from "@/components/ui";
import MarcoNavegador from "@/components/MarcoNavegador";
import { casos } from "@/data/portafolio";

/**
 * El encabezado es opcional: en /portafolio lo pone el hero de la página, así
 * que pasarlo aquí lo duplicaría. En el inicio sirve de puente desde precios.
 */
const Portfolio = ({
  titulo,
  entrada,
}: {
  titulo?: string;
  entrada?: string;
}) => {
  const [activo, setActivo] = useState(0);
  const caso = casos[activo];

  return (
    <Section tono="noche" id="portafolio">
      <Container>
        {titulo && (
          <div className="max-w-2xl">
            <Titular nivel={2}>{titulo}</Titular>
            {entrada && <Entrada className="mt-5">{entrada}</Entrada>}
          </div>
        )}

        <div className={`grid gap-8 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-12 ${titulo ? "mt-14" : ""}`}>
          {/* Selector. En móvil va arriba y se desplaza en horizontal. */}
          <div
            role="tablist"
            aria-label="Proyectos"
            aria-orientation="vertical"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:divide-y lg:divide-linea lg:border-y lg:border-linea"
          >
            {casos.map((c, i) => {
              const seleccionado = i === activo;
              return (
                <button
                  key={c.slug}
                  role="tab"
                  type="button"
                  aria-selected={seleccionado}
                  onClick={() => setActivo(i)}
                  className={`flex-shrink-0 rounded-lg border px-4 py-3 text-left transition-colors lg:flex-shrink lg:rounded-none lg:border-0 lg:px-0 lg:py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento ${
                    seleccionado
                      ? "border-linea bg-realce lg:bg-transparent"
                      : "border-transparent hover:bg-realce lg:hover:bg-transparent"
                  }`}
                >
                  <span
                    className={`block whitespace-nowrap font-titular font-bold tracking-tight lg:whitespace-normal lg:text-xl ${
                      seleccionado ? "text-acento" : "text-tinta"
                    }`}
                  >
                    {c.nombre}
                  </span>
                  <span className="mt-1 hidden text-sm leading-snug text-suave lg:block">
                    {c.quees}
                  </span>
                  <span className="mt-2 hidden text-xs leading-snug text-tenue lg:block">
                    {c.sector}
                  </span>
                  {/* Se dice antes de entrar, no al llegar al caso. */}
                  {!c.url && (
                    <span className="mt-2 inline-block rounded-full border border-acento/40 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-acento">
                      En desarrollo
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Vista previa */}
          <div>
            <MarcoNavegador key={caso.slug} caso={caso} />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-snug text-tenue">
                {caso.alcance.join("  ·  ")}
              </p>
              <Link
                href={`/portafolio/${caso.slug}`}
                className="whitespace-nowrap font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
              >
                Ver el caso completo →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
