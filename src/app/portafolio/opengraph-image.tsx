import { tarjetaSocial, size, contentType } from "@/lib/og";

export const alt =
  "Glowel — Portafolio: inteligencia artificial, plataformas a la medida y sitios de negocio.";
export { size, contentType };

export default function OpengraphImage() {
  return tarjetaSocial({
    titulo: "Lo que hemos construido",
    bajada:
      "Inteligencia artificial, una plataforma que consigue intérpretes en minutos y sitios de negocio.",
  });
}
