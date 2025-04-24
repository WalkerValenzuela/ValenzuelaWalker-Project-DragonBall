import React, { useState, useEffect } from 'react';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import './Male.css';

const Male = () => {
  const [characters, setCharacters] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const hasMore = visibleCount < characters.length;
  const fetchAllMaleCharacters = async () => {
    let allMales = [];
    let currentPage = 1;
    let totalPages = 1;

    try {
      while (currentPage <= totalPages) {
        const res = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}&limit=50`);
        const data = await res.json();

        const maleChars = data.items.filter(char => char.gender === 'Male');
        allMales = [...allMales, ...maleChars];

        totalPages = data.meta.totalPages;
        currentPage++;
      }
      setCharacters(allMales);
    } catch (err) {
      console.error('Error al cargar personajes masculinos:', err);
    }
  };

  useEffect(() => {
    fetchAllMaleCharacters();
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
    <div className="male-page-container">
      <h1 className="Title">Personajes Masculinos</h1>
      <div className="male-character-grid">
        {characters.slice(0, visibleCount).map((char, index) => (
          <div
            key={char.id}
            className="male-character-grid-item fade-in"
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

export default Male;
