import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // we'll create this CSS next

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <h1>🎉 Welcome to <span className="emoji-hub">Emoji Hub</span></h1>
        <p className="subtitle">Search, explore, and smile your way through thousands of emojis 😄</p>
        <div className="emoji-preview">😍 🤖 🎨 🚀 🧠 🐱‍👤 🎯 🌍</div>
        <Link to="/emojis" className="hero-button">Browse Emoji Catalog →</Link>
      </div>
    </div>
  );
}
