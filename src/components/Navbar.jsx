import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Accueil', icon: 'bi-house-door' },
    { href: '#about-detailed', label: 'À propos', icon: 'bi-person' },
    { href: '#formations', label: 'Formations', icon: 'bi-mortarboard' },
    { href: '#competences', label: 'Compétences', icon: 'bi-gear' },
    { href: '#projets', label: 'Projets', icon: 'bi-code-square' },
    { href: '#contact', label: 'Contact', icon: 'bi-envelope' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-modern ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo moderne */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--primary-gradient)',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                }}
              >
                <span className="text-white fw-bold fs-4">AB</span>
              </div>
              <div 
                className="position-absolute top-0 start-0 rounded-circle"
                style={{
                  width: '50px',
                  height: '50px',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  animation: 'pulse 2s infinite'
                }}
              ></div>
            </div>
            <div>
              <div className="gradient-text fw-bold fs-5 mb-0" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ahmed Belaiboud
              </div>
              <small className="text-muted" style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
                &lt;/Développeur&gt;
              </small>
            </div>
          </div>
        </a>

        {/* Toggle button moderne */}
        <button 
          className="navbar-toggler border-0 p-2" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px'
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '24px', height: '18px' }}>
            <span 
              className="bg-light mb-1"
              style={{
                width: '100%',
                height: '2px',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }}
            ></span>
            <span 
              className="bg-light mb-1"
              style={{
                width: '100%',
                height: '2px',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? '0' : '1'
              }}
            ></span>
            <span 
              className="bg-light"
              style={{
                width: '100%',
                height: '2px',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }}
            ></span>
          </div>
        </button>

        {/* Navigation moderne */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item mx-1">
                <a 
                  className="nav-link d-flex align-items-center px-3 py-2 rounded-pill position-relative"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    transition: 'all 0.3s ease',
                    fontWeight: '500',
                    color: 'var(--text-secondary)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--glass-bg)';
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`${item.icon} me-2 d-lg-none`}></i>
                  {item.label}
                  <span 
                    className="position-absolute bottom-0 start-50 translate-middle-x"
                    style={{
                      width: '0',
                      height: '2px',
                      background: 'var(--primary-gradient)',
                      borderRadius: '1px',
                      transition: 'width 0.3s ease'
                    }}
                  ></span>
                </a>
              </li>
            ))}
            
            {/* Bouton CTA */}
            <li className="nav-item ms-3 d-none d-lg-block">
              <a 
                href="#contact" 
                className="btn btn-modern btn-primary-modern btn-sm"
                style={{
                  fontSize: '0.85rem',
                  padding: '8px 20px'
                }}
              >
                <i className="bi bi-rocket-takeoff me-1"></i>
                Travaillons ensemble
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;