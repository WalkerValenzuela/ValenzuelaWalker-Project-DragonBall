import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CharacterCard.css';
import Background from '../../Images/Background.webp'

const CharacterCard = ({ character }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/personaje/${character.id}`);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <div className="Fondo">
      <img
        src={Background}
        alt="Background"
        className="Background"
      />
      <img
        src={character.image}
        alt={character.name}
        className="character-img"
      />
      </div>
      <div className="character-content">
        <h2 className="character-name"><strong>{character.name}</strong></h2>
        <p className='Orange' id="razaGenero">{character.race} - {character.gender}</p>
        <p><strong>Base Ki:</strong></p>
        <p className='Orange'><strong>{character.ki}</strong></p>
        <p><strong>Ki Máximo:</strong></p>
        <p className='Orange'><strong>{character.maxKi}</strong></p>
        <p><strong>Afiliación:</strong></p>
        <p className='Orange'><strong>{character.affiliation}</strong></p>
      </div>
    </div>
  );
};

export default CharacterCard;
