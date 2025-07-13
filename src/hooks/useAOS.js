import { useEffect } from 'react';

// Cache pour AOS
let AOS = null;
let isAOSLoaded = false;
let loadingPromise = null;

/**
 * Hook personnalisé pour charger et initialiser AOS de manière optimisée
 * @param {Object} options - Options de configuration AOS
 * @returns {boolean} - État de chargement d'AOS
 */
export const useAOS = (options = {}) => {
    const defaultOptions = {
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 0,
        ...options
    };

    useEffect(() => {
        const initializeAOS = async () => {
            try {
                // Éviter les chargements multiples simultanés
                if (loadingPromise) {
                    await loadingPromise;
                    return;
                }

                if (!isAOSLoaded) {
                    loadingPromise = Promise.all([
                        import('aos'),
                        import('aos/dist/aos.css')
                    ]);

                    const [aosModule] = await loadingPromise;
                    AOS = aosModule.default;
                    isAOSLoaded = true;
                    loadingPromise = null;
                }

                if (AOS) {
                    AOS.init(defaultOptions);
                    
                    // Rafraîchir AOS après le chargement des images
                    const refreshAOS = () => {
                        if (AOS) AOS.refresh();
                    };
                    
                    // Écouter les événements de chargement d'images
                    window.addEventListener('load', refreshAOS);
                    
                    return () => {
                        window.removeEventListener('load', refreshAOS);
                    };
                }
            } catch (error) {
                console.error('Erreur lors du chargement d\'AOS:', error);
                loadingPromise = null;
            }
        };

        initializeAOS();
    }, []);

    return isAOSLoaded;
};

/**
 * Hook pour rafraîchir AOS manuellement
 */
export const useAOSRefresh = () => {
    return () => {
        if (AOS && isAOSLoaded) {
            AOS.refresh();
        }
    };
};
