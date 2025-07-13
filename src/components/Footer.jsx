import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    const socialLinks = [
        {
            name: 'Email',
            url: 'mailto:abelaiboud6@gmail.com',
            icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z',
            color: '#ea4335'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/ahmedbelaiboud24',
            icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/ahmed-belaiboud-a81854278',
            icon: 'M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z',
            color: '#0077b5'
        }
    ];

    return (
        <footer style={{
            background: 'linear-gradient(135deg, rgba(24, 28, 31, 0.95) 0%, rgba(13, 17, 23, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(97, 218, 251, 0.1)',
            color: '#fff',
            marginTop: '80px',
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
                background: 'radial-gradient(circle at 20% 50%, rgba(97, 218, 251, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)',
                pointerEvents: 'none'
            }}></div>

            <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>


                {/* Main Footer Content */}
                <div className="row justify-content-center text-center mb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-auto">
                        <h2 style={{
                            background: 'linear-gradient(135deg, #61dafb 0%, #3b82f6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700,
                            fontSize: '2.5rem',
                            marginBottom: '10px'
                        }}>
                            Ahmed Belaiboud
                        </h2>
                        <p style={{ color: '#b0b0b0', fontSize: '1.1rem', marginBottom: '30px' }}>
                            Développeur Frontend passionné par l'innovation
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="d-flex justify-content-center align-items-center gap-4 mb-5" data-aos="fade-up" data-aos-delay="400">
                    {socialLinks.map((social, index) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(97, 218, 251, 0.2)',
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-5px) scale(1.1)';
                                e.target.style.borderColor = social.color;
                                e.target.style.boxShadow = `0 15px 35px ${social.color}30`;
                                e.target.style.background = `${social.color}15`;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0) scale(1)';
                                e.target.style.borderColor = 'rgba(97, 218, 251, 0.2)';
                                e.target.style.boxShadow = 'none';
                                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        >
                            <svg width="24" height="24" fill={social.color} viewBox="0 0 24 24">
                                <path d={social.icon} />
                            </svg>
                        </a>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="row justify-content-center mb-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="col-auto">
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Contact'].map((link, index) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace('à ', '').replace(' ', '')}`}
                                    style={{
                                        color: '#b0b0b0',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        padding: '8px 16px',
                                        borderRadius: '20px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#61dafb';
                                        e.target.style.background = 'rgba(97, 218, 251, 0.1)';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#b0b0b0';
                                        e.target.style.background = 'transparent';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-4" data-aos="fade-up" data-aos-delay="800" style={{
                    borderTop: '1px solid rgba(97, 218, 251, 0.1)',
                    marginTop: '40px'
                }}>
                    <p style={{
                        color: '#888',
                        fontSize: '0.9rem',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        flexWrap: 'wrap'
                    }}>
                        <span>&copy; {new Date().getFullYear()} Ahmed Belaiboud.</span>
                        <span style={{ color: '#61dafb' }}>•</span>
                        <span>Conçu avec</span>
                        <i className="bi bi-heart-fill" style={{ color: '#e74c3c', fontSize: '0.8rem' }}></i>
                        <span>et développé avec</span>
                        <i className="bi bi-code-slash" style={{ color: '#61dafb', fontSize: '0.9rem' }}></i>
                        <span>par Ahmed Belaiboud</span>
                    </p>
                </div>
            </div>

            {/* Floating Elements */}
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
            }}></div>
            
            <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                width: '60px',
                height: '60px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse'
            }}></div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                .form-control::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }
                
                .social-link::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    transition: left 0.5s;
                }
                
                .social-link:hover::before {
                    left: 100%;
                }
            `}</style>
        </footer>
    );
}

export default Footer;