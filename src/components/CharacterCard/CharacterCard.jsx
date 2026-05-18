import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character, onClick }) => {
  const { name, image, species, status, gender } = character;

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
    <div className="character-card" onClick={onClick}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="character-info">
        <h3>{translateName(name)}</h3>
        <div className="info-item status-container">
          <span className={`status-indicator status-${status}`}></span>
          <span>{statusES[status] || status}</span>
        </div>
        <div className="info-details">
          <div className="detail-row">
            <span className="label">ESPECIE:</span>
            <span className="value">{speciesES[species] || species}</span>
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
