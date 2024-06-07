import React, { useState, useEffect } from 'react';
import logementsData from '../data/logements.json';
import './Home.scss'; // Importe le fichier Sass pour les styles de Home

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <div className="logements">
        {logements.map(logement => (
          <div key={logement.id} className="logement">
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.location}</p>
            <p>Prix: {logement.price} € par nuit</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;







