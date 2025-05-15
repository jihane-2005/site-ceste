import React from 'react';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#12232E',
    color: 'white',
    padding: '15px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  menuItem: {
    margin: '10px 0',
    color: 'white',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    textAlign: 'left',
    overflow: 'hidden',
  },
  menuItemHover: {
    backgroundColor: '#1C3B57',
  },
  content: {
    flex: 1,
    padding: '20px',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    background: 'linear-gradient(to bottom right, #0f9b0f, #00aaff)',
    color: 'white',
  },
  activityCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  activityHeader: {
    fontSize: '24px',
    marginBottom: '15px',
    borderBottom: '1px solid rgba(255,255,255,0.3)',
    paddingBottom: '10px',
  },
  imagesRow: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  activityImage: {
  width: '300px',    
  height: '300px', 
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
},

  activityText: {
    fontSize: '17px',
    lineHeight: '1.7',
    textAlign: 'justify',
  },
};

export default function Activites() {
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.menuItemHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
  };

  const activities = [
    {
      id: 1,
      title: "Intégration",
      images: ["activ1.jpeg", "activ11.jpeg"],
      description:
        "Le club CESTE a participé activement à la semaine d'intégration des nouveaux étudiants les 12 et 13 octobre. Parmi les activités proposées : théâtre, chorale et poésie. Cet événement a permis de créer une ambiance conviviale entre les anciens et les nouveaux étudiants.",
    },
    {
      id: 2,
      title: "Musée",
      images: ["activ2.jpeg", "activ2-2.jpeg"],
      description:
        "Le 10 novembre 2023, un musée a été organisé pour exposer des espèces géologiques rares. Cette activité visait à sensibiliser les étudiants à l’importance de la diversité géologique et à leur faire découvrir des minéraux uniques.",
    },
    {
      id: 3,
      title: "La Marche Verte",
      images: ["activ3.jpeg", "activ3-3.jpeg"],
      description:
        "Le 5 mai 2025, une réunion stratégique a été tenue pour planifier les prochaines étapes des projets du club en lien avec la commémoration de la Marche Verte et l’engagement citoyen.",
    },
    {
      id: 4,
      title: "Cinéma",
      images: ["activ4.jpeg", "activ4-4.jpeg"],
      description:
        "Les 27 et 28 novembre 2023, des films réalisés par les étudiants ont été projetés dans une ambiance chaleureuse. L’objectif était de promouvoir l’expression artistique à travers le cinéma universitaire.",
    },
    {
      id: 5,
      title: "Non-Violence",
      images: ["activ5.jpeg", "activ5-5.jpeg"],
      description:
        "Le 8 décembre 2023, une journée de sensibilisation à la non-violence dans les milieux universitaires a été organisée avec des discussions, des ateliers et des messages de paix.",
    },
    {
      id: 6,
      title: "Don du Sang",
      images: ["activ6.jpeg", "activ6-6.jpeg"],
      description:
        "Une campagne de don du sang a été lancée les 13 et 14 février 2024, mobilisant massivement les étudiants et le personnel de l’université. Une action de solidarité réussie.",
    },
    {
      id: 7,
      title: "Orientation",
      images: ["activ7.jpeg", "activ7-7.jpeg"],
      description:
        "Le 16 février 2024, une biologiste a animé une séance d’orientation à destination des nouveaux étudiants en biologie, afin de les aider à mieux s’intégrer dans leur parcours universitaire.",
    },
    {
      id: 8,
      title: "Sport",
      images: ["activ8.jpeg", "activ8-8.jpeg"],
      description:
        "Le 17 février 2024, une journée dédiée au sport et à la musique a rassemblé de nombreux étudiants autour de compétitions et d’animations artistiques.",
    },
    {
      id: 9,
      title: "Femme",
      images: ["activ9.jpeg", "activ9-9.jpeg"],
      description:
        "À l’occasion du 8 mars 2024, le club a célébré la Journée internationale des droits des femmes à travers une série d’activités : conférences, témoignages, débats et expositions.",
    },
    {
      id: 10,
      title: "Plantation",
      images: ["activ10.jpeg", "activ10-1.jpeg"],
      description:
        "Durant tout le mois de Ramadan, une compétition de plantation a été organisée, avec des actions écologiques jusqu’à la fête de l’Aïd. Les étudiants ont participé activement pour un campus plus vert.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Activités</h3>
        {activities.map((activity) => (
          <a
            key={activity.id}
            href={`#activity${activity.id}`}
            style={styles.menuItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {activity.title}
          </a>
        ))}
      </div>

      <div style={styles.content}>
        <h1
  style={{
    fontSize: '36px',
    marginBottom: '40px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #ffefba, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
  }}
>
  Nos Activités
</h1>

        {activities.map((activity) => (
          <div id={`activity${activity.id}`} style={styles.activityCard} key={activity.id}>
            <h2 style={styles.activityHeader}>{activity.title}</h2>
            <div style={styles.imagesRow}>
              {activity.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${activity.title} ${index + 1}`}
                  style={styles.activityImage}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              ))}
            </div>
            <div style={styles.activityText}>{activity.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
