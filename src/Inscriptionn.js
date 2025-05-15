import React, { useState } from 'react';

export default function Inscription() {
  const imageUrl = '/PAGE23.jpeg';
  const [hover, setHover] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      minHeight: '100vh',
      padding: '40px 20px',
      gap: '30px',
      background: 'linear-gradient(to bottom right, #2f855a, #2b6cb0, #2c5282)',
      color: '#fff',
    },
    imageContainer: {
      flex: '1 1 300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '400px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    formContainer: {
      flex: '1 1 350px',
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
      color: '#fff',
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '25px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#000',
      outline: 'none',
    },
    textarea: {
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#000',
      resize: 'none',
      outline: 'none',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: hover ? '#218838' : '#28a745',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container} >
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt="Rejoignez notre club" style={styles.image} />
      </div>

      <div style={styles.formContainer}>
        <h1 style={styles.title}>Rejoignez Notre Club</h1>
        <form style={styles.form}>
          <input type="text" placeholder="Nom complet" style={styles.input} />
          <input type="email" placeholder="Adresse e-mail" style={styles.input} />
          <input type="text" placeholder="Numéro de téléphone" style={styles.input} />
          <textarea
            placeholder="Pourquoi souhaitez-vous rejoindre ?"
            rows="4"
            style={styles.textarea}
          ></textarea>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
