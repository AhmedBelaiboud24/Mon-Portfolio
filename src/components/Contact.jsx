import React, { useState, useCallback } from "react";
import { sendContactEmail } from '../services/emailService';
import { useAOS } from '../hooks/useAOS';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

    // Initialisation optimisée d'AOS
    useAOS({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Le nom doit contenir au moins 2 caractères';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Le sujet est requis';
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Le sujet doit contenir au moins 3 caractères';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // Utilisation d'EmailJS avec les clés configurées
            const result = await sendContactEmail(formData);
            
            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
                console.error('Erreur EmailJS:', result.error);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Erreur lors de l\'envoi:', error);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const contactInfo = [
        {
            icon: 'bi-envelope-fill',
            title: 'Email',
            value: 'abelaiboud6@gmail.com',
            link: 'mailto:abelaiboud6@gmail.com',
            color: '#ea4335'
        },
        {
            icon: 'bi-geo-alt-fill',
            title: 'Localisation',
            value: 'Tizi-Ouzou, Algeria',
            link: null,
            color: '#4285f4'
        },
        {
            icon: 'bi-telephone-fill',
            title: 'Téléphone',
            value: '+213 549 399 779',
            link: 'tel:+213549399779',
            color: '#34a853'
        }
    ];

    return (
        <div className="container-fluid py-5" id="contact" style={{
            background: 'transparent',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(97, 218, 251, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div className="row justify-content-center mb-5" data-aos="fade-up">
                    <div className="col-lg-8 text-center">
                        <div style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(97, 218, 251, 0.2)',
                            borderRadius: '50px',
                            padding: '8px 24px',
                            marginBottom: '20px'
                        }}>
                            <span style={{
                                background: 'linear-gradient(135deg, #61dafb 0%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 600,
                                fontSize: '1rem'
                            }}>
                                <i className="bi bi-chat-dots me-2"></i>
                                Contact
                            </span>
                        </div>
                        <h2 style={{
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            marginBottom: '20px',
                            lineHeight: 1.2
                        }}>
                            Vous avez un projet ?
                            <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #61dafb 0%, #3b82f6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Parlons-en !
                            </span>
                        </h2>
                        <p style={{
                            color: '#b0b0b0',
                            fontSize: '1.2rem',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Je suis toujours ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center align-items-start g-5">
                    {/* Contact Info */}
                    <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
                        <div className="mb-5">
                            <h3 style={{
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '1.8rem',
                                marginBottom: '30px'
                            }}>
                                Informations de Contact
                            </h3>
                            
                            <div className="d-flex flex-column gap-4">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={info.title}
                                        className="contact-info-item"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(97, 218, 251, 0.1)',
                                            borderRadius: '20px',
                                            padding: '25px',
                                            transition: 'all 0.3s ease',
                                            cursor: info.link ? 'pointer' : 'default'
                                        }}
                                        onClick={() => info.link && window.open(info.link, '_blank')}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'translateY(-5px)';
                                            e.target.style.borderColor = info.color + '50';
                                            e.target.style.boxShadow = `0 15px 35px ${info.color}20`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.borderColor = 'rgba(97, 218, 251, 0.1)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: `${info.color}20`,
                                                borderRadius: '15px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '20px'
                                            }}>
                                                <i className={info.icon} style={{
                                                    fontSize: '1.5rem',
                                                    color: info.color
                                                }}></i>
                                            </div>
                                            <div>
                                                <h5 style={{
                                                    color: '#fff',
                                                    fontWeight: 600,
                                                    fontSize: '1.1rem',
                                                    marginBottom: '5px'
                                                }}>
                                                    {info.title}
                                                </h5>
                                                <p style={{
                                                    color: '#b0b0b0',
                                                    fontSize: '1rem',
                                                    margin: 0
                                                }}>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7" data-aos="fade-left" data-aos-delay="400">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(97, 218, 251, 0.1)',
                            borderRadius: '25px',
                            padding: '40px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Form Background Effect */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)',
                                pointerEvents: 'none'
                            }}></div>

                            <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
                                <h3 style={{
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: '1.8rem',
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}>
                                    Envoyez-moi un message
                                </h3>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label" style={{
                                            color: '#fff',
                                            fontWeight: 500,
                                            marginBottom: '8px'
                                        }}>
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Votre nom"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: `1px solid ${errors.name ? '#dc3545' : 'rgba(97, 218, 251, 0.2)'}`,
                                                borderRadius: '15px',
                                                padding: '15px 20px',
                                                color: '#fff',
                                                fontSize: '1rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onFocus={(e) => {
                                                if (!errors.name) {
                                                    e.target.style.borderColor = '#61dafb';
                                                    e.target.style.boxShadow = '0 0 20px rgba(97, 218, 251, 0.2)';
                                                }
                                            }}
                                            onBlur={(e) => {
                                                if (!errors.name) {
                                                    e.target.style.borderColor = 'rgba(97, 218, 251, 0.2)';
                                                    e.target.style.boxShadow = 'none';
                                                }
                                            }}
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label" style={{
                                            color: '#fff',
                                            fontWeight: 500,
                                            marginBottom: '8px'
                                        }}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="votre@email.com"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: `1px solid ${errors.email ? '#dc3545' : 'rgba(97, 218, 251, 0.2)'}`,
                                                borderRadius: '15px',
                                                padding: '15px 20px',
                                                color: '#fff',
                                                fontSize: '1rem',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onFocus={(e) => {
                                                if (!errors.email) {
                                                    e.target.style.borderColor = '#61dafb';
                                                    e.target.style.boxShadow = '0 0 20px rgba(97, 218, 251, 0.2)';
                                                }
                                            }}
                                            onBlur={(e) => {
                                                if (!errors.email) {
                                                    e.target.style.borderColor = 'rgba(97, 218, 251, 0.2)';
                                                    e.target.style.boxShadow = 'none';
                                                }
                                            }}
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="subject" className="form-label" style={{
                                        color: '#fff',
                                        fontWeight: 500,
                                        marginBottom: '8px'
                                    }}>
                                        Sujet *
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Objet de votre message"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: `1px solid ${errors.subject ? '#dc3545' : 'rgba(97, 218, 251, 0.2)'}`,
                                            borderRadius: '15px',
                                            padding: '15px 20px',
                                            color: '#fff',
                                            fontSize: '1rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onFocus={(e) => {
                                            if (!errors.subject) {
                                                e.target.style.borderColor = '#61dafb';
                                                e.target.style.boxShadow = '0 0 20px rgba(97, 218, 251, 0.2)';
                                            }
                                        }}
                                        onBlur={(e) => {
                                            if (!errors.subject) {
                                                e.target.style.borderColor = 'rgba(97, 218, 251, 0.2)';
                                                e.target.style.boxShadow = 'none';
                                            }
                                        }}
                                    />
                                    {errors.subject && (
                                        <div className="invalid-feedback" style={{ display: 'block' }}>
                                            {errors.subject}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label" style={{
                                        color: '#fff',
                                        fontWeight: 500,
                                        marginBottom: '8px'
                                    }}>
                                        Message *
                                    </label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        placeholder="Décrivez votre projet ou votre message..."
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: `1px solid ${errors.message ? '#dc3545' : 'rgba(97, 218, 251, 0.2)'}`,
                                            borderRadius: '15px',
                                            padding: '15px 20px',
                                            color: '#fff',
                                            fontSize: '1rem',
                                            resize: 'vertical',
                                            minHeight: '120px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onFocus={(e) => {
                                            if (!errors.message) {
                                                e.target.style.borderColor = '#61dafb';
                                                e.target.style.boxShadow = '0 0 20px rgba(97, 218, 251, 0.2)';
                                            }
                                        }}
                                        onBlur={(e) => {
                                            if (!errors.message) {
                                                e.target.style.borderColor = 'rgba(97, 218, 251, 0.2)';
                                                e.target.style.boxShadow = 'none';
                                            }
                                        }}
                                    ></textarea>
                                    {errors.message && (
                                        <div className="invalid-feedback" style={{ display: 'block' }}>
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn"
                                        style={{
                                            background: isSubmitting 
                                                ? 'rgba(97, 218, 251, 0.5)' 
                                                : submitStatus === 'success' 
                                                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                                                    : 'linear-gradient(135deg, #61dafb 0%, #3b82f6 100%)',
                                            border: 'none',
                                            borderRadius: '50px',
                                            padding: '15px 40px',
                                            color: '#fff',
                                            fontWeight: 600,
                                            fontSize: '1.1rem',
                                            transition: 'all 0.3s ease',
                                            transform: 'scale(1)',
                                            minWidth: '160px',
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isSubmitting && submitStatus !== 'success') {
                                                e.target.style.transform = 'scale(1.05)';
                                                e.target.style.boxShadow = '0 15px 35px rgba(97, 218, 251, 0.3)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="spinner-border spinner-border-sm me-2" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                Envoi...
                                            </>
                                        ) : submitStatus === 'success' ? (
                                            <>
                                                <i className="bi bi-check-circle me-2"></i>
                                                Message envoyé !
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-send me-2"></i>
                                                Envoyer le message
                                            </>
                                        )}
                                    </button>
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="alert alert-danger mt-3" style={{
                                        background: 'rgba(220, 53, 69, 0.1)',
                                        border: '1px solid rgba(220, 53, 69, 0.3)',
                                        borderRadius: '15px',
                                        color: '#ff6b6b'
                                    }}>
                                        <i className="bi bi-exclamation-triangle me-2"></i>
                                        Une erreur s'est produite. Veuillez réessayer.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '5%',
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
            }}></div>
            
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '8%',
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 10s ease-in-out infinite reverse'
            }}></div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(180deg); }
                }
                
                .form-control::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }
                
                .contact-info-item {
                    position: relative;
                    overflow: hidden;
                }
                
                .contact-info-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
                    transition: left 0.5s;
                }
                
                .contact-info-item:hover::before {
                    left: 100%;
                }
            `}</style>
        </div>
    );
}

export default Contact;
