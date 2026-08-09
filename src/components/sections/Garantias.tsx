import { Check } from "lucide-react";
import { Container, Section, Titular, Entrada } from "@/components/ui";
import { garantias } from "@/data/contenido";

/**
 * Sin reglas ni números, al revés que el proceso: aquí no hay secuencia que
 * seguir, hay cuatro afirmaciones que sostenerse solas. Las separa el aire.
 */
const Garantias = () => {
  return (
    <Section tono="noche">
      <Container>
        <div className="max-w-2xl">
          <Titular nivel={2}>Lo que sí garantizamos</Titular>
          <Entrada className="mt-5">
            Cuatro cosas. Las cuatro las cumplimos cualquier día de la semana.
            No prometemos nada más.
          </Entrada>
        </div>

        <ul className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {garantias.map((g) => (
            <li key={g.titulo} className="flex gap-4">
              <Check
                className="mt-1 h-5 w-5 flex-shrink-0 text-acento"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-tinta">
                  {g.titulo}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-suave">
                  {g.detalle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Garantias;
