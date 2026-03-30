"use client";

import { useState } from "react";
import {
  Globe,
  Cog,
  Brain,
  Zap,
  BarChart3,
  ArrowRight,
  X,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const pillars = [
    {
      icon: Globe,
      title: "Desarrollo Web Avanzado",
      slug: "desarrollo-web",
      tagline: "Presencia digital de alto rendimiento",
      description:
        "Construimos plataformas web escalables, ultrarrápidas y optimizadas para SEO utilizando React y Next.js. Dejamos atrás las plantillas para ofrecerte ingeniería a la medida de tus objetivos comerciales.",
      capabilities: [
        "Aplicaciones web con React, Next.js y TypeScript",
        "Arquitectura SSR/SSG para máximo rendimiento SEO",
        "Plataformas e-commerce con pasarelas de pago integradas",
      ],
      result:
        "Visibilidad 24/7 y plataformas inquebrantables preparadas para alto tráfico.",
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "from-blue-50 to-cyan-50",
      color: "blue",
    },
    {
      icon: Cog,
      title: "Software a Medida",
      slug: "software-a-medida",
      tagline: "Sistemas que eliminan procesos manuales",
      description:
        "Transformamos la operación de tu empresa desarrollando CRMs, ERPs y portales internos específicos para tus flujos de trabajo. Eliminamos la dependencia en Excel y el trabajo duplicado.",
      capabilities: [
        "Sistemas de gestión empresarial (ERP/CRM) a medida",
        "APIs RESTful y arquitecturas de microservicios",
        "Integración con sistemas existentes",
      ],
      result:
        "Tu equipo enfocado en crecer, mientras el software hace el trabajo de fondo.",
      gradient: "from-violet-500 to-purple-500",
      bgLight: "from-violet-50 to-purple-50",
      color: "violet",
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      slug: "inteligencia-artificial",
      tagline: "Modelos que transforman datos en decisiones",
      description:
        "Desarrollamos modelos de IA desde cero o integramos LLMs existentes (OpenAI, Claude) directamente en tus flujos de trabajo para resolver problemas complejos y automatizar el análisis cognitivo.",
      capabilities: [
        "Entrenamiento de modelos de Machine Learning y NLP",
        "Sistemas de Visión por Computadora",
        "Integración y Fine-tuning de modelos existentes (LLMs)",
      ],
      result:
        "Decisiones autónomas y procesos cognitivos a gran escala y en tiempo real.",
      gradient: "from-amber-500 to-orange-500",
      bgLight: "from-amber-50 to-orange-50",
      color: "amber",
    },
    {
      icon: Zap,
      title: "Automatizaciones",
      slug: "automatizaciones",
      tagline: "Elimina tareas manuales y repetitivas",
      description:
        "Conectamos tus sistemas aislados para que la información fluya sin intervención humana. Notificaciones automáticas, sincronización de bases de datos y bots conversacionales inteligentes.",
      capabilities: [
        "Automatización de flujos con Zapier o directa por API",
        "Bots conversacionales en WhatsApp y canales internos",
        "Sincronización de bases de datos críticas",
      ],
      result:
        "Cero errores humanos, respuestas inmediatas y horas de tiempo ahorrado al día.",
      gradient: "from-emerald-500 to-teal-500",
      bgLight: "from-emerald-50 to-teal-50",
      color: "emerald",
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      slug: "analisis-de-datos",
      tagline: "Insights que revelan oportunidades ocultas",
      description:
        "Extraemos, limpiamos y estructuramos tus datos corporativos en dashboards dinámicos para proporcionarte visibilidad total de tu negocio en tiempo real. Deja de navegar a ciegas.",
      capabilities: [
        "Desarrollo de Dashboards y paneles estratégicos",
        "Modelos predictivos y análisis forense de datos",
        "Data Warehousing y procesos ETL estables",
      ],
      result:
        "Liderazgo informado y operaciones optimizadas basadas en la realidad, no instintos.",
      gradient: "from-rose-500 to-pink-500",
      bgLight: "from-rose-50 to-pink-50",
      color: "rose",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4 block">
            Servicios Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Ingeniería diseñada para resolver problemas reales
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Descubre a fondo nuestras capacidades tecnológicas y cómo pueden integrarse en tu operación actual para escalarla.
          </p>
        </div>

        {/* Pillars Grid - Symmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 md:col-span-1 lg:col-span-2 flex flex-col ${
                index === 3 ? "lg:col-start-2" : ""
              } ${index === 4 ? "lg:col-start-4 lg:col-span-2 md:col-span-2 lg:-ml-0" : ""}`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-md`}
              >
                <pillar.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent mb-4`}>
                {pillar.tagline}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {pillar.description}
              </p>

              {/* Expanded CTA (Link to dedicated page) */}
              <Link
                href={`/servicios/${pillar.slug}`}
                className={`mt-auto w-full inline-flex items-center justify-center px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-sm group/btn text-sm`}
              >
                Explorar servicio a fondo
                <ArrowRight className="ml-2 w-4 h-4 text-slate-400 group-hover/btn:translate-x-1 group-hover/btn:text-blue-500 transition-all" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-slate-900 rounded-3xl p-10 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                ¿Tienes un problema técnico complejo?
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Agenda una sesión de descubrimiento técnico (15 mins). Escucharemos tus necesidades y te propondremos la arquitectura y solución de forma transparente.
              </p>
              <a
                href="https://wa.me/522223281100?text=Hola,%20quisiera%20agendar%20una%20sesión%20de%20descubrimiento%20técnico%20sobre%20los%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105"
              >
                Agendar sesión gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
