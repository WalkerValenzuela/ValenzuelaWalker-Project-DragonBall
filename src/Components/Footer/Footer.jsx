import React from 'react'
import './Footer.css'
import AWS from '../../Images/promocionAWS.png'
import Netlify from '../../Images/promocionN.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
 
const Footer = () => {
  return (
    <footer>
      <div className='States'>
        <p className="State">CHARACTERS: 58</p>
        <p className="State">TRANSFORMATIONS: 49</p>
        <p className="State">PLANETS: 20</p>
      </div>
      <hr className='Linea'></hr>
      <a className='Status' href="https://stats.uptimerobot.com/Vq3orF05Rl">
        SERVER STATUS:   
        <div className='Circule'></div>
      </a>
      <div className='Promocion'>
        <a href="https://aws.amazon.com/es/what-is-cloud-computing/" target="_blank" rel="noopener noreferrer">
          <img className="AWS" src={AWS} alt="AWS Logo" />
        </a>
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
          <img className="Netlify" src={Netlify} alt="Netlify Logo" />
        </a>
      </div>
      <div className='Redes'>
        <a href='https://github.com/intentodepirata'>
          <GitHubIcon />
        </a>
        <a href='https://www.linkedin.com/in/antonio-alvarez-lopez/'>
          <LinkedInIcon />
        </a>
        <a href='https://ko-fi.com/dragonballapi'>
          <FavoriteIcon />
        </a>
      </div>
      <div className='Name'>
        <p>&lt; &gt; by </p>
        <a className='Creator' href="https://antonioalvarez.dev/">Antonio Alvarez</a>
        2025
      </div>
    </footer>
  )
}

export default Footer