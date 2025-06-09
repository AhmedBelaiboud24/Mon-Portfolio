import React, { useEffect, useRef } from "react";
import Grid from '@mui/material/Grid';
function Contact() {
    const formContainerRef = useRef(null); 
    
    useEffect(() => {
        // Délai pour simuler l'animation de chargement
        const timer = setTimeout(() => {
            if (formContainerRef.current) {
                formContainerRef.current.classList.add('loaded'); 
            }
        }, 50); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container-fluid py-5" id="contact" style={{ background: 'transparent' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <div style={{ borderLeft: '4px solid #61dafb', paddingLeft: 24, marginBottom:80, marginLeft: 24 }}>
                        <span style={{ color: '#61dafb', fontWeight: 600, fontSize: 32 }}>Contact</span>
                    </div>
                    <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 40, marginBottom: 160, lineHeight: 1.1, marginLeft: 32 }}>Vous avez un projet ?<br />Parlons-on !</h2>
                    
                </div>
                <div className="col-lg-6">
                    <form id="contact-form" action="https://formspree.io/f/xkgwebod" method="POST" style={{ background: 'rgba(20,20,20,0.98)', borderRadius: 18, boxShadow: '0 4px 32px #000a', padding: 36 }}>
                        <div className="mb-3">
                            <label htmlFor="nom" className="form-label" style={{ color: '#fff', fontWeight: 500 }}>Name</label>
                            <input type="text" className="form-control" id="nom" name="nom" required style={{ background: '#222', color: '#fff', border: '1.5px solid #444', borderRadius: 8 }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ color: '#fff', fontWeight: 500 }}>Email</label>
                            <input type="email" className="form-control" id="email" name="email" required style={{ background: '#222', color: '#fff', border: '1.5px solid #444', borderRadius: 8 }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="form-label" style={{ color: '#fff', fontWeight: 500 }}>Message</label>
                            <textarea className="form-control" id="message" name="message" rows="5" required style={{ background: '#222', color: '#fff', border: '1.5px solid #444', borderRadius: 8, resize: 'vertical' }}></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn" style={{ background: '#61dafb', color: '#222', fontWeight: 600, borderRadius: 8, padding: '10px 32px', fontSize: 18, boxShadow: '0 2px 8px #0004' }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
