import { Globe, Cog, Brain, Zap, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelatedServicesProps {
  currentSlug: string;
}

const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  const allServices = [
    {
      title: "Desarrollo Web Avanzado",
      slug: "desarrollo-web",
      icon: Globe,
      description: "Plataformas web corporativas, e-commerce de alto rendimiento.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Software a Medida",
      slug: "software-a-medida",
      icon: Cog,
      description: "Sistemas ERP/CRM diseñados específicamente para tu operación.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Inteligencia Artificial",
      slug: "inteligencia-artificial",
      icon: Brain,
      description: "Asistentes y análisis predictivo integrados en tu empresa.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Automatizaciones",
      slug: "automatizaciones",
      icon: Zap,
      description: "Sincronización de datos, notificaciones WhatsApp, flujos sin manos.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Análisis de Datos",
      slug: "analisis-de-datos",
      icon: BarChart3,
      description: "Dashboards y visualizaciones en línea para toma de decisiones.",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  const related = allServices.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Otras soluciones de ingeniería
          </h2>
          <p className="text-slate-600">
            En Glowel no solo hacemos esto. Descubre cómo potenciamos otras áreas de tu empresa con tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((service, idx) => (
            <Link
              href={`/servicios/${service.slug}`}
              key={idx}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col items-start text-left"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-sm`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <span className="mt-auto text-sm font-semibold text-blue-600 flex items-center">
                Ver servicio
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
