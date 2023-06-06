import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate(); // Para cambiar la ubicacion de la pagina

  return (
    <button onClick={() => navigate(-1)} className='btn btn-primary'>Volver</button> // Creo un boton volver
  );
}

export default BackButton;
