/**
 * Un bloque de datos estructurados para Google.
 *
 * Cada página monta solo los que le corresponden: declarar preguntas
 * frecuentes en una pantalla que no las muestra es motivo de penalización, no
 * un extra gratis.
 *
 * El `<` se escapa antes de inyectar. Los datos son nuestros, pero salen de
 * archivos de texto que se editan a diario: basta que alguien pegue un
 * «</script>» dentro de una respuesta para cerrar la etiqueta antes de tiempo
 * y dejar el resto del JSON suelto en la página.
 */
export default function DatosEstructurados({ datos }: { datos: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(datos).replace(/</g, "\\u003c"),
      }}
    />
  );
}
