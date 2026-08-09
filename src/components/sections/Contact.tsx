import {
  Container,
  Section,
  Titular,
  Entrada,
  BotonExterno,
  IconoWhatsApp,
} from "@/components/ui";
import { waLink } from "@/data/servicios";

/**
 * Un bloque, una acción. El teléfono, el correo y las ciudades viven en el pie,
 * que está justo debajo: repetirlos aquí solo restaba peso al único botón que
 * importa en esta parte de la página.
 */
const Contact = () => {
  return (
    <Section tono="gris" id="contacto">
      <Container ancho="texto" className="text-center">
        <Titular nivel={2}>¿Queda algo por resolver? Pregúntanos.</Titular>
        <Entrada className="mx-auto mt-5 max-w-xl">
          Escríbenos por WhatsApp y te contestamos en horario hábil, en menos de
          24 horas. Si ya quieres tu prototipo, dilo y empezamos.
        </Entrada>
        <BotonExterno
          href={waLink("Hola, tengo una duda sobre un proyecto")}
          className="mt-9"
        >
          <IconoWhatsApp className="size-5" />
          Escríbenos por WhatsApp
        </BotonExterno>

        {/*
          La plaza, escrita en la página y no solo en los datos de Google.
          «Desarrollo web en Puebla» es una búsqueda con poca competencia y
          mucha intención de compra, pero el buscador no puede asociarnos a
          esa ciudad si el nombre no aparece en ninguna parte del texto.
        */}
        <p className="mt-8 text-sm leading-relaxed text-tenue">
          Estamos en San Andrés Cholula, Puebla, y trabajamos con negocios de
          todo México sin necesidad de vernos en persona.
        </p>
      </Container>
    </Section>
  );
};

export default Contact;
