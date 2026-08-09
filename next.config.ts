import type { NextConfig } from "next";

/**
 * Las cabeceras de seguridad se declaran aquí y no en `public/_headers`.
 *
 * Ese archivo sí funciona, pero solo para los archivos estáticos: las imágenes
 * de /assets salen con su cache-control correcto. El HTML no, porque lo sirve
 * el runtime de Next y no pasa por esa regla. Comprobado en producción: de todo
 * el bloque `/*` únicamente llegaba `X-Content-Type-Options`.
 */
const cabecerasDeSeguridad = [
  // El sitio no debe poder incrustarse en un iframe ajeno.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // No usamos cámara, micrófono ni ubicación: se niegan de entrada.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: cabecerasDeSeguridad }];
  },
};

export default nextConfig;
