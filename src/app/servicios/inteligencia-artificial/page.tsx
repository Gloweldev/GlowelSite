import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";
import RelatedServices from "@/components/sections/RelatedServices";
import { ArrowRight, Brain, Cpu, MessageSquareCode, Layers, SearchCode, DatabaseZap, Code2, BotMessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo e Integración de Inteligencia Artificial | Glowel",
  description: "Entrenamiento de modelos de Machine Learning (NLP, Visión) desde cero o integración de LLMs (GPT, Claude) integrados en el flujo de trabajo de tu empresa.",
  keywords: "desarrollador de ia, empresa de inteligencia artificial méxico, desarrollo de ia a medida, consultoría en inteligencia artificial, agencia de machine learning, desarrollo de algoritmos de deep learning, integración de chatgpt en empresas, modelos de visión por computadora, automatización cognitiva, soluciones de inteligencia artificial para negocios, desarrollador de modelos nlp, procesamiento de lenguaje natural, ingeniero de machine learning freelance, agencia de ia generativa, chatbots con ia integrada, rag retrieval augmented generation español, servicios de data science e ia, desarrollo de redes neuronales artificiales, integración api openai claude, desarrollo de ia conversacional, machine learning as a service méxico, ia, inteligencia artificial, desarrollar mi ia, hacer una ia para mi negocio, chat gpt para empresas, chat bot con ia, usar ia para vender mas, inteligencia artificial para pymes, crear inteligencia artificial propia, alguien que me programe una ia, chatbot inteligente, ia para whatsapp, como hacer una ia para mi tienda"
};

