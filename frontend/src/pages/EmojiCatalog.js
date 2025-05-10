import React, { useEffect, useState } from 'react';
import './EmojiCatalog.css';

export default function EmojiCatalog() {
  const [emojis, setEmojis] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let url = `${API_URL}/emojis`;
    if (search) {
      url += `?search=${search}`;
    } else if (category) {
      url = `${API_URL}/emojis/category/${category}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setEmojis(data))
      .catch(err => console.error("Error:", err));
  }, [search, category]);

  let sortedEmojis = [...emojis];
  if (sortBy === 'name-asc') {
    sortedEmojis.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    sortedEmojis.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="emoji-page">
      <h2>📚 Emoji Catalog</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setCategory('');
          }}
        />

        <select
          onChange={e => {
            setCategory(e.target.value);
            setSearch('');
          }}
          value={category}
        >
          <option value="">-- Select Category --</option>
          <option value="smileys-and-people">Smileys and People</option>
          <option value="animals-and-nature">Animals and Nature</option>
          <option value="food-and-drink">Food and Drink</option>
          <option value="travel-and-places">Travel and Places</option>
          <option value="activities">Activities</option>
          <option value="objects">Objects</option>
          <option value="symbols">Symbols</option>
          <option value="flags">Flags</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">-- Sort Alphabetically --</option>
          <option value="name-asc">A → Z</option>
          <option value="name-desc">Z → A</option>
        </select>
      </div>

      <div className="emoji-grid">
        {sortedEmojis.map((emoji, index) => (
          <div key={index} className="emoji-card">
            <div className="emoji" dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />
            <div className="emoji-name">{emoji.name}</div>
            <div className="emoji-category">{emoji.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
