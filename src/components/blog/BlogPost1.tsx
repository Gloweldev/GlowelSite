import { ArrowLeft, Calendar, Clock, MessageCircle, Share2 } from 'lucide-react';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/blog"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
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
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-20 overflow-hidden">
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
              <span className="text-sm sm:text-base font-semibold">Desarrollo Web</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              Tu Negocio Necesita Más que una Red Social: 5 Razones Clave para Invertir en una Página Web Profesional
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              En 2025, con más de 5.3 mil millones de usuarios en redes sociales, es tentador pensar que una cuenta en Instagram o Facebook basta para triunfar. Sin embargo, depender solo de plataformas ajenas puede limitar tu crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-blue-100">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">14 de Septiembre, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">8 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 sm:p-8 mb-8 sm:mb-12 rounded-r-xl shadow-lg">
            <div className="absolute top-4 right-4 text-blue-200 text-6xl font-bold opacity-20">"</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
              <strong className="text-blue-600">El 81% de los compradores investiga en línea antes de adquirir</strong>, y un sitio web profesional actúa como tu embajador digital permanente. Según expertos, las empresas sin sitio propio pierden hasta el <strong className="text-red-600">70% de oportunidades de conversión</strong> al no controlar su narrativa en línea.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Página web profesional vs redes sociales" 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <p className="text-center text-sm text-slate-500 mt-3 italic">
              Una página web profesional te da control total sobre tu presencia digital
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Construye Credibilidad y Confianza Instantánea</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Las redes sociales son geniales para el engagement, pero un sitio web profesional transmite seriedad y legitimidad. Los visitantes esperan encontrar detalles completos sobre tu negocio —historia, testimonios y certificaciones— en un formato pulido, no en un feed efímero.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    En 2025, con el auge de estafas en línea, un diseño limpio y HTTPS seguro puede aumentar la confianza en un <strong className="text-green-600">50%</strong>, reduciendo el escepticismo de los leads.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Sitio web profesional con credibilidad" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    💡
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Incluye secciones "Sobre Nosotros" con fotos reales y reseñas verificadas. Evita plantillas genéricas; opta por un diseño personalizado que refleje tu marca única.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Ofrece Control Total sobre tu Presencia en Línea</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Control total del sitio web" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    A diferencia de las redes, donde algoritmos cambian y cuentas pueden ser suspendidas, un sitio web es tuyo al <strong className="text-purple-600">100%</strong>. Controlas el contenido, el diseño y la experiencia del usuario sin depender de reglas externas.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto es crucial en 2025, con actualizaciones de privacidad que limitan la visibilidad orgánica en plataformas sociales, forzando a muchas empresas a pagar por alcance.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Elige plataformas como WordPress o Squarespace para actualizaciones fáciles. Integra formularios de contacto y chatbots para capturar leads directamente, sin intermediarios.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Garantiza Disponibilidad 24/7 para Ventas y Soporte</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Mientras las redes duermen (o se saturan), tu sitio web trabaja incansablemente. En 2025, con el <strong className="text-green-600">60% de las búsquedas móviles nocturnas</strong>, un sitio optimizado permite ventas automáticas, reservas o descargas en cualquier momento.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto no solo impulsa ingresos pasivos, sino que mejora la satisfacción del cliente al responder dudas vía FAQ o bots.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Sitio web trabajando 24/7" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Asegura compatibilidad móvil y tiempos de carga inferiores a 3 segundos. Agrega un blog para contenido evergreen que atraiga tráfico constante.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Impulsa el SEO y el Tráfico Orgánico Sostenible</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="SEO y tráfico orgánico" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Las redes priorizan contenido viral, pero el SEO de un sitio web te posiciona en búsquedas relevantes a largo plazo. En 2025, con IA como Google SGE, un sitio optimizado genera hasta <strong className="text-orange-600">53% más tráfico orgánico</strong> que las publicaciones sociales solas.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto atrae clientes cualificados sin costos recurrentes de publicidad.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🔍
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-orange-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Realiza keyword research para páginas de productos o servicios. Usa meta tags, alt text en imágenes y backlinks para escalar en rankings.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  5
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Proporciona Datos Analíticos para Decisiones Inteligentes</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Las redes ofrecen métricas básicas, pero un sitio web te da insights profundos: comportamiento del usuario, tasas de rebote y conversiones. En 2025, con herramientas como Google Analytics 4, puedes personalizar estrategias basadas en datos reales.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto optimiza ROI en campañas y productos.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Analytics y datos" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    📊
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-red-800 mb-2">Cómo implementarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Integra píxeles de tracking y heatmaps. Revisa mensualmente para iterar: si una página tiene alto rebote, rediseñala.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 sm:p-10 rounded-2xl border border-blue-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">Conclusión: Tu Sitio Web, Tu Base Digital Imprescindible</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6 text-center">
                Invertir en una página web profesional no es un gasto, sino una inversión que multiplica tu alcance más allá de las redes sociales volátiles. En 2025, donde la competencia es feroz y los consumidores exigen autenticidad, un sitio sólido te diferencia y escala tu negocio.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center font-medium">
                <strong>¿Estás listo para dar el salto?</strong> Comenta abajo qué razón te convence más y ¡empecemos a construir tu presencia digital inquebrantable!
              </p>
            </section>
          </div>
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir artículo
              </button>
            </div>
            <div className="text-slate-500 text-sm">
              Publicado el 14 de Septiembre, 2025 por el equipo de Glowel
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para crear tu página web profesional?
          </h3>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a construir la presencia digital perfecta para tu negocio. 
            Consulta gratuita de 15 minutos.
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20leí%20el%20artículo%20sobre%20páginas%20web%20profesionales%20y%20me%20interesa%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Consulta gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost1;
