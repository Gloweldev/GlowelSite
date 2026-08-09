import { ArrowDown } from "lucide-react";
import { Container, Section, Titular, Entrada } from "@/components/ui";
import { niveles } from "@/data/servicios";

/**
 * Sección 2: que el visitante se señale a sí mismo.
 *
 * Sale del hero sabiendo que hacemos tres cosas, pero no cuál es la suya. Aquí
 * no lee tres servicios: busca su frase. Por eso el titular de cada columna va
 * en primera persona —es su voz, no la nuestra— y el síntoma viene de cosas que
 * puede señalar en su negocio hoy.
 *
 * Sin números: no es una secuencia, es una elección. Y sin precios: eso lo lleva
 * la sección de precios. Aquí es un espejo, no un catálogo.
 *
 * Cada columna cierra con la respuesta —«lo que necesitas es…»— y baja a su
 * tarjeta en «Esto es lo que construimos», que se enciende al llegar. El ancla
 * la comparten las dos secciones y también /servicios.
 */
const TuCaso = () => {
  return (
    <Section tono="claro" id="tu-caso">
      <Container>
        <div className="max-w-2xl">
          <Titular nivel={2}>¿En cuál te reconoces?</Titular>
          <Entrada className="mt-5">
            De ahí salen el precio y el tiempo. Si no te reconoces en ninguno,
            escríbenos y lo vemos.
          </Entrada>
        </div>

        <div className="mt-14 grid divide-y divide-linea border-y border-linea lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {niveles.map((nivel) => (
            <div
              key={nivel.numero}
              className="flex flex-col py-8 lg:px-8 lg:py-9 lg:first:pl-0 lg:last:pr-0"
            >
              <h3 className="font-titular text-2xl font-bold leading-tight tracking-[-0.02em] text-tinta">
                {nivel.caso}
              </h3>
              <p className="mt-4 leading-relaxed text-suave">{nivel.sintoma}</p>

              {/*
                Ancla nativa, no <Link>: el salto en la misma página tiene que
                dejar el hash en la barra para que :target encienda la tarjeta.
              */}
              <a
                href={`#${nivel.ancla}`}
                className="group mt-auto flex items-baseline gap-2 pt-8 font-semibold text-acento underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
              >
                {nivel.necesitas}
                <ArrowDown
                  className="size-4 shrink-0 self-center transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TuCaso;
