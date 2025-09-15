import { ArrowLeft, Home, Search } from 'lucide-react';
import GlowelClaro from '../../assets/GlowelClaro.svg';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={GlowelClaro} 
            alt="Glowel Logo" 
            className="w-32 h-10 mx-auto opacity-90"
          />
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <h1 className="text-8xl sm:text-9xl font-bold text-white mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Página No Encontrada
          </h2>
          <p className="text-lg text-slate-300 mb-2">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <p className="text-base text-slate-400">
            Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="/"
            className="group flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Volver al Inicio
          </a>
          
          <a
            href="/blog"
            className="group flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105"
          >
            <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Blog
          </a>
        </div>

        {/* Services Quick Links */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">
            ¿Qué estás buscando?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="/#servicios"
              className="group p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-white mb-1">Páginas Web</h4>
              <p className="text-xs text-slate-400">Desarrollo profesional</p>
            </a>
            
            <a
              href="/#servicios"
              className="group p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-green-400 group-hover:text-green-300 transition-colors">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-white mb-1">E-commerce</h4>
              <p className="text-xs text-slate-400">Tiendas online</p>
            </a>
            
            <a
              href="/#servicios"
              className="group p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-white mb-1">Software</h4>
              <p className="text-xs text-slate-400">A medida</p>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400 mb-2">
            ¿Necesitas ayuda específica?
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20necesito%20ayuda%20con%20mi%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
