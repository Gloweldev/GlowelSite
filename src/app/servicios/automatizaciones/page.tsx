import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import RelatedServices from "@/components/sections/RelatedServices";
import { ArrowRight, Zap, RefreshCw, Send, Webhook, FastForward, Link as ChainLink, Cable } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatizaciones de Procesos y Software (API/Webhooks) | Glowel",
  description: "Eliminamos tareas repetitivas mediante RPA y scripts de conexión. Sincronizamos sistemas CRM/ERP, enviamos correos masivos inteligentes y notificaciones automatizadas por WhatsApp.",
  keywords: "automatización de procesos de negocio rpa, desarrollo de flujos de trabajo automatizados, integración de apis y webhooks, automatización de procesos repetitivos, sistemas de automatización empresarial, desarrollador experto en automatizaciones, zapier make n8n integraciones a medida, automatización de tareas administrativas, scripts de automatización python, robot process automation méxico, optimización técnica de operaciones, automatización de marketing y ventas crm, bots para automatización web, pipelines de datos automatizados, servicios de hiperautomatización e ia, ingeniero de automatización de procesos, automatizar negocio, automatizar whatsapp, hacer que mi negocio funcione solo, conectar facebook con whatsapp, bot que responda solo, automatizar tareas de oficina, robot para facturar, conectar aplicaciones automáticamente, flujo de trabajo automatico, integracion de plataformas software"
};

