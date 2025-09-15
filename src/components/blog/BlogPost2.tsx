import { ArrowLeft, Calendar, Clock, MessageCircle, Share2, AlertTriangle, Zap, Smartphone, CreditCard, Camera } from 'lucide-react';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/blog"
                className="flex items-center text-red-600 hover:text-red-700 transition-colors"
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
      <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-pink-800 text-white py-16 sm:py-20 overflow-hidden">
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
              <span className="text-sm sm:text-base font-semibold">E-commerce</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              5 Errores Comunes en el Diseño de Sitios E-commerce que Debes Evitar
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              En el mundo del comercio electrónico, el diseño de tu sitio web no es solo una cuestión estética; es el puente directo entre tu marca y tus clientes potenciales. Un diseño deficiente puede aumentar las tasas de abandono de carrito hasta en un 70%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-red-100">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">28 de Agosto, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">6 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="relative bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 sm:p-8 mb-8 sm:mb-12 rounded-r-xl shadow-lg">
            <div className="absolute top-4 right-4 text-red-200 text-6xl font-bold opacity-20">⚠️</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
              <strong className="text-red-600">Un diseño deficiente puede aumentar las tasas de abandono de carrito hasta en un 70%</strong> y reducir drásticamente las conversiones. Según expertos en UX, muchos emprendedores caen en trampas comunes que podrían evitarse con un poco de planificación.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Errores comunes en e-commerce" 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <p className="text-center text-sm text-slate-500 mt-3 italic">
              Evita estos errores para maximizar tus conversiones en e-commerce
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">1. Navegación Compleja o Intuitiva</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Uno de los errores más graves es crear una estructura de navegación que confunda a los usuarios. Menús sobrecargados, categorías mal organizadas o la ausencia de breadcrumbs (enlaces de ruta) hacen que los visitantes se sientan perdidos.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto eleva las tasas de rebote y frustra las compras impulsivas. Por ejemplo, dropdowns excesivos o botones "Inicio" invisibles pueden alejar a un cliente en segundos.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Navegación compleja en e-commerce" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    💡
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Cómo evitarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Simplifica el menú principal a no más de 7 categorías principales, incorpora una barra de búsqueda prominente y usa breadcrumbs en todas las páginas de producto. Prueba tu navegación con herramientas como Google Analytics para identificar puntos de fricción.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">2. Tiempos de Carga Lentos</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tiempos de carga lentos" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Un sitio que tarda más de <strong className="text-orange-600">3 segundos en cargar puede perder hasta el 40% de sus visitantes</strong>. Este error surge comúnmente por el exceso de imágenes de alta resolución, videos no optimizados o un código hinchado.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto afecta especialmente a conexiones móviles lentas, donde la paciencia del usuario es aún menor.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-orange-800 mb-2">Cómo evitarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Comprime imágenes con herramientas como TinyPNG, implementa lazy loading para medios y elige plataformas de e-commerce escalables como Shopify o BigCommerce que prioricen la velocidad. Monitorea el rendimiento con Google PageSpeed Insights y apunta a un puntaje superior a 90.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">3. Falta de Optimización para Móviles</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    En 2025, <strong className="text-green-600">más del 60% del tráfico e-commerce proviene de dispositivos móviles</strong>, pero muchos sitios siguen sin ser responsivos. Diseños que se ven perfectos en desktop pero se arrugan en smartphones generan una experiencia frustrante.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Botones diminutos o texto ilegible causan abandonos masivos y pérdida de ventas potenciales.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Optimización móvil" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    📱
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Cómo evitarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Adopta un diseño responsivo desde el inicio, probando en múltiples dispositivos con herramientas como BrowserStack. Asegúrate de que los elementos táctiles (como botones de "Añadir al carrito") sean lo suficientemente grandes y prioriza un flujo de usuario adaptado a touch screens.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">4. Proceso de Checkout Complicado</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Proceso de checkout complicado" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Requerir que los usuarios creen una cuenta para finalizar una compra es un clásico error que <strong className="text-purple-600">incrementa el abandono de carritos en un 70%</strong>. Además, la falta de opciones de checkout como invitado o métodos de pago variados crea barreras innecesarias.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto ocurre en el momento crítico de conversión, cuando el cliente ya está decidido a comprar.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    💳
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Cómo evitarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Ofrece checkout como invitado por defecto, minimiza los campos obligatorios a lo esencial (nombre, email, dirección) y muestra progresos claros en pasos. Integra múltiples pasarelas de pago para dar flexibilidad y reduce el checkout a un máximo de 3 pasos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Camera className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">5. Imágenes y Descripciones de Productos Deficientes</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Fotos borrosas, con fondos distractores o sin vistas múltiples, junto con descripciones genéricas que no destacan beneficios, fallan en convencer al comprador. Los usuarios necesitan visualizar el producto en contexto real para generar confianza.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    Esto es crucial para reducir devoluciones y aumentar la satisfacción del cliente.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Imágenes de productos deficientes" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    📸
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-pink-800 mb-2">Cómo evitarlo:</h4>
                    <p className="text-slate-700 font-medium">
                      Invierte en fotografía profesional con al menos 5 ángulos por producto, incluye zoom interactivo y videos cortos. Escribe descripciones persuasivas que resuelvan dolores del cliente (ej.: "Este vestido transpirable te mantiene fresco en días calurosos"), incorporando palabras clave para SEO.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-red-50 to-pink-50 p-8 sm:p-10 rounded-2xl border border-red-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">Conclusión: Diseña para Convertir, No Solo para Lucir Bien</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6 text-center">
                Evitar estos cinco errores no solo mejorará la experiencia del usuario, sino que impulsará tus ventas y fidelidad de clientes. Recuerda, el diseño de e-commerce debe ser intuitivo, rápido y centrado en el usuario.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center font-medium">
                <strong>¿Has cometido alguno de estos errores en tu tienda?</strong> ¡Comparte en los comentarios y hagamos de tu e-commerce un éxito!
              </p>
            </section>
          </div>
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-red-600 hover:text-red-700 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir artículo
              </button>
            </div>
            <div className="text-slate-500 text-sm">
              Publicado el 28 de Agosto, 2025 por el equipo de Glowel
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            ¿Necesitas optimizar tu tienda online?
          </h3>
          <p className="text-red-100 mb-8 text-lg max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a evitar estos errores y maximizar las conversiones de tu e-commerce. 
            Consulta gratuita de 15 minutos.
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20leí%20el%20artículo%20sobre%20errores%20en%20e-commerce%20y%20me%20interesa%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-red-600 hover:bg-red-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Consulta gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
