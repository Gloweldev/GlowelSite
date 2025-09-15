import { ArrowLeft, MessageCircle, Calendar, Clock, ArrowRight } from 'lucide-react';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tu Negocio Necesita Más que una Red Social: 5 Razones Clave para Invertir en una Página Web Profesional",
      excerpt: "En 2025, con más de 5.3 mil millones de usuarios en redes sociales, es tentador pensar que una cuenta en Instagram o Facebook basta para triunfar. Sin embargo, depender solo de plataformas ajenas puede limitar tu crecimiento.",
      category: "Desarrollo Web",
      date: "14 de Septiembre, 2025",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      slug: "5-razones-clave-invertir-pagina-web-profesional"
    },
    {
      id: 2,
      title: "5 Errores Comunes en el Diseño de Sitios E-commerce que Debes Evitar",
      excerpt: "En el mundo del comercio electrónico, el diseño de tu sitio web no es solo una cuestión estética; es el puente directo entre tu marca y tus clientes potenciales. Un diseño deficiente puede aumentar las tasas de abandono de carrito hasta en un 70%.",
      category: "E-commerce",
      date: "28 de Agosto, 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "5-errores-comunes-diseno-ecommerce-evitar"
    },
    {
      id: 3,
      title: "Optimización SEO: Guía Completa para Principiantes",
      excerpt: "En un mundo digital donde el 93% de las experiencias en línea comienzan con una búsqueda en motores como Google, dominar el SEO no es opcional: es esencial para que tu sitio web sea descubierto por tu audiencia ideal.",
      category: "SEO",
      date: "15 de Agosto, 2025",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "optimizacion-seo-guia-completa-principiantes"
    },
    {
      id: 4,
      title: "Tendencias en Marketing Digital para 2025: 5 Claves para No Quedarte Atrás",
      excerpt: "En el vertiginoso mundo del marketing digital, 2025 trae un panorama transformado por la IA, la personalización extrema y la demanda de autenticidad. Con un gasto global en publicidad digital proyectado en más de 700 mil millones de dólares.",
      category: "Marketing",
      date: "8 de Agosto, 2025",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      slug: "tendencias-marketing-digital-2025-claves-no-quedarse-atras"
    }
  ];


  const handlePostClick = (slug: string) => {
    // En un blog real, aquí navegarías a la publicación específica
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="relative flex items-center justify-center">
            {/* Botón Volver al inicio - Posición absoluta */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <a
                href="/"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Volver al inicio</span>
              </a>
            </div>
            
            {/* Contenido central */}
            <div className="text-center">
              <div className="w-24 h-8 sm:w-32 sm:h-10 mx-auto mb-1 sm:mb-2">
                <img 
                  src={GlowelOscuro} 
                  alt="Glowel Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">Blog de Glowel</h1>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 hidden sm:block">Tips, recursos y tendencias en desarrollo web</p>
            </div>
          </div>
        </div>
      </div>



      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">✨ Artículo destacado</h3>
          <div 
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => handlePostClick(blogPosts[0].slug)}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-48 sm:h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-4 sm:p-6 lg:p-8">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                  {blogPosts[0].category}
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium text-sm sm:text-base">
                    Leer artículo
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">📚 Todos los artículos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="bg-white/90 backdrop-blur-sm text-slate-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 sm:mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0">
                    <div className="flex items-center space-x-2 sm:space-x-3 text-xs text-slate-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium text-xs sm:text-sm">
                      Leer
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Mantente al día
          </h3>
          <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Suscríbete para recibir nuestros artículos directamente en tu WhatsApp. 
            Sin spam, solo contenido valioso.
          </p>
          <a
            href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20recibir%20los%20artículos%20del%20blog%20de%20Glowel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            <MessageCircle className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
            Suscribirme por WhatsApp
          </a>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/50">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
              ¿Tienes alguna pregunta?
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">
              Nuestro equipo de expertos puede ayudarte con cualquier consulta técnica sobre desarrollo web.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20tengo%20una%20consulta%20técnica%20sobre%20desarrollo%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Consulta técnica
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
