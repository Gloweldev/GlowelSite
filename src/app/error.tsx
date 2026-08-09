"use client";

import Image from "next/image";
import { Container, Titular, Entrada, BotonLink, BotonExterno } from "@/components/ui";
import { waLink } from "@/data/servicios";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          Algo falló
        </p>
        <Titular nivel={1} className="mt-4">
          No pudimos cargar esta página
        </Titular>
        <Entrada className="mt-5">
          Fue un problema de nuestro lado, no tuyo. Vuelve a intentarlo; si
          sigue igual, escríbenos y lo revisamos.
        </Entrada>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-marca px-8 py-4 font-semibold text-noche transition-colors hover:bg-marca-clara focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento"
          >
            Intentar de nuevo
          </button>
          <BotonLink href="/" variante="secundario">
            Ir al inicio
          </BotonLink>
        </div>

        <p className="mt-14 border-t border-linea pt-8 text-sm text-suave">
          ¿Se sigue cayendo?{" "}
          <BotonExterno
            href={waLink("Hola, su sitio me está marcando un error")}
            variante="enlace"
          >
            Avísanos por WhatsApp
          </BotonExterno>
        </p>
      </Container>
    </div>
  );
}
