import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------- Container */

export function Container({
  children,
  className = "",
  ancho = "normal",
}: {
  children: ReactNode;
  className?: string;
  ancho?: "normal" | "texto";
}) {
  const max = ancho === "texto" ? "max-w-3xl" : "max-w-6xl";
  return (
    <div className={`mx-auto ${max} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ Section */

export type Tono = "claro" | "gris" | "noche";

export function Section({
  children,
  tono = "claro",
  id,
  className = "",
  espaciado = "normal",
}: {
  children: ReactNode;
  tono?: Tono;
  id?: string;
  className?: string;
  espaciado?: "normal" | "amplio" | "corto" | "ninguno";
}) {
  const padding = {
    ninguno: "", // para secciones que fijan su propio ritmo vertical
    corto: "py-14 lg:py-16",
    normal: "py-20 lg:py-28",
    amplio: "py-24 lg:py-36",
  }[espaciado];

  return (
    <section
      id={id}
      data-tono={tono}
      className={`bg-superficie text-tinta ${padding} ${className}`}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ Eyebrow */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-acento">
      {children}
    </p>
  );
}

/** Etiqueta de grupo, más discreta que Eyebrow: no compite con el título. */
export function Rotulo({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-widest text-tenue">
      {children}
    </h3>
  );
}

/* ------------------------------------------------------------------- Titular */

export function Titular({
  children,
  nivel = 2,
  className = "",
}: {
  children: ReactNode;
  nivel?: 1 | 2 | 3;
  className?: string;
}) {
  const escala = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl lg:text-5xl",
    3: "text-2xl lg:text-3xl",
  }[nivel];
  const clases = `font-titular font-bold tracking-[-0.025em] leading-[1.08] text-balance text-tinta ${escala} ${className}`;

  if (nivel === 1) return <h1 className={clases}>{children}</h1>;
  if (nivel === 2) return <h2 className={clases}>{children}</h2>;
  return <h3 className={clases}>{children}</h3>;
}

/** Párrafo de entrada, debajo de un titular. */
export function Entrada({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-lg leading-relaxed text-suave ${className}`}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------- Button */

type Variante = "primario" | "secundario" | "enlace";

const base =
  "inline-flex items-center justify-center gap-2.5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento";

/*
  El oro de marca sobre tinta petróleo. Funciona igual sobre fondo claro y sobre
  fondo oscuro, así que el botón principal se ve idéntico en todo el sitio: es la
  única pieza que no cambia con el tono, y por eso se reconoce.
*/
const variantes: Record<Variante, string> = {
  primario:
    "rounded-full bg-marca px-6 py-4 text-noche hover:bg-marca-clara sm:px-8",
  secundario:
    "rounded-full border border-tenue px-6 py-4 text-tinta hover:border-acento hover:text-acento sm:px-8",
  enlace: "text-acento hover:underline underline-offset-4",
};

type BotonProps = {
  children: ReactNode;
  variante?: Variante;
  className?: string;
};

/** Enlace interno. */
export function BotonLink({
  href,
  children,
  variante = "primario",
  className = "",
}: BotonProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variantes[variante]} ${className}`}>
      {children}
    </Link>
  );
}

/** Enlace externo: siempre abre en pestaña nueva. */
export function BotonExterno({
  href,
  children,
  variante = "primario",
  className = "",
}: BotonProps & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variantes[variante]} ${className}`}
    >
      {children}
    </a>
  );
}

/* --------------------------------------------------------- Iconos de marca */

/**
 * Los glifos oficiales de WhatsApp, Facebook e Instagram.
 *
 * Van escritos a mano porque lucide dejó de traer iconos de marca en su
 * versión 1: importar `Facebook` desde ahí ya no compila. Y de todos modos
 * conviene el oficial — es el que la gente reconoce sin leer la etiqueta.
 */
function Glifo({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconoFacebook({ className = "" }: { className?: string }) {
  return (
    <Glifo className={className}>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </Glifo>
  );
}

export function IconoInstagram({ className = "" }: { className?: string }) {
  return (
    <Glifo className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </Glifo>
  );
}

export function IconoWhatsApp({ className = "" }: { className?: string }) {
  return (
    <Glifo className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </Glifo>
  );
}

