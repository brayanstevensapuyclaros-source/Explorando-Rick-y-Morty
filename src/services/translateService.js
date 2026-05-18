// Diccionario de traducciones para la API de Rick and Morty

const translations = {
  // ESTADOS
  status: {
    "Alive": "Vivo",
    "Dead": "Muerto",
    "unknown": "Desconocido"
  },

  // GÉNEROS
  gender: {
    "Female": "Femenino",
    "Male": "Masculino",
    "Genderless": "Sin Género",
    "unknown": "Desconocido"
  },

  // ESPECIES
  species: {
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
  },

  // UBICACIONES Y PLANETAS
  locations: {
    "Earth (C-500A)": "Tierra (C-500A)",
    "Earth (Replacement Dimension)": "Tierra (Dimensión Reemplazo)",
    "Earth (J19ζ7)": "Tierra (J19ζ7)",
    "Citadel of Ricks": "Ciudadela de Ricks",
    "Nuptia 4": "Nuptia 4",
    "unknown": "Desconocida",
    "Mortytown of Ricks": "Mortytown de Ricks",
    "Testicle Monster Planet": "Planeta Monstruo Testículo",
    "Gromflom Prime": "Gromflom Prime",
    "Anatomical Park": "Parque Anatómico",
    "Purge Planet": "Planeta Purga",
    "Venzenulon 7": "Venzenulon 7",
    "Post-Apocalyptic Earth": "Tierra Post-Apocalíptica",
    "Bepis 9": "Bepis 9",
    "Blips and Chitz": "Blips y Chitz",
    "Bird World": "Mundo Pájaro",
    "Cronenberg World": "Mundo Cronenberg",
    "Dimension C-1983W": "Dimensión C-1983W",
    "Dimension C-500A": "Dimensión C-500A",
    "Dimension C-131": "Dimensión C-131",
    "Dimension J19ζ7": "Dimensión J19ζ7",
    "Dimension 5-126": "Dimensión 5-126",
    "Dimension J22ε11": "Dimensión J22ε11",
    "Dimension C-500A": "Dimensión C-500A",
    "The Citadel of Ricks": "La Ciudadela de Ricks",
    "Interdimensional Customs": "Aduanas Interdimensionales",
    "Gazorpazorp": "Gazorpazorp",
    "Nicky's Arcade": "Arcade de Nicky",
    "Jerryboree": "Jerryboree",
    "Worldender's Lair": "Guarida del Destructor de Mundos",
    "Zeep Xanflorp's Laboratory": "Laboratorio de Zeep Xanflorp",
    "Anatomy Park": "Parque Anatomía",
    "Signus 5 b": "Signus 5 b",
    "Planet Squanch": "Planeta Squanch",
    "Interdimensional Space": "Espacio Interdimensional",
    "Bepis 9": "Bepis 9",
    "Blips and Chitz": "Blips y Chitz",
    "Fantasy World": "Mundo de Fantasía",
    "Planet Squanch": "Planeta Squanch"
  },

  // PALABRAS COMUNES EN NOMBRES
  nameWords: {
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
    "Zombie": "Zombi",
    "King": "Rey",
    "Queen": "Reina",
    "Prince": "Príncipe",
    "Old": "Viejo",
    "Young": "Joven",
    "Mr": "Sr",
    "Mrs": "Sra",
    "Doctor": "Doctor",
    "Mayor": "Alcalde",
    "Governor": "Gobernador",
    "Captain": "Capitán",
    "General": "General",
    "Admiral": "Almirante"
  }
};

// Función para traducir nombres de personajes
export const translateCharacterName = (originalName) => {
  const nameWords = translations.nameWords;

  if (nameWords[originalName]) return nameWords[originalName];

  let words = originalName.split(" ");
  if (words.length === 2) {
    const prefix = words[0];
    const mainName = words[1];
    if (nameWords[prefix] && ["Rick", "Morty", "Summer", "Beth", "Jerry"].includes(mainName)) {
      const adj = nameWords[prefix].toLowerCase();
      return `${mainName} ${adj.charAt(0).toUpperCase() + adj.slice(1)}`;
    }
  }

  return words.map(word => nameWords[word] || word).join(" ");
};

// Función para traducir estados
export const translateStatus = (status) => {
  return translations.status[status] || status;
};

// Función para traducir géneros
export const translateGender = (gender) => {
  return translations.gender[gender] || gender;
};

// Función para traducir especies
export const translateSpecies = (species) => {
  return translations.species[species] || species;
};

// Función para traducir ubicaciones
export const translateLocation = (locationName) => {
  if (!locationName) return "Desconocida";
  return translations.locations[locationName] || locationName;
};

// Función general para obtener todas las traducciones
export const getTranslations = () => translations;
