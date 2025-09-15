import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      
      // Preload critical images
      const logoPreload = document.createElement('link');
      logoPreload.rel = 'preload';
      logoPreload.href = '/src/assets/GlowelClaro.svg';
      logoPreload.as = 'image';
      document.head.appendChild(logoPreload);
    };
    
    // Lazy load images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    };
    
    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Add scroll optimization logic here
        ticking = false;
      };
      
      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };
      
      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };
    
    // Initialize optimizations
    preloadCriticalResources();
    lazyLoadImages();
    const cleanupScroll = optimizeScroll();
    
    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);
  
  return null;
};

export default PerformanceOptimizer;
