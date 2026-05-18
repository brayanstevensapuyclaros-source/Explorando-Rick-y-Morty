import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si scrolleamos más de 100px hacia abajo, ocultamos el navbar
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/search/" + searchTerm);
      setSearchTerm('');
      closeMenu();
    }
  };

  const speciesList = [
    { label: 'Human', value: 'Human' },
    { label: 'Alien', value: 'Alien' },
    { label: 'Robot', value: 'Robot' },
    { label: 'Humanoid', value: 'Humanoid' },
    { label: 'Mythological Creature', value: 'Mythological Creature' },
    { label: 'Cronenberg', value: 'Cronenberg' },
    { label: 'Poopybutthole', value: 'Poopybutthole' },
    { label: 'Animal', value: 'Animal' },
    { label: 'unknown', value: 'unknown' }
  ];

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        {/* MARCA */}
        <div className="navbar-left">
          <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
            EXPLORADOR DE RYM
          </NavLink>
        </div>

        {/* ÚNICA BARRA DE BÚSQUEDA */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar espécimen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Buscar">🔍</button>
        </form>

        {/* LADO DERECHO: LINKS + HAMBURGUESA */}
        <div className="navbar-right">
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>Portal</NavLink>
            <NavLink to="/all" className="nav-link" onClick={closeMenu}>Registro</NavLink>

            <div className="nav-dropdown">
              <span className="nav-link dropdown-trigger">Especies ▾</span>
              <div className="dropdown-content">
                {speciesList.map(s => (
                  <NavLink key={s.value} to={"/species/" + s.value} onClick={closeMenu}>
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;