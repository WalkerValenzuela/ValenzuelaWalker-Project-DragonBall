import React from 'react';
import {Typography} from '@mui/material';
import Logo from '../../Images/homeLogo.webp'
import Walker from '../../Images/imageWalker.jpeg'
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      <Typography variant="h4" gutterBottom>Acerca de:</Typography>
      <img src={Logo} alt="Logo" className='aboutLogo'/>
      <div className='aboutme'>
      <img src={Walker} alt="WalkerPerfil" className='aboutWalker'/>
        <div className='about-text'>
          <p className='about-information'>Creador: Walker Alejandro Valenzuela Guerrero </p>
          <p className='about-information'>Carrera: Ingeniería en Sistemas</p>
          <p className='about-information'>Curso: Programación Web 2025-I</p>
          <p className='about-information'>Grupo: 2</p>
        </div>
      </div>
    </div>
  );
};

export default About;
