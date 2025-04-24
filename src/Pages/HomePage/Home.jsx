import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import homeLogo from '../../Images/homeLogo.webp';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const hasMore = visibleCount < characters.length;
  const fetchAllCharacters = async () => {
    let allCharacters = [];
    let currentPage = 1;
    let totalPages = 1;

    try {
      while (currentPage <= totalPages) {
        const response = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}&limit=50`);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.items];
        totalPages = data.meta.totalPages;
        currentPage++;
      }

      setCharacters(allCharacters);
    } catch (err) {
      console.error('Error cargando personajes:', err);
    }
  };

    useEffect(() => {
    fetchAllCharacters();
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
    <Container className="home-content-container" maxWidth={false} disableGutters sx={{padding: 0 }}>
      <div className="logo-container">
        <img src={homeLogo} alt="Logo Dragon Ball Super" className="dragon-logo" />
        <h1 className="homeTitulo">The Dragon Ball API</h1>
      </div>
      <div className="character-grid">
        {characters.slice(0, visibleCount).map((char, index) => (
          <div
            key={char.id}
            className="character-grid-item fade-in"
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
    </Container>
  );
};

export default Home;
