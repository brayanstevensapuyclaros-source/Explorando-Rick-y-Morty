import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const { name, image, species, status, gender } = character;

  const statusES = {
    'Alive': 'Vivo',
    'Dead': 'Muerto',
    'unknown': 'Desconocido'
  };

  const genderES = {
    'Female': 'Femenino',
    'Male': 'Masculino',
    'Genderless': 'Sin Género',
    'unknown': 'Desconocido'
  };

  return (
    <div className="character-card">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="character-info">
        <h3>{name}</h3>
        <div className="info-item status-container">
          <span className={`status-indicator status-${status}`}></span>
          <span>{statusES[status] || status}</span>
        </div>
        <div className="info-details">
          <div className="detail-row">
            <span className="label">ESPECIE:</span>
            <span className="value">{species}</span>
          </div>
          <div className="detail-row">
            <span className="label">GÉNERO:</span>
            <span className="value">{genderES[gender] || gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
