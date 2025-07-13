import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAIL_CONFIG = {
    SERVICE_ID: 'service_mcziqvj', // À remplacer par votre Service ID
    TEMPLATE_ID: 'template_jbiosxi', // À remplacer par votre Template ID  
    PUBLIC_KEY: 'QjiQx6D6M8bbsr4gw'    // À remplacer par votre Public Key
};

/**
 * Envoie un email via EmailJS
 * @param {Object} formData - Données du formulaire
 * @returns {Promise} - Promesse de l'envoi
 */
export const sendContactEmail = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Ahmed Belaiboud',
            to_email: 'ahmedbelaiboud21@gmail.com', // Votre adresse email
            reply_to: formData.email,
            // Informations supplémentaires
            sent_date: new Date().toLocaleDateString('fr-FR'),
            sent_time: new Date().toLocaleTimeString('fr-FR'),
            user_agent: navigator.userAgent,
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
            error
        };
    }
};

/**
 * Initialise EmailJS
 */
export const initEmailJS = () => {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};
