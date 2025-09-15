import React, { useState } from 'react';
import { Globe, ShoppingCart, Zap, Wrench, ArrowRight, X } from 'lucide-react';

const Services = () => {
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Páginas Web',
      benefit: 'Presencia digital profesional 24/7',
      description: 'Sitios web diseñados para aumentar la visibilidad de tu negocio, atraer más clientes y fortalecer tu marca.',
      features: ['Diseño responsive', 'Optimización para Google', 'Formulario de contacto', 'Integración con redes sociales', 'Entrega completa'],
      details: [
        'Diseño que se adapta a móviles y computadoras',
        'Optimización para aparecer en Google',
        'Formulario de contacto funcional',
        'Integración con redes sociales',
        'Entrega completa con código fuente',
        'Optimización de velocidad',
        'Integración con Google Analytics',
        'Certificado de seguridad incluido',
        'Diseño personalizado según tu marca',
        'Fácil de actualizar y mantener'
      ],
      time: '1-3 semanas',
      price: 'Desde $800 MXN',
      cta: 'Pedir presupuesto gratuito',
      whatsapp: 'https://wa.me/522223281100?text=Hola,%20me%20interesa%20solicitar%20un%20presupuesto%20para%20una%20página%20web'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      benefit: 'Tiendas online que venden sin pausa',
      description: 'Tienda completa con gestión de pedidos y experiencia de compra fluida para aumentar tus ventas.',
      features: ['Catálogo completo', 'Carrito de compras', 'Pagos seguros', 'Panel de administración', 'Integración con envíos', 'Capacitación incluida'],
      details: [
        'Catálogo completo con categorías',
        'Carrito de compras funcional',
        'Pagos seguros con múltiples métodos',
        'Panel para administrar productos',
        'Integración con servicios de envío',
        'Notificaciones por email y WhatsApp',
        'Capacitación para administrar la tienda',
        'Reportes de ventas',
        'Gestión de inventario',
        'Sistema de cupones y descuentos'
      ],
      time: '2-6 semanas',
      price: 'Desde $9,500 MXN',
      cta: 'Agendar demo y cotización',
      whatsapp: 'https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20demo%20y%20cotización%20para%20una%20tienda%20online'
    },
    {
      icon: Zap,
      title: 'Software a Medida',
      benefit: 'Soluciones personalizadas para tu negocio',
      description: 'Desarrollamos software específico para atender las necesidades únicas de tu empresa.',
      features: ['Desarrollo personalizado', 'Integraciones necesarias', 'Notificaciones automáticas', 'Documentación completa', 'Reportes automáticos'],
      details: [
        'Software desarrollado específicamente para tu negocio',
        'Integraciones con sistemas que ya usas',
        'Notificaciones automáticas por email y WhatsApp',
        'Documentación completa para usar el sistema',
        'Reportes automáticos personalizados',
        'Automatización de procesos repetitivos',
        'Sincronización de datos entre sistemas',
        'Alertas automáticas de errores',
        'Panel de control en tiempo real',
        'Adaptable para crecimiento futuro'
      ],
      time: '1-4 semanas',
      price: 'Desde $6,500 MXN',
      cta: 'Solicitar evaluación técnica',
      whatsapp: 'https://wa.me/522223281100?text=Hola,%20me%20interesa%20solicitar%20una%20evaluación%20técnica%20para%20automatizaciones'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento',
      benefit: 'Soporte técnico continuo',
      description: 'Mantenemos tu sitio actualizado, seguro y funcionando perfectamente con soporte especializado.',
      features: ['Respaldo diario', 'Actualizaciones de seguridad', 'Soporte 24/7', 'Monitoreo continuo', 'Optimización de velocidad'],
      details: [
        'Respaldo diario automático',
        'Actualizaciones de seguridad',
        'Soporte técnico 24/7 por WhatsApp',
        'Monitoreo continuo del sitio',
        'Optimización de velocidad',
        'Gestión de dominios y certificados',
        'Actualizaciones de contenido',
        'Análisis de seguridad',
        'Reportes mensuales',
        'Respuesta rápida ante problemas'
      ],
      time: 'Continuo',
      price: 'Desde $2,500 MXN/mes',
      cta: 'Consultar planes',
      whatsapp: 'https://wa.me/522223281100?text=Hola,%20me%20interesa%20consultar%20los%20planes%20de%20mantenimiento'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Servicios que aumentan ventas y ahorran tiempo
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Páginas, tiendas y automatizaciones a medida — prototipos rápidos, integración completa y soporte.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200/50 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {service.title}
              </h3>
              
              <p className="text-blue-600 font-semibold mb-3">
                {service.benefit}
              </p>

              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Ver más detalles Button */}
              <button
                onClick={() => setModalOpen(index)}
                className="w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mb-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ver más detalles
              </button>

              {/* Time and Price */}
              <div className="mb-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200/50">
                <div className="text-sm text-slate-700 mb-2">
                  <span className="font-semibold text-blue-600">Tiempo:</span> {service.time}
                </div>
                <div className="text-sm text-slate-700">
                  <span className="font-semibold text-blue-600">Precio:</span> {service.price}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={service.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 group/btn"
              >
                {service.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>


        {/* Global CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 shadow-xl border border-slate-200/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              ¿No estás seguro qué necesitas?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              Agenda una evaluación gratuita de 15 minutos. Analizamos tu negocio y te recomendamos la mejor solución.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20evaluación%20gratuita%20de%2015%20minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Evaluación gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                    {React.createElement(services[modalOpen].icon, { className: "w-6 h-6 text-blue-600" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{services[modalOpen].title}</h3>
                    <p className="text-blue-600 font-semibold">{services[modalOpen].benefit}</p>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  {services[modalOpen].description}
                </p>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">¿Qué incluye?</h4>
                  <ul className="space-y-2">
                    {services[modalOpen].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-blue-600">Tiempo:</span>
                      <p className="text-slate-700">{services[modalOpen].time}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-600">Precio:</span>
                      <p className="text-slate-700">{services[modalOpen].price}</p>
                    </div>
                  </div>
                </div>

                {/* Modal CTA */}
                <a
                  href={services[modalOpen].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  {services[modalOpen].cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
