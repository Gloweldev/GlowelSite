import { Container, Section, Titular, Entrada, Eyebrow } from "@/components/ui";
import { pasosProceso } from "@/data/contenido";

/**
 * El proceso como una línea de tiempo, no como una lista.
 *
 * Una lista de seis renglones pegados al margen izquierdo se lee como un
 * contrato: nadie la recorre. Aquí la línea baja por el centro y los pasos se
 * alternan a los lados, así que el ojo va y viene y el avance se siente.
 *
 * Lo que la vuelve útil son las marcas de cobro. En un proceso de servicio la
 * duda real es «¿en qué momento me sacan dinero?», y en la línea se contesta
 * sin leer: los dos primeros pasos no traen marca. El oro está reservado para
 * esas dos etiquetas —es la información que importa— y los números van en gris.
 *
 * En celular la línea se recorre al margen izquierdo y todo cae de un lado,
 * que es la única forma que cabe.
 */
const Process = () => {
  return (
    <Section tono="claro" id="proceso">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <Titular nivel={2} className="mt-3">
            Seis pasos, y en cada uno sabes qué sigue.
          </Titular>
          <Entrada className="mt-5">
            De la primera plática por WhatsApp al sitio publicado. En la línea
            está marcado dónde se paga.
          </Entrada>
        </div>

        <ol className="mx-auto mt-16 max-w-4xl lg:mt-20">
          {pasosProceso.map((paso, i) => {
            const izquierda = i % 2 === 0;
            const ultimo = i === pasosProceso.length - 1;
            return (
              <li
                key={paso.titulo}
                className="relative grid grid-cols-[2rem_1fr] gap-x-5 pb-12 last:pb-0 lg:grid-cols-2 lg:gap-x-16"
              >
                {/*
                  El riel va por tramos, uno por paso, del punto propio al
                  siguiente. Uno solo de arriba abajo sobraría por debajo del
                  último punto, que es donde el texto sigue y la línea ya no.
                */}
                {!ultimo && (
                  <span
                    aria-hidden="true"
                    className="absolute top-4 bottom-0 left-4 w-px bg-linea lg:left-1/2"
                  />
                )}

                <span
                  aria-hidden="true"
                  className="absolute top-0 left-4 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-linea bg-superficie text-xs font-semibold tabular-nums text-tenue lg:left-1/2"
                >
                  {i + 1}
                </span>

                <div
                  className={`col-start-2 ${
                    izquierda
                      ? "lg:col-start-1 lg:pr-4 lg:text-right"
                      : "lg:col-start-2 lg:pl-4"
                  }`}
                >
                  <h3 className="font-titular text-xl font-bold tracking-[-0.02em] text-tinta">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-suave">
                    {paso.detalle}
                  </p>
                </div>

                {/*
                  La etiqueta de cobro parte el riel. Va `relative` a propósito:
                  el riel está posicionado y, si no, se dibujaría encima.
                */}
                {paso.cobro && (
                  <div className="col-span-full mt-10 lg:mt-12 lg:flex lg:justify-center">
                    <span className="relative ml-4 inline-block rounded-full bg-marca px-4 py-1.5 text-sm font-semibold text-noche lg:ml-0">
                      {paso.cobro}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
};

export default Process;
