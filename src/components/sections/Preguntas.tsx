import { Container, Section, Titular } from "@/components/ui";
import { preguntas } from "@/data/contenido";

/**
 * Acordeón con <details>: se abre y cierra sin JavaScript y el buscador lee
 * las respuestas aunque estén plegadas.
 */
const Preguntas = () => {
  return (
    <Section tono="claro" id="preguntas">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Titular nivel={2}>Preguntas frecuentes</Titular>
          </div>

          <div className="divide-y divide-linea border-y border-linea">
            {preguntas.map((p) => (
              <details key={p.pregunta} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-tinta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento">
                  {p.pregunta}
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-shrink-0 text-tenue transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-suave">
                  {p.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Preguntas;