export default function InteligenciaArtificialPage() {
  const approaches = [
    {
      title: "Desarrollos desde Cero (Modelos Propios)",
      description: "Cuando la privacidad estricta de los datos rige tu negocio, desarrollamos de cero modelos de regresión, clasificación (Machine Learning) y Visión por Computadora entrenados 100% sobre tu contexto transaccional.",
      icon: Cpu,
    },
    {
      title: "Integración de Modelos Existentes (LLMs y APIs)",
      description: "Acortamos meses de desarrollo integrando modelos fundacionales como GPT-4, Claude u open-source (Llama/Mistral) directamente en tus flujos de trabajo actuales a través de pipelines de alta velocidad.",
      icon: Layers,
    },
    {
      title: "Fine-Tuning y Bases Biométricas (RAG)",
      description: "Entrenamos los modelos de inteligencia artificial externos (LLMs) usando Retrieval-Augmented Generation (RAG) para que solo contesten, analicen o decidan en base directa a TUS PDF's, TUS reglamentos internos y TUS stocks.",
      icon: SearchCode,
    },
    {
      title: "Asistentes y Automatización Cognitiva",
      description: "Sistemas autónomos que leen correos entrantes masivos de clientes, extraen el reclamo, analizan el sentimiento y pre-cargan la queja en tu CRM corporativo sin mover un dedo.",
      icon: BotMessageSquare,
    },
  ];

  const benefits = [
    {
      title: "Infraestructura Cloud de IA Segura",
      description: "Utilizamos Google Cloud Platform o AWS Bedrock para alojar tu inferencia, limitando el filtrado de tus datos hacia redes públicas abiertas.",
      icon: DatabaseZap,
    },
    {
      title: "Interconexión por API",
      description: "El modelo no sirve de nada si vive en un escritorio. Integramos las respuestas de la IA directo en tu WhatsApp corporativo, Salesforce u otras ERP's.",
      icon: Code2,
    },
    {
      title: "Lectura y Visión (OCR)",
      description: "Modelos diseñados exclusivamente para extraer variables estructuradas (RFC, totales, ítems) desde un mar de PDFs no estructurados.",
      icon: MessageSquareCode,
    },
  ];

  const faqs = [
    {
      question: "¿Realmente necesito desarrollar un modelo propio o usar integraciones?",
      answer: "Pocas empresas necesitan algoritmos desde cero. Para el 90% de los negocios (redacción, análisis de facturas, respuestas automáticas de soporte), implementar una capa de LLM via API (Integración RAG) es más rápido, mil veces más barato, y da mejores resultados inmediatos.",
    },
    {
      question: "¿Mis datos se usarán para entrenar a modelos públicos (ChatGPT)?",
      answer: "No. Utilizamos integraciones API de nivel Enterprise (Zero Data Retention) certificando que tus tableros, balances y procesos descritos por el modelo permanecerán cerrados y no alimentarán modelos externos.",
    },
    {
      question: "¿El chatbot de IA funciona en WhatsApp Business?",
      answer: "Sí, creamos integraciones que conectan tu propia base de conocimiento generada por IA (donde está todo tu catálogo o reglas de ventas) directamente a canales como WhatsApp, Slack o la burbuja de la web principal.",
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
            "name": "Inteligencia Artificial",
            "provider": {
              "@type": "Organization",
              "name": "Glowel",
              "url": "https://glowel.com.mx"
            },
            "description": "Entrenamiento de Modelos, integración de IA Generativa en empresas (RAG), y visión cognitiva.",
            "serviceType": "Desarrollo de IA",
            "areaServed": "MX",
            "url": "https://glowel.com.mx/servicios/inteligencia-artificial"
          })
        }}
      />
      <main>
        {/* Service Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 mx-auto">
                <Brain className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">Inteligencia Artificial Integrada</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Convierte tus bases de datos en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">empleado cognitivo.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Desarrollamos algoritmos de IA desde cero para casos nicho, o integramos modelos LLM existentes (OpenAI, Claude) directamente en el núcleo de tu software para leer, analizar o tomar decisiones repetitivas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20integrar%20Inteligencia%20Artificial%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 w-full sm:w-auto text-base"
                >
                  Chatea con nosotros sobre IA
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build - SEO */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold text-amber-600 tracking-wider uppercase mb-4 block">
                Alcance y Arquitectura
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Nuestros Enfoques de Ingeniería en IA</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Abordamos los proyectos técnicos separando la creación de modelos desde cero, contra la integración inteligente de los modelos maduros del mercado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {approaches.map((app, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-xl hover:border-amber-200 transition-all group">
                     <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <app.icon className="w-8 h-8 text-amber-600" />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">{app.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{app.description}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-16 bg-amber-600 overflow-hidden relative">
          <div className="absolute top-0 left-0 -ml-20 -mt-20 opacity-20">
            <Brain className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl pl-0 lg:pl-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                La IA no es magia, es automatización extrema informada por datos reales.
              </h2>
              <p className="text-amber-100 text-lg">
                Dinos cuál es el cuello de botella cognitivo más lento operado por humanos en tu empresa, en minutos diseñaremos un flujo automatizado de IA capaz de resolverlo.
              </p>
            </div>
            <a
              href="https://wa.me/522223281100?text=Mi%20empresa%20tiene%20un%20cuello%20de%20botella%20y%20quiero%20usar%20Machine%20Learning"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-700 hover:bg-slate-50 font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl flex-shrink-0"
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
                  Deja que los algoritmos lean, entiendan y actúen por ti.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  La Inteligencia Artificial reciente rompió la barrera de las matemáticas para pasar a resolver el leguaje natural. Si un empleado hoy en día debe revisar hojas llenas de reportes, analizar facturas o responder repetitivamente preguntas técnicas... la IA debería estar haciendo eso.
                </p>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg relative h-full flex items-center flex-col justify-center">
                 <img 
                    src="/og-image.jpg" 
                    alt="Sistemas predictivos integrados al negocio" 
                    className="w-full h-auto rounded-xl shadow-inner border border-slate-100"
                  />
                  <p className="text-center text-sm font-semibold text-slate-500 mt-4">Red neuronal visualizando arquitectura y bases de datos incrustadas en dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes sobre Proyectos IA</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                    <span className="text-amber-600">Q.</span> {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/522223281100?text=Quiero%20chatear%20sobre%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all"
              >
                Chatea con nosotros (Consulta IA GRATIS)
              </a>
            </div>
          </div>
        </section>

        {/* SEO Cross Navigation */}
        <RelatedServices currentSlug="inteligencia-artificial" />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
