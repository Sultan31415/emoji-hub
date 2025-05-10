import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [randomEmoji, setRandomEmoji] = useState(null);

  const handleRandomClick = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/emojis/random`);
      const data = await res.json();
      setRandomEmoji(data);
    } catch (err) {
      console.error("Error fetching random emoji:", err);
    }
  };

  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <h1>🎉 Welcome to <span className="emoji-hub">Emoji Hub</span></h1>
        <p className="subtitle">Search, explore, and smile your way through thousands of emojis 😄</p>
        <div className="emoji-preview">😍 🤖 🎨 🚀 🧠 🐱‍👤 🎯 🌍</div>

        <Link to="/emojis" className="hero-button">Browse Emoji Catalog →</Link>

        <button className="random-button" onClick={handleRandomClick}>🎲 Surprise Me!</button>

        {randomEmoji && (
          <div className="random-emoji-box">
            <div className="emoji" dangerouslySetInnerHTML={{ __html: randomEmoji.htmlCode[0] }} />
            <h3>{randomEmoji.name}</h3>
            <p>{randomEmoji.category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
