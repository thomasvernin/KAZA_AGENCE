import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

const LogementDetails = () => {
  const { id } = useParams();
  const logement = logements.find(item => item.id === parseInt(id));

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={require(`../images/${logement.image}`).default} alt={logement.title} />
      <p>Location: {logement.location}</p>
      <p>Prix: {logement.price} € par nuit</p>
    </div>
  );
};

export default LogementDetails;
