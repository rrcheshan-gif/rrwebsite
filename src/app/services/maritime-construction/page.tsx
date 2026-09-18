"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function MaritimeConstructionPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionPadding = isMobile ? "60px 10px" : "100px 20px";
  const containerStyle = { maxWidth: '1440px', margin: '0 auto' };

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* 1. Hero Section */}
      <section 
        className="page-header" 
        style={{ position: 'relative', 
          backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/home/slider-maritime-fihladhoo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: "left"
        }}
      >
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Services
          </Link>
        </div>
        {/* Absolute Back Button */}
        <div style={containerStyle}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>OUR SERVICES</h4>
            </div>
            <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Maritime & Marine Construction <span className="text-gradient" style={{ fontWeight: 600 }}>in Sri Lanka</span>
          </h1>
          
        </div>
      </section>

      {/* 2. Capabilities */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: "left", marginBottom: '40px' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              color: 'var(--text-dark)',
              marginBottom: '20px'
            }}>
              Sri Lanka's Premier Maritime Constructor
            </h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center' }}>
              RR Construction possesses the specialized equipment, technical expertise, and engineering capabilities required for complex marine environments. Our maritime division undertakes technically challenging projects from commercial ports and fishery harbours to coastal protection structures, delivering resilient infrastructure designed to withstand harsh marine conditions.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Harbour & Port Infrastructure', desc: 'Design and construction of commercial ports, fishery harbours, jetties, and quay walls utilizing robust marine piling and reinforced concrete structures.' },
              { title: 'Breakwaters & Coastal Protection', desc: 'Construction of rock armour breakwaters, groynes, seawalls, and revetments to manage coastal erosion and protect marine assets from wave action.' },
              { title: 'Marine Heavy Civil Engineering', desc: 'Specialized subsea engineering including seabed preparation, offshore pile installation, and submerged concrete pouring for marine foundations.' }
            ].map((capability, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--bg-light)',
                padding: '40px 30px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                transition: 'transform 0.3s ease'
              }}>
                <CheckCircle2 size={32} color="var(--primary-red)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>{capability.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep Dive */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--bg-light)' }}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
                Gandara Fishery Harbour
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Comprehensive construction of harbour facilities including breakwaters, quay walls, and dredging works to support the local fishing industry.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Specialized Marine Equipment
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                Executing marine works requires highly specialized plant and machinery. Our internal fleet gives us operational control and reliability on the water, supported by stringent marine-specific safety measures, weather monitoring, and emergency response planning.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--white)', 
              padding: '40px', 
              borderRadius: '24px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '24px' }}>
                Key Strengths & Certifications
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Specialized in Maritime Construction',
                  'ISO 9001:2015 Quality Management',
                  'ISO 14001:2015 Environmental Management',
                  'ISO 45001:2018 Occupational Health & Safety',
                  'Fleet of Cutter Suction Dredgers & Marine Cranes'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '12px',
                    marginBottom: '16px',
                    color: 'var(--text-light)',
                    lineHeight: 1.6
                  }}>
                    <CheckCircle2 size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
