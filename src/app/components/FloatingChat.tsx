"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function FloatingChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Ayubowan! Welcome to RR Construction.", sender: "bot" },
    { text: "I am the RR Construction AI Assistant. Ask me anything about our services, projects, or materials!", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (pathname === '/launch') return null;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Send chat history (excluding the very first greeting messages if needed, but sending all is fine)
      const history = messages.map(m => ({ text: m.text, sender: m.sender }));
      
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history })
      });
      
      if (!res.ok) throw new Error("API Error");
      
      const data = await res.json();
      setMessages(prev => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to my brain right now. Please call us at 011-2433427.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {isOpen && (
        <div style={{ 
          width: '350px', 
          height: '480px', 
          backgroundColor: 'var(--white)', 
          borderRadius: '16px', 
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid var(--border-soft)'
        }}>
          <div style={{ backgroundColor: 'var(--primary-red)', color: 'white', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', backgroundColor: 'white', borderRadius: '50%', padding: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/logo.png" alt="RR" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'white' }}>RR AI Assistant</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }}>
              <X size={20} />
            </button>
          </div>

          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', backgroundColor: 'var(--bg-light)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                <div style={{ 
                  backgroundColor: msg.sender === 'user' ? 'var(--primary-red)' : 'var(--white)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-dark)',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-soft)',
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
                <div style={{ backgroundColor: 'var(--white)', color: 'var(--text-light)', padding: '10px 14px', borderRadius: '16px 16px 16px 0', fontSize: '0.9rem', border: '1px solid var(--border-soft)' }}>
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} style={{ padding: '12px', backgroundColor: 'var(--white)', borderTop: '1px solid var(--border-soft)', display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              style={{ flex: 1, padding: '10px 14px', borderRadius: '20px', border: '1px solid var(--border-soft)', backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)', fontSize: '0.9rem', outline: 'none' }} 
            />
            <button type="submit" disabled={isLoading} style={{ backgroundColor: isLoading ? '#ccc' : 'var(--primary-red)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: isLoading ? 'default' : 'pointer' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-red)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', boxShadow: '0 8px 20px rgba(229, 57, 53, 0.4)', cursor: 'pointer', transition: 'all 0.3s ease', transform: isOpen ? 'scale(0)' : 'scale(1)', opacity: isOpen ? 0 : 1 }}>
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
