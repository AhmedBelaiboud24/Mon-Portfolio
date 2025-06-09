import React, { useState } from 'react';
import '../styles/About.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import SlideForm from './SlideForm';
import photo from '../assets/Photo-perso.png';

function About() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    // Fonction pour fermer le formulaire
    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="about-minimal about-split mt-5" id='home'>
            <main className="about-main-minimal about-main-split" style={{ background: 'transparent' }}>
                <Fade direction="left" triggerOnce>
                    <div className="presentation-minimal about-left" style={{ color: '#b0b0b0' }}>
                        <h1 className="about-name mb-4" style={{ color: '#fff', fontWeight: 600, fontSize: 40, marginBottom: 40 }}>Salut,</h1>
                        <h2 className="about-hello mb-4" style={{ color: '#fff', fontWeight: 400, fontSize: 30, marginBottom: 40 }}>Je suis Ahmed</h2>
                        <div style={{ minHeight: 50 }}>
                            <h3 className="about-typing" style={{ color: '#fff', fontWeight: 600, fontSize: 32, maxWidth: 320, wordBreak: 'break-word', whiteSpace: 'pre-line', lineHeight: 1.4, marginBottom: 20 }}>
                                <Typewriter
                                    words={["Développeur frontend et WordPress"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={55}
                                    deleteSpeed={35}
                                    delaySpeed={1200}
                                    renderText={(text) => {
                                        // Coloration des mots après le typing
                                        const colored = text
                                        .replace(/frontend/g, '<span class="text-info fw-bold">frontend</span>')
                                        .replace(/WordPress/g, '<span class="text-warning fw-bold">WordPress</span>');

                                        return <span dangerouslySetInnerHTML={{ __html: colored }} />;

                                    }}
                                />
                            </h3>
                        </div>
                        <div className="about-btns">
                            <Stack direction="row" spacing={4}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={toggleFormVisibility}
                                    sx={{ borderRadius: 5, fontFamily: 'montserrat, sans-serif', fontSize: 14 }}
                                >
                                    Besoin d'un site web ?
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    color="primary" 
                                    component="a"
                                    href="/src/assets/Mon-Cv-Dev.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    sx={{ borderRadius: 5, fontFamily: 'montserrat, sans-serif', fontSize: 14 }}
                                >
                                    Voir mon CV
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </Fade>
                <Fade direction="right" triggerOnce>
                    <div className="about-photo about-right" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 310, minWidth: 310 }}>
                        {/* Anneau animé autour de la photo */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: 300,
                            height: 300,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 0,
                            pointerEvents: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <div style={{
                                width: 300,
                                height: 300,
                                borderRadius: '50%',
                                border: '7px solid #61dafb',
                                borderTop: '7px solid #fff',
                                borderBottom: '7px solid #222',
                                boxSizing: 'border-box',
                                animation: 'ringSpin 2.8s linear infinite',
                                filter: 'drop-shadow(0 0 28px #61dafb88)'
                            }}></div>
                        </div>
                        <img src={photo} alt="Ahmed Belaiboud" className="img-ahmed-minimal" style={{ borderRadius: '50%', boxShadow: '0 2px 28px rgba(0,0,0,0.12)', position: 'relative', zIndex: 1, width: 245, height: 245, objectFit: 'cover' }} />
                        <style>{`
                            @keyframes ringSpin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                </Fade>
            </main>
            <SlideForm isVisible={isFormVisible} onClose={handleCloseForm} />
        </div>
    );
}

export default About;
