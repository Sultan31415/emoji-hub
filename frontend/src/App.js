import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EmojiCatalog from './pages/EmojiCatalog';



function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/emojis">Emoji Catalog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emojis" element={<EmojiCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
