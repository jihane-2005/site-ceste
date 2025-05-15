import React, { useState } from "react";
import "./propos.css"; // CSS séparé

function Propos() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="propos-container">
      
      <h1 className="propos-title">À propos du CESTE</h1>

      <div className="propos-content">
        <div className="propos-image-wrapper">
  <img
    src="/PAGE25.jpeg"
    alt="Affiche CESTE"
    className="propos-image"
  />
</div>


        <div className="propos-text-card">
          <p>
            Le Club des Étudiants des Sciences de la Terre et de l'Environnement (CESTE) a été créé en 2007 par des étudiants en géologie de la faculté des sciences Ben M'Sik.
          </p>
          <p>
            Sa mission est de promouvoir les sciences de la terre et de l'environnement à travers des activités para universitaires variées, comprenant des aspects scientifiques, universitaires et culturels.
          </p>
          <p>
            Le club s'adresse principalement aux étudiants de la faculté, en leur offrant une plateforme pour enrichir leurs connaissances et développer leurs compétences dans ces domaines.
          </p>
          <button
            onClick={() => setShowVideo(true)}
            className="propos-button"
          >
            Voir la vidéo
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="video-modal">
          <div className="video-container">
            <button
              onClick={() => setShowVideo(false)}
              className="close-button"
            >
              &times;
            </button>
            <video
              className="video-player"
              src="/video.mp4"
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Propos;
