import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import RelatedServices from "@/components/sections/RelatedServices";
import { ArrowRight, Cog, Database, RefreshCcw, Lock, BoxSelect, ShieldAlert, Cpu, ClipboardSignature } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida (ERP/CRM) | Glowel Ingeniería",
  description: "Desarrollo de CRMs empresariales, flujos ERP y herramientas web internas para digitalizar tu operación con alta seguridad.",
  keywords: "desarrollo de software a medida, fábrica de software méxico, creación de sistemas erp personalizados, desarrollo de crm a la medida, ingeniería de software corporativo, desarrollo de software b2b, sistemas de gestión empresarial a medida, desarrollo de plataformas saas, desarrolladores de software y aplicaciones, arquitectura de software cloud native, desarrollo de software backend, programador de sistemas a medida, digitalización de procesos empresariales, modernización de sistemas legacy, desarrollo de software escalable, agencia de software boutique méxico, desarrollo de bases de datos custom, outsourcing de desarrollo de software corporativo, crear programa para pc, hacer un sistema para negocio, crear app, alguien que me haga un programa, software para mi empresa, sistema de cobro, sistema de inventario a medida, desarrollador de apps, quiero un programa para mi negocio, crear un crm propio, ingeniero en sistemas programador"
};

export default function SoftwareAMedidaPage() {
  const capabilities = [
    {
      title: "Desarrollo de Sistemas ERP Flexibles",
      description: "Creamos un cerebro central para tu empresa. Gestiona finanzas, inventario multi-almacén, logística y cadena de recursos humanos en una sola plataforma en la nube, estructurada específicamente para cómo tú operas.",
      icon: Database,
    },
    {
      title: "CRM y Gestión de Ventas Exacto",
      description: "Deja de pagar licencias costosas por CRMs donde solo usas el 10% de las funciones. Desarrollamos embudos comerciales y gestión de clientes adaptados a tu ciclo de ventas único.",
      icon: RefreshCcw,
    },
    {
      title: "Portales B2B e Intranets (Para Proveedores/Clientes)",
      description: "Plataformas seguras (autenticación JWT, OAuth) para que tus proveedores, franquiciatarios o clientes VIP ingresen pedidos, revisen saldos o envíen documentos sin requerir tu intervención manual.",
      icon: Lock,
    },
    {
      title: "Sistemas de Gestión de Citas y Reservas",
      description: "Si ofreces servicios, programamos motores de reservas con bloqueo de disponibilidad en tiempo real, conectividad con pasarelas (Stripe) y notificaciones automáticas SMS al cliente.",
      icon: BoxSelect,
    },
  ];

  const benefits = [
    {
      title: "Arquitectura Cloud-Native",
      description: "Desplegamos en Google Cloud Serverless para que tu factura crezca solo si tu uso crece (cero gastos inútiles en servidores estáticos).",
      icon: Cpu,
    },
    {
      title: "Seguridad de Datos y Governance",
      description: "Invocamos auditorías, encriptación en tránsito y bases de datos aisladas (Multi-tenant) para asegurar tu activo más valioso de competidores o hackeos.",
      icon: ShieldAlert,
    },
    {
      title: "Propiedad Intelectual Total",
      description: "No te rentamos nuestro software. Adquieres el 100% de la propiedad del código fuente y eres libre de llevar el sistema internamente en el futuro.",
      icon: ClipboardSignature,
    },
  ];

  const faqs = [
    {
      question: "¿Es mejor comprar un software ya hecho (SaaS) o construir a medida?",
      answer: "Si tu operación es estándar, un SaaS genérico funciona. Pero si el núcleo de tu ventaja competitiva reside en CÓMO operas, forzar a tu equipo a usar software genérico causa cuellos de botella (usar mil Excels extras). El software a medida elimina fricciones, evita licencias mensuales por usuario y escala sin límites.",
    },
    {
      question: "¿Se puede integrar este software nuevo con mis herramientas actuales?",
      answer: "Completamente. Desarrollamos APIs robustas para conectar el nuevo sistema con tu Contabilidad (facturación), pasarelas (Stripe/PayPal), o canales de comunicación (WhatsApp, Slack).",
    },
    {
      question: "¿Qué tecnologías utilizan para programar backend corporativo?",
      answer: "No usamos soluciones vulnerables (como macros pesadas de Excel/Access o PHP anticuado). Empleamos TypeScript (Node.js/Next.js) y Python por su velocidad, seguridad e integración nativa con bibliotecas modernas (incluso Inteligencia Artificial futura).",
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
            "name": "Software a Medida",
            "provider": {
              "@type": "Organization",
              "name": "Glowel",
              "url": "https://glowel.com.mx"
            },
            "description": "Desarrollo de CRM y ERP personalizados. Software operativo interno e Intranets B2B.",
            "serviceType": "Desarrollo de Software",
            "areaServed": "MX",
            "url": "https://glowel.com.mx/servicios/software-a-medida"
          })
        }}
      />
      <main>
        {/* Service Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Cog className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-300">Software a Medida</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Codificamos sistemas para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">operación exacta.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                Forzar a tu empresa a usar software empaquetado y hojas de Excel desconectadas frena tu crecimiento. Construimos ERPS, CRMs internos y portales web basados 100% en tu lógica de negocios.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://wa.me/522223281100?text=Hola,%20quisiera%20asesoría%20sobre%20software%20a%20medida%20o%20CRM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/25 w-full sm:w-auto text-base"
                >
                  Chatea con nosotros
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-violet-600 tracking-wider uppercase mb-4 block">
                Soluciones Implementadas
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">¿Qué construimos exactamente?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Si un proceso operativo existe en tu empresa y tiene reglas lógicas predecibles, nosotros podemos programarlo en una interfaz hermosa y segura desde el navegador.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {capabilities.map((cap, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-violet-200 transition-all group">
                     <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <cap.icon className="w-8 h-8 text-violet-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{cap.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-violet-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30">
            <Database className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Tu equipo pasa más tiempo coordinando Excel que operando?
              </h2>
              <p className="text-violet-100 text-lg">
                Agendemos una revisión gratuita de 15 mins para auditar el problema central. Nosotros diseñaremos la arquitectura que solucione ese proceso para siempre.
              </p>
            </div>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20resolver%20un%20problema%20operativo%20con%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-700 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl flex-shrink-0"
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
                  El software no sirve de nada si el equipo no lo usa.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  El mayor fracaso tecnológico ocurre cuando la interfaz es confusa. Nuestra aproximación de ingeniería prioriza 100% la usabilidad de las personas que operarán el sistema. (UI/UX corporativo).
                </p>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-violet-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/522223281100?text=Hola,%20quiero%20crear%20una%20intranet%20o%20ERP/CRM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-violet-600 hover:text-violet-700 inline-flex items-center"
                >
                  Chatea sobre los detalles técnicos
                  <ArrowRight className="ml-1 w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative">
                 <img 
                    src="/og-image.jpg" 
                    alt="Dashboard y Sistemas Corporativos" 
                    className="w-full h-auto rounded-xl shadow-inner border border-slate-100"
                  />
                  <p className="text-center text-sm font-semibold text-slate-500 mt-4">Tableros operativos accesibles desde cualquier navegador o móvil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes sobre Software a Medida</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-violet-300 transition-colors">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-violet-600">Q.</span> {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/522223281100?text=Tengo%20dudas%20Técnicas%20sobre%20mi%20software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all"
              >
                Chatea con nosotros (Dudas técnicas)
              </a>
            </div>
          </div>
        </section>

        {/* SEO Cross Navigation */}
        <RelatedServices currentSlug="software-a-medida" />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
