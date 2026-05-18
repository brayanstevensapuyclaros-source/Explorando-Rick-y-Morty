import React from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const NotFound = () => {
  return (
    <div style={{ padding: '60px 20px' }}>
      <ErrorMessage 
        type='404' 
        message='Parece que te has perdido en el multiverso. Esta dimensión no existe en nuestro portal centralizado.' 
      />
    </div>
  );
};

export default NotFound;
