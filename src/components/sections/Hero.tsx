import {
  Container,
  Section,
  BotonLink,
  BotonExterno,
  IconoWhatsApp,
} from "@/components/ui";
import SitioDeMuestra from "@/components/SitioDeMuestra";
import { waLink } from "@/data/servicios";

/**
 * Hero centrado.
 *
 * De catorce estudios revisados, los que centran el texto siempre ponen el
 * producto justo debajo —Webflow, Linear, Squarespace—; los que solo centran
 * texto se ven vacíos. Aquí el producto es un sitio, así que debajo va un sitio.
 *
 * Todo el hero cabe en una pantalla. El sitio de muestra se corta contra el
 * pliegue a propósito: da altura sin costar scroll, y se lee como que la página
 * sigue hacia abajo.
 */
const Hero = () => {
  return (
    <Section
      tono="noche"
      espaciado="ninguno"
      className="relative overflow-hidden"
    >
      {/* La marca se llama Glowel: la luz es suya, no un adorno de moda. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 h-[52rem]"
        style={{
          background:
            "radial-gradient(56rem 30rem at 50% 28%, rgba(238,176,99,0.17), transparent 68%)",
        }}
      />

      <Container className="relative pt-28 text-center sm:pt-32 lg:pt-36">
        {/* La escala baja en pantallas chicas: a 41px el titular se rompía en
            cinco renglones y dejaba de leerse de un golpe. */}
        <h1 className="emerge mx-auto max-w-4xl font-titular text-[2.35rem] font-bold leading-[1.05] tracking-[-0.035em] text-balance text-tinta sm:text-5xl sm:leading-[1.03] md:text-6xl lg:text-[4.25rem]">
          Sitios y sistemas hechos para{" "}
          <span className="text-acento">tu negocio.</span>
        </h1>

        {/*
          Dos productos, no una lista revuelta. Primero la página, que es lo que
          casi todo el que llega viene buscando; el sistema entra después y solo
          si se reconoce en el ejemplo.
        */}
        <p
          className="emerge mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-suave sm:text-xl"
          style={{ animationDelay: "90ms" }}
        >
          Diseñamos tu página desde cero. Y si necesitas vender en línea,
          agendar citas o llevar inventario, construimos el sistema.
        </p>

        {/* En celular los botones se estiran: son el blanco del pulgar. */}
        <div
          className="emerge mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "180ms" }}
        >
          <BotonExterno
            href={waLink("Hola, quiero información para mi negocio")}
            className="w-full max-w-xs sm:w-auto sm:max-w-none"
          >
            <IconoWhatsApp className="size-5" />
            Escríbenos por WhatsApp
          </BotonExterno>
          <BotonLink
            href="#precios"
            variante="secundario"
            className="w-full max-w-xs sm:w-auto sm:max-w-none"
          >
            Ver precios
          </BotonLink>
        </div>

        {/* La razón para escribir, donde se decide si escribir. */}
        <p
          className="emerge mt-6 text-sm text-tenue"
          style={{ animationDelay: "240ms" }}
        >
          Te lo enseñamos funcionando antes de que pagues nada.
        </p>

        {/*
          El ancla de la composición: un hero centrado sin nada debajo flota.
          Esto es lo que el cliente viene a comprar, armándose solo.
        */}
        <div
          className="emerge mx-auto mt-11 max-w-2xl pb-16 sm:mt-14 sm:pb-20 lg:pb-24"
          style={{ animationDelay: "300ms" }}
        >
          <SitioDeMuestra />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
