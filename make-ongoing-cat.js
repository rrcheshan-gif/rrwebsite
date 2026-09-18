const fs = require('fs');

const content = `"use client";
import React from 'react';
import Link from 'next/link';

export default function OngoingProjects() {
  const categories = [
    { id: 'roads', title: 'Road Construction', img: '/images/KRP/img-1.jpeg' },
    { id: 'bridges', title: 'Bridge Construction', img: '/images/BBP/img-1.jpeg' },
    { id: 'irrigation', title: 'Irrigation & Water Supply', img: '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg' },
    { id: 'disaster', title: 'Landslide Mitigation', img: '/images/Badulla Landslide/Background image.jpeg' },
    { id: 'maritime', title: 'Maritime & Dredging', img: '/images/maritime-harbour-site.jpg' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
      {/* Hero Section with Image Space */}
      <section className="page-header" style={{ 
        position: 'relative', 
        backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url('/images/page-headers/ongoing-hero.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        color: 'var(--white)', 
        padding: '140px 20px 80px', 
        textAlign: 'center',
        borderBottomLeftRadius: '48px',
        borderBottomRightRadius: '48px',
        marginBottom: '60px',
        overflow: 'hidden'
      }}>
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/projects" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Projects
            </Link>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Ongoing <span style={{ color: 'var(--primary-red)' }}>Categories</span>
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.8 }}>
            Explore our diverse and expansive portfolio of active large-scale infrastructure projects across all critical engineering sectors.
          </p>
        </div>
      </section>

      {/* Category Grid Section */}
      <section style={{ padding: '0px 20px 80px', textAlign: 'center' }}>
        <div className='container' style={{ maxWidth: '1440px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px',
            padding: '20px'
          }}>
            {categories.map((cat, idx) => (
              <Link href={\`/projects/ongoing/\${cat.id}\`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  border: '1px solid var(--border-soft)',
                  cursor: 'pointer',
                  background: 'var(--white)'
                }}
                className="hover-lift"
                >
                  <img 
                    src={cat.img} 
                    alt={cat.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 100%)',
                    padding: '40px 25px 20px',
                    color: 'white',
                    textAlign: 'left'
                  }}>
                    <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.5px' }}>{cat.title}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--primary-red)', marginTop: '5px', display: 'inline-block', fontWeight: 600 }}>View Projects &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log('Updated ongoing projects page to show categories');
