import { MessageSquare, Palette, Code, Rocket, Headphones, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Brief & Consulta',
      description: 'Analizamos tus necesidades y objetivos de negocio',
      note: 'Sin costo'
    },
    {
      icon: Palette,
      title: 'Diseño & Prototipo',
      description: 'Creamos una primera versión sin costo para tu aprobación',
      note: 'Sin costo - Solo pagas si aceptas trabajar con nosotros'
    },
    {
      icon: Code,
      title: 'Desarrollo',
      description: 'Programamos tu sitio con las mejores tecnologías',
      note: 'Se cobra desde aquí'
    },
    {
      icon: Rocket,
      title: 'Lanzamiento',
      description: 'Publicamos tu proyecto y configuramos todo',
      note: 'Incluido'
    },
    {
      icon: Headphones,
      title: 'Soporte',
      description: 'Te acompañamos con mantenimiento y mejoras',
      note: 'Incluido'
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Un proceso transparente y eficiente que garantiza resultados excepcionales
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Arrows */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10">
            <div className="flex items-center justify-center px-8">
              <div className="flex items-center justify-between w-full max-w-5xl">
                <div className="w-20"></div> {/* Space for first step */}
                <ArrowRight className="w-8 h-8 text-blue-500 stroke-2" />
                <div className="w-20"></div> {/* Space between steps */}
                <ArrowRight className="w-8 h-8 text-blue-500 stroke-2" />
                <div className="w-20"></div> {/* Space between steps */}
                <ArrowRight className="w-8 h-8 text-blue-500 stroke-2" />
                <div className="w-20"></div> {/* Space between steps */}
                <ArrowRight className="w-8 h-8 text-blue-500 stroke-2" />
                <div className="w-20"></div> {/* Space for last step */}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 lg:mb-0 mx-auto lg:mx-0 z-10 lg:bg-white lg:border-4 lg:border-blue-600 lg:text-blue-600">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300 lg:mt-8">
                  <step.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {step.description}
                </p>

                {/* Cost Note */}
                <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${
                  step.note.includes('Sin costo') 
                    ? 'text-green-700 bg-green-100' 
                    : step.note.includes('Se cobra')
                    ? 'text-orange-700 bg-orange-100'
                    : 'text-blue-700 bg-blue-100'
                }`}>
                  {step.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20comenzar%20mi%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Comenzar mi proyecto
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
