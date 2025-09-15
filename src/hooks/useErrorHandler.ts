import { useEffect } from 'react';

interface ErrorHandlerProps {
  onServerError?: () => void;
  onNetworkError?: () => void;
}

export const useErrorHandler = ({ onServerError, onNetworkError }: ErrorHandlerProps = {}) => {
  useEffect(() => {
    // Manejar errores de fetch/API
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        // Si es un error 500, redirigir a la página de error
        if (response.status === 500) {
          if (onServerError) {
            onServerError();
          } else {
            // Redirigir a la página de error 500
            window.history.pushState({}, '', '/500');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }
        }
        
        return response;
      } catch (error) {
        // Manejar errores de red
        if (onNetworkError) {
          onNetworkError();
        }
        throw error;
      }
    };

    // Manejar errores de JavaScript no capturados
    const handleError = (event: ErrorEvent) => {
      console.error('Error no capturado:', event.error);
      
      // Si es un error crítico, mostrar página de error
      if (event.error?.message?.includes('ChunkLoadError') || 
          event.error?.message?.includes('Loading chunk')) {
        // Error de carga de chunks - recargar página
        window.location.reload();
      }
    };

    // Manejar promesas rechazadas
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Promesa rechazada:', event.reason);
      
      // Si es un error de servidor, redirigir
      if (event.reason?.status === 500) {
        window.history.pushState({}, '', '/500');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup
    return () => {
      window.fetch = originalFetch;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onServerError, onNetworkError]);
};

export default useErrorHandler;
