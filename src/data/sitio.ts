import { WHATSAPP } from "./servicios";

export const SITIO = "https://glowel.com.mx";

/**
 * Los perfiles oficiales, sin parámetros de seguimiento.
 *
 * Van tal cual en `sameAs`: es como Google confirma que el negocio del sitio y
 * el de las redes son el mismo, y con eso puede armar el panel de la marca. Un
 * `?igsh=…&utm_source=qr` pegado aquí rompería esa coincidencia.
 */
export const REDES = {
  whatsapp: WHATSAPP,
  facebook: "https://www.facebook.com/profile.php?id=61580426302852",
  instagram: "https://www.instagram.com/glowel.mx",
} as const;

export const TELEFONO = "+522224944012";
export const TELEFONO_VISIBLE = "222 494 4012";
export const CORREO = "glowel.dev@gmail.com";

/**
 * Ruta de migas para Google. No se dibuja en pantalla —la navegación del sitio
 * es plana y no la necesita—, pero le dice al buscador cómo cuelga cada página
 * del inicio, y con eso muestra la ruta en el resultado en lugar de la URL.
 */
export const migaDePan = (tramos: { nombre: string; ruta: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { nombre: "Inicio", ruta: "/" },
    ...tramos,
  ].map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.nombre,
    item: `${SITIO}${t.ruta}`,
  })),
});
