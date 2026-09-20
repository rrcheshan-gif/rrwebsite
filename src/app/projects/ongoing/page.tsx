"use client";
import React from 'react';
import Link from 'next/link';

import BackButton from "@/app/components/BackButton";
export default function OngoingProjects() {
  const categories = [
    { id: 'roads', title: 'Highway and Expressway Construction', img: '/images/KRP/img-1.jpeg' },
    { id: 'bridges', title: 'Bridge Construction', img: '/images/BBP/img-1.jpeg' },
    { id: 'irrigation', title: 'Irrigation & Water Supply', img: '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg' },
    { id: 'disaster', title: 'Landslide Mitigation', img: '/images/Badulla Landslide/Background image.jpeg' },
    { id: 'maritime', title: 'Maritime & Dredging', img: '/images/maritime-harbour-site.jpg' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
      {/* Hero Section with Image Space */}
      <section className="page-header" style={{ position: 'relative', backgroundImage: "url('/images/page-headers/ongoing-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--white)' }}>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Ongoing <span style={{ color: 'var(--primary-red)' }}>Projects</span>
          </h1>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "550px", lineHeight: 1.6, margin: "10px 0 0 0" }}>
               Currently executing massive civil engineering and infrastructure developments.
            </p>
              <BackButton />
          
        </div>
      </section>

      
      {/* Intro Description */}
      <section style={{ padding: '0 20px 40px', textAlign: 'center', marginTop: '-100px', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: "1500px" }}>
          <div style={{
             background: 'var(--white)',
             padding: '40px 50px',
             borderRadius: '24px',
             boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
             border: '1px solid var(--border-soft)',
             position: 'relative'
          }}>
             <div style={{ width: '60px', height: '4px', background: 'var(--primary-red)', margin: '0 auto 30px', borderRadius: '2px' }}></div>
             
             <p style={{ 
               color: 'var(--text-dark)', 
               fontSize: '1.15rem', 
               lineHeight: 2, 
               textAlign: 'justify',
               marginBottom: '20px'
             }}>
               <strong>RR Construction</strong> is currently executing a diverse and expansive portfolio of large-scale infrastructure projects. Our ongoing commitments span across all critical engineering sectors, including national road networks, complex bridges, comprehensive water supply and irrigation systems, major maritime developments, multi-storey buildings, railway infrastructure, disaster management and landslide mitigation, as well as specialized overseas construction projects.
             </p>

             <p style={{ 
               color: 'var(--text-light)', 
               fontSize: '1.15rem', 
               lineHeight: 2, 
               textAlign: 'justify',
               margin: 0
             }}>
               Equipped with our expansive proprietary machinery fleet and unmatched technical expertise, we are continuously driving infrastructure development forward. Our dedicated engineering and project management teams ensure that every ongoing site progresses seamlessly, consistently delivering high-quality results while adhering to the strictest international standards for occupational health, safety, and environmental sustainability.
             </p>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section style={{ padding: '0px 20px 80px', textAlign: 'center' }}>
        <div className='container' style={{ maxWidth: "1500px" }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px',
            padding: '20px'
          }}>
            {categories.map((cat, idx) => (
              <Link href={`/projects/ongoing/${cat.id}`} key={idx} style={{ textDecoration: 'none' }}>
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
