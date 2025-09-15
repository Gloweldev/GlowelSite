import { useEffect } from 'react';

interface InternalLink {
  href: string;
  text: string;
  title: string;
}

const SEOInternalLinks = () => {
  useEffect(() => {
    // Definir enlaces internos estratégicos
    const internalLinks: InternalLink[] = [
      {
        href: '/blog/5-razones-clave-invertir-pagina-web-profesional',
        text: '5 razones clave para invertir en una página web profesional',
        title: 'Descubre por qué tu negocio necesita una página web profesional'
      },
      {
        href: '/blog/5-errores-comunes-diseno-ecommerce-evitar',
        text: '5 errores comunes en el diseño de sitios e-commerce',
        title: 'Evita estos errores comunes en tu tienda online'
      },
      {
        href: '/blog/optimizacion-seo-guia-completa-principiantes',
        text: 'optimización SEO para principiantes',
        title: 'Guía completa de SEO para mejorar tu posicionamiento'
      },
      {
        href: '/blog/tendencias-marketing-digital-2025-claves-no-quedarse-atras',
        text: 'tendencias de marketing digital 2025',
        title: 'Las tendencias más importantes del marketing digital para 2025'
      }
    ];
    
    // Agregar enlaces internos contextuales
    const addContextualLinks = () => {
      const contentSections = document.querySelectorAll('section, article, .prose');
      
      contentSections.forEach(section => {
        const text = section.textContent || '';
        
        // Buscar palabras clave y agregar enlaces
        internalLinks.forEach(link => {
          const keywords = link.text.split(' ');
          const firstKeyword = keywords[0];
          
          if (text.toLowerCase().includes(firstKeyword.toLowerCase())) {
            const regex = new RegExp(`\\b${firstKeyword}\\b`, 'gi');
            const newText = text.replace(regex, `<a href="${link.href}" title="${link.title}" class="text-blue-600 hover:text-blue-800 underline">${firstKeyword}</a>`);
            
            if (newText !== text) {
              section.innerHTML = newText;
            }
          }
        });
      });
    };
    
    // Optimizar enlaces existentes
    const optimizeExistingLinks = () => {
      const links = document.querySelectorAll('a[href]');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Agregar atributos SEO a enlaces internos
        if (href && href.startsWith('/')) {
          link.setAttribute('rel', 'internal');
          
          // Agregar title si no existe
          if (!link.getAttribute('title')) {
            const text = link.textContent || '';
            link.setAttribute('title', text);
          }
        }
        
        // Agregar atributos a enlaces externos
        if (href && (href.startsWith('http') || href.startsWith('https'))) {
          link.setAttribute('rel', 'external noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    };
    
    // Agregar breadcrumbs para mejor navegación
    const addBreadcrumbs = () => {
      const currentPath = window.location.pathname;
      
      if (currentPath !== '/' && currentPath !== '/blog') {
        const breadcrumbContainer = document.createElement('nav');
        breadcrumbContainer.setAttribute('aria-label', 'Breadcrumb');
        breadcrumbContainer.className = 'breadcrumb bg-gray-100 px-4 py-2 text-sm';
        
        const breadcrumbList = document.createElement('ol');
        breadcrumbList.className = 'flex space-x-2';
        
        // Home
        const homeItem = document.createElement('li');
        homeItem.innerHTML = '<a href="/" class="text-blue-600 hover:text-blue-800">Inicio</a>';
        breadcrumbList.appendChild(homeItem);
        
        // Blog section
        if (currentPath.startsWith('/blog')) {
          const blogItem = document.createElement('li');
          blogItem.innerHTML = '<span class="text-gray-500">/</span> <a href="/blog" class="text-blue-600 hover:text-blue-800">Blog</a>';
          breadcrumbList.appendChild(blogItem);
        }
        
        // Current page
        const currentItem = document.createElement('li');
        currentItem.innerHTML = '<span class="text-gray-500">/</span> <span class="text-gray-700">' + document.title + '</span>';
        breadcrumbList.appendChild(currentItem);
        
        breadcrumbContainer.appendChild(breadcrumbList);
        
        // Insertar breadcrumbs al inicio del contenido
        const mainContent = document.querySelector('main') || document.querySelector('.container');
        if (mainContent) {
          mainContent.insertBefore(breadcrumbContainer, mainContent.firstChild);
        }
      }
    };
    
    // Ejecutar optimizaciones
    addContextualLinks();
    optimizeExistingLinks();
    addBreadcrumbs();
    
  }, []);
  
  return null;
};

export { SEOInternalLinks };
