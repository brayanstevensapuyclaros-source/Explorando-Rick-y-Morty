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
