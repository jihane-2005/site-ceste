import React from 'react';
import { Link } from 'react-router-dom';

const accueilStyles = {
  page: {
    padding: '20px',
    minHeight: '100vh',
    color: '#fff',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    margin: '0 0 15px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '25px',
    padding: '12px 25px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  },
};

export default function Accueil() {
  const backgroundImage = '/PAGE0.jpeg';
  const pageStyles = {
    ...accueilStyles.page,
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div style={pageStyles}  >
      
      <section style={accueilStyles.section}>
        <h1 style={accueilStyles.title}>Rejoignez notre club</h1>
        <p style={accueilStyles.paragraph}>
          Bienvenue dans l'univers du club CESTE, un espace dédié à l'excellence et au développement des talents,
          où l'innovation et la passion se rejoignent pour façonner les leaders de demain.
        </p>
        <Link
          to="/Inscriptionn"
          style={accueilStyles.button}
          onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.target.style.backgroundColor = '#007BFF'}
        >
          Rejoindre le club
        </Link>
      </section>
    </div>
  );
}
