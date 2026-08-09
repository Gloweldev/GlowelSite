import { tarjetaSocial, size, contentType } from "@/lib/og";

export const alt =
  "Glowel — Tres formas de resolverlo: tu página, tu sistema o tu plataforma.";
export { size, contentType };

export default function OpengraphImage() {
  return tarjetaSocial({
    titulo: "Tu página, tu sistema o tu plataforma",
    bajada:
      "Tres servicios explicados a fondo, en español y sin palabras técnicas.",
  });
}
