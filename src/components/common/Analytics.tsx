import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4
    const initGA4 = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);
      
      const gtagScript = document.createElement('script');
      gtagScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'custom_parameter_1': 'development_web_mexico',
            'custom_parameter_2': 'glowel_services'
          }
        });
      `;
      document.head.appendChild(gtagScript);
    };
    
    // Google Search Console
    const initGSC = () => {
      const metaTag = document.createElement('meta');
      metaTag.name = 'google-site-verification';
      metaTag.content = 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE';
      document.head.appendChild(metaTag);
    };
    
    // Facebook Pixel
    const initFacebookPixel = () => {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'FACEBOOK_PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
      
      const noscript = document.createElement('noscript');
      noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=FACEBOOK_PIXEL_ID&ev=PageView&noscript=1"/>';
      document.head.appendChild(noscript);
    };
    
    // Track page views
    const trackPageView = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
      
      if (typeof fbq !== 'undefined') {
        fbq('track', 'PageView');
      }
    };
    
    // Track WhatsApp clicks
    const trackWhatsAppClicks = () => {
      const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
      whatsappLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
              event_category: 'engagement',
              event_label: 'whatsapp_contact',
              value: 1
            });
          }
          
          if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact');
          }
        });
      });
    };
    
    // Initialize all tracking
    initGA4();
    initGSC();
    initFacebookPixel();
    trackPageView();
    trackWhatsAppClicks();
    
  }, []);
  
  return null;
};

// Declare global functions for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

export default Analytics;
