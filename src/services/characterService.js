const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/?page=${page}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const getCharactersBySpecies = async (species, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/?species=${species}&page=${page}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching characters by species (${species}):`, error);
    throw error;
  }
};

export const searchCharactersByName = async (name) => {
  try {
    let allCharacters = [];
    let page = 1;
    let hasNextPage = true;
    const maxPages = 50; // Límite de seguridad

    // Obtener todos los personajes de todas las páginas
    while (hasNextPage && page <= maxPages) {
      try {
        const response = await fetch(`${BASE_URL}/?page=${page}`);
        
        if (!response.ok) {
          hasNextPage = false;
          break;
        }
        
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
          allCharacters = allCharacters.concat(data.results);
        }
        
        // Verificar si hay más páginas
        if (data.info && data.info.next) {
          page++;
        } else {
          hasNextPage = false;
        }
      } catch (pageError) {
        console.error(`Error fetching page ${page}:`, pageError);
        hasNextPage = false;
      }
    }

    // Filtrar localmente los que inician con el término buscado
    const filteredCharacters = allCharacters.filter(char =>
      char.name && char.name.toLowerCase().startsWith(name.toLowerCase())
    );

    return {
      results: filteredCharacters,
      info: { count: filteredCharacters.length }
    };
  } catch (error) {
    console.error(`Error fetching characters by name (${name}):`, error);
    return {
      results: [],
      info: { count: 0 }
    };
  }
};
