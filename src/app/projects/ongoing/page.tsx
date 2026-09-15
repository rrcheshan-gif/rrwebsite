"use client";
import React from 'react';

export default function OngoingProjects() {
  return (
    <div style={{ minHeight: '70vh', background: 'var(--bg-light)' }}>
      {/* Hero Section */}
      <section style={{ padding: '160px 20px 40px', textAlign: 'center' }}>
        <div className='container' style={{ maxWidth: '1440px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 900, 
              color: 'var(--text-dark)', 
              marginBottom: '40px',
              lineHeight: 1.1,
              letterSpacing: '-1px'
            }}>
              Ongoing <span style={{ color: 'var(--primary-red)' }}>Projects</span>
            </h1>
            
            <div style={{
               background: 'var(--white)',
               padding: '40px 50px',
               borderRadius: '24px',
               boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
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
        </div>
      </section>
      {/* Photo Gallery Section */}
      <section style={{ padding: '0px 20px 80px', textAlign: 'center' }}>
        <div className='container' style={{ maxWidth: '1440px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            color: 'var(--text-dark)', 
            marginBottom: '30px'
          }}>
            Gallery of <span style={{ color: 'var(--primary-red)' }}>Ongoing Works</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
            padding: '20px'
          }}>
            {[
              { src: '/images/Badulla Landslide/Background image.jpeg', title: 'Landslide Mitigation Project' },
              { src: '/images/KRP/img-1.jpeg', title: 'Road Construction Project' },
              { src: '/images/BBP/img-1.jpeg', title: 'Bridge Construction Project' },
              { src: '/images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg', title: 'Irrigation & Water Supply' },
              { src: '/images/puttalam/puttalam-1.jpg', title: 'Bridge Construction Project' },
              { src: '/images/VBP/img-1.jpeg', title: 'Bridge Construction Project' },
              { src: '/images/WBP/img-1.jpeg', title: 'Bridge Construction Project' },
              { src: '/images/mayilvakanapuram/mayil-1.jpg', title: 'Road Construction Project' }
            ].map((img, idx) => (
              <div key={idx} style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid var(--border-soft)'
              }}>
                <img 
                  src={img.src} 
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(15,23,42,0.9))',
                  padding: '30px 20px 15px',
                  color: 'white',
                  textAlign: 'left'
                }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}