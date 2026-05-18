import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCharactersBySpecies } from "../../services/characterService";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import Pagination from "../../components/Pagination/Pagination";
import "./Species.css";

const Species = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const speciesOptions = [
    { label: "Humano", value: "Human" },
    { label: "Alien", value: "Alien" },
    { label: "Robot", value: "Robot" },
    { label: "Humanoide", value: "Humanoid" },
    { label: "Criatura Mitológica", value: "Mythological Creature" },
    { label: "Cronenberg", value: "Cronenberg" },
    { label: "Poopybutthole", value: "Poopybutthole" },
    { label: "Animal", value: "Animal" },
    { label: "Desconocido", value: "unknown" }
  ];

  const getSpeciesLabel = (val) => {
    const option = speciesOptions.find(o => o.value === val);
    return option ? option.label.toUpperCase() : val.toUpperCase();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCharactersBySpecies(type, currentPage);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        setError("No se encontraron resultados para esta especie.");
        setCharacters([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecies();
    window.scrollTo(0, 0);
  }, [type, currentPage]);

  const handleSpeciesChange = (event) => {
    navigate("/species/" + event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home-container">
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "40px",
        borderBottom: "1px solid rgba(178, 223, 40, 0.2)",
        paddingBottom: "20px"
      }}>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>ESPECIE: {getSpeciesLabel(type)}</h1>

        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ color: "#888", fontFamily: "Orbitron", fontSize: "0.8rem" }}>FILTRAR:</span>
          <select
            value={type}
            onChange={handleSpeciesChange}
            style={{
              padding: "10px 20px",
              borderRadius: "50px",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              border: "1px solid var(--portal-green)",
              outline: "none",
              cursor: "pointer",
              fontFamily: "Orbitron",
              fontSize: "0.8rem"
            }}
          >
            {speciesOptions.map(option => (
              <option key={option.value} value={option.value} style={{ background: "#1a1a1a" }}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="status-message">
          <div className="loading-spinner"></div>
          <p>ESCANEANDO MULTIVERSO...</p>
        </div>
      ) : error ? (
        <div className="status-message error-message">
          <p>⚠️ {error}</p>
        </div>
      ) : (
        <>
          <div className="character-grid">
            {characters.map(char => (
              <CharacterCard 
                key={char.id} 
                character={char}
                onClick={() => setSelectedCharacter(char)}
              />
            ))}
          </div>
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      )}
      <CharacterModal 
        character={selectedCharacter}
        isOpen={selectedCharacter !== null}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
};

export default Species;
