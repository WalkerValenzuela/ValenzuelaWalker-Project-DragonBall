import React from 'react'
import { Link } from 'react-router-dom';
import './ErrorPage.css'


const ErrorPage = () => {
  return (
    <div className="main-container">
      <p className="como"> ¿Como llegaste Aqui? </p>
      <div className="container">
        <div className="goku"></div>
        <div className="sombra"></div>
      </div>
      <Link to="/" className="error-button">Volver al inicio</Link>
    </div> 
    )
}

export default ErrorPage