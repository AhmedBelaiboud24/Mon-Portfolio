import React, { useEffect } from "react";
import react from '../assets/web-development.png';

// Lazy loading d'AOS
let AOS = null;
let isAOSLoaded = false;

const loadAOS = async () => {
    if (!isAOSLoaded) {
        try {
            const aosModule = await import('aos');
            await import('aos/dist/aos.css');
            AOS = aosModule.default;
            isAOSLoaded = true;
        } catch (error) {
            console.error('Erreur lors du chargement d\'AOS:', error);
        }
    }
    return AOS;
};

function Formations() {
    const formations = [
        {
            title: "Licence Informatique - Systèmes Informatiques",
            institution: "Université Mouloud Maameri, Tizi-Ouzou, Algérie",
            period: "2025",
            description: "Diplôme universitaire en informatique spécialité Systèmes Informatiques, couvrant les fondamentaux théoriques et pratiques de l'informatique moderne.",
            skills: ["Systèmes Informatiques", "Algorithmique", "Programmation", "Réseaux", "Bases de Données", "Architecture"],
            icon: "bi-mortarboard",
            gradient: "var(--primary-gradient)",
            status: "Diplômé"
        },
        {
            title: "Fondations du Développement Web",
            institution: "OpenClassrooms",
            period: "2023",
            description: "Maîtrise des fondamentaux du développement web avec HTML5, CSS3 et les bases de la programmation backend avec PHP et MySQL.",
            skills: ["HTML5", "CSS3", "PHP", "MySQL"],
            icon: "bi-code-slash",
            gradient: "var(--secondary-gradient)",
            status: "Certifié"
        },
        {
            title: "JavaScript Developer",
            institution: "W3Schools",
            period: "2023",
            description: "Diplôme complet en développement JavaScript, maîtrise du langage et de ses applications modernes dans le développement web.",
            skills: ["JavaScript", "ES6+", "DOM Manipulation", "APIs"],
            icon: "bi-braces",
            gradient: "var(--accent-gradient)",
            status: "Diplômé"
        },
        {
            title: "Technologies Modernes & Frameworks",
            institution: "OpenClassrooms",
            period: "2024",
            description: "Formation avancée sur les technologies et frameworks modernes : WordPress, React, outils de design et gestion de versions.",
            skills: ["WordPress", "Sass", "Bootstrap", "React", "Figma", "Git & GitHub", "TypeScript"],
            icon: "bi-gear-wide-connected",
            gradient: "var(--primary-gradient)",
            status: "Certifié"
        }
    ];

    const certifications = [
        { name: "HTML & CSS", issuer: "OpenClassrooms", year: "2023", verified: true },
        { name: "PHP & MySQL", issuer: "OpenClassrooms", year: "2023", verified: true },
        { name: "JavaScript Developer", issuer: "W3Schools", year: "2023", verified: true },
        { name: "WordPress", issuer: "OpenClassrooms", year: "2024", verified: true },
        { name: "Sass", issuer: "OpenClassrooms", year: "2024", verified: true },
        { name: "Bootstrap", issuer: "OpenClassrooms", year: "2024", verified: true },
        { name: "React", issuer: "OpenClassrooms", year: "2024", verified: true },
        { name: "Figma", issuer: "OpenClassrooms", year: "2024", verified: true },
        { name: "Git & GitHub", issuer: "OpenClassrooms", year: "2024", verified: true },
        { name: "TypeScript", issuer: "OpenClassrooms", year: "2024", verified: true }
    ];

    useEffect(() => {
        // Chargement asynchrone d'AOS
        const initializeAOS = async () => {
            const aos = await loadAOS();
            if (aos) {
                aos.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: true,
                    offset: 100
                });
            }
        };
        
        initializeAOS();
    }, []);

    return (
        <section id="formations" className="py-5">
            <div className="container py-5">
                {/* En-tête de section */}
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
                        <h2 className="display-4 fw-bold mb-4">
                            Mon <span className="gradient-text">Parcours</span> de Formation
                        </h2>
                        <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                            Un apprentissage continu pour maîtriser les technologies les plus récentes 
                            et offrir des solutions web de qualité professionnelle.
                        </p>
                    </div>
                </div>

                {/* Timeline des formations */}
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative">
                            {/* Ligne de timeline */}
                            <div 
                                className="position-absolute d-none d-lg-block"
                                style={{
                                    left: '50%',
                                    top: '0',
                                    bottom: '0',
                                    width: '4px',
                                    background: 'var(--primary-gradient)',
                                    transform: 'translateX(-50%)',
                                    borderRadius: '2px'
                                }}
                            ></div>

                            {formations.map((formation, index) => (
                                <div key={index} className="row mb-5 position-relative">
                                    {/* Point de timeline */}
                                    <div 
                                        className="position-absolute d-none d-lg-flex align-items-center justify-content-center"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '60px',
                                            height: '60px',
                                            background: formation.gradient,
                                            borderRadius: '50%',
                                            zIndex: 2,
                                            boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
                                        }}
                                    >
                                        <i className={`${formation.icon} fs-4 text-white`}></i>
                                    </div>

                                    {/* Contenu alterné */}
                                    <div className={`col-lg-6 ${index % 2 === 0 ? 'pe-lg-5' : 'ps-lg-5 offset-lg-6'}`}>
                                        <div 
                                            className="glass-card p-4 h-100"
                                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                            data-aos-delay={index * 100}
                                        >
                                            {/* Badge de statut */}
                                            <div className="d-flex justify-content-between align-items-start mb-3">
                                                <span 
                                                    className="badge px-3 py-2 rounded-pill"
                                                    style={{
                                                        background: formation.gradient,
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600'
                                                    }}
                                                >
                                                    {formation.status}
                                                </span>
                                                <span className="text-muted small">{formation.period}</span>
                                            </div>

                                            {/* Titre et institution */}
                                            <h4 className="fw-bold text-light mb-2">{formation.title}</h4>
                                            <h6 className="gradient-text-accent mb-3">{formation.institution}</h6>

                                            {/* Description */}
                                            <p className="text-muted mb-4">{formation.description}</p>

                                            {/* Compétences acquises */}
                                            <div className="mb-3">
                                                <h6 className="text-light mb-2 small fw-semibold">Compétences acquises :</h6>
                                                <div className="d-flex flex-wrap gap-2">
                                                    {formation.skills.map((skill, skillIndex) => (
                                                        <span 
                                                            key={skillIndex}
                                                            className="badge"
                                                            style={{
                                                                background: 'var(--glass-bg)',
                                                                color: 'var(--text-secondary)',
                                                                border: '1px solid var(--glass-border)',
                                                                fontSize: '0.75rem'
                                                            }}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section Certifications */}
                <div className="row mt-5 pt-5">
                    <div className="col-12 text-center mb-5" data-aos="fade-up">
                        <h3 className="display-6 fw-bold mb-4">
                            <span className="gradient-text-secondary">Certifications</span> & Reconnaissances
                        </h3>
                        <p className="lead text-muted">
                            Certifications officielles validant mes compétences techniques
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {certifications.map((cert, index) => (
                        <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="glass-card p-4 text-center h-100 position-relative">
                                {/* Badge vérifié */}
                                {cert.verified && (
                                    <div 
                                        className="position-absolute top-0 end-0 translate-middle"
                                        style={{
                                            background: '#00ff88',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <i className="bi bi-check-lg text-dark" style={{ fontSize: '0.8rem' }}></i>
                                    </div>
                                )}

                                {/* Icône de certification */}
                                <div 
                                    className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        background: 'var(--accent-gradient)'
                                    }}
                                >
                                    <i className="bi bi-award fs-3 text-white"></i>
                                </div>

                                {/* Informations */}
                                <h6 className="fw-bold text-light mb-2">{cert.name}</h6>
                                <p className="text-muted small mb-2">{cert.issuer}</p>
                                <span className="badge bg-secondary">{cert.year}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section illustration avec animation */}
                <div className="row mt-5 pt-5">
                    <div className="col-lg-6 mx-auto text-center" data-aos="zoom-in">
                        <div className="position-relative d-inline-block">
                            {/* Logo React animé */}
                            <img
                                src={react}
                                alt="Développement Web"
                                className="img-fluid"
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    animation: 'spin 8s linear infinite',
                                    filter: 'drop-shadow(0 0 30px rgba(97, 218, 251, 0.6))'
                                }}
                            />
                            
                            {/* Éléments orbitaux */}
                            {[/* eslint-disable-next-line */
                                { icon: 'bi-code-slash', color: '#61DAFB', delay: '0s' },
                                { icon: 'bi-palette', color: '#F39C12', delay: '2s' },
                                { icon: 'bi-wordpress', color: '#21759B', delay: '4s' },
                                { icon: 'bi-gear', color: '#E74C3C', delay: '6s' }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="position-absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        width: '200px',
                                        height: '200px',
                                        transform: 'translate(-50%, -50%)',
                                        animation: `orbit 12s linear infinite ${item.delay}`,
                                        pointerEvents: 'none'
                                    }}
                                >
                                    <div
                                        className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            top: '0',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '40px',
                                            height: '40px',
                                            background: 'var(--glass-bg)',
                                            backdropFilter: 'blur(10px)',
                                            border: `2px solid ${item.color}`,
                                            boxShadow: `0 0 20px ${item.color}40`
                                        }}
                                    >
                                        <i className={`${item.icon} fs-5`} style={{ color: item.color }}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-4">
                            <h4 className="gradient-text fw-bold">En constante évolution</h4>
                            <p className="text-muted">
                                Toujours à la recherche des dernières technologies et meilleures pratiques
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes orbit {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}

export default Formations;
