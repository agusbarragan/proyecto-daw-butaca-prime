import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Creo el elemento 'raiz' que se asocia con el elemento que tiene el id 'root'
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
// Renderiza el componente App dentro del punto de raiz que se ha creado, lo que inicia la renderizacion de la app en el DOM y muestra el contenido del componente App
      <App />

);