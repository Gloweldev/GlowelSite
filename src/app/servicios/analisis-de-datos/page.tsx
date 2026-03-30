import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import RelatedServices from "@/components/sections/RelatedServices";
import { ArrowRight, BarChart3, LineChart, PieChart, Focus, Activity, Search, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Análisis de Datos e Inteligencia Corporativa | Glowel Ingeniería",
  description: "Desarrollo de cuadros de mando empresariales (Dashboards), limpieza de datos ETL y predicción estadística para la correcta toma de decisiones.",
  keywords: "análisis de datos, inteligencia corporativa, business intelligence, dashboards web, limpieza de bases de datos, pronóstico de ventas, ciencia de datos méxico"
};

export default function AnalisisDatosPage() {
  const steps = [
    {
      title: "Extracción y Normalización (ETL)",
      description: "Tus datos viven en ERPs diferentes, CRMs antiguos comerciales y en hojas de cálculo regadas. Construimos túneles seguros para extraer, limpiar y fusionar todo ese caos en un 'Data Warehouse' unificado.",
      icon: RefreshCwIcon,
    },
    {
      title: "Dashboards Web en Tiempo Real",
      description: "Desarrollamos cuadros de mando con React y bases de datos modernas, accesibles desde monitores corporativos y móviles. Observa tus KPIs transaccionales al milisegundo en vez de esperar el reporte al fin de mes.",
      icon: PieChart,
    },
    {
      title: "Modelado y Arquitectura Predictiva",
      description: "Dejamos de ver el pasado (Data Histórica) para empezar a predecir el futuro. Integramos modelados matemáticos que pronostican la fuga de clientes, fluctuación de stock o márgenes de ganancia estacionales.",
      icon: LineChart,
    },
    {
      title: "Auditoría Forense de Datos",
      description: "Si sabes que estás perdiendo dinero u optimización pero no encuentras la fuga, aplicamos ciencia de datos sobre tus historiales transaccionales para detectar anomalías, fraudes microscópicos o gastos duplicados no vistos.",
      icon: Search,
    },
  ];

  const benefits = [
    {
      title: "Decisiones Basadas en Matemáticas",
      description: "Cortamos la intuición o la burocracia. Cuando el CEO revisa la rentabilidad, los datos expuestos provienen de la fuente bruta inalterada.",
      icon: Activity,
    },
    {
      title: "Gobernanza y Privacidad Estricta",
      description: "Tu Data Warehouse es cerrado, encriptado en el paso y en descanso. Configuración rigurosa de control de roles (RRHH no ve Finanzas, Ventas tampoco).",
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      question: "¿Pueden extraer la información directamente del software viejo que ya usamos?",
      answer: "Sí. Gran parte de nuestro trabajo como ingenieros es utilizar API's, conexiones directas SQL, Webhooks, e inclusive Scraping validado para 'clonar' la salida de datos de tus sistemas heredados (legacy) sin romperlos, y llevar esos datos brutos a las tuberías de análisis nuevas.",
    },
    {
      question: "¿Qué diferencia hay entre lo que hacen ustedes y usar PowerBI o Excel?",
      answer: "PowerBI y Excel son herramientas para el usuario final. Nosotros somos los Arquitectos Data Engineers que construimos las 'tuberías' seguras para que PowerBI pueda alimentarse en automático. Además, también desarrollamos portales Web Creados en Código a medida cuando la licencia de PowerBI o Tableau es demasiado restrictiva o rígida para tu equipo móvil.",
    },
    {
      question: "¿Tienen acceso y custodia sobre los datos de mi empresa?",
      answer: "No. Toda infraestructura que diseñamos (Data Warehouses) se aloja dentro de cuentas empresariales Cloud controladas legalmente e informáticamente por tu organización. Glowel solo construye y asegura las tuberías y el código, no es propietario de los metadatos transaccionales.",
    },
  ];

  function RefreshCwIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      <Header />
      {/* Schema.org Semantics */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Análisis de Datos",
            "provider": {
              "@type": "Organization",
              "name": "Glowel",
              "url": "https://glowel.com.mx"
            },
            "description": "Construcción de Data Warehouses, limpieza ETL y creación de Dashboards analíticos.",
            "serviceType": "Consultoría de Datos",
            "areaServed": "MX",
            "url": "https://glowel.com.mx/servicios/analisis-de-datos"
          })
        }}
      />
      <main>
        {/* Service Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute right-0 top-1/2 -mt-40 w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <BarChart3 className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-rose-300">Inteligencia Corporativa</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Deja de operar tu empresa navegando <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">a ciegas.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                Destapamos los datos ocultos en tus ERPs aislados, creamos tuberías de análisis inquebrantables, y te proporcionamos un panel en vivo consolidado para dirigir el negocio basándote en la realidad transaccional.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20iniciar%20un%20proyecto%20de%20análisis%20de%20datos%20en%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-rose-500/25 w-full sm:w-auto text-base"
                >
                  Chatea con nosotros (Análisis de Viabilidad)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build - SEO Rich Detail */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Focus className="w-12 h-12 text-rose-600 mx-auto mb-6 opacity-80" />
              <span className="text-sm font-semibold text-rose-600 tracking-wider uppercase mb-4 block">
                Implementaciones Clave
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">¿Qué disciplinas de Big Data ejecutamos?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Reemplazamos la fragilidad del reporte manual de cierre de mes. Diseñamos componentes y modelados analíticos construidos para escala corporativa masiva.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {steps.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-rose-200 transition-all group">
                     <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 text-rose-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-rose-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30">
            <LineChart className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Existen oportunidades millonarias enterradas en tus bases de datos.
              </h2>
              <p className="text-rose-100 text-lg">
                Agenda una rápida asesoría. Cuéntanos dónde guardas tus datos hoy, y nosotros te diagramaremos visualmente cómo extraerlos a un Dashboard que responda las preguntas de la alta gerencia.
              </p>
            </div>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20Dashboards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-rose-700 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl flex-shrink-0"
            >
              Chatea con nosotros
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Benefits Detail */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Detener las fugas de presupuesto basadas en corazonadas.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Una empresa no puede escalar exponencialmente si el encargado logístico, por cansancio humano, calcula erróneamente un margen general. El análisis de base de datos extrae la realidad sin sentimientos.
                </p>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/522223281100?text=Ingenieros%20de%20Datos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-rose-600 hover:text-rose-700 inline-flex items-center"
                >
                  Chatea de inmediato con nosotros
                  <ArrowRight className="ml-1 w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative h-full flex items-center justify-center flex-col">
                 <img 
                    src="/og-image.jpg" 
                    alt="Ingeniería y Dashboards" 
                    className="w-full h-auto rounded-xl shadow-inner border border-slate-100 mb-4"
                  />
                  <p className="text-center text-sm font-semibold text-slate-500">Paneles directos y estadísticos listos para monitoreo en junta de inversionistas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes de Tratamiento de Datos (Governance)</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-rose-300 transition-colors">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-rose-600">Q.</span> {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/522223281100?text=Quiero%20evaluación%20de%20mis%20bases%20de%20datos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all"
              >
                Chatea con nosotros ahora
              </a>
            </div>
          </div>
        </section>

        {/* SEO Cross Navigation */}
        <RelatedServices currentSlug="analisis-de-datos" />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
