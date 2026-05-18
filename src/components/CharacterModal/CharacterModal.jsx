import React from "react";
import "./CharacterModal.css";

const CharacterModal = ({ character, isOpen, onClose }) => {
  if (!isOpen || !character) return null;

  const { name, image, species, status, gender, origin, location, episode } = character;

  const statusES = {
    "Alive": "Vivo",
    "Dead": "Muerto",
    "unknown": "Desconocido"
  };

  const genderES = {
    "Female": "Femenino",
    "Male": "Masculino",
    "Genderless": "Sin Género",
    "unknown": "Desconocido"
  };

  const speciesES = {
    "Human": "Humano",
    "Alien": "Alienígena",
    "Humanoid": "Humanoide",
    "Poopybutthole": "Poopybutthole",
    "Mythological Creature": "Criatura Mitológica",
    "Animal": "Animal",
    "Robot": "Robot",
    "Cronenberg": "Cronenberg",
    "Disease": "Enfermedad",
    "unknown": "Desconocido"
  };

  const translateName = (originalName) => {
    const translations = {
      "Evil": "Malvado",
      "Birdperson": "Persona Pájaro",
      "Scary Terry": "Terry el Terrorífico",
      "Ants in my Eyes Johnson": "Johnson Hormigas en los Ojos",
      "Pencilvester": "Lápizvester",
      "Pickle Rick": "Rick Pepinillo",
      "Tiny Rick": "Pequeño Rick",
      "Doofus Rick": "Rick Atontado",
      "Agency Director": "Director de la Agencia",
      "Alien": "Alienígena",
      "Cyborg": "Cíborg",
      "Cyclops": "Cíclope",
      "Grandpa": "Abuelo",
      "Hammerhead": "Cabeza de Martillo",
      "Journalist": "Periodista",
      "Mechanical": "Mecánico",
      "Muscular": "Musculoso",
      "Pilot": "Piloto",
      "President": "Presidente",
      "Prisoner": "Prisionero",
      "Professor": "Profesor",
      "Quantum": "Cuántico",
      "Scientist": "Científico",
      "Secret Service": "Servicio Secreto",
      "Shrimp": "Camarón",
      "Slippery": "Resbaladizo",
      "Super": "Súper",
      "Toxic": "Tóxico",
      "Vampire": "Vampiro",
      "Warrior": "Guerrero",
      "Zombie": "Zombi"
    };

    if (translations[originalName]) return translations[originalName];

    let words = originalName.split(" ");
    if (words.length === 2) {
      const prefix = words[0];
      const mainName = words[1];
      if (translations[prefix] && ["Rick", "Morty", "Summer", "Beth", "Jerry"].includes(mainName)) {
        const adj = translations[prefix].toLowerCase();
        return `${mainName} ${adj.charAt(0).toUpperCase() + adj.slice(1)}`;
      }
    }

    return words.map(word => translations[word] || word).join(" ");
  };

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
            <h1>{translateName(name)}</h1>
            
            <div className="modal-status">
              <span className={`status-badge status-${status}`}>
                {statusES[status] || status}
              </span>
            </div>

            <div className="modal-details">
              <div className="detail-section">
                <h3>INFORMACIÓN GENERAL</h3>
                <div className="detail-item">
                  <span className="detail-label">ESPECIE:</span>
                  <span className="detail-value">{speciesES[species] || species}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">GÉNERO:</span>
                  <span className="detail-value">{genderES[gender] || gender}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>UBICACIÓN</h3>
                <div className="detail-item">
                  <span className="detail-label">ACTUAL:</span>
                  <span className="detail-value">{location?.name || "Desconocida"}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">ORIGEN:</span>
                  <span className="detail-value">{origin?.name || "Desconocido"}</span>
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
