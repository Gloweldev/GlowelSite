import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><g fill=\'none\' fill-rule=\'evenodd\'><g fill=\'%23ffffff\' fill-opacity=\'0.1\'><circle cx=\'12\' cy=\'12\' r=\'2\'/></g></g></svg>')] bg-repeat"></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-teal-600/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
          {/* Optimized Main Headline */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Desarrollo web y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              software
            </span>
            {' '}que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
              optimiza tu negocio
            </span>
          </h1>

          {/* More Concise Subtitle */}
          <p className="text-xl sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Sitios web profesionales, tiendas online y sistemas de automatización.{' '}
            <span className="text-white font-semibold">Aumenta tus ventas y tu visibilidad.</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex justify-center items-center mb-12 sm:mb-16">
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg sm:text-lg"
            >
              Solicitar presupuesto
              <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Proof Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-400 text-sm sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-base sm:text-sm">Prototipo en 7 días</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-base sm:text-sm">+50 proyectos entregados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-base sm:text-sm">Soporte 24/7</span>
            </div>
          </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              {/* Main Website Mockup */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-700/50">
                {/* Browser Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-slate-700 rounded-md h-6 ml-4 flex items-center px-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <div className="text-xs text-slate-400">mi-negocio.com</div>
                  </div>
                </div>
                
                {/* Website Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded w-20"></div>
                    <div className="flex gap-2">
                      <div className="h-4 bg-slate-600 rounded w-12"></div>
                      <div className="h-4 bg-slate-600 rounded w-12"></div>
                      <div className="h-4 bg-slate-600 rounded w-12"></div>
                      <div className="h-4 bg-blue-600 rounded w-16"></div>
                    </div>
                  </div>
                  
                  {/* Hero Section */}
                  <div className="space-y-3">
                    <div className="h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded w-full"></div>
                    <div className="h-3 bg-slate-600 rounded w-4/5"></div>
                    <div className="h-3 bg-slate-600 rounded w-3/5"></div>
                    <div className="flex gap-2 mt-4">
                      <div className="h-7 bg-blue-600 rounded-lg w-20"></div>
                      <div className="h-7 bg-slate-600 rounded-lg w-16"></div>
                    </div>
                  </div>
                  
                  {/* Features Section */}
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-600 rounded w-1/3"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-2">
                        <div className="h-8 bg-slate-700 rounded"></div>
                        <div className="h-2 bg-slate-600 rounded w-full"></div>
                        <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 bg-slate-700 rounded"></div>
                        <div className="h-2 bg-slate-600 rounded w-full"></div>
                        <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 bg-slate-700 rounded"></div>
                        <div className="h-2 bg-slate-600 rounded w-full"></div>
                        <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <div className="absolute -top-6 -right-6 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50 shadow-lg">
                <div className="text-xs font-mono space-y-1">
                  <div className="text-blue-400">function App() {'{'}</div>
                  <div className="ml-2 text-white">return (</div>
                  <div className="ml-4 text-green-400">&lt;div&gt;</div>
                  <div className="ml-6 text-yellow-400">Web App</div>
                  <div className="ml-4 text-green-400">&lt;/div&gt;</div>
                  <div className="ml-2 text-white">);</div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
              </div>
              
              {/* Floating Database Element */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50 shadow-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="text-xs text-green-400">Online</div>
                  </div>
                  <div className="text-xs text-slate-400">Database</div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Animated Dots */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          {/* Mobile: Swipe up icon */}
          <div className="sm:hidden flex flex-col items-center text-slate-400 hover:text-white transition-colors cursor-pointer">
            <ChevronDown className="w-6 h-6 animate-bounce" />
            <span className="text-xs mt-1">Deslizar</span>
          </div>
          
          {/* Desktop: Mouse scroll indicator */}
          <div className="hidden sm:block">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center hover:border-white transition-colors cursor-pointer">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce hover:bg-white transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
