import React, { useEffect, useState } from 'react';

export default function EmojiCatalog() {
  const [emojis, setEmojis] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

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

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🧾 Emoji Catalog</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setCategory('');
        }}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />

      <select
        onChange={e => {
          setCategory(e.target.value);
          setSearch('');
        }}
        value={category}
        style={{ marginLeft: '1rem', padding: '0.5rem' }}
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

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {emojis.map((emoji, index) => (
          <li key={index} style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>
            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }} dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />
            <strong>{emoji.name}</strong> – <em>{emoji.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
