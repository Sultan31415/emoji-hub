import React, { useEffect, useState } from 'react';
import EmojiModal from './EmojiModal';
import './EmojiCatalog.css';

export default function EmojiCatalog() {
  const [emojis, setEmojis] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleCardClick = async (emoji) => {
    setSelectedEmoji(emoji);
    setDescription('');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/emoji/description?name=${encodeURIComponent(emoji.name)}&category=${encodeURIComponent(emoji.category)}`);
      const text = await res.text();
      setDescription(text);
    } catch {
      setDescription('Description not available.');
    } finally {
      setLoading(false);
    }
  };

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
        {/* ... same as before ... */}
      </div>

      <div className="emoji-grid">
        {sortedEmojis.map((emoji, index) => (
          <div key={index} className="emoji-card" onClick={() => handleCardClick(emoji)}>
            <div className="emoji" dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />
            <div className="emoji-name">{emoji.name}</div>
            <div className="emoji-category">{emoji.category}</div>
          </div>
        ))}
      </div>

      <EmojiModal
        emoji={selectedEmoji}
        description={description}
        loading={loading}
        onClose={() => setSelectedEmoji(null)}
      />
    </div>
  );
}
