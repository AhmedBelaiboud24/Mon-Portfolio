import React, { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
const [open, setOpen] = useState(false);

const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
    }
    setOpen(open);
};

const DrawerList = (
    <div
        className="sideMenu"
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        style={{
            minWidth: '70vw',
            maxWidth: 340,
            background: '#181c1f',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            gap: 24,
            boxShadow: '2px 0 16px #0008',
        }}
    >
        <a href="#home" style={{ color: '#fff', fontWeight: 700, fontSize: 22, textDecoration: 'none', margin: '12px 0', letterSpacing: 1, width: '100%', textAlign: 'center', borderRadius: 8, padding: 10, transition: 'background 0.2s, color 0.2s' }}>Accueil</a>
        <a href="#about-detailed" style={{ color: '#fff', fontWeight: 700, fontSize: 22, textDecoration: 'none', margin: '12px 0', letterSpacing: 1, width: '100%', textAlign: 'center', borderRadius: 8, padding: 10, transition: 'background 0.2s, color 0.2s' }}>À propos</a>
        <a href="#competences" style={{ color: '#fff', fontWeight: 700, fontSize: 22, textDecoration: 'none', margin: '12px 0', letterSpacing: 1, width: '100%', textAlign: 'center', borderRadius: 8, padding: 10, transition: 'background 0.2s, color 0.2s' }}>Compétences</a>
        <a href="#projets" style={{ color: '#fff', fontWeight: 700, fontSize: 22, textDecoration: 'none', margin: '12px 0', letterSpacing: 1, width: '100%', textAlign: 'center', borderRadius: 8, padding: 10, transition: 'background 0.2s, color 0.2s' }}>Projets</a>
        <a href="#contact" style={{ color: '#fff', fontWeight: 700, fontSize: 22, textDecoration: 'none', margin: '12px 0', letterSpacing: 1, width: '100%', textAlign: 'center', borderRadius: 8, padding: 10, transition: 'background 0.2s, color 0.2s' }}>Contact</a>
    </div>
);

return (
    <>
    <nav
      className="navbar d-flex flex-column align-items-center justify-content-center mt-4"
      style={{ background: 'transparent', border: 'none', boxShadow: 'none', minHeight: 75, position: 'relative' }}
    >
      <div
        className="d-flex flex-row align-items-center justify-content-between w-100 mb-4"
        style={{ maxWidth: 1200, width: '100%', padding: '0 32px' }}
      >
        {/* Logo à gauche */}
        <div className="d-flex align-items-center" style={{ minWidth: 220, minHeight: 48 }}>
          {/* Logo custom */}
          <span style={{
            background: '#fff',
            color: '#111',
            borderRadius: 16,
            padding: '6px 18px',
            fontWeight: 700,
            fontSize: 20,
            fontFamily: 'Pacifico, cursive',
            letterSpacing: 1,
            marginRight: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}>
            Belaiboud
          </span>
          <span style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
            fontFamily: 'Pacifico, cursive',
            letterSpacing: 1
          }}>
            Ahmed
          </span>
        </div>
        {/* Liens à droite */}
        <div className="d-none d-md-flex ms-auto" style={{ gap: 32, display: 'flex' }}>
          <a className="nav-link px-3" href="#home" style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Accueil</a>
          <a className="nav-link px-3" href="#about-detailled" style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>À propos</a>
          <a className="nav-link px-3" href="#competances" style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Compétences</a>
          <a className="nav-link px-3" href="#projets" style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Projets</a>
          <a className="nav-link px-3" href="#contact" style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>Contact</a>
        </div>
        {/* Menu burger mobile */}
        <Button className="d-md-none ms-2" onClick={toggleDrawer(true)} style={{ color: '#fff' }}>
          <MenuIcon />
        </Button>
      </div>
      {/* Trait blanc sous le header, centré et pas sur toute la largeur */}
      <div style={{ width: '70%', height: 2, background: '#fff', borderRadius: 2, marginTop: 8 }}></div>
    </nav>
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
    </>
);
}

export default Navbar;