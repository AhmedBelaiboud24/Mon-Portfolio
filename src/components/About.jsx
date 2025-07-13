import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import SlideForm from './SlideForm';
import photo from '../assets/Photo-perso.png';

function About() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skills = [
        { name: 'React', icon: 'bi-code-slash', color: '#61DAFB' },
        { name: 'JavaScript', icon: 'bi-braces', color: '#F7DF1E' },
        { name: 'WordPress', icon: 'bi-wordpress', color: '#21759B' },
        { name: 'Figma', icon: 'bi-palette', color: '#F24E1E' }
    ];

    return (
        <>
            {/* Section Hero */}
            <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
                {/* Gradient overlay */}
                <div 
                    className="position-absolute w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                        zIndex: 1
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <div className="row align-items-center min-vh-100 py-5">
                        {/* Contenu principal */}
                        <div className="col-lg-6 col-md-12 mb-5 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
                            <div className="text-center text-lg-start">
                                {/* Badge de statut */}
                                <div className="d-inline-flex align-items-center glass-card px-4 py-2 mb-4">
                                    <div 
                                        className="rounded-circle me-2"
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            background: '#00ff88',
                                            boxShadow: '0 0 10px #00ff88',
                                            animation: 'pulse 2s infinite'
                                        }}
                                    ></div>
                                    <span className="text-light fw-medium" style={{ fontSize: '0.9rem' }}>
                                        Disponible pour de nouveaux projets
                                    </span>
                                </div>

                                {/* Titre principal */}
                                <h1 className="display-2 fw-bold mb-4">
                                    <span className="text-light">Salut, je suis</span><br/>
                                    <span className="gradient-text" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        Ahmed Belaiboud
                                    </span>
                                </h1>

                                {/* Typewriter */}
                                <div className="mb-4" style={{ minHeight: '100px' }}>
                                    <h2 className="h1 fw-bold">
                                        <span className="gradient-text-accent">
                                            <Typewriter
                                                words={[
                                                    "Développeur Frontend",
                                                    "Développeur WordPress",
                                                    "Créateur d'expériences web",
                                                    "Passionné de code"
                                                ]}
                                                loop={0}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={80}
                                                deleteSpeed={50}
                                                delaySpeed={2000}
                                            />
                                        </span>
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="lead mb-5" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                    Je transforme vos idées en <span className="gradient-text fw-semibold">expériences digitales exceptionnelles</span>. 
                                    Spécialisé dans le développement frontend moderne et WordPress, 
                                    je crée des solutions web performantes et esthétiques.
                                </p>

                                {/* Statistiques */}
                                <div className="row mb-5 text-center text-lg-start">
                                    <div className="col-4">
                                        <div className="gradient-text display-6 fw-bold">10+</div>
                                        <small className="text-muted">Projets réalisés</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="gradient-text-secondary display-6 fw-bold">2+</div>
                                        <small className="text-muted">Années d'expérience</small>
                                    </div>
                                    <div className="col-4">
                                        <div className="gradient-text-accent display-6 fw-bold">10+</div>
                                        <small className="text-muted">Diplômes & Certifications</small>
                                    </div>
                                </div>

                                {/* Boutons d'action */}
                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                    <button 
                                        className="btn btn-modern btn-primary-modern"
                                        onClick={toggleFormVisibility}
                                    >
                                        <i className="bi bi-rocket-takeoff me-2"></i>
                                        Démarrer un projet
                                    </button>
                                    <a 
                                        className="btn btn-modern btn-outline-modern"
                                        href="/Cv.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-download me-2"></i>
                                        Télécharger CV
                                    </a>
                                </div>

                                {/* Réseaux sociaux */}
                                <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
                                    {[
                                        { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/ahmed-belaiboud-a81854278/', color: '#0077B5' },
                                        {icon: 'bi-github', href: 'https://github.com/ahmedbelaiboud24', color: '#333' },
                                        { icon: 'bi-envelope', href: '#contact', color: '#EA4335' }
                                    ].map((social, index) => (
                                        <a 
                                            key={index}
                                            href={social.href}
                                            className="d-flex align-items-center justify-content-center rounded-circle"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'var(--glass-bg)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid var(--glass-border)',
                                                color: 'var(--text-secondary)',
                                                transition: 'all 0.3s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = social.color;
                                                e.target.style.color = 'white';
                                                e.target.style.transform = 'translateY(-5px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = 'var(--glass-bg)';
                                                e.target.style.color = 'var(--text-secondary)';
                                                e.target.style.transform = 'translateY(0)';
                                            }}
                                        >
                                            <i className={`${social.icon} fs-5`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Section image */}
                        <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                            <div className="text-center position-relative">
                                {/* Cercles animés */}
                                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 0 }}>
                                    <div 
                                        className="rounded-circle"
                                        style={{
                                            width: '400px',
                                            height: '400px',
                                            border: '2px solid rgba(59, 130, 246, 0.2)',
                                            animation: 'spin 20s linear infinite'
                                        }}
                                    ></div>
                                    <div 
                                        className="rounded-circle position-absolute top-50 start-50 translate-middle"
                                        style={{
                                            width: '350px',
                                            height: '350px',
                                            border: '2px dashed rgba(59, 130, 246, 0.3)',
                                            animation: 'spin 15s linear infinite reverse'
                                        }}
                                    ></div>
                                </div>
                                
                                {/* Image de profil */}
                                <div className="position-relative" style={{ zIndex: 2 }}>
                                    <div 
                                        className="rounded-circle mx-auto glass-card p-3"
                                        style={{
                                            width: '320px',
                                            height: '320px',
                                            background: 'var(--primary-gradient)',
                                            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)'
                                        }}
                                    >
                                        <img 
                                            src={photo} 
                                            alt="Ahmed Belaiboud" 
                                            className="img-fluid rounded-circle w-100 h-100"
                                            style={{ 
                                                objectFit: 'cover',
                                                border: '4px solid rgba(255,255,255,0.1)'
                                            }} 
                                        />
                                    </div>
                                </div>
                                
                                {/* Éléments flottants avec compétences */}
                                {skills.map((skill, index) => {
                                    const positions = [
                                        { top: '15%', right: '15%' },
                                        { top: '25%', left: '10%' },
                                        { bottom: '25%', right: '10%' },
                                        { bottom: '15%', left: '15%' }
                                    ];
                                    
                                    return (
                                        <div 
                                            key={index}
                                            className="position-absolute glass-card p-3 rounded-3"
                                            style={{
                                                ...positions[index],
                                                animation: `float 3s ease-in-out infinite ${index * 0.5}s`,
                                                zIndex: 3
                                            }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <i 
                                                    className={`${skill.icon} fs-4 me-2`}
                                                    style={{ color: skill.color }}
                                                ></i>
                                                <span className="text-light fw-medium small">{skill.name}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section À propos détaillée */}
            <section id="about-detailed" className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
                            <h2 className="display-4 fw-bold mb-4">
                                À propos de <span className="gradient-text">moi</span>
                            </h2>
                            <p className="lead mb-5" style={{ color: 'var(--text-secondary)' }}>
                                Passionné par le développement web depuis plus de 3 ans, je me spécialise dans la création 
                                d'expériences utilisateur exceptionnelles et de solutions techniques innovantes.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {[
                            {
                                icon: 'bi-code-slash',
                                title: 'Développement Frontend',
                                description: 'Création d\'interfaces modernes et responsives avec React, Next.js et les dernières technologies web.',
                                gradient: 'var(--primary-gradient)'
                            },
                            {
                                icon: 'bi-wordpress',
                                title: 'Développement WordPress',
                                description: 'Création de sites web professionnels avec WordPress, personnalisation et optimisation pour une performance maximale.',
                                gradient: 'var(--secondary-gradient)'
                            },
                            {
                                icon: 'bi-palette',
                                title: 'UI/UX Design',
                                description: 'Conception d\'interfaces utilisateur intuitives et esthétiques, centrées sur l\'expérience utilisateur.',
                                gradient: 'var(--accent-gradient)'
                            }
                        ].map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="glass-card p-4 h-100 text-center">
                                    <div 
                                        className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            background: service.gradient
                                        }}
                                    >
                                        <i className={`${service.icon} fs-2 text-white`}></i>
                                    </div>
                                    <h4 className="fw-bold mb-3 text-light">{service.title}</h4>
                                    <p className="text-muted mb-0">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <SlideForm isVisible={isFormVisible} onClose={handleCloseForm} />
            
            <style>{`
                @keyframes spin {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </>
    );
}

export default About;
