import { IconoWhatsApp } from "@/components/ui";
import { waLink } from "@/data/servicios";

const WhatsAppFloat = () => {
  return (
    <a
      href={waLink("Hola, me interesa conocer más sobre sus servicios")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      // El verde oficial de WhatsApp. Es el único color ajeno a la paleta que
      // se permite en el sitio: aquí lo que importa es que se reconozca.
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-colors hover:bg-[#1FBF5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <IconoWhatsApp className="size-6" />
    </a>
  );
};

export default WhatsAppFloat;
