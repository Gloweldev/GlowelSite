import { useState, useEffect } from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Process from './sections/Process';
import Guarantees from './sections/Guarantees';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import WhatsAppFloat from './common/WhatsAppFloat';
import Blog from './blog/Blog';
import BlogPost from './blog/BlogPost';
import BlogPost1 from './blog/BlogPost1';
import BlogPost2 from './blog/BlogPost2';
import BlogPost3 from './blog/BlogPost3';
import BlogPost4 from './blog/BlogPost4';
import SEOHead from './common/SEOHead';
import PerformanceOptimizer from './common/PerformanceOptimizer';
import Analytics from './common/Analytics';
import { SEOInternalLinks } from './common/InternalLinking';
import { seoConfigs } from '../data/seo-config';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';
import { useErrorHandler } from '../hooks/useErrorHandler';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Manejo de errores del servidor
  useErrorHandler({
    onServerError: () => setCurrentPage('server-error'),
    onNetworkError: () => {
      // Mostrar notificación de error de red
      console.warn('Error de red detectado');
    }
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path === '/blog/5-razones-clave-invertir-pagina-web-profesional') {
        setCurrentPage('blog-post-1');
      } else if (path === '/blog/5-errores-comunes-diseno-ecommerce-evitar') {
        setCurrentPage('blog-post-2');
      } else if (path === '/blog/optimizacion-seo-guia-completa-principiantes') {
        setCurrentPage('blog-post-3');
      } else if (path === '/blog/tendencias-marketing-digital-2025-claves-no-quedarse-atras') {
        setCurrentPage('blog-post-4');
      } else if (path.startsWith('/blog/')) {
        setCurrentPage('blogPost');
      } else if (path === '/500') {
        setCurrentPage('server-error');
      } else if (path === '/' || path === '') {
        setCurrentPage('home');
      } else {
        // Ruta no encontrada - mostrar página 404
        setCurrentPage('not-found');
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange(); // Check initial route

    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    const pathname = window.location.pathname;
    if (pathname === '/blog') {
      setCurrentPage('blog');
    } else if (pathname === '/blog/5-razones-clave-invertir-pagina-web-profesional') {
      setCurrentPage('blog-post-1');
    } else if (pathname === '/blog/5-errores-comunes-diseno-ecommerce-evitar') {
      setCurrentPage('blog-post-2');
    } else if (pathname === '/blog/optimizacion-seo-guia-completa-principiantes') {
      setCurrentPage('blog-post-3');
    } else if (pathname === '/blog/tendencias-marketing-digital-2025-claves-no-quedarse-atras') {
      setCurrentPage('blog-post-4');
    } else if (pathname.startsWith('/blog/')) {
      setCurrentPage('blogPost');
    } else if (pathname === '/500') {
      setCurrentPage('server-error');
    } else if (pathname === '/' || pathname === '') {
      setCurrentPage('home');
    } else {
      // Ruta no encontrada - mostrar página 404
      setCurrentPage('not-found');
    }
  };

  // Override default link behavior for internal navigation
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          navigateTo(href);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  if (currentPage === 'blog') {
    const config = seoConfigs.blog;
    return (
      <>
        <SEOHead {...config} />
        <PerformanceOptimizer />
        <Analytics />
        <SEOInternalLinks />
        <Blog />
      </>
    );
  }

  if (currentPage === 'blog-post-1') {
    const config = seoConfigs['blog-post-1'];
    return (
      <>
        <SEOHead {...config} />
        <PerformanceOptimizer />
        <Analytics />
        <SEOInternalLinks />
        <BlogPost1 />
      </>
    );
  }

  if (currentPage === 'blog-post-2') {
    const config = seoConfigs['blog-post-2'];
    return (
      <>
        <SEOHead {...config} />
        <PerformanceOptimizer />
        <Analytics />
        <SEOInternalLinks />
        <BlogPost2 />
      </>
    );
  }

  if (currentPage === 'blog-post-3') {
    const config = seoConfigs['blog-post-3'];
    return (
      <>
        <SEOHead {...config} />
        <PerformanceOptimizer />
        <Analytics />
        <SEOInternalLinks />
        <BlogPost3 />
      </>
    );
  }

  if (currentPage === 'blog-post-4') {
    const config = seoConfigs['blog-post-4'];
    return (
      <>
        <SEOHead {...config} />
        <PerformanceOptimizer />
        <Analytics />
        <SEOInternalLinks />
        <BlogPost4 />
      </>
    );
  }

  if (currentPage === 'blogPost') {
    return <BlogPost />;
  }

  // Página 404 para rutas no encontradas
  if (currentPage === 'not-found') {
    const config = seoConfigs['not-found'];
    return (
      <>
        <SEOHead {...config} />
        <NotFound />
      </>
    );
  }

  // Página 500 para errores del servidor
  if (currentPage === 'server-error') {
    const config = seoConfigs['server-error'];
    return (
      <>
        <SEOHead {...config} />
        <ServerError />
      </>
    );
  }

  const config = seoConfigs.home;
  return (
    <div className="min-h-screen">
      <SEOHead {...config} />
      <PerformanceOptimizer />
      <Analytics />
      <SEOInternalLinks />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Guarantees />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AppRouter;
