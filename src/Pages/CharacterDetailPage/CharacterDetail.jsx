import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        console.error('Error al cargar detalle:', err);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div className="not-found">Personaje no encontrado</div>;

  const { name, image, race, gender, ki, maxKi, affiliation, description, originPlanet, transformations } = character;

  return (
    <div className="detail-container">
      <h1 className="detail-name">{name}</h1>

      <div className="detail-details">
        <div className="detail-card">
          <img src={image} alt={name} className="detail-image" />
        </div>

        <div className="detail-info">
          <p className='infoBasic'><strong className='subtitle'>Raza:</strong> {race}</p>
          <p className='infoBasic'><strong className='subtitle'>Género:</strong> {gender}</p>
          <p className='infoBasic'><strong className='subtitle'>Ki:</strong> {ki}</p>
          <p className='infoBasic'><strong className='subtitle'>Ki Máximo:</strong> {maxKi}</p>
          <p className='infoBasic'><strong className='subtitle'>Afiliación:</strong> {affiliation}</p>
        </div>
      </div>

      <div className="detail-description">
        <h2 className='titule-description'>Descripción</h2>
        <p>{description}</p>
      </div>

      {originPlanet && (
        <div className="planet-section">
          <h2>Planeta de Origen: {originPlanet.name}</h2>
          <p className={`planet-status ${originPlanet.isDestroyed ? 'destroyed' : 'alive'}`}>
            Estado del planeta: {originPlanet.isDestroyed ? 'Destruido' : 'Existente'}
          </p>
          <div className="planet-content">
            <img src={originPlanet.image} alt={originPlanet.name} className="planet-image" />
          </div>
          <div>
            <h2 className='planet-titule'>Descripción del Planeta: </h2>
            <p className="planet-description">{originPlanet.description}</p>
          </div>
        </div>
      )}

      <div className="details-section">
        <h2 className='transformation-title'>Transformaciones</h2>
        <div className="details-grid">
          {transformations.map((trans) => (
            <div key={trans.id} className="detail-card">
              <img src={trans.image} alt={trans.name} className="detail-image" id="detail-image-transformations" />
              <div className="detail-transformation-info">
                <h3>{trans.name}</h3>
                <p>Ki: {trans.ki}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;