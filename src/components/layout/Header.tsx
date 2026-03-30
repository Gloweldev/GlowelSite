"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe, Cog, Brain, BarChart3, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close menus automatically on any natural route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const servicePillars = [
    { name: "Desarrollo Web Avanzado", icon: Globe, href: "/servicios/desarrollo-web" },
    { name: "Software a Medida", icon: Cog, href: "/servicios/software-a-medida" },
    { name: "Inteligencia Artificial", icon: Brain, href: "/servicios/inteligencia-artificial" },
    { name: "Automatizaciones", icon: Zap, href: "/servicios/automatizaciones" },
    { name: "Análisis de Datos", icon: BarChart3, href: "/servicios/analisis-de-datos" },
  ];

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Portafolio", href: "/#portafolio" },
    { name: "Metodología", href: "/#metodologia" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="w-40 h-12 lg:w-48 lg:h-14 flex items-center justify-center relative">
              <Image
                src={
                  isScrolled
                    ? "/assets/GlowelOscuro.svg"
                    : "/assets/GlowelClaro.svg"
                }
                alt="Glowel - Ingeniería de Software"
                fill
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-slate-200/60 overflow-hidden">
                  <div className="p-2">
                    {servicePillars.map((pillar) => (
                      <Link
                        key={pillar.name}
                        href={pillar.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                      >
                        <pillar.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                        <span className="text-sm font-medium">{pillar.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
            >
              Chatear en WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-slate-700 hover:text-blue-600 font-medium rounded-lg transition-colors"
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {servicePillars.map((pillar) => (
                    <Link
                      key={pillar.name}
                      href={pillar.href}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <pillar.icon className="w-4 h-4" />
                      {pillar.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20para%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chatear en WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
