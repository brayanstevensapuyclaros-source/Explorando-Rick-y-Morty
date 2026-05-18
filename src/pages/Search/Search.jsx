import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchCharactersByName } from '../../services/characterService';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './Search.css';

const Search = () => {
  const { query } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchCharactersByName(query);
        
        if (data && data.results && data.results.length > 0) {
          setCharacters(data.results);
        } else {
          setCharacters([]);
          setError(`No se encontraron personajes que inicien con "${query}"`);
        }
      } catch (err) {
        console.error('Search error:', err);
        setError(`No se encontraron personajes que inicien con "${query}"`);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
    window.scrollTo(0, 0);
  }, [query]);

  if (loading) return (
    <div className="search-container">
      <div className="status-message">
        <div className="loading-spinner"></div>
        <p>ESCANEANDO REGISTROS...</p>
      </div>
    </div>
  );

  return (
    <div className="search-container">
      <h1 style={{ marginBottom: '10px' }}>RESULTADOS DE BÚSQUEDA</h1>
      <p style={{ color: '#b2df28', marginBottom: '30px', fontSize: '0.9rem' }}>
        Personajes que inician con: "<span style={{ fontWeight: 'bold' }}>{query}</span>"
      </p>

      {error ? (
        <div className="status-message error-message">
          <p>⚠️ {error}</p>
        </div>
      ) : (
        <div className="character-grid">
          {characters.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
