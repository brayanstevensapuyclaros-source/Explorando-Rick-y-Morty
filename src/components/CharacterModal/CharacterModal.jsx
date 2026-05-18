import React from "react";
import {
  translateCharacterName,
  translateStatus,
  translateGender,
  translateSpecies,
  translateLocation
} from "../../services/translateService";
import "./CharacterModal.css";

const CharacterModal = ({ character, isOpen, onClose }) => {
  if (!isOpen || !character) return null;

  const { name, image, species, status, gender, origin, location, episode } = character;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={image} alt={name} />
          </div>
          
          <div className="modal-info">
            <h1>{translateCharacterName(name)}</h1>
            
            <div className="modal-status">
              <span className={`status-badge status-${status}`}>
                {translateStatus(status)}
              </span>
            </div>

            <div className="modal-details">
              <div className="detail-section">
                <h3>INFORMACIÓN GENERAL</h3>
                <div className="detail-item">
                  <span className="detail-label">ESPECIE:</span>
                  <span className="detail-value">{translateSpecies(species)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">GÉNERO:</span>
                  <span className="detail-value">{translateGender(gender)}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>UBICACIÓN</h3>
                <div className="detail-item">
                  <span className="detail-label">ACTUAL:</span>
                  <span className="detail-value">{translateLocation(location?.name)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">ORIGEN:</span>
                  <span className="detail-value">{translateLocation(origin?.name)}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>APARICIONES</h3>
                <div className="detail-item">
                  <span className="detail-label">EPISODIOS:</span>
                  <span className="detail-value">{episode?.length || 0} episodios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterModal;
