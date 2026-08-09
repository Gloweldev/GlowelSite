import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  IconoWhatsApp,
  IconoFacebook,
  IconoInstagram,
} from "@/components/ui";
import { REDES } from "@/data/sitio";

/**
 * Los mismos perfiles que van en `sameAs`. Que estén enlazados desde el sitio
 * es la otra mitad del par: Google confirma la marca cuando el sitio apunta a
 * la red y la red apunta al sitio.
 */
const redes = [
  { nombre: "WhatsApp", href: REDES.whatsapp, Icono: IconoWhatsApp },
  { nombre: "Facebook", href: REDES.facebook, Icono: IconoFacebook },
  { nombre: "Instagram", href: REDES.instagram, Icono: IconoInstagram },
];

/**
 * Solo destinos que existen. `#planes` llevaba a un ancla que no está en
 * ninguna página, y «Servicios y precios» era un solo enlace cuando ya son dos
 * pantallas distintas. Si algo se renombra o se mueve, se corrige aquí.
 */
const grupos = [
  {
    titulo: "Sitio",
    enlaces: [
      { nombre: "Inicio", href: "/" },
      { nombre: "Servicios", href: "/servicios" },
      { nombre: "Precios", href: "/precios" },
      { nombre: "Portafolio", href: "/portafolio" },
    ],
  },
  {
    titulo: "Antes de decidir",
    enlaces: [
      { nombre: "Cómo trabajamos", href: "/#proceso" },
      { nombre: "Preguntas frecuentes", href: "/#preguntas" },
      { nombre: "Planes de mantenimiento", href: "/precios#mantenimiento" },
      { nombre: "Contacto", href: "/#contacto" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer data-tono="noche" className="bg-superficie text-tinta">
      <Container>
        {/*
          Aquí había otro botón de WhatsApp. La sección de contacto, justo
          encima, ya es exactamente esa llamada: dos veces seguidas no es
          énfasis, es ruido.
        */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.1fr]">
          <div className="lg:pr-10">
            <div className="relative flex h-12 w-40 items-center">
              <Image
                src="/assets/GlowelClaro.svg"
                alt="Glowel"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-suave">
              Hacemos páginas, sistemas y plataformas a la medida para negocios
              en México. Todo escrito desde cero, sin plantillas, y el código
              siempre es tuyo.
            </p>

            <ul className="mt-7 flex gap-3">
              {redes.map(({ nombre, href, Icono }) => (
                <li key={nombre}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Glowel en ${nombre}`}
                    className="flex size-10 items-center justify-center rounded-full border border-linea text-suave transition-colors hover:border-acento hover:text-acento focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento"
                  >
                    <Icono className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {grupos.map((grupo) => (
            <nav key={grupo.titulo} aria-label={grupo.titulo}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-tinta">
                {grupo.titulo}
              </h2>
              <ul className="mt-6 space-y-4 text-sm">
                {grupo.enlaces.map((e) => (
                  <li key={e.href}>
                    <Link
                      href={e.href}
                      className="text-suave transition-colors hover:text-tinta"
                    >
                      {e.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-tinta">
              Contacto
            </h2>
            <div className="mt-6 space-y-4 text-sm">
              <a
                href="mailto:glowel.dev@gmail.com"
                className="flex items-center text-suave transition-colors hover:text-tinta"
              >
                <Mail className="mr-3 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                glowel.dev@gmail.com
              </a>
              <a
                href="tel:+522224944012"
                className="flex items-center text-suave transition-colors hover:text-tinta"
              >
                <Phone className="mr-3 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                222 494 4012
              </a>
              {/*
                Una plaza, la real. Antes eran tres ciudades en renglones, que
                se leían como tres oficinas. La cobertura se dice aparte, que es
                lo que de verdad significaba esa lista.
              */}
              <p className="flex items-start text-suave">
                <MapPin
                  className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>San Andrés Cholula, Puebla</span>
              </p>
              <p className="pl-7 text-sm leading-relaxed text-tenue">
                Trabajamos con negocios de todo México, a distancia.
              </p>
            </div>
          </div>
        </div>

        {/*
          Aquí iban el aviso de privacidad y los términos. La página se retiró
          hasta que un abogado la revise: publicar un legal en borrador obliga
          más de lo que protege. Al volver, los enlaces regresan aquí.
        */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-linea py-8 md:flex-row">
          <p className="text-sm text-tenue">
            © {year} Glowel. Todos los derechos reservados.
          </p>
          <p className="text-sm text-tenue">
            Desarrollo web a la medida en Puebla y todo México
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
