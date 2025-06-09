import React, { useEffect, useRef } from "react";
import '../styles/Competences.css';
import bootstrap from '../assets/bootstrap.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import Github_dark from '../assets/Github_dark.png';
import html5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import materialui from '../assets/materialui.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import wordpress from '../assets/wordpress.png';

function Competances() {
    const competencesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const competences = competencesRef.current;
            const competencesTop = competences.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (competencesTop < windowHeight * 0.8) {
                competences.querySelectorAll('.competence').forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 100); 
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Pour vérifier la visibilité au chargement de la page

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container py-5" id="competances" ref={competencesRef} style={{ background: 'transparent' }}>
            <h2 className="text-center mb-5 pb-5" style={{ color: '#fff', fontWeight: 700, letterSpacing: 1, fontSize: 32 }}>Mes Compétences Techniques</h2>
            <div className="d-flex flex-column align-items-center gap-4">
                {/* Première ligne d'icônes */}
                <div className="d-flex flex-row justify-content-center gap-4 competences-slide-row" style={{ width: '100%', maxWidth: 900, animation: 'slideRow 2.8s ease-in-out infinite alternate' }}>
                    {[html5, css, javascript, sass, react].map((img, i) => (
                        <div key={i} className="d-flex flex-row align-items-center bg-dark rounded-4 shadow p-3" style={{ minWidth: 170, maxWidth: 200, border: '1.5px solid #222', gap: 14 }}>
                            <img src={img} alt="" style={{ width: 38, height: 38, marginRight: 8, filter: 'drop-shadow(0 0 8px #222)' }} />
                            <span style={{ color: '#b0b0b0', fontWeight: 600, fontSize: 18 }}>{['HTML5','CSS3','JavaScript','Sass','React-JS'][i]}</span>
                        </div>
                    ))}
                </div>
                {/* Deuxième ligne d'icônes */}
                <div className="d-flex flex-row justify-content-center gap-4 competences-slide-row" style={{ width: '100%', maxWidth: 900, animation: 'slideRowReverse 2.8s ease-in-out infinite alternate' }}>
                    {[bootstrap, materialui, Github_dark, figma, wordpress].map((img, i) => (
                        <div key={i} className="d-flex flex-row align-items-center bg-dark rounded-4 shadow p-3" style={{ minWidth: 170, maxWidth: 200, border: '1.5px solid #222', gap: 14 }}>
                            <img src={img} alt="" style={{ width: 38, height: 38, marginRight: 8, filter: 'drop-shadow(0 0 8px #222)' }} />
                            <span style={{ color: '#b0b0b0', fontWeight: 600, fontSize: 18 }}>{['Bootstrap','Material-UI','GitHub','Figma','WordPress'][i]}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes slideRow {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(40px); }
                }
                @keyframes slideRowReverse {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-40px); }
                }
            `}</style>
        </div>
    );
}

export default Competances;