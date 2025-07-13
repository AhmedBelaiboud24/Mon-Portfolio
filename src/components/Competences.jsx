import React from "react";
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import Github_dark from '../assets/Github_dark.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import materialui from '../assets/materialui.png';
import nextjs from '../assets/nextjs_icon_dark.svg';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import wordpress from '../assets/wordpress.png';

function Competances() {
    // Toutes les compétences pour les rubans défilants
    const allSkills = [
        { name: "HTML5", icon: html5, color: "#E34F26" },
        { name: "CSS3", icon: css, color: "#1572B6" },
        { name: "JavaScript", icon: javascript, color: "#F7DF1E" },
        { name: "React.js", icon: react, color: "#61DAFB" },
        { name: "Next.js", icon: nextjs, color: "#000000" },
        { name: "TypeScript", icon: javascript, color: "#3178C6" },
        { name: "Sass", icon: sass, color: "#CC6699" },
        { name: "Bootstrap", icon: bootstrap, color: "#7952B3" },
        { name: "Material-UI", icon: materialui, color: "#0081CB" },
        { name: "WordPress", icon: wordpress, color: "#21759B" },
        { name: "GitHub", icon: Github_dark, color: "#181717" },
        { name: "Figma", icon: figma, color: "#F24E1E" }
    ];

    // Dupliquer les compétences pour un défilement infini
    const infiniteSkills = [...allSkills, ...allSkills];

    return (
        <section id="competences" className="py-5">
            <div className="container py-5">
                {/* En-tête de section */}
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
                        <h2 className="display-4 fw-bold mb-4">
                            Mes <span className="gradient-text">Compétences</span> Techniques
                        </h2>
                        <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                            Une expertise technique solide acquise à travers des projets concrets 
                            et une formation continue dans les technologies web modernes.
                        </p>
                    </div>
                </div>

                {/* Ruban défilant infini avec toutes les compétences */}
                <div className="mb-5" data-aos="fade-up">
                    <div className="skill-marquee-container">
                        <div className="skill-marquee skill-marquee-infinite">
                            {infiniteSkills.map((skill, index) => (
                                <div
                                    key={`skill-${index}`}
                                    className="skill-item"
                                    style={{
                                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                                        border: `1px solid ${skill.color}30`,
                                        boxShadow: `0 4px 15px ${skill.color}20`
                                    }}
                                >
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name}
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section statistiques */}
                <div className="row mt-5 pt-5">
                    <div className="col-12">
                        <div className="glass-card p-5 text-center">
                            <div className="row g-4">
                                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="0">
                                    <div className="mb-3">
                                        <i className="bi bi-code-slash fs-1 gradient-text"></i>
                                    </div>
                                    <h3 className="fw-bold text-light mb-2">10+</h3>
                                    <p className="text-muted mb-0">Technologies</p>
                                </div>
                                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
                                    <div className="mb-3">
                                        <i className="bi bi-trophy fs-1 gradient-text-secondary"></i>
                                    </div>
                                    <h3 className="fw-bold text-light mb-2">2+</h3>
                                    <p className="text-muted mb-0">Années d'expérience</p>
                                </div>
                                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
                                    <div className="mb-3">
                                        <i className="bi bi-folder fs-1 gradient-text-accent"></i>
                                    </div>
                                    <h3 className="fw-bold text-light mb-2">10+</h3>
                                    <p className="text-muted mb-0">Projets réalisés</p>
                                </div>
                                <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
                                    <div className="mb-3">
                                        <i className="bi bi-people fs-1 gradient-text"></i>
                                    </div>
                                    <h3 className="fw-bold text-light mb-2">10+</h3>
                                    <p className="text-muted mb-0">Diplômes & Certifications</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                /* Conteneur des rubans défilants */
                .skill-marquee-container {
                    width: 100%;
                    overflow: hidden;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    border-radius: 15px;
                    padding: 20px 0;
                    position: relative;
                }
                
                .skill-marquee {
                    display: flex;
                    gap: 20px;
                    white-space: nowrap;
                }
                
                /* Animation vers la droite */
                .skill-marquee-right {
                    animation: marqueeRight 30s linear infinite;
                }
                
                /* Animation vers la gauche */
                .skill-marquee-left {
                    animation: marqueeLeft 25s linear infinite;
                }
                
                /* Animation vers la droite plus lente */
                .skill-marquee-right-slow {
                    animation: marqueeRight 45s linear infinite;
                }
                
                /* Styles des éléments de compétences */
                .skill-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 20px;
                    border-radius: 25px;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    min-width: fit-content;
                }
                
                .skill-item:hover {
                    transform: translateY(-5px);
                    filter: brightness(1.2);
                }
                
                .skill-name {
                    color: #ffffff;
                    font-weight: 600;
                    font-size: 0.9rem;
                }
                
                /* Animations de défilement */
                @keyframes marqueeInfinite {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .skill-marquee-infinite {
                    animation: marqueeInfinite 20s linear infinite;
                }
                
                /* Effet de fondu sur les bords */
                .skill-marquee-container::before,
                .skill-marquee-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    width: 100px;
                    height: 100%;
                    z-index: 2;
                    pointer-events: none;
                }
                
                .skill-marquee-container::before {
                    left: 0;
                    background: linear-gradient(to right, var(--glass-bg), transparent);
                }
                
                .skill-marquee-container::after {
                    right: 0;
                    background: linear-gradient(to left, var(--glass-bg), transparent);
                }
            `}</style>
        </section>
    );
}

export default Competances;