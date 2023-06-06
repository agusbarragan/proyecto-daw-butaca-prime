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
import Review from './components/Review';
import AnularReservas from './functions/anularReserva';

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
          <p class='text-light m-2'>¡Bienvenido! {usuario.email}</p>
        </div>
      )}
      {usuario ? <Home /> : <Logueo />}

      <StyledApp>
        <GlobalStyled />

        <BrowserRouter>
        {/* Es como una plantilla principal de la web  */}

        {/* Cargamos los componentes que coinciden con el path */}

          <Routes>
            {usuario && (
              <Route path='/' element={<MainPage />} />
            )}
            <Route path='/anularreserva' element={<AnularReservas />} />
            <Route path='/starrating' element={<Review />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path={`/movies/:id/:title`} element={<MovieRooms />} />
            <Route path='/reserva/:id/:title/:selectedRoom/:hora' element={<Seats />}/>
        </Routes>


        </BrowserRouter>

      </StyledApp>
    </>
  );
}

export default App;
