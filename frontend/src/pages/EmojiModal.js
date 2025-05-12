// src/pages/EmojiModal.jsx
import React from 'react';
import './EmojiModal.css';

export default function EmojiModal({ emoji, description, onClose, loading }) {
  if (!emoji) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>
        <div className="emoji-large" dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />
        <h2>{emoji.name}</h2>

        <div className="emoji-details">
          <p><strong>ID:</strong> {emoji.id ?? 'N/A'}</p>
          <p><strong>Category:</strong> {emoji.category}</p>
          <p><strong>Group:</strong> {emoji.group}</p>
          <p><strong>HTML Code:</strong> {emoji.htmlCode.join(' ')}</p>
          <p><strong>Unicode:</strong> {emoji.unicode.join(' ')}</p>
        </div>

        <hr />

        <div className="description-block">
          <strong>AI Description:</strong>
          {loading
            ? <p className="loading">🔄 Generating description…</p>
            : <p>{description}</p>
          }
        </div>
      </div>
    </div>
  );
}
