import React from 'react'
import logOut from '../functions/logOut';

//import '../styles/styles.css';

const Home = () => {

  return (
    <div class="d-flex justify-content-end">
        <button onClick={ logOut } class="btn btn-danger btn-sm me-2">Cerrar sesión</button>
    </div>
  )
}

export default Home