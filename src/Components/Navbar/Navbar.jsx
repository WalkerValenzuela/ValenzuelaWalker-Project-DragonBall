import React from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../../Images/iconLogo.webp'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img id="iconLogo" alt="Icono"src={navbarLogo}></img>
      </div> 
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/masculino" className="navbar-link">Masculino</Link>
        <Link to="/femenino" className="navbar-link">Femenino</Link>
        <Link to="/acerca" id="botonAcerca" className="navbar-link">Acerca de</Link>
      </div>
    </nav>
  );
};

export default Navbar;
