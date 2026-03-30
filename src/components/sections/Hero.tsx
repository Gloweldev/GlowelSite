import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.15%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%221.5%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      </div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-600/8 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Ingeniería de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              software
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              IA
            </span>{" "}
            y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              datos
            </span>{" "}
            para tu negocio
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Diseñamos y construimos soluciones tecnológicas complejas —{" "}
            <span className="text-slate-200">
              desde aplicaciones web de alto rendimiento hasta modelos de inteligencia artificial
            </span>{" "}
            — que automatizan procesos y escalan tu operación.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20técnica%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-base"
            >
              Agendar consulta técnica
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white hover:bg-white/5 font-medium rounded-xl transition-all duration-300 text-base"
            >
              Ver portafolio
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              <span>Prototipo sin costo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <span>3 meses de soporte incluidos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
              <span>Infraestructura Cloud</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="hidden sm:block">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center hover:border-slate-400 transition-colors cursor-pointer">
              <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
          <div className="sm:hidden flex flex-col items-center text-slate-500">
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
