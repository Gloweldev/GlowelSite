import { ArrowLeft, Calendar, Clock, MessageCircle, Share2 } from 'lucide-react';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const BlogPost = () => {
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
      <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium">Desarrollo Web</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4">
              Tu Negocio Necesita Más que una Red Social: 5 Razones Clave para Invertir en una Página Web Profesional
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              En 2025, con más de 5.3 mil millones de usuarios en redes sociales, es tentador pensar que una cuenta en Instagram o Facebook basta para triunfar. Sin embargo, depender solo de plataformas ajenas puede limitar tu crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">14 de Septiembre, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">8 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <article className="prose prose-sm sm:prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong>El 81% de los compradores investiga en línea antes de adquirir</strong>, y un sitio web profesional actúa como tu embajador digital permanente. Según expertos, las empresas sin sitio propio pierden hasta el 70% de oportunidades de conversión al no controlar su narrativa en línea.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">1. Construye Credibilidad y Confianza Instantánea</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Las redes sociales son geniales para el engagement, pero un sitio web profesional transmite seriedad y legitimidad. Los visitantes esperan encontrar detalles completos sobre tu negocio —historia, testimonios y certificaciones— en un formato pulido, no en un feed efímero.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                En 2025, con el auge de estafas en línea, un diseño limpio y HTTPS seguro puede aumentar la confianza en un 50%, reduciendo el escepticismo de los leads.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  <strong>Cómo implementarlo:</strong> Incluye secciones "Sobre Nosotros" con fotos reales y reseñas verificadas. Evita plantillas genéricas; opta por un diseño personalizado que refleje tu marca única.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">2. Ofrece Control Total sobre tu Presencia en Línea</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                A diferencia de las redes, donde algoritmos cambian y cuentas pueden ser suspendidas, un sitio web es tuyo al 100%. Controlas el contenido, el diseño y la experiencia del usuario sin depender de reglas externas.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Esto es crucial en 2025, con actualizaciones de privacidad que limitan la visibilidad orgánica en plataformas sociales, forzando a muchas empresas a pagar por alcance.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  <strong>Cómo implementarlo:</strong> Elige plataformas como WordPress o Squarespace para actualizaciones fáciles. Integra formularios de contacto y chatbots para capturar leads directamente, sin intermediarios.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">3. Garantiza Disponibilidad 24/7 para Ventas y Soporte</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Mientras las redes duermen (o se saturan), tu sitio web trabaja incansablemente. En 2025, con el 60% de las búsquedas móviles nocturnas, un sitio optimizado permite ventas automáticas, reservas o descargas en cualquier momento.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Esto no solo impulsa ingresos pasivos, sino que mejora la satisfacción del cliente al responder dudas vía FAQ o bots.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  <strong>Cómo implementarlo:</strong> Asegura compatibilidad móvil y tiempos de carga inferiores a 3 segundos. Agrega un blog para contenido evergreen que atraiga tráfico constante.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">4. Impulsa el SEO y el Tráfico Orgánico Sostenible</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Las redes priorizan contenido viral, pero el SEO de un sitio web te posiciona en búsquedas relevantes a largo plazo. En 2025, con IA como Google SGE, un sitio optimizado genera hasta 53% más tráfico orgánico que las publicaciones sociales solas.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Esto atrae clientes cualificados sin costos recurrentes de publicidad.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  <strong>Cómo implementarlo:</strong> Realiza keyword research para páginas de productos o servicios. Usa meta tags, alt text en imágenes y backlinks para escalar en rankings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">5. Proporciona Datos Analíticos para Decisiones Inteligentes</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Las redes ofrecen métricas básicas, pero un sitio web te da insights profundos: comportamiento del usuario, tasas de rebote y conversiones. En 2025, con herramientas como Google Analytics 4, puedes personalizar estrategias basadas en datos reales.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4">
                Esto optimiza ROI en campañas y productos.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  <strong>Cómo implementarlo:</strong> Integra píxeles de tracking y heatmaps. Revisa mensualmente para iterar: si una página tiene alto rebote, rediseñala.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-green-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">Conclusión: Tu Sitio Web, Tu Base Digital Imprescindible</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-3 sm:mb-4">
                Invertir en una página web profesional no es un gasto, sino una inversión que multiplica tu alcance más allá de las redes sociales volátiles. En 2025, donde la competencia es feroz y los consumidores exigen autenticidad, un sitio sólido te diferencia y escala tu negocio.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                <strong>¿Estás listo para dar el salto?</strong> Comenta abajo qué razón te convence más y ¡empecemos a construir tu presencia digital inquebrantable!
              </p>
            </section>
          </div>
        </article>

        {/* Article Footer */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Compartir artículo
              </button>
            </div>
            <div className="text-slate-500 text-xs sm:text-sm">
              Publicado el 14 de Septiembre, 2025 por el equipo de Glowel
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            ¿Listo para crear tu página web profesional?
          </h3>
          <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Nuestro equipo de expertos puede ayudarte a construir la presencia digital perfecta para tu negocio. 
            Consulta gratuita de 15 minutos.
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20leí%20el%20artículo%20sobre%20páginas%20web%20profesionales%20y%20me%20interesa%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <MessageCircle className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
            Consulta gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
