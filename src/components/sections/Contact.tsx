import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Contáctanos por WhatsApp para una respuesta rápida y personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-10 text-white shadow-2xl">
            <MessageCircle className="w-16 h-16 mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              ¡Hablemos por WhatsApp!
            </h3>
            <p className="text-green-100 mb-8 text-lg leading-relaxed">
              Chatea directamente con nosotros para una respuesta más rápida y personalizada. 
              Te ayudamos a definir tu proyecto y te damos un presupuesto sin compromiso.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20desarrollo%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Abrir WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-slate-800">Email</p>
                    <p className="text-slate-600">glowel.dev@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-slate-800">Teléfono</p>
                    <p className="text-slate-600">222 328 1100</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-slate-800">Ubicaciones</p>
                    <div className="text-slate-600 space-y-1">
                      <p>• Monterrey, Nuevo León</p>
                      <p>• Cholula, Puebla</p>
                      <p>• Orizaba, Veracruz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Respuesta rápida garantizada
              </h3>
              <p className="text-blue-100 mb-6">
                Te respondemos en menos de 2 horas durante horario laboral.
              </p>
              <a
                href="https://wa.me/522223281100?text=Hola,%20necesito%20una%20respuesta%20rápida%20sobre%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Mensaje rápido
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
