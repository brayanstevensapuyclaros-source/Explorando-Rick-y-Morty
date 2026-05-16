import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCharacters } from '../../services/characterService';
import './Home.css';

const Home = () => {
  const [stats, setStats] = useState({ count: 0, pages: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAllCharacters();
        setStats({ 
          count: data.info.count, 
          pages: data.info.pages 
        });
      } catch (err) {
        console.error("Error fetching stats");
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="portal-container">
          <div className="portal-vortex"></div>
          <div className="portal-ring ring-1"></div>
          <div className="portal-ring ring-2"></div>
        </div>
        
        <h1>RICKIPEDIA</h1>
        <p>Base de datos interdimensional del Multiverso C-137. Acceso denegado a miembros de la Federación Galáctica.</p>
        
        <div className="stats-container">
          <div className="stat-item">REGISTROS: {stats.count}</div>
          <div className="stat-item">DIMENSIONES: {stats.pages}</div>
        </div>
      </section>

      <div className="portal-grid">
        <Link to="/all" className="portal-card card-all">
          <i>🧬</i>
          <h3>REGISTRO TOTAL</h3>
          <p>Análisis biológico de todas las formas de vida catalogadas.</p>
        </Link>

        <Link to="/species/Human" className="portal-card card-human">
          <i>🌍</i>
          <h3>ESPECIE HUMANA</h3>
          <p>Sujetos nativos del planeta Tierra. Nivel de amenaza: Bajo.</p>
        </Link>

        <Link to="/species/Alien" className="portal-card card-alien">
          <i>🛸</i>
          <h3>VIDA ALIENÍGENA</h3>
          <p>Entidades biológicas no identificadas del espacio exterior.</p>
        </Link>

        <Link to="/species/Robot" className="portal-card card-robot">
          <i>🤖</i>
          <h3>INTELIGENCIA ARTIFICIAL</h3>
          <p>Autómatas y seres sintéticos con protocolos de conciencia.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
