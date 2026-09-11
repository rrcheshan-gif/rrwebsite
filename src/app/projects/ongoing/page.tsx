"use client";
import React from 'react';

export default function OngoingProjects() {
  return (
    <div style={{ minHeight: '70vh', background: 'var(--bg-light)' }}>
      {/* Hero Section */}
      <section style={{ padding: '180px 20px 100px', textAlign: 'center' }}>
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
    </div>
  );
}