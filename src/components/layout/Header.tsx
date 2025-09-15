import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlowelClaro from '../../assets/GlowelClaro.svg';
import GlowelOscuro from '../../assets/GlowelOscuro.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: 'https://wa.me/522223281100?text=Hola,%20me%20interesa%20contactar%20con%20ustedes' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-28 lg:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-44 h-14 lg:w-52 lg:h-16 flex items-center justify-center -mt-3 lg:-mt-3">
              <img 
                src={isScrolled ? GlowelOscuro : GlowelClaro} 
                alt="Glowel Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20pedir%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Pedir presupuesto
            </a>
          </div>

        </div>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-md transition-colors ${
            isScrolled ? 'text-slate-700' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/522223281100?text=Hola,%20me%20interesa%20pedir%20un%20presupuesto"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
