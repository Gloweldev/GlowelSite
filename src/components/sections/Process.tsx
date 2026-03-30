import { MessageSquare, Palette, Code, Rocket, Headphones, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Brief & Consulta",
      description: "Analizamos tu problema de negocio y objetivos.",
      badge: { text: "Sin costo", color: "bg-emerald-100 text-emerald-700" },
    },
    {
      icon: Palette,
      title: "Arquitectura & Prototipo",
      description: "Diseñamos la solución visual antes de invertir.",
      badge: {
        text: "Prototipo sin costo",
        color: "bg-emerald-100 text-emerald-700",
        highlight: true,
      },
    },
    {
      icon: Code,
      title: "Ingeniería & Código",
      description: "Desarrollamos con arquitectura escalable.",
      badge: {
        text: "Entregas periódicas",
        color: "bg-blue-100 text-blue-700",
      },
    },
    {
      icon: Rocket,
      title: "Despliegue & QA",
      description: "Pruebas de calidad y lanzamiento a producción.",
      badge: { text: "Incluido", color: "bg-slate-100 text-slate-700" },
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description: "Mantenimiento, escalabilidad y nuevas mejoras.",
      badge: {
        text: "3 meses gratis",
        color: "bg-emerald-100 text-emerald-700",
        highlight: true,
      },
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4 block">
            Metodología de Ingeniería
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            De la arquitectura al código en producción
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Un proceso estructurado que elimina el riesgo del desarrollo de software
            mediante prototipos y entregas predecibles.
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="relative">
          {/* Connection Arrows (Desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 transform -translate-y-1/2 z-0">
            <div className="flex items-center justify-between px-16">
              <div className="w-16"></div> {/* Space for first step */}
              <ArrowRight className="w-6 h-6 text-slate-300" />
              <div className="w-16"></div> {/* Space between steps */}
              <ArrowRight className="w-6 h-6 text-slate-300" />
              <div className="w-16"></div> {/* Space between steps */}
              <ArrowRight className="w-6 h-6 text-slate-300" />
              <div className="w-16"></div> {/* Space between steps */}
              <ArrowRight className="w-6 h-6 text-slate-300" />
              <div className="w-16"></div> {/* Space for last step */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group flex flex-col items-center">
                {/* Step Number Badge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-20">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300 mt-2 shadow-sm group-hover:shadow-lg">
                  <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 px-2">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-5 px-4 flex-grow">
                  {step.description}
                </p>

                {/* Status Badge */}
                <div className="mt-auto">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full ${
                      step.badge.color
                    } ${
                      step.badge.highlight
                        ? "ring-2 ring-emerald-200"
                        : ""
                    }`}
                  >
                    {step.badge.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20empezar%20mi%20proyecto%20con%20una%20revisión%20técnica%20y%20prototipo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
          >
            Empezar con revisión técnica
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
