import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import RelatedServices from "@/components/sections/RelatedServices";
import { ArrowRight, Globe, CheckCircle2, Zap, LayoutTemplate, ShieldCheck, ShoppingCart, CreditCard, PanelsTopLeft, MonitorSmartphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Páginas Web y Tiendas Online | Glowel Ingeniería",
  description: "Construimos plataformas web corporativas, e-commerce de alto volumen y sitios B2B utilizando las tecnologías más avanzadas del mercado: React y Next.js.",
  keywords: "desarrollo web, páginas web empresariales, tiendas online, pasarelas de pago, desarrollo e-commerce en México, páginas a medida, Next.js, React, portales B2B, diseño UX UI, Glowel"
};

export default function DesarrolloWebPage() {
  const benefits = [
    {
      title: "Rendimiento Extremo (Core Web Vitals)",
      description: "Google penaliza sitios web lentos. Desarrollamos con arquitecturas de renderizado en servidor (SSR) para obtener puntuaciones casi perfectas (95+) y tiempos de carga instantáneos.",
      icon: Zap,
    },
    {
      title: "Arquitectura a la Medida, Cero Plantillas",
      description: "Tu marca no debería verse igual a la de mil competidores. Codificamos tu plataforma desde cero en React, descartando constructores visuales pesados como Elementor o Wix.",
      icon: LayoutTemplate,
    },
    {
      title: "Seguridad y Cifrado Avanzado",
      description: "Protegemos tu conexión, formularios y transacciones con certificados SSL de grado bancario y protocolos de seguridad contra inyección y ataques DDoS.",
      icon: ShieldCheck,
    },
    {
      title: "UX/UI y Dominio Multi-Dispositivo",
      description: "Más del 70% del tráfico es móvil. Nuestras arquitecturas nacen pensando en la perfecta adaptabilidad a celulares, tablets y monitores 4K sin sacrificar experiencia.",
      icon: MonitorSmartphone,
    },
  ];

  const whatWeBuild = [
    {
      title: "Tiendas E-Commerce Listas para Escalar",
      description: "No solo te damos un carrito de compras; diseñamos catálogos escalables con gestión de stock sincronizada en tiempo real, conectividad con ERP y cálculos dinámicos de paquetería.",
      icon: ShoppingCart,
    },
    {
      title: "Integración de Pasarelas de Pago Múltiples",
      description: "Conectamos de forma nativa Stripe, PayPal, MercadoPago o Conekta directamente a tu flujo web para evitar comisiones de terceros y brindar confianza a tus clientes (PCI DSS compliant).",
      icon: CreditCard,
    },
    {
      title: "Landing Pages de Alta Conversión (B2B/SaaS)",
      description: "Sitios destinados exclusivamente a convertir publicidad pagada en leads. Flujos directos, botones fijos de WhatsApp y carga instantánea para maximizar el ROAS de tus campañas.",
      icon: PanelsTopLeft,
    },
    {
      title: "Portafolios y Web Web Apps Corporativas",
      description: "Portales de imagen institucional que proyectan autoridad con animaciones fluidas (sin pesar), directorios internos y blogs técnicos ultrarrápidos, optimizados internamente para SEO.",
      icon: Globe,
    },
  ];

  const faqs = [
    {
      question: "¿Pueden migrar mi sitio WordPress lento a una tecnología moderna?",
      answer: "Sí. Gran parte de nuestro trabajo consiste en extraer la base de datos de WordPress (posts, productos, SEO) y migrarla a una arquitectura Headless utilizando Next.js, multiplicando la velocidad y seguridad mientras mantienes tu contenido.",
    },
    {
      question: "¿Cuánto tarda el desarrollo de una web corporativa completa?",
      answer: "Una página web empresarial robusta toma entre 3 a 5 semanas dependiendo de las vistas y animaciones. Una plataforma e-commerce avanzada entre 6 a 8 semanas. Entregamos un cronograma milimétrico desde el día 1.",
    },
    {
      question: "¿El sitio web será de mi propiedad?",
      answer: "Absolutamente. Codificamos bajo repositorios de GitHub privados que te pertenecen, sin mensualidades de rentas que secuestren tu marca. El código, los diseños y el hosting de Vercel (si se requiere) están a tu nombre.",
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
            "name": "Desarrollo Web Avanzado",
            "provider": {
              "@type": "Organization",
              "name": "Glowel",
              "url": "https://glowel.com.mx"
            },
            "description": "Desarrollo de tiendas online, landing pages y sistemas B2B corporativos en Next.js.",
            "serviceType": "Desarrollo de Software Web",
            "areaServed": "MX",
            "url": "https://glowel.com.mx/servicios/desarrollo-web"
          })
        }}
      />
      <main>
        {/* Service Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Desarrollo Web Avanzado</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Construimos plataformas web preparadas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">trafico masivo.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed font-light">
                Olvídate de las páginas lentas y vulnerables a hackeos. Aplicamos disciplina de ingeniería de software para crear webs institucionales, portales B2B y tiendas e-commerce de élite.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20iniciar%20un%20proyecto%20web%20avanzado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 w-full sm:w-auto text-base"
                >
                  Chatea con nosotros
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
              <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4 block">
                Implementaciones Clave
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">¿Qué soluciones web desarrollamos?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nuestra especialidad no se limita a poner un logo y texto, creamos ecosistemas completos para vender o informar a nivel profesional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {whatWeBuild.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-blue-200 transition-all group">
                     <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 text-blue-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-blue-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-30">
            <Globe className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Deja de perder leads por una página web genérica.
              </h2>
              <p className="text-blue-100 text-lg">
                Agendemos una breve consulta técnica gratuita (15 mins) sobre los requerimientos de tu proyecto web o e-commerce. Sin presiones de compra.
              </p>
            </div>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20un%20proyecto%20e-commerce%20o%20página%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl flex-shrink-0"
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
                  El costo oculto del desarrollo de bajo coste.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Muchas empresas invierten miles de dólares en campañas pagadas solo para perder clientes porque su sitio web tarda 8 segundos en cargar o su carrito de compras falla en móviles.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  En Glowel, abordamos el desarrollo web como una disciplina. Utilizamos arquitecturas JavaScript (Next.js) para asegurar que tu sitio cargue en fracciones de segundo y cierre ventas ininterrumpidamente.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Carga en menos de 1 segundo (Vitals 🚀)",
                    "100% responsivo con código Mobile-First",
                    "SEO técnico estructurado desde la primera línea",
                    "Diseño exclusivo UI/UX corporativo",
                    "Soporte directo con ingenieros"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/522223281100?text=Quiero%20solicitar%20un%20mockup%20para%20una%20reestructuración%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center"
                >
                  Pide un prototipo sin costo
                  <ArrowRight className="ml-1 w-5 h-5" />
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative">
                <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">Estándares de Ingeniería Web</h3>
                <div className="space-y-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes sobre Desarrollo Web</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-blue-600">Q.</span> {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-6">¿Tienes otra pregunta sobre arquitectura web o ecommerce?</p>
              <a
                href="https://wa.me/522223281100?text=Hola,%20tengo%20una%20duda%20sobre%20desarrollo%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all"
              >
                Chatea con nosotros en WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* SEO Cross Navigation */}
        <RelatedServices currentSlug="desarrollo-web" />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
