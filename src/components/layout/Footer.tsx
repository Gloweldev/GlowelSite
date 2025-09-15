import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import GlowelClaro from '../../assets/GlowelClaro.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* WhatsApp CTA Section */}
        <div className="py-12 border-b border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para empezar tu proyecto?
            </h3>
            <p className="text-slate-300 mb-6">
              Contáctanos por WhatsApp para una respuesta rápida y personalizada
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20empezar%20mi%20proyecto%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chatear por WhatsApp
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="w-32 h-10">
                <img 
                  src={GlowelClaro} 
                  alt="Glowel Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Desarrollamos páginas web, tiendas online y software a medida que impulsan el crecimiento de tu negocio. 
              Tecnología moderna, precios transparentes y resultados garantizados.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">glowel.dev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm">222 328 1100</p>
                </div>
              </div>
              <div className="flex items-start text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <div>
                  <p className="font-medium mb-2">Ubicaciones</p>
                  <div className="text-sm space-y-1">
                    <p>• Monterrey, Nuevo León</p>
                    <p>• Cholula, Puebla</p>
                    <p>• Orizaba, Veracruz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20una%20página%20web" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  Páginas Web
                </a>
              </li>
              <li>
                <a href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20una%20tienda%20online" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20software%20a%20medida" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  Software a Medida
                </a>
              </li>
              <li>
                <a href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20mantenimiento%20web" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  Mantenimiento
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Glowel. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/legal" className="text-slate-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="/legal" className="text-slate-400 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="/legal" className="text-slate-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
