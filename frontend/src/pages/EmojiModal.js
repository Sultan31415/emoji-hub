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
        <p><strong>Category:</strong> {emoji.category}</p>
        <p><strong>AI Description:</strong> {loading ? 'Generating description...' : description}</p>
      </div>
    </div>
  );
}
