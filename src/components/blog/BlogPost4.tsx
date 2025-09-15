import { ArrowLeft, Calendar, Clock, MessageCircle, Share2, Brain, Users, MessageSquare, Video, Leaf } from 'lucide-react';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const BlogPost4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/blog"
                className="flex items-center text-purple-600 hover:text-purple-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al blog
              </a>
            </div>
            <div className="text-center">
              <div className="w-24 h-8 mx-auto mb-2">
                <img 
                  src={GlowelOscuro} 
                  alt="Glowel Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-slate-600 text-sm">Blog de Glowel</p>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-16 sm:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30">
              <span className="text-sm sm:text-base font-semibold">Marketing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              Tendencias en Marketing Digital para 2025: 5 Claves para No Quedarte Atrás
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              En el vertiginoso mundo del marketing digital, 2025 trae un panorama transformado por la IA, la personalización extrema y la demanda de autenticidad. Con un gasto global en publicidad digital proyectado en más de 700 mil millones de dólares.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-purple-100">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">8 de Agosto, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">9 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="relative bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 sm:p-8 mb-8 sm:mb-12 rounded-r-xl shadow-lg">
            <div className="absolute top-4 right-4 text-purple-200 text-6xl font-bold opacity-20">🚀</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
              <strong className="text-purple-600">Ignorar estas tendencias podría costarte hasta el 30% de tu alcance orgánico</strong>. Según informes recientes, el <strong className="text-purple-600">75% de los marketers priorizan la integración de IA</strong> para optimizar campañas, mientras que los consumidores exigen experiencias hiperpersonalizadas y éticas.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Tendencias marketing digital 2025" 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <p className="text-center text-sm text-slate-500 mt-3 italic">
              Prepárate para elevar tu juego digital y conectar de verdad con tu audiencia
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Brain className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">1. IA Generativa: Tu Aliada en la Creación de Contenido</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    La inteligencia artificial ya no es futurista; en 2025, genera el <strong className="text-purple-600">40% del contenido de marcas</strong>, desde copys personalizados hasta videos automáticos. Herramientas como ChatGPT o DALL-E evolucionan para crear campañas completas.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Pero el éxito radica en su uso ético para escalar sin perder el toque humano que conecta con tu audiencia.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="IA generativa en marketing" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🤖
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Integra IA en tu flujo de trabajo para brainstormings iniciales, pero revisa siempre con un ojo humano. Prueba prompts específicos para generar emails segmentados y mide el engagement con A/B testing. Evita el "contenido genérico" priorizando datos de primera mano de tu CRM.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">2. Hiperpersonalización: Adiós a lo Genérico, Hola a lo Único</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Hiperpersonalización en marketing" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Con el big data y la IA, el <strong className="text-blue-600">80% de los consumidores esperan ofertas personalizadas</strong>. En 2025, esto va más allá de nombres en emails: usa zero-party data (info que el usuario comparte voluntariamente) para recomendaciones predictivas.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Es como Netflix pero para tu e-commerce, creando experiencias únicas que fidelizan y convierten.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Segmenta audiencias con herramientas como Google Analytics 4 o Klaviyo. Crea journeys dinámicos donde el contenido cambia según comportamiento pasado (ej.: "Basado en tu última compra..."). Monitorea la privacidad con GDPR para construir confianza.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">3. Marketing Conversacional: Chats que Venden</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    El auge de WhatsApp Business y chatbots impulsados por IA hace que el <strong className="text-green-600">60% de las interacciones sean conversacionales</strong>. En 2025, no se trata de bots rígidos, sino de diálogos naturales que guían al usuario desde la consulta hasta la compra.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto reduce el ciclo de ventas en un <strong className="text-green-600">20%</strong>, creando conexiones más humanas en el proceso digital.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Marketing conversacional" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    💬
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Adopta plataformas como ManyChat o Dialogflow para flujos omnichannel. Entrena bots con FAQs reales y agrega toques emocionales (emojis, humor). Analiza métricas de retención para refinar respuestas y convierte chats en leads cualificados.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Video className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">4. Video Corto y Contenido Auténtico: El Reinado de TikTok y Reels</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Video corto y contenido auténtico" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Los videos cortos dominan con más de <strong className="text-pink-600">2 billones de usuarios activos</strong>; en 2025, el <strong className="text-pink-600">70% del tráfico social proviene de ellos</strong>. La tendencia es hacia lo "cringe" y auténtico: UGC (contenido generado por usuarios) y lives improvisados.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto fomenta comunidad sobre pulcritud, creando conexiones más genuinas con tu audiencia.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    📱
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-pink-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Crea series de Reels educativos o behind-the-scenes en menos de 15 segundos. Colabora con micro-influencers para autenticidad y usa hashtags trending. Mide vistas completas y shares para viralidad, no solo likes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Leaf className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">5. Sostenibilidad y Ética: Marketing con Propósito</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Los consumidores millennials y Gen Z boicotean marcas no éticas; en 2025, el <strong className="text-emerald-600">65% elige productos eco-friendly</strong>. Integra narrativas de impacto social, transparencia en supply chains y campañas inclusivas para diferenciarte.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto no solo fideliza, sino que construye una marca con propósito que resuena con valores auténticos.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Marketing sostenible y ético" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🌱
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Certifícate en estándares como B Corp y comunica avances reales en tu sitio web. Lanza campañas "verde" con partners éticos y usa storytelling para mostrar impacto (ej.: "Cada compra planta un árbol"). Rastrea sentiment en redes para ajustar.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 sm:p-10 rounded-2xl border border-purple-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">Conclusión: Adáptate o Desaparece en el Marketing de 2025</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6 text-center">
                Estas cinco tendencias no son modas pasajeras, sino pilares para un marketing resiliente y centrado en el humano, potenciado por la tecnología. En 2025, el éxito mide en conexiones genuinas y ROI ético.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center font-medium">
                <strong>¿Cuál de estas te emociona más?</strong> ¡Cuéntame en los comentarios y hagamos que tu estrategia brille!
              </p>
            </section>
          </div>
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir artículo
              </button>
            </div>
            <div className="text-slate-500 text-sm">
              Publicado el 8 de Agosto, 2025 por el equipo de Glowel
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para implementar estas tendencias?
          </h3>
          <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a adaptar tu estrategia de marketing digital a las tendencias de 2025. 
            Consulta gratuita de 15 minutos.
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20leí%20el%20artículo%20sobre%20tendencias%20de%20marketing%20digital%202025%20y%20me%20interesa%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Consulta gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost4;
