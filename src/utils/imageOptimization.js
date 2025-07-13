/**
 * Utilitaires d'optimisation des images
 */

// Lazy loading des images avec Intersection Observer
export const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback pour les navigateurs non compatibles
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
};

// Préchargement des images critiques
export const preloadCriticalImages = (imageUrls) => {
    imageUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
    });
};

// Optimisation responsive des images
export const getOptimizedImageSrc = (baseSrc, width = 800) => {
    // Pour une future implémentation avec un service d'optimisation d'images
    // comme Cloudinary ou ImageKit
    return baseSrc;
};

// Compression d'images côté client (pour les uploads futurs)
export const compressImage = (file, maxWidth = 1920, quality = 0.8) => {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
            const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            canvas.toBlob(resolve, 'image/jpeg', quality);
        };
        
        img.src = URL.createObjectURL(file);
    });
};
