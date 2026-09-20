"use client";

import { Share2 } from 'lucide-react';

export default function ShareButton({ title, text }: { title: string, text: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button onClick={handleShare} className="share-btn" style={{ background: "var(--bg-light)", border: "none", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-dark)", transition: "background 0.3s" }}>
      <Share2 size={18} />
    </button>
  );
}