export default function AutomatizacionesPage() {
  const automatizations = [
    {
      title: "Sincronización por API e Integración de Sistemas",
      description: "Si usas un CRM, un ERP financiero, y una aplicación de citas independientes... nosotros los conectamos vía API/Webhooks directos. Una sola fuente de la verdad para toda la empresa en segundos.",
      icon: Webhook,
    },
    {
      title: "Workflows y Flujos por Condicionales (Make/Zapier)",
      description: "Diseñamos puentes lógicos y reglas. Ejemplo: 'Cuando el cliente acepte el presupuesto en el CRM X, genera una factura prellenada en el sistema contable Y, y envísale un WhatsApp automático.'",
      icon: RefreshCw,
    },
    {
      title: "Notificaciones Automáticas Multicanal (WhatsApp Business API)",
      description: "Desarrollamos bots e integraciones transaccionales que envían confirmaciones de pedidos, recordatorios de pagos, y alertas de seguridad internas directo a celulares o Slack/Teams de tu equipo.",
      icon: Send,
    },
    {
      title: "RPA y Scraping (Extracción Web Autónoma)",
      description: "Creamos scripts nocturnos en Python/Node.js que navegan tableros de portales, descargan las variaciones de precios de tu competencia y unifican un reporte matutino corporativo directamente en tu bandeja.",
      icon: FastForward,
    },
  ];

  const benefits = [
    {
      title: "Milisegundos de Carga, Cero Errores",
      description: "Las computadoras no se equivocan de fila en un Excel ni copian mal un correo. Logra cero porcentaje de error humano en operaciones rutinarias críticas.",
      icon: ChainLink,
    },
    {
      title: "Arquitecturas Serverless Robustas",
      description: "El código de la conexión vive en la nube (GCP Cloud Functions o AWS Lambda) escalando de a 1 petición hasta miles por minuto.",
      icon: Zap,
    },
    {
      title: "Monitoría y Registro Fall-back",
      description: "Tu arquitectura incluye registros donde si un sistema tercero de facturación sufre caída, reintentamos la operación a los 5 minutos sin perder información.",
      icon: Cable,
    },
  ];

  const faqs = [
    {
      question: "¿Qué procesos pueden y NO pueden ser automatizados?",
      answer: "Si el proceso involucra abrir diferentes programas de software, copiar datos, convertirlos, enviar emails repetitivos o depender de una respuesta binaria externa (Sí/No), es altamente automatizable. Lo que requiere un criterio artístico, de empatía compleja o táctil, suele dejarse al equipo.",
    },
    {
      question: "¿Utilizan herramientas no-code o escriben código bruto (APIs)?",
      answer: "Ambas. Para integraciones rápidas (prototipado) utilizamos Make/Zapier por economía en tiempo. Para flujos delicados (voluminosos y que requieren seguridad bancaria), desarrollamos conectores privados por código rígido (Custom Scripts) donde solo tú controlas el ecosistema y la latencia no depende de terceros.",
    },
    {
      question: "¿Se corta mi operación al implementar esto?",
      answer: "No. Construimos las arquitecturas automatizadas de forma 'Shadow' o paralela en modo de desarrollo a prueba (sandbox). Hasta la migración final real, tu operación se mantiene intacta.",
    },
  ];

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
            "name": "Automatizaciones",
            "provider": {
              "@type": "Organization",
              "name": "Glowel",
              "url": "https://glowel.com.mx"
            },
            "description": "Automatización de sistemas (Make, Zapier) y sincronización corporativa por APIs (Webhook).",
            "serviceType": "Automatización RPA",
            "areaServed": "MX",
            "url": "https://glowel.com.mx/servicios/automatizaciones"
          })
        }}
      />
      <main>
        {/* Service Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute top-0 left-0 mt-20 ml-20 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">Automatizaciones y Scripts</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Deja de pagar sueldos por <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">copiar y pegar.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                Reemplazamos tareas tediosas de captura y pasaje de sistemas, por flujos autónomos en tiempo real que unen tu CRM, facturación, correos y WhatsApp Business evitando todo error humano. 
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20iniciar%20un%20proyecto%20de%20automatizaciones%20de%20procesos,%20quiero%20chatear."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 w-full sm:w-auto text-base"
                >
                  Chatea con nosotros (Auditoría Gratuita)
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
              <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase mb-4 block">
                Implementaciones Clave
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">¿Qué automatizaciones creamos?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Diseñamos los engranajes invisibles que mueven enormes bloques de datos pesados tras bambalinas, logrando un negocio que escala sin requerir empleados de sobra.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {automatizations.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-emerald-200 transition-all group">
                     <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 text-emerald-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-emerald-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30">
            <Zap className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                El error humano en contabilidad cuesta miles mensualmente.
              </h2>
              <p className="text-emerald-100 text-lg">
                Agenda una consulta express y cuéntanos sobre el proceso que te quita mayor tiempo y genera más quejas internas. Implementaremos la automatización.
              </p>
            </div>
            <a
              href="https://wa.me/522223281100?text=Mi%20empresa%20pierde%20el%20tiempo%20y%20quiero%20chatear%20sobre%20automatizaciones"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-800 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl flex-shrink-0"
            >
              Chatea con nosotros hoy
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
                  Hacer que tu equipo venda en vez de capturar datos.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Tu fuerza principal de operación cuenta con habilidades blandas de alto nivel que están siendo apagadas y quemadas al forzar a revisar plataformas. 
                </p>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/522223281100?text=Chatear%20sobre%20integración"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center"
                >
                  Chatea sobre tu arquitectura actual
                  <ArrowRight className="ml-1 w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative h-full flex items-center flex-col justify-center">
                 <img 
                    src="/og-image.jpg" 
                    alt="Sistemas predictivos integrados al negocio" 
                    className="w-full h-auto rounded-xl shadow-inner border border-slate-100 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <p className="text-center text-sm font-semibold text-slate-500 mt-4">Plataformas y APIs conectadas sincronizadas un milisegundo despúes de cada acción.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes sobre Automatización</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-emerald-600">Q.</span> {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/522223281100?text=Chateemos%20sobre%20el%20precio%20de%20las%20automatizaciones"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all"
              >
                Chatea con nosotros 
              </a>
            </div>
          </div>
        </section>

        {/* SEO Cross Navigation */}
        <RelatedServices currentSlug="automatizaciones" />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
