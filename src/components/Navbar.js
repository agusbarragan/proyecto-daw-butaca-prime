
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
<div className="d-flex justify-content-center">
  <Navbar class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
    <Navbar.Brand class="navbar-brand text-center">
      <Link to="/" className='text-decoration-none'>Inicio</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar>
      <Nav className="ml-auto">
        <Link to='' className='text-light p-4' style={{ textDecoration: 'none' }}>Películas</Link>
        <Link to='' className='text-light p-4' style={{ textDecoration: 'none' }}>Opción 2</Link>
        <Link to="/contacto" className='text-light p-4' style={{ textDecoration: 'none' }}>Contacto</Link>
      </Nav>
    </Navbar>
  </Navbar>
</div>
  );
}



export default NavigationBar;
