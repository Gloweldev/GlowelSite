import { tarjetaSocial, size, contentType } from "@/lib/og";

export const alt =
  "Glowel — Sitios y sistemas hechos para tu negocio. Lo ves funcionando antes de pagar.";
export { size, contentType };

export default function OpengraphImage() {
  return tarjetaSocial({
    titulo: "Sitios y sistemas hechos para tu negocio",
    bajada: "Lo ves funcionando antes de pagar nada. Desde $6,000 MXN.",
  });
}
