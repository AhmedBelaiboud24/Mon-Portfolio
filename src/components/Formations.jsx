import React from "react";
import { Fade } from 'react-awesome-reveal';
import react from '../assets/web-development.png';

function Formations() {
    const cardStyle = {
        minWidth: 320,
        maxWidth: 380,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop:80,
        background: 'transparent'
    };
    const cardStyleabout = {
        minWidth: 320,
        maxWidth: 420,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        background: 'transparent'
    };

    return (
        <div className="container-fluid " id="about-detailled" style={{ background: 'transparent' }}>
            <div
                className="d-flex justify-content-center align-items-stretch"
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    
                    gap: 180
                }}
            >
                {/* Bloc Mes Services remplacé par une illustration dynamique */}
                <div style={{ ...cardStyle, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', minHeight: 340 }}>
                    <Fade direction="left" triggerOnce>
                        {/* Illustration frontend-dev enrichie : logo React animé, écran avec code animé, clavier stylisé */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: 270, height: 340 }}>
                            {/* Logo React animé */}
                            <img
                                src={react}
                                alt="Frontend Dev"
                                style={{
                                    width: 80,
                                    height: 80,
                                    animation: 'spin 3s linear infinite',
                                    position: 'absolute',
                                    top: -44,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    filter: 'drop-shadow(0 0 24px #61dafb)'
                                }}
                            />
                            {/* Écran stylisé avec code animé */}
                            <div style={{
                                width: 210,
                                height: 150,
                                background: 'rgba(30,30,30,0.98)',
                                borderRadius: 24,
                                border: '3px solid #61dafb',
                                boxShadow: '0 10px 40px #111',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                padding: '28px 24px 18px 24px',
                                position: 'relative',
                                zIndex: 2,
                                marginTop: 48
                            }}>
                                {/* Lignes de code animées */}
                                <div style={{ width: '100%' }}>
                                    <div className="code-bar" style={{ height: 16, width: '80%', background: '#fff', borderRadius: 6, marginBottom: 10, animation: 'codebar1 1.6s infinite alternate' }}></div>
                                    <div className="code-bar" style={{ height: 12, width: '60%', background: '#61dafb', borderRadius: 6, marginBottom: 10, animation: 'codebar2 1.2s infinite alternate' }}></div>
                                    <div className="code-bar" style={{ height: 12, width: '70%', background: '#b0b0b0', borderRadius: 6, marginBottom: 10, animation: 'codebar3 1.8s infinite alternate' }}></div>
                                    <div className="code-bar" style={{ height: 12, width: '50%', background: '#fff', borderRadius: 6, marginBottom: 10, animation: 'codebar4 1.4s infinite alternate' }}></div>
                                </div>
                                {/* Bouton stylisé */}
                                <div style={{ marginTop: 18, alignSelf: 'center' }}>
                                    <span style={{
                                        background: '#61dafb',
                                        color: '#222',
                                        borderRadius: 12,
                                        padding: '4px 22px',
                                        fontFamily: 'Pacifico, cursive',
                                        fontSize: 20,
                                        fontWeight: 600,
                                        boxShadow: '0 2px 12px #2224',
                                        letterSpacing: 1
                                    }}>Contact</span>
                                </div>
                            </div>
                            {/* Clavier stylisé */}
                            <div style={{
                                width: 170,
                                height: 32,
                                background: 'linear-gradient(90deg, #222 60%, #61dafb 100%)',
                                borderRadius: 12,
                                marginTop: 18,
                                boxShadow: '0 2px 18px #111',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {/* Touches */}
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} style={{
                                        width: 18,
                                        height: 16,
                                        background: i === 8 ? '#61dafb' : '#333',
                                        borderRadius: 3,
                                        margin: '0 3px',
                                        boxShadow: i === 8 ? '0 0 10px #61dafb' : 'none'
                                    }}></div>
                                ))}
                            </div>
                            {/* Animation CSS keyframes */}
                            <style>{`
                                @keyframes spin {
                                    0% { transform: translateX(-50%) rotate(0deg); }
                                    100% { transform: translateX(-50%) rotate(360deg); }
                                }
                                @keyframes codebar1 {
                                    0% { opacity: 0.7; width: 60%; }
                                    100% { opacity: 1; width: 80%; }
                                }
                                @keyframes codebar2 {
                                    0% { opacity: 0.7; width: 40%; }
                                    100% { opacity: 1; width: 60%; }
                                }
                                @keyframes codebar3 {
                                    0% { opacity: 0.7; width: 50%; }
                                    100% { opacity: 1; width: 70%; }
                                }
                                @keyframes codebar4 {
                                    0% { opacity: 0.7; width: 30%; }
                                    100% { opacity: 1; width: 50%; }
                                }
                            `}</style>
                        </div>
                    </Fade>
                </div>

                {/* Bloc À propos */}
                <div style={{ ...cardStyleabout, flex: 2 }}>
                    <Fade direction="right" triggerOnce>
                        <div style={{ width: '100%' }}>
                            <h2 style={{ marginBottom: '42px', marginRight: "120px",color: '#fff', fontWeight: 700, fontSize: 32 }}>À propos de moi</h2>
                            <p style={{ color: '#b0b0b0', fontSize: 18 }}>
                                Bonjour, je m'appelle Ahmed Belaiboud, un développeur Front-End passionné, spécialisé dans la création de solutions web modernes avec HTML, CSS, JavaScript, et WordPress. J'ai également une expertise solide en Bootstrap, React, Material UI, et en conception de maquettes avec Figma. Mon objectif est de transformer vos idées en réalité numérique grâce à des designs élégants et des interfaces utilisateur performantes.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Formations;
