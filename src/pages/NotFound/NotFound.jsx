import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4rem', color: '#3498db' }}>404</h1>
      <h2>¡Wubba Lubba Dub Dub!</h2>
      <p>Parece que te has perdido en el multiverso. Esta dimensión no existe.</p>
      <Link to="/" style={{ 
        display: 'inline-block', 
        marginTop: '20px', 
        padding: '10px 20px', 
        backgroundColor: '#3498db', 
        color: 'white', 
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Volver a la Tierra C-137 (Inicio)
      </Link>
    </div>
  );
};

export default NotFound;
