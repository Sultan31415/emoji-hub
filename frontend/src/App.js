import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EmojiCatalog from './pages/EmojiCatalog';
import './App.css'; // Make sure this line is here to apply styles

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-button">🏠 Home</Link>
          <Link to="/emojis" className="nav-button">📚 Emoji Catalog</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emojis" element={<EmojiCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
