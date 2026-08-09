import Image from "next/image";
import type { Metadata } from "next";
import { Container, Titular, Entrada, BotonLink, BotonExterno } from "@/components/ui";
import { waLink } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "Esta página no existe. Vuelve al inicio para ver precios, portafolio y cómo trabajamos.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div
      data-tono="noche"
      className="flex min-h-screen items-center bg-superficie py-20 text-tinta"
    >
      <Container ancho="texto">
        <div className="relative h-10 w-32">
          <Image
            src="/assets/GlowelClaro.svg"
            alt="Glowel"
            fill
            className="object-contain object-left"
          />
        </div>

        <p className="mt-16 text-sm font-semibold uppercase tracking-widest text-tenue">
          Error 404
        </p>
        <Titular nivel={1} className="mt-4">
          Esta página no existe
        </Titular>
        <Entrada className="mt-5">
          Puede que el enlace esté mal escrito o que hayamos movido la página.
          Desde el inicio llegas a todo.
        </Entrada>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <BotonLink href="/">Ir al inicio</BotonLink>
          <BotonLink href="/servicios" variante="secundario">
            Ver precios
          </BotonLink>
        </div>

        <p className="mt-14 border-t border-linea pt-8 text-sm text-suave">
          ¿Buscabas algo en concreto?{" "}
          <BotonExterno
            href={waLink("Hola, no encontré una página en su sitio")}
            variante="enlace"
          >
            Pregúntanos por WhatsApp
          </BotonExterno>
        </p>
      </Container>
    </div>
  );
}
