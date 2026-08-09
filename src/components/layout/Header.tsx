"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/data/servicios";
import { IconoWhatsApp } from "@/components/ui";

// Inicio va explícito aunque el logotipo lleve al mismo lado: mucha gente no
// sabe que el logotipo es un botón, y desde /servicios o /portafolio no hay
// otra forma visible de volver. El logotipo se queda, para quien sí lo sabe.
//
// Proceso no está porque es una sección de apoyo, no un destino que alguien
// busque. Precios sí: es lo que más se busca, y con pocos vecinos pesa más.
const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Precios", href: "/precios" },
  { name: "Portafolio", href: "/portafolio" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sobre el hero oscuro el encabezado va en blanco; al hacer scroll pasa a fondo claro.
  const sobreFondoClaro = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        sobreFondoClaro
          ? "border-b border-linea bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link
            href="/"
            className="relative flex h-12 w-40 items-center lg:h-14 lg:w-48"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src={
                sobreFondoClaro
                  ? "/assets/GlowelOscuro.svg"
                  : "/assets/GlowelClaro.svg"
              }
              alt="Glowel"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  sobreFondoClaro
                    ? "text-suave hover:text-acento focus-visible:outline-acento"
                    : "text-white hover:text-marca focus-visible:outline-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={waLink("Hola, me interesa platicar sobre un proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-marca px-5 py-2.5 text-sm font-semibold text-noche transition-colors hover:bg-marca-clara focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marca"
            >
              <IconoWhatsApp className="size-4" />
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className={`rounded-md p-2 transition-colors lg:hidden ${
              sobreFondoClaro ? "text-suave" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-linea bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium text-suave transition-colors hover:bg-realce hover:text-acento"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={waLink("Hola, me interesa platicar sobre un proyecto")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-marca px-4 py-3 text-center font-semibold text-noche transition-colors hover:bg-marca-clara"
            >
              <IconoWhatsApp className="size-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
