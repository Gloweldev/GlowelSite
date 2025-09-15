import { ArrowLeft, Calendar, Clock, MessageCircle, Share2, Search, Target, Settings, Link, TrendingUp, BarChart3, Globe } from 'lucide-react';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const BlogPost3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href="/blog"
                className="flex items-center text-green-600 hover:text-green-700 transition-colors"
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
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16 sm:py-20 overflow-hidden">
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
              <span className="text-sm sm:text-base font-semibold">SEO</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              Optimización SEO: Guía Completa para Principiantes
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-green-100 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              En un mundo digital donde el 93% de las experiencias en línea comienzan con una búsqueda en motores como Google, dominar el SEO no es opcional: es esencial para que tu sitio web sea descubierto por tu audiencia ideal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-green-100">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">15 de Agosto, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base font-medium">12 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 sm:p-8 mb-8 sm:mb-12 rounded-r-xl shadow-lg">
            <div className="absolute top-4 right-4 text-green-200 text-6xl font-bold opacity-20">🔍</div>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
              <strong className="text-green-600">Con el auge de la búsqueda por voz y la IA en los resultados de búsqueda</strong>, implementar SEO ahora puede aumentar tu tráfico orgánico hasta en un <strong className="text-green-600">53.3% del total web</strong>. ¡Empecemos paso a paso para que tu sitio destaque en los SERP!
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img 
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Optimización SEO para principiantes" 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
            />
            <p className="text-center text-sm text-slate-500 mt-3 italic">
              El SEO es la clave para que tu sitio web sea descubierto por tu audiencia ideal
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Search className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">1. ¿Qué es el SEO y por Qué Debes Invertir en Él?</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    El SEO es el proceso de optimizar tu sitio web para que los motores de búsqueda lo entiendan mejor y lo posicionen más alto en resultados orgánicos, atrayendo visitantes cualificados sin pagar por anuncios.
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    A diferencia del SEM (publicidad pagada), el SEO genera resultados duraderos, aunque requiere paciencia: los primeros frutos suelen verse en 3-6 meses.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Qué es SEO" 
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
                    <h4 className="text-lg font-bold text-blue-800 mb-2">Por qué importa en 2025:</h4>
                    <p className="text-slate-700 font-medium">
                      Con más de 3.5 billones de búsquedas diarias en Google, el tráfico orgánico no solo es gratuito, sino que genera confianza y credibilidad. Además, con actualizaciones como los AI Overviews y el enfoque en la intención del usuario, un SEO sólido te prepara para un panorama dominado por búsquedas multimodales (texto, voz, imágenes).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">2. Los Tipos de SEO: On-Page, Off-Page y Técnico</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">SEO On-Page</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Optimizaciones dentro de tus páginas, como títulos, encabezados y contenido relevante. Ayuda a que Google entienda el tema de tu página y coincida con la intención de búsqueda del usuario.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Link className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">SEO Off-Page</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Factores externos que construyen autoridad, principalmente backlinks de sitios relevantes. En 2025, prioriza enlaces naturales de blogs o menciones en redes para evitar penalizaciones.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">SEO Técnico</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    La base invisible que asegura que tu sitio sea rastreable y rápido. Incluye velocidad de carga, compatibilidad móvil y estructura de datos.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🎯
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Tip:</h4>
                    <p className="text-slate-700 font-medium">
                      Comienza con on-page para resultados rápidos, luego integra lo técnico y off-page para escalar.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">3. Investigación de Palabras Clave: El Corazón del SEO</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    La keyword research identifica términos que tu audiencia busca, guiando tu contenido. En 2025, ve más allá de palabras aisladas: enfócate en la semántica y la intención.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-orange-800 mb-2">Pasos simples:</h4>
                    <ul className="text-slate-700 space-y-1">
                      <li>• Elige semillas (ej. "café") y expande a long-tail (ej. "mejor café orgánico para principiantes")</li>
                      <li>• Analiza volumen de búsqueda y competencia</li>
                      <li>• Incluye variaciones: informativas ("qué es SEO"), transaccionales ("curso SEO barato")</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Investigación de palabras clave" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🔍
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-orange-800 mb-2">Tip:</h4>
                    <p className="text-slate-700 font-medium">
                      Apunta a keywords de cola larga, que tienen menos competencia y convierten mejor en sitios nuevos. Usa métricas como volumen mayor a 100 y dificultad menor a 30 para empezar.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">4. Mejores Prácticas de SEO On-Page</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="SEO On-Page" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Una vez con tus keywords, optimiza cada página con estas mejores prácticas:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">Títulos y Meta:</h4>
                      <p className="text-slate-700 text-sm">Título de 50-60 caracteres con keyword principal; meta descripción de 150-160, persuasiva.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">Contenido:</h4>
                      <p className="text-slate-700 text-sm">Estructura con H1 (título principal), H2/H3 para subtítulos. Apunta a 1.500-2.000 palabras, con párrafos cortos, listas y negritas.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 mb-2">Imágenes:</h4>
                      <p className="text-slate-700 text-sm">Comprime a WebP, renombra archivos (ej. "guia-seo-principiantes.jpg") y usa alt text descriptivo.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    💡
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-purple-800 mb-2">Tip:</h4>
                    <p className="text-slate-700 font-medium">
                      Incorpora enlaces internos para guiar al usuario y mejorar la navegación, y actualiza contenido cada 6 meses para mantener frescura.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">5. Optimizaciones Técnicas Esenciales</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Sin una base técnica sólida, tu SEO falla. En 2025, prioriza Core Web Vitals para un rendimiento óptimo.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Velocidad:</h4>
                      <p className="text-slate-700 text-sm">LCP menor a 2.5s (usa lazy loading y CDN). Un retraso de 1s reduce conversiones en 20%.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Móvil-First:</h4>
                      <p className="text-slate-700 text-sm">Diseño responsivo; 70% de búsquedas son móviles. Prueba con botones mayores a 48px.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">Seguridad e Indexación:</h4>
                      <p className="text-slate-700 text-sm">HTTPS obligatorio, sitemap XML y robots.txt. Corrige errores 404 con redirecciones 301.</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="SEO técnico" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🔧
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-red-800 mb-2">Tip:</h4>
                    <p className="text-slate-700 font-medium">
                      Monitorea con Google Search Console para detectar problemas de indexación tempranamente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">6. Estrategias Off-Page para Construir Autoridad</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="SEO Off-Page" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                    Gana confianza externa con estas estrategias probadas:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-bold text-teal-800 mb-2">Link Building:</h4>
                      <p className="text-slate-700 text-sm">Crea contenido shareable (guías, infografías) y haz guest posting en sitios con DR mayor a 40.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-bold text-teal-800 mb-2">Redes Sociales y Local:</h4>
                      <p className="text-slate-700 text-sm">Comparte en X o Instagram; para negocios locales, optimiza Google My Business con reseñas y keywords geográficas (46% de búsquedas son locales).</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-bold text-teal-800 mb-2">Menciones:</h4>
                      <p className="text-slate-700 text-sm">Recupera enlaces rotos y evita comprar links.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🌐
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-teal-800 mb-2">Tip:</h4>
                    <p className="text-slate-700 font-medium">
                      80% de backlinks deben venir de contenido valioso; enfócate en calidad sobre cantidad para evitar penalizaciones.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 sm:mb-16">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">7. Herramientas Gratuitas para Principiantes</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Keywords</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Google Keyword Planner</li>
                    <li>• Google Trends</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Auditoría</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Google Search Console</li>
                    <li>• PageSpeed Insights</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Análisis</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Google Analytics 4</li>
                    <li>• Para tráfico y conversiones</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Plugins (WordPress)</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Yoast SEO</li>
                    <li>• Rank Math</li>
                    <li>• Para optimizaciones automáticas</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-6 rounded-r-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    🛠️
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-indigo-800 mb-2">Tip:</h4>
                    <p className="text-slate-700 font-medium">
                      Empieza con gratuitas; invierte en Ahrefs o SEMrush solo cuando domines lo básico.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-10 rounded-2xl border border-green-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">Conclusión: Pon en Marcha Tu Estrategia SEO Hoy</h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6 text-center">
                El SEO no es un truco rápido, sino una maratón que recompensa la consistencia: crea contenido valioso, optimiza técnicamente y construye autoridad gradualmente. En 2025, con IA y voz dominando, los sitios centrados en el usuario ganan.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed text-center font-medium">
                <strong>¿Listo para tu primer keyword research?</strong> ¡Comparte tus progresos en los comentarios y transforma tu sitio en un imán de tráfico orgánico!
              </p>
            </section>
          </div>
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Compartir artículo
              </button>
            </div>
            <div className="text-slate-500 text-sm">
              Publicado el 15 de Agosto, 2025 por el equipo de Glowel
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            ¿Necesitas ayuda con tu estrategia SEO?
          </h3>
          <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a implementar una estrategia SEO completa y efectiva para tu sitio web. 
            Consulta gratuita de 15 minutos.
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20leí%20el%20artículo%20sobre%20SEO%20y%20me%20interesa%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-3 w-6 h-6" />
            Consulta gratuita
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost3;
