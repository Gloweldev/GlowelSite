import { tarjetaSocial, size, contentType } from "@/lib/og";

export const alt =
  "Glowel — Precios publicados: páginas desde $6,000, sistemas desde $15,000, plataformas desde $24,000.";
export { size, contentType };

export default function OpengraphImage() {
  return tarjetaSocial({
    titulo: "Todo el dinero, en un solo lugar",
    bajada:
      "Páginas desde $6,000, sistemas desde $15,000, plataformas desde $24,000 MXN.",
  });
}
