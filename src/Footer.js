import React from 'react';

const footerStyles = {
  container: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '25px 10px',
  },
  socialMedia: {
    margin: '15px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  socialLink: {
    color: 'white',
    fontSize: '16px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    borderTop: '1px solid #555',
    marginTop: '15px',
    paddingTop: '10px',
    fontSize: '14px',
    color: '#ccc',
  },
};

export default function Footer() {
  const handleHover = (e, isHover) => {
    e.target.style.color = isHover ? '#1E90FF' : 'white'; 
  };

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.socialMedia}>
        <a
          href="https://www.facebook.com/profile.php?id=100068452666451"
          style={footerStyles.socialLink}
          onMouseOver={e => handleHover(e, true)}
          onMouseOut={e => handleHover(e, false)}
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/ceste_fsbm"
          style={footerStyles.socialLink}
          onMouseOver={e => handleHover(e, true)}
          onMouseOut={e => handleHover(e, false)}
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/club-ceste-9a8316329"
          style={footerStyles.socialLink}
          onMouseOver={e => handleHover(e, true)}
          onMouseOut={e => handleHover(e, false)}
        >
          LinkedIn
        </a>
      </div>
      <div style={footerStyles.footerBottom}>
        <p>&copy; 2023 CLUB CESTE. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

