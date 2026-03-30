import { Home, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página No Encontrada | Glowel - Base de Datos a la que intentaste acceder",
  description:
    "La página que buscas no existe. Regresa al inicio de Glowel para encontrar nuestros servicios de ingeniería de software, IA y datos.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-2xl mx-auto text-center z-10">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-40 h-12 mx-auto relative">
            <Image
              src="/assets/GlowelClaro.svg"
              alt="Glowel Logo"
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <div className="inline-block relative">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-600 tracking-tighter">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -rotate-12"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Endpoint No Encontrado
          </h2>
          <p className="text-lg text-slate-400 mb-2">
            La ruta a la que intentaste acceder no existe en nuestra arquitectura actual.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/"
            className="group flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Link>

          <Link
            href="/#portafolio"
            className="group flex items-center justify-center px-8 py-3.5 border border-white/20 text-white hover:bg-white/5 disabled:hover:bg-transparent rounded-xl font-medium transition-all duration-300"
          >
            Ver Portafolio
            <ExternalLink className="w-4 h-4 ml-2 text-slate-400 group-hover:text-white transition-colors" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-3">
            ¿Necesitas ayuda técnica o buscabas un proyecto específico?
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20tuve%20un%20error%20404%20en%20su%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium border-b border-blue-400/30 hover:border-blue-300 pb-0.5"
          >
            Contactar a soporte
          </a>
        </div>
      </div>
    </div>
  );
}
