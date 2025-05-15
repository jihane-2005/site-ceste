import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
 header: {
    position: 'fixed', 
    top: 0,
    left: 0,
    width: '96%',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 1000, 
  },
  logo: {
    height: '80px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginLeft: '15px',
  },
  nav: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    transition: 'transform 0.2s ease',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
  },
};

export default function Header() {
  return (
    <header style={headerStyles.header}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="imagelogo2jpeg.jpeg" alt="CESTE Logo" style={headerStyles.logo} />
        <div style={headerStyles.title}>C E S T E</div>
      </div>
      <nav>
        <ul style={headerStyles.nav}>
          <li style={headerStyles.navItem}>
            <Link to="/" style={headerStyles.navLink}>Accueil</Link>
          </li>
          <li style={headerStyles.navItem}>
            <Link to="/Propos" style={headerStyles.navLink}>À Propos</Link>
          </li>
          <li style={headerStyles.navItem}>
            <Link to="/Activites" style={headerStyles.navLink}>Activités</Link>
          </li>
          <li style={headerStyles.navItem}>
            <Link to="/Inscriptionn" style={headerStyles.navLink}>Inscription</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
