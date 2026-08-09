import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import Portfolio from "@/components/sections/Portfolio";
import { Container, Section, Titular, Entrada, BotonExterno } from "@/components/ui";
import { waLink } from "@/data/servicios";
import { migaDePan } from "@/data/sitio";
import DatosEstructurados from "@/components/DatosEstructurados";

export const metadata: Metadata = {
  title: "Portafolio de proyectos web y sistemas",
  description:
    "Proyectos construidos de principio a fin: un traductor de lengua de señas con inteligencia artificial, una plataforma que consigue intérpretes en minutos y sitios para empresas de seguridad y mantenimiento industrial.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  return (
    <div className="min-h-screen">
      <DatosEstructurados
        datos={migaDePan([{ nombre: "Portafolio", ruta: "/portafolio" }])}
      />
      <Header />
      <main>
        <Section tono="noche" className="pt-36 lg:pt-44" espaciado="amplio">
          <Container>
            <Titular nivel={1} className="max-w-3xl">
              Lo que hemos construido
            </Titular>
            <Entrada className="mt-6 max-w-2xl text-xl">
              No mostramos números inventados. Mostramos lo que somos capaces de
              construir de principio a fin.
            </Entrada>
          </Container>
        </Section>

        <Portfolio />

        <Section tono="gris" espaciado="normal">
          <Container ancho="texto" className="text-center">
            <Titular nivel={2}>¿Quieres algo así para tu negocio?</Titular>
            <Entrada className="mt-5">
              Cuéntanos qué necesitas y en dos o tres días te enseñamos una
              versión funcionando, sin costo.
            </Entrada>
            <BotonExterno
              href={waLink(
                "Hola, vi su portafolio y quiero platicar sobre un proyecto",
              )}
              className="mt-8"
            >
              Chatear en WhatsApp
            </BotonExterno>
          </Container>
        </Section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
