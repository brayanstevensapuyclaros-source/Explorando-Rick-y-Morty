import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../../services/characterService';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './AllCharacters.css';

const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getAllCharacters();
        setCharacters(data.results);
      } catch (err) {
        setError("ERROR CRÍTICO: No se pudo conectar con la base de datos de la Ciudadela.");
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) return (
    <div className="status-message">
      <div className="loading-spinner"></div>
      <p>CARGANDO REGISTROS GÁLACTICOS...</p>
    </div>
  );
  
  if (error) return (
    <div className="home-container">
      <div className="status-message error-message">
        <p>⚠️ {error}</p>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      <h1>REGISTRO CIVIL DE PERSONAJES</h1>
      <div className="character-grid">
        {characters.map(char => <CharacterCard key={char.id} character={char} />)}
      </div>
    </div>
  );
};

export default AllCharacters;
