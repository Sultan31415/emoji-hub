import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎉 Welcome to Emoji Hub!</h1>
      <p>Explore and search thousands of emojis with ease.</p>
      <Link to="/emojis">Go to Emoji Catalog →</Link>
    </div>
  );
}
