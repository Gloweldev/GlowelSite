import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ¡Escríbenos por WhatsApp!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;
