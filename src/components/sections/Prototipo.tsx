import { Container, Section, Entrada, BotonExterno, IconoWhatsApp } from "@/components/ui";
import { tratoPrototipo } from "@/data/contenido";
import { waLink } from "@/data/servicios";

/**
 * La promesa más importante de la página, y por eso la única con titular más
 * grande que el resto de las secciones. El tamaño es la jerarquía.
 *
 * Ya no es una lista numerada: los números decían «primero esto, luego esto»,
 * y eso lo cuenta Proceso más abajo. Aquí las tres cosas son ciertas al mismo
 * tiempo, así que van como afirmaciones —cada una responde una duda distinta:
 * cuánto me cuesta, cuánto me tardo, y qué pasa si digo que no.
 *
 * Sin adornos: una promesa se cree por lo que dice, no por lo que la rodea.
 */
const Prototipo = () => {
  return (
    <Section tono="claro" id="prototipo" espaciado="amplio">
      <Container>
        <h2 className="max-w-4xl font-titular text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-balance text-tinta sm:text-5xl lg:text-6xl">
          Primero lo ves funcionando. Después decides si pagas.
        </h2>

        <Entrada className="mt-7 max-w-2xl text-xl">
          La mayoría te pide anticipo para empezar a diseñar. Nosotros te lo
          mandamos funcionando antes de cobrarte un peso.
        </Entrada>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {tratoPrototipo.map((afirmacion) => (
            <div key={afirmacion.titulo}>
              <h3 className="font-titular text-2xl font-bold tracking-[-0.02em] text-acento">
                {afirmacion.titulo}
              </h3>
              <p className="mt-3.5 leading-relaxed text-suave">
                {afirmacion.detalle}
              </p>
            </div>
          ))}
        </div>

        <BotonExterno
          href={waLink(
            "Hola, quiero que me hagan un prototipo sin costo",
          )}
          className="mt-14"
        >
          <IconoWhatsApp className="size-5" />
          Pídelo por WhatsApp
        </BotonExterno>
      </Container>
    </Section>
  );
};

export default Prototipo;
