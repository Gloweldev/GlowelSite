import DatosEstructurados from "@/components/DatosEstructurados";
import { preguntas } from "@/data/contenido";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TuCaso from "@/components/sections/TuCaso";
import Soluciones from "@/components/sections/Soluciones";
import Precios from "@/components/sections/Precios";
import Prototipo from "@/components/sections/Prototipo";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Garantias from "@/components/sections/Garantias";
import Preguntas from "@/components/sections/Preguntas";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

/*
  Se genera desde las mismas preguntas que se dibujan abajo. Va en el inicio y
  solo en el inicio: es la única URL donde esas respuestas están a la vista.
*/
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((p) => ({
    "@type": "Question",
    name: p.pregunta,
    acceptedAnswer: { "@type": "Answer", text: p.respuesta },
  })),
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <DatosEstructurados datos={jsonLdFAQ} />
      <Header />
      <main>
        {/*
          El orden es el recorrido de una decisión: me reconozco → esto es lo
          que sale de mi caso → cuánto cuesta → y si no me gusta, no pago → sí
          saben construir → así trabajan.
          El prototipo va pegado al precio a propósito: es ahí donde aparece la
          objeción que responde.
        */}
        <Hero />
        <TuCaso />
        <Soluciones />
        <Precios />
        <Prototipo />
        <Portfolio
          titulo="Antes de decidir, mira lo que hemos construido."
          entrada="No mostramos números inventados. Mostramos lo que somos capaces de construir de principio a fin."
        />
        <Process />
        <Garantias />
        <Preguntas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
