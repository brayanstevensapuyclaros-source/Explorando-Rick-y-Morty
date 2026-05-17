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
          {/* Halo exterior */}
          <div className="portal-halo"></div>

          {/* Portal SVG con distorsión líquida real */}
          <svg
            className="portal-svg"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Filtro de distorsión líquida (corazón del efecto) */}
              <filter id="liquidFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.018"
                  numOctaves="3"
                  seed="5"
                  result="turbulence"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="25s"
                    values="0.015;0.028;0.02;0.015"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="seed"
                    dur="40s"
                    values="0;15;30;0"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turbulence"
                  scale="32"
                />
              </filter>

              {/* Gradiente principal del portal */}
              <radialGradient id="portalGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="8%" stopColor="#f5ffcc" stopOpacity="1" />
                <stop offset="22%" stopColor="#e4ff5e" stopOpacity="1" />
                <stop offset="42%" stopColor="#b2df28" stopOpacity="1" />
                <stop offset="65%" stopColor="#6fa01a" stopOpacity="1" />
                <stop offset="85%" stopColor="#2d4a08" stopOpacity="1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.95" />
              </radialGradient>

              {/* Gradiente del núcleo brillante */}
              <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="35%" stopColor="#f5ffcc" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#d4ff3a" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#b2df28" stopOpacity="0" />
              </radialGradient>

              {/* Filtro de brillo del núcleo */}
              <filter id="coreGlow">
                <feGaussianBlur stdDeviation="4" result="blurred" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Portal principal: círculo con distorsión líquida */}
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="url(#portalGradient)"
              filter="url(#liquidFilter)"
            />

            {/* Núcleo pulsante */}
            <circle
              cx="200"
              cy="200"
              r="40"
              fill="url(#coreGradient)"
              filter="url(#coreGlow)"
            >
              <animate
                attributeName="r"
                values="35;55;35"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Capa de remolino conic-gradient sobre el SVG */}
          <div className="portal-swirl-overlay"></div>

          {/* Anillos orbitales */}
          <div className="portal-ring ring-1"></div>
          <div className="portal-ring ring-2"></div>

          {/* Partículas flotantes */}
          <div className="portal-particles">
            <span className="particle p1"></span>
            <span className="particle p2"></span>
            <span className="particle p3"></span>
            <span className="particle p4"></span>
            <span className="particle p5"></span>
            <span className="particle p6"></span>
          </div>
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