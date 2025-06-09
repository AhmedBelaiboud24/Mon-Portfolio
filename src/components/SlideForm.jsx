import React, { useRef, useEffect } from 'react';

function SlideForm({ isVisible, onClose }) {
    const formRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form ref={formRef} action="https://formspree.io/f/xkgwebod" method="POST" style={{
                background: 'rgba(20,20,20,0.98)',
                borderRadius: 18,
                boxShadow: '0 4px 32px #000a',
                padding: 36,
                minWidth: 340,
                maxWidth: 420,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
            }}>
                <button type="button" onClick={onClose} style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    background: 'none',
                    border: 'none',
                    color: '#61dafb',
                    fontWeight: 700,
                    fontSize: 22,
                    cursor: 'pointer',
                }}>×</button>
                <h2 style={{ color: '#fff', fontWeight: 700, fontSize: 28, marginBottom: 24 }}>Contactez-moi</h2>
                <div style={{ width: '100%', marginBottom: 18 }}>
                    <label htmlFor="name" style={{ color: '#fff', fontWeight: 500, marginBottom: 6 }}>Nom</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" required style={{ background: '#222', color: '#fff', border: '1.5px solid #444', borderRadius: 8, width: '100%', padding: '10px 12px', marginTop: 4, marginBottom: 10 }} />
                </div>
                <div style={{ width: '100%', marginBottom: 18 }}>
                    <label htmlFor="email" style={{ color: '#fff', fontWeight: 500, marginBottom: 6 }}>Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre email" required style={{ background: '#222', color: '#fff', border: '1.5px solid #444', borderRadius: 8, width: '100%', padding: '10px 12px', marginTop: 4, marginBottom: 10 }} />
                </div>
                <div style={{ width: '100%', marginBottom: 24 }}>
                    <label htmlFor="message" style={{ color: '#fff', fontWeight: 500, marginBottom: 6 }}>Message</label>
                    <textarea id="message" name="message" placeholder="Votre message" required rows={5} style={{ background: '#222', color: '#fff', border: '1.5px solid #444', borderRadius: 8, width: '100%', padding: '10px 12px', marginTop: 4, resize: 'vertical' }} />
                </div>
                <button type="submit" style={{
                    background: '#61dafb',
                    color: '#222',
                    fontWeight: 600,
                    borderRadius: 10,
                    padding: '10px 32px',
                    fontSize: 18,
                    boxShadow: '0 2px 8px #0004',
                    border: 'none',
                    cursor: 'pointer',
                }}>Envoyer</button>
            </form>
        </div>
    );
}

export default SlideForm;