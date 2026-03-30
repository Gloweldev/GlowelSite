import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WhatsApp CTA Section */}
        <div className="py-16 border-b border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">
              ¿Listo para empezar a construir?
            </h3>
            <p className="text-slate-400 mb-8 text-lg">
              Agenda una consulta técnica sin compromiso. Analizamos tu proyecto y te decimos exactamente qué necesitas y cómo podemos construirlo.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20técnica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-base"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chatear con un ingeniero
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 pr-8">
            <div className="mb-6">
              <div className="w-40 h-12 relative flex items-center">
                <Image
                  src="/assets/GlowelClaro.svg"
                  alt="Glowel - Ingeniería de Software"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Somos una firma de ingeniería especializada en desarrollo web avanzado, software a medida, inteligencia artificial y automatización de procesos. Construimos soluciones tecnológicas escalables que resuelven problemas complejos de negocio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-6 text-slate-100 uppercase tracking-wider">Pilares</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Desarrollo Web Avanzado
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/software-a-medida"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Software a Medida
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/inteligencia-artificial"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Inteligencia Artificial
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/automatizaciones"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Automatizaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/analisis-de-datos"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Análisis de Datos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-6 text-slate-100 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4 text-sm">
              <a href="mailto:glowel.dev@gmail.com" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3" />
                glowel.dev@gmail.com
              </a>
              <a href="tel:+522223281100" className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                222 328 1100
              </a>
              <div className="flex items-start text-slate-400">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p>Monterrey, N.L.</p>
                  <p>Cholula, Puebla</p>
                  <p>Orizaba, Veracruz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {currentYear} Glowel Ingeniería. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/legal"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/legal"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
