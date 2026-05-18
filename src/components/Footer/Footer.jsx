import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>RICKIPEDIA</h4>
          <p>
            El recurso definitivo para exploradores interdimensionales. 
            Documentando la vida y tecnología a través de la Curva Central Finita.
          </p>
        </div>

        <div className="footer-section">
          <h4>NAVEGACIÓN</h4>
          <ul className="footer-links">
            <li><Link to="/">Portal de Inicio</Link></li>
            <li><Link to="/all">Registros Totales</Link></li>
            <li><Link to="/species/Human">Especie Humana</Link></li>
            <li><Link to="/species/Alien">Vida Alienígena</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CATEGORÍAS</h4>
          <ul className="footer-links">
            <li><Link to="/species/Robot">Robótica</Link></li>
            <li><Link to="/species/Mythological Creature">Criaturas Mitológicas</Link></li>
            <li><Link to="/species/Cronenberg">Cronenbergs</Link></li>
            <li><Link to="/species/Poopybutthole">Poopybuttholes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>PROTOCOLO</h4>
          <p>
            Propiedad de la Ciudadela de Ricks. <br />
            Cualquier uso no autorizado será castigado con el envío a la Dimensión del Trasero.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <span className="brand-accent">EXPLORADOR RICK Y MORTY</span> © 2026 
          - PROYECTO DESARROLLADO CON REACT Y ENERGÍA DE CRISTAL ISÓTOPO 322
          - CREADO POR BRAYAN STEVEN SAPUY CLAROS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
