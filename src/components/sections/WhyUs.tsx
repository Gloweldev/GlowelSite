import { Zap, Code, Users, Award } from 'lucide-react';

const WhyUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Hacemos valer tu inversión',
      description: 'Cada peso que inviertes se traduce en resultados medibles y crecimiento real para tu negocio'
    },
    {
      icon: Code,
      title: 'Tecnología que funciona',
      description: 'Usamos herramientas probadas y actualizadas que garantizan el funcionamiento a largo plazo'
    },
    {
      icon: Users,
      title: 'Tu éxito es nuestro éxito',
      description: 'Trabajamos contigo como socios, no como proveedores. Tu crecimiento es nuestra prioridad'
    },
    {
      icon: Award,
      title: 'Garantía de satisfacción',
      description: 'Si no estás satisfecho con el resultado, trabajamos hasta que lo estés. Sin preguntas'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Tu inversión está segura con nosotros
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Garantizamos resultados reales y medibles para tu negocio. Sin riesgos, solo crecimiento.
          </p>
        </div>

        {/* Benefits - Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 shadow-xl border border-slate-200/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Invierte sin riesgos
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              Consulta gratuita de 15 minutos. Te mostramos exactamente cómo tu inversión se convertirá en resultados reales.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20saber%20cómo%20mi%20inversión%20se%20convertirá%20en%20resultados%20reales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Consulta sin compromiso
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
