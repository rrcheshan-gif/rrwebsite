"use client";
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Ayubowan! Welcome to RR Construction.", sender: "bot" },
    { text: "How can we help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue('');
    
    // Auto reply after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for your message! Our team will get back to you shortly. You can also reach us directly at 011-2433427.", 
        sender: "bot" 
      }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      
      {/* Chat Window */}
      {isOpen && (
        <div style={{ 
          width: '320px', 
          height: '420px', 
          backgroundColor: 'var(--white)', 
          borderRadius: '16px', 
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid var(--border-soft)'
        }}>
          {/* Header */}
          <div style={{ 
            backgroundColor: 'var(--primary-red)', 
            color: 'white', 
            padding: '16px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', backgroundColor: 'white', borderRadius: '50%', padding: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/images/logo.png" alt="RR" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: 'white' }}>RR Virtual Assistant</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ 
            flex: 1, 
            padding: '16px', 
            overflowY: 'auto', 
            backgroundColor: 'var(--bg-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ 
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%'
              }}>
                <div style={{ 
                  backgroundColor: msg.sender === 'user' ? 'var(--primary-red)' : 'var(--white)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-dark)',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-soft)'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} style={{ 
            padding: '12px', 
            backgroundColor: 'var(--white)', 
            borderTop: '1px solid var(--border-soft)',
            display: 'flex',
            gap: '8px'
          }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ 
                flex: 1, 
                padding: '10px 14px', 
                borderRadius: '20px', 
                border: '1px solid var(--border-soft)',
                backgroundColor: 'var(--bg-light)',
                color: 'var(--text-dark)',
                fontSize: '0.9rem',
                outline: 'none'
              }} 
            />
            <button 
              type="submit"
              style={{ 
                backgroundColor: 'var(--primary-red)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '50%', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="floating-chat-btn"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'var(--primary-red)',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          boxShadow: '0 8px 20px rgba(229, 57, 53, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(0)' : 'scale(1)',
          opacity: isOpen ? 0 : 1
        }}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}

