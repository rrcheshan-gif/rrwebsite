
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';


import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";
export default function DredgingWaterInfrastructurePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionPadding = isMobile ? "40px 20px" : "60px 20px";
  const containerStyle = { maxWidth: "1500px", margin: '0 auto' };

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* 1. Hero Section */}
      <section 
        className="page-header" 
        style={{ position: 'relative', 
          backgroundImage: "url('/images/page-headers/technology-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: "center",
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: 'center'
        }}
      >
        <div style={containerStyle}>
          <AutoBreadcrumb />
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Dredging & <span style={{ color: "var(--primary-red)" }}>Water Infrastructure</span>
          </h1>
          
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
              Expertise in Marine <span className="text-gradient" style={{ fontWeight: 300 }}>&amp; Water Systems</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              RR Construction provides specialized dredging and reclamation services for ports, alongside extensive experience in constructing municipal and regional water infrastructure. We handle everything from clean drinking water distribution to large-scale marine developments across Sri Lanka.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Marine & Harbour Dredging', desc: 'Capital and maintenance dredging for ports, harbours, and navigational channels to ensure safe vessel passage.' },
              { title: 'Land Reclamation', desc: 'Coastal reclamation, fill placement, and compaction to create new land for port expansion and coastal development.' },
              { title: 'Coastal Civil Works', desc: 'Construction of seawalls, breakwaters, and coastal protection structures to safeguard marine infrastructure.' },
              { title: 'Water Supply Systems', desc: 'Constructing municipal and regional water supply networks, including pipe networks, transmission mains, and ground reservoirs.' },
              { title: 'Water Treatment Plants', desc: 'Heavy Civil engineering and structural works for industrial and municipal water treatment facilities, including clarifiers and dosing buildings.' },
              { title: 'Irrigation & Drainage', desc: 'Handling large-scale agricultural irrigation projects (canals, spillways, anicuts, tank rehabilitation) and urban storm water management solutions.' }
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
                Self-Owned Equipment Fleet
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                We maintain a self-owned marine equipment fleet, ensuring reliable availability and efficient project execution. This allows us to handle complex dredging projects with precision and reduces dependency on external rentals.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Environmental & Quality Management
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                We strictly adhere to ISO 14001:2015 Environmental Management standards to protect marine ecosystems. For water structures, we conduct rigorous testing of aggregates and concrete mixes to ensure water-tight integrity.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Key Client Organizations
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                We are a trusted partner and registered contractor for major government bodies including the National Water Supply & Drainage Board (NWSDB), Department of Irrigation, and the Sri Lanka Ports Authority.
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
                Technical Strengths & Expertise
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Capital dredging for new developments',
                  'Maintenance dredging to preserve navigational depths',
                  'Reliable self-owned marine equipment fleet',
                  'ISO 14001:2015 Environmental Management compliant',
                  'Pipe networks, distribution systems, and ground reservoirs',
                  'Clarifiers, chemical dosing buildings, and intake structures',
                  'Irrigation canals, spillways, anicuts, and tank rehabilitation',
                  'Urban drainage networks, retention basins, and flood protection',
                  'Civil works for M&E installations in treatment plants'
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

