import { Shield, Clock, Headphones, CheckCircle } from 'lucide-react';

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Garantía de Satisfacción',
      description: 'Si no estás completamente satisfecho con el resultado, trabajamos hasta que lo estés. Sin preguntas.',
      details: ['Revisión ilimitada', 'Modificaciones incluidas', 'Satisfacción garantizada']
    },
    {
      icon: Clock,
      title: 'Entrega a Tiempo',
      description: 'Nos comprometemos a entregar tu proyecto en el plazo acordado. Si hay retrasos, te compensamos.',
      details: ['Cronograma claro', 'Entregas parciales', 'Compensación por retrasos']
    },
    {
      icon: Headphones,
      title: 'Soporte Incluido',
      description: '3 meses de soporte técnico gratuito después de la entrega. Tu proyecto siempre funcionará perfectamente.',
      details: ['Soporte 24/7', 'Mantenimiento incluido', 'Actualizaciones gratuitas']
    },
    {
      icon: CheckCircle,
      title: 'Calidad Garantizada',
      description: 'Código limpio, documentado y con las mejores prácticas. Tu proyecto será escalable y mantenible.',
      details: ['Código documentado', 'Mejores prácticas', 'Escalabilidad garantizada']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Nuestras garantías te protegen
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Trabajamos con total transparencia y te garantizamos resultados que superen tus expectativas
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25">
                <guarantee.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {guarantee.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {guarantee.description}
              </p>

              {/* Details */}
              <div className="space-y-2">
                {guarantee.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-10 shadow-xl border border-slate-200/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              ¿Listo para trabajar con garantías?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              Iniciamos tu proyecto con total confianza. Si no estás satisfecho, trabajamos hasta que lo estés.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20trabajar%20con%20garantías%20y%20empezar%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Empezar con garantías
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

export default Guarantees;
