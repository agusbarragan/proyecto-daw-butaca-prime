//import { useFirebaseApp } from 'reactfire';
import React, { useState } from 'react';
//import { app } from './firebase-config';
import Home from './views/Home';
import Logueo from './views/Logueo';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth'; //Vigila los cambios de sesion, si inicio sesion si cerro sesion, si hay usuario, si no lo hay
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import { GlobalStyled, StyledApp } from './Styles';
import MovieRooms from './components/MovieRooms';
import Contacto from './components/Contacto';
import Seats from './components/Seats';

function App() {
 
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <>
      <div class="d-flex justify-content-end">
      </div>
      {usuario && (
        <div class='d-flex justify-content-end'>
          <p class='text-light'>¡Bienvenido! {usuario.email}</p>
        </div>
      )}
      {usuario ? <Home /> : <Logueo />}
      <StyledApp>
        <GlobalStyled />
        <BrowserRouter>
          <Routes>
            {usuario && (
              <Route path='/' element={<MainPage />} />
            )}
            <Route path='/contacto' element={<Contacto />} />
            <Route path={`/movies/:id`} element={<MovieRooms />} />
            <Route path='/reserva/:id/:selectedRoom' element={<Seats />}/>
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </>
  );
}

export default App;
