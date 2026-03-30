"use client";

import { RefreshCw, AlertTriangle, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-32 h-10 mx-auto relative">
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
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-red-300 mr-4" />
            <h1 className="text-8xl sm:text-9xl font-bold text-white">500</h1>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Error del Servidor
          </h2>
          <p className="text-lg text-red-100 mb-2">
            Estamos experimentando problemas técnicos temporales.
          </p>
          <p className="text-base text-red-200">
            Nuestro equipo está trabajando para solucionarlo lo antes posible.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => reset()}
            className="group flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg font-semibold transition-all duration-300 hover:bg-red-50 hover:scale-105 hover:shadow-lg"
          >
            <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Intentar de Nuevo
          </button>

          <Link
            href="/"
            className="group flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105"
          >
            <AlertTriangle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Volver al Inicio
          </Link>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            ¿Necesitas ayuda inmediata?
          </h3>
          <p className="text-red-100 mb-4">
            Si el problema persiste, contáctanos directamente:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/522223281100?text=Hola,%20estoy%20experimentando%20problemas%20técnicos%20en%20el%20sitio%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-4 bg-green-600/20 hover:bg-green-600/30 rounded-lg transition-all duration-300 hover:scale-105 border border-green-500/30"
            >
              <MessageCircle className="w-6 h-6 text-green-300 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm font-medium text-white">WhatsApp</p>
                <p className="text-xs text-green-200">+52 222 328 1100</p>
              </div>
            </a>

            <a
              href="mailto:glowel.dev@gmail.com?subject=Problema técnico en el sitio web&body=Hola, estoy experimentando problemas técnicos en el sitio web. Por favor ayúdenme."
              className="group flex items-center justify-center p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all duration-300 hover:scale-105 border border-blue-500/30"
            >
              <Mail className="w-6 h-6 text-blue-300 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-xs text-blue-200">glowel.dev@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Status Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-center text-red-200">
            <div className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium">
              Estado del Servicio: Mantenimiento
            </span>
          </div>
          <p className="text-xs text-red-300 mt-2">
            Tiempo estimado de resolución: 15-30 minutos
          </p>
        </div>
      </div>
    </div>
  );
}
