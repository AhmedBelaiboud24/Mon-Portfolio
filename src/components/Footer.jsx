import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer style={{ background: '#181c1f', color: '#fff', padding: '40px 0 0 0', marginTop: 60 }}>
            <div className="container text-center">
                <div className="row justify-content-center mb-4">
                    <div className="col-auto">
                        <h4 style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Belaiboud Ahmed</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                    <a href="mailto:abelaiboud6@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px #0004' }}>
                        <svg width="24" height="24" fill="#61dafb" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/></svg>
                    </a>
                    <a href="https://github.com/ahmedbelaiboud24" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px #0004' }}>
                        <svg width="24" height="24" fill="#61dafb" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                    </a>
                    <a href="https://linkedin.com/in/ahmed-belaiboud-a81854278" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', borderRadius: '50%', width: 48, height: 48, boxShadow: '0 2px 8px #0004' }}>
                        <svg width="24" height="24" fill="#61dafb" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                    </a>
                </div>
                <div style={{ color: '#b0b0b0', fontSize: 13, paddingBottom: 18 }}>
                    &copy; {new Date().getFullYear()} Belaiboud Ahmed. Conçu et développé par Ahmed Belaiboud.
                </div>
            </div>
        </footer>
    );
}

export default Footer;