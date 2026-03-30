import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* WhatsApp CTA */}
          <div className="lg:col-span-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Hablemos de tu proyecto</h2>
                <p className="text-blue-200 text-sm">Respuesta en menos de 2 horas</p>
              </div>
            </div>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Cuéntanos qué problema quieres resolver. Evaluamos tu caso sin
              costo y te damos una propuesta técnica personalizada.
            </p>
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20agendar%20una%20consulta%20técnica%20para%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 hover:shadow-lg text-sm"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chatear en WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Contacto directo</h3>
            <div className="space-y-5">
              <a
                href="mailto:glowel.dev@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <p className="text-sm text-slate-500">glowel.dev@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+522223281100"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Teléfono</p>
                  <p className="text-sm text-slate-500">222 328 1100</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Ubicaciones</p>
                  <div className="text-sm text-slate-500 space-y-0.5 mt-1">
                    <p>Monterrey, N.L.</p>
                    <p>Cholula, Puebla</p>
                    <p>Orizaba, Veracruz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
