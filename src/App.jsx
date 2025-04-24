import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/HomePage/Home';
import Male from './Pages/MalePage/Male';
import Female from './Pages/FemalePage/Female';
import About from './Pages/AboutPage/About';
import CharacterDetail from './Pages/CharacterDetailPage/CharacterDetail';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/masculino" element={<Male />} />
        <Route path="/femenino" element={<Female />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/personaje/:id" element={<CharacterDetail />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
  
};

export default App;
