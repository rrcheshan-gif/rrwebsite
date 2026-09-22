import React, { useState } from 'react';

export default function FakeRecaptcha({ onChange }: { onChange: (verified: boolean) => void }) {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (checked || loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChecked(true);
      onChange(true);
    }, 800);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '304px',
      height: '78px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #d3d3d3',
      borderRadius: '3px',
      padding: '0 12px 0 12px',
      boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.08)',
      fontFamily: 'Roboto, helvetica, arial, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div 
          onClick={handleClick}
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: '#fff',
            border: checked ? 'none' : '2px solid #c1c1c1',
            borderRadius: '2px',
            cursor: checked ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {loading && (
            <div style={{
              width: '20px', height: '20px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #4a90e2',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
          )}
          {checked && (
            <svg viewBox="0 0 24 24" style={{ width: '32px', height: '32px', position: 'absolute', top: '-4px', left: '-2px' }}>
              <path fill="#0f9d58" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
            </svg>
          )}
        </div>
        <span style={{ color: '#282828', fontSize: '14px', fontWeight: 400 }}>I'm not a robot</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ width: '28px' }} />
        <div style={{ color: '#555555', fontSize: '10px', marginTop: '4px' }}>reCAPTCHA</div>
        <div style={{ color: '#555555', fontSize: '8px', marginTop: '2px' }}>
          <a href="#" style={{ color: '#555555', textDecoration: 'none' }}>Privacy</a> - <a href="#" style={{ color: '#555555', textDecoration: 'none' }}>Terms</a>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
