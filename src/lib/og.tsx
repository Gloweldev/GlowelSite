import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * La tarjeta que se ve cuando alguien comparte un enlace del sitio.
 *
 * Estaba en la paleta anterior —azul pizarra y azul brillante— así que cada
 * vez que alguien pegaba un enlace en WhatsApp aparecía una marca que ya no
 * existe. Ahora sale en petróleo y oro, como el sitio.
 *
 * Sin tipografía de marca a propósito: cargarla obligaría a bajar el archivo
 * durante la compilación, y un despliegue no debe depender de que un servidor
 * ajeno conteste. El color y la composición cargan la identidad.
 */
export function tarjetaSocial({
  titulo,
  bajada,
}: {
  titulo: string;
  bajada: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1b27",
          padding: "76px 80px",
        }}
      >
        {/* La luz de la marca, en la esquina de donde nace el logotipo. */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 760,
            height: 620,
            background:
              "radial-gradient(circle at 40% 45%, rgba(238,176,99,0.20), rgba(238,176,99,0) 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "#eeb063",
            }}
          />
          <div style={{ display: "flex", color: "#eeb063", fontSize: 32 }}>
            glowel.com.mx
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              maxWidth: "940px",
            }}
          >
            {titulo}
          </div>
          <div
            style={{
              display: "flex",
              color: "#a2b6c2",
              fontSize: 34,
              lineHeight: 1.3,
              maxWidth: "900px",
            }}
          >
            {bajada}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
