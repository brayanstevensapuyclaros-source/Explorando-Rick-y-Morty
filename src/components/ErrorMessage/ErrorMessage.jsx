import React from 'react';
import './ErrorMessage.css';
import { Link } from 'react-router-dom';

const ErrorMessage = ({ message, type = 'not-found' }) => {
  const quotes = [
    "¡Wubba Lubba Dub Dub! Algo salió mal en esta dimensión.",
    "Escucha Morty, hice un desastre con la búsqueda. No hay nada aquí.",
    "¡Mírenme! ¡Soy el Sr. Meeseeks! ¡La existencia es dolor cuando no encuentro lo que buscas!",
    "Parece que este registro fue borrado por el Consejo de Ricks.",
    "¡DISQUALIFIED! Esta búsqueda no tiene talento.",
    "Gran Scott, Morty... espera, serie equivocada. ¡Estamos perdidos!"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className='portal-error-container'>
      <div className='portal-wrapper'>
        <div className='portal-circle'></div>
      </div>
      
      <h1 className='glitch-text'>
        {type === '404' ? 'ERROR 404' : 'ERROR DIMENSIONAL'}
      </h1>
      
      <p className='error-quote'>"{randomQuote}"</p>
      
      {message && <p className='error-description'>{message}</p>}

      <Link to='/' className='btn-portal'>
        REGRESAR A LA TIERRA C-137
      </Link>
    </div>
  );
};

export default ErrorMessage;
