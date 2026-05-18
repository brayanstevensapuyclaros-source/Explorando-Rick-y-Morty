import React from "react";
import {
  translateCharacterName,
  translateStatus,
  translateGender,
  translateSpecies
} from "../../services/translateService";
import "./CharacterCard.css";

const CharacterCard = ({ character, onClick }) => {
  const { name, image, species, status, gender } = character;

  return (
    <div className="character-card" onClick={onClick}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="character-info">
        <h3>{translateCharacterName(name)}</h3>
        <div className="info-item status-container">
          <span className={`status-indicator status-${status}`}></span>
          <span>{translateStatus(status)}</span>
        </div>
        <div className="info-details">
          <div className="detail-row">
            <span className="label">ESPECIE:</span>
            <span className="value">{translateSpecies(species)}</span>
          </div>
          <div className="detail-row">
            <span className="label">GÉNERO:</span>
            <span className="value">{translateGender(gender)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
