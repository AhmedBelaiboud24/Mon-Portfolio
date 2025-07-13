// Lazy loading d'EmailJS
let emailjs = null;
let isInitialized = false;

// Configuration EmailJS
const EMAIL_CONFIG = {
    SERVICE_ID: 'service_mcziqvj',
    TEMPLATE_ID: 'template_jbiosxi',
    PUBLIC_KEY: 'QjiQx6D6M8bbsr4gw'
};

/**
 * Initialise EmailJS avec lazy loading
 * @returns {Promise} EmailJS instance
 */
export const initEmailJS = async () => {
    if (!isInitialized) {
        try {
            // Import dynamique d'EmailJS pour optimiser le bundle
            const emailjsModule = await import('@emailjs/browser');
            emailjs = emailjsModule.default;
            emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
            isInitialized = true;
        } catch (error) {
            console.error('Erreur lors du chargement d\'EmailJS:', error);
            throw error;
        }
    }
    return emailjs;
};

/**
 * Envoie un email via EmailJS avec optimisations
 * @param {Object} formData - Données du formulaire
 * @returns {Promise} - Promesse de l'envoi
 */
export const sendContactEmail = async (formData) => {
    try {
        // S'assurer qu'EmailJS est initialisé
        await initEmailJS();
        
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Ahmed Belaiboud',
            to_email: 'ahmedbelaiboud21@gmail.com',
            reply_to: formData.email,
            // Informations supplémentaires optimisées
            sent_date: new Date().toLocaleDateString('fr-FR'),
            sent_time: new Date().toLocaleTimeString('fr-FR'),
            user_agent: navigator.userAgent.substring(0, 100), // Limiter la taille
            page_url: window.location.href
        };

        const response = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAIL_CONFIG.PUBLIC_KEY
        );

        return {
            success: true,
            message: 'Email envoyé avec succès !',
            response
        };
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return {
            success: false,
            message: 'Erreur lors de l\'envoi. Veuillez réessayer.',
            error: error.message || 'Erreur inconnue'
        };
    }
};
