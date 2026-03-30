"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [onyxLoaded, setOnyxLoaded] = useState(false);
  const [ensenasLoaded, setEnsenasLoaded] = useState(false);

  const projects = [
    {
      name: "EnSeñasAI",
      url: "https://ensenas.ai/",
      subtitle: "Traductor de Lengua de Señas con Inteligencia Artificial",
      description:
        "Diseñamos y construimos toda la infraestructura de EnSeñasAI de principio a fin: la aplicación web en React/Next.js, el despliegue en servidores Cloud, la arquitectura de bases de datos relacionales y en tiempo real, y el desarrollo desde cero de los modelos de Inteligencia Artificial para la traducción de lengua de señas en tiempo real.",
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "TensorFlow",
        "Python",
        "PostgreSQL",
        "Firebase",
        "Cloud",
      ],
      highlights: [
        "Modelos de IA entrenados desde cero",
        "Traducción en tiempo real con visión por computadora",
        "Arquitectura de bases de datos relacionales + tiempo real",
        "Despliegue y escalado en infraestructura Cloud",
      ],
      gradient: "from-violet-600 to-blue-600",
    },
    {
      name: "Onyx Seguridad",
      url: "https://onyxseguridad.netlify.app/",
      subtitle: "Plataforma Web para Empresa de Seguridad Privada",
      description:
        "Desarrollo de una plataforma web completa y funcional para una empresa de seguridad privada. Diseño personalizado, optimización de rendimiento, integración con WhatsApp para contacto directo y estructura SEO para posicionamiento local.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
      highlights: [
        "Plataforma web completa para cliente real",
        "Diseño responsive y mobile-first",
        "Optimización SEO y Core Web Vitals",
        "Integración con canales de contacto directo",
      ],
      gradient: "from-amber-600 to-orange-600",
    },
  ];

  return (
    <section id="portafolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4 block">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Proyectos que demuestran capacidad real
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No mostramos números inventados. Mostramos lo que somos capaces de
            construir de principio a fin.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-10 items-start"
            >
              {/* Info - alternates sides */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold mb-6`}
                >
                  Caso de éxito
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-lg text-slate-500 mb-6">
                  {project.subtitle}
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                    Lo que construimos
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mr-3 mt-1.5 flex-shrink-0`}
                        ></div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Ver sitio en vivo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Interactive Preview */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md h-7 ml-3 flex items-center px-3 border border-slate-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs text-slate-400 truncate">
                        {project.url}
                      </span>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:bg-slate-200 rounded transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>

                  {/* Iframe */}
                  <div className="relative h-[420px] bg-slate-100">
                    {index === 0 && !ensenasLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                          <p className="text-sm text-slate-400">Cargando vista previa...</p>
                        </div>
                      </div>
                    )}
                    {index === 1 && !onyxLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                          <p className="text-sm text-slate-400">Cargando vista previa...</p>
                        </div>
                      </div>
                    )}
                    <iframe
                      src={project.url}
                      title={`Vista previa de ${project.name}`}
                      className="w-full h-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                      onLoad={() => {
                        if (index === 0) setEnsenasLoaded(true);
                        if (index === 1) setOnyxLoaded(true);
                      }}
                    />
                  </div>
                </div>

                {/* Caption */}
                <p className="text-center text-xs text-slate-400 mt-4">
                  Interactúa directamente con la interfaz — es código real y
                  responsivo
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-4">
            ¿Tienes un proyecto similar en mente?
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20vi%20su%20portafolio%20y%20me%20interesa%20cotizar%20un%20proyecto%20similar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-sm"
          >
            Platiquemos de tu proyecto
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
