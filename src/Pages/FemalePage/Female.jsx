import React, { useState, useEffect } from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './Female.css';

const Female = () => {
  const [characters, setCharacters] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const hasMore = visibleCount < characters.length;

  const fetchAllFemaleCharacters = async () => {
    let allFemales = [];
    let currentPage = 1;
    let totalPages = 1;

    try {
      while (currentPage <= totalPages) {
        const res = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}&limit=50`);
        const data = await res.json();

        const femaleChars = data.items.filter(char => char.gender === 'Female');
        allFemales = [...allFemales, ...femaleChars];

        totalPages = data.meta.totalPages;
        currentPage++;
      }
      setCharacters(allFemales);
    } catch (err) {
      console.error('Error al cargar personajes femeninos:', err);
    }
  };

  useEffect(() => {
    fetchAllFemaleCharacters();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      if (scrollTop + windowHeight >= fullHeight - 100) {
        setVisibleCount((prev) => prev + 8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="female-page-container">
      <h1 className="Title">Personajes Femeninos</h1>
      
      <div className="female-character-grid">
        {characters.slice(0, visibleCount).map((char, index) => (
          <div
            key={char.id}
            className="female-character-grid-item fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
      
      {hasMore ? (
        <p className="loading-indicator">Sigue Bajando Para Más...</p>
      ) : (
        characters.length > 0 && (
          <p className="loading-indicator">Todos los personajes son visibles.</p>
        )
      )}
    </div>
  );
};

export default Female;
