"use client";

import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

import BackButton from "@/app/components/BackButton";

export default function PilingFoundationEngineeringPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionPadding = isMobile ? "40px 20px" : "60px 20px";
  const containerStyle = { maxWidth: "1500px", margin: '0 auto', width: '100%' };

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* 1. Hero Section */}
      <section 
        className="page-header" 
        style={{ position: 'relative', 
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/images/home/slider-bridge-mahanama.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: 'center'
        }}
      >
        
        {/* Absolute Back Button */}
        <div style={containerStyle}>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Piling &amp; <span style={{ color: 'var(--primary-red)' }}>Foundation Engineering</span>
          </h1>
          <BackButton />
          
        </div>
      </section>

      {/* 2. Capabilities */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>CAPABILITIES</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
              Advanced Geotechnical <span className="text-gradient" style={{ fontWeight: 300 }}>Foundation Engineering</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              RR Construction provides advanced geotechnical and foundation engineering solutions. Our modern fleet of rotary drilling rigs ensures absolute stability for high-rises, bridges, and industrial complexes even in challenging soil conditions.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Bored Cast-in-Situ Piling', desc: 'Large diameter concrete piling executed with advanced rotary drilling rigs for maximum bearing capacity.' },
              { title: 'Driven & Micro-Piling', desc: 'Pre-cast concrete driven piles and specialized micro-piling for confined spaces and underpinning.' },
              { title: 'Retaining Structures', desc: 'Construction of diaphragm walls, sheet pile walls, and cofferdams for deep excavation support.' }
            ].map((capability, index) => (
              <div key={index} style={{
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle2 size={28} color="var(--primary-red)" style={{ flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', margin: 0 }}>{capability.title}</h3>
                </div>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6, paddingLeft: '43px', margin: 0 }}>{capability.desc}</p>
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
                State-of-the-Art Rotary Rigs
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Our foundation division operates a self-owned fleet of high-torque rotary drilling rigs and crawler cranes. This mechanical independence guarantees rapid deployment and uninterrupted execution of deep foundation works across Sri Lanka, regardless of the terrain.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Comprehensive Soil Investigation
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                Every successful foundation relies on accurate geotechnical data. We conduct rigorous sub-soil investigations, dynamic probing, and pile load testing (both static and dynamic) to validate structural integrity and ground bearing capacity before superstructure construction begins.
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
                Key Technical Strengths
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Large diameter bored cast-in-situ concrete piling',
                  'Advanced rotary drilling rigs and heavy crawler cranes',
                  'Static and dynamic pile load testing execution',
                  'Deep excavation support and diaphragm walls',
                  'Specialized underpinning and micro-piling solutions'
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
