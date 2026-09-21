"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';


import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";
interface Props { hideHero?: boolean; }
export default function BridgeConstructionPage({ hideHero = false }: Props) {
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
    <main style={{ backgroundColor: 'transparent', minHeight: hideHero ? 'auto' : '100vh' }}>
      {/* 1. Hero Section */}
      {!hideHero && (
        <section 
        className="page-header" 
        style={{ position: 'relative', 
          backgroundImage: "url('/images/home/bridge_mahanama-enhanced.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: 'center'
        }}
      >
        
        {/* Absolute Back Button */}
        <div style={containerStyle}>
          
          <AutoBreadcrumb />
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Bridge Construction & <span style={{ color: 'var(--primary-red)' }}>Rehabilitation in Sri Lanka</span>
          </h1>
              
          
        </div>
      </section>
      )}

      {/* 2. Capabilities */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>CAPABILITIES</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
              Premier Bridge <span className="text-gradient" style={{ fontWeight: 300 }}>Engineering Capabilities</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              RR Construction is a leading force in Sri Lankan infrastructure development. With decades of structural engineering expertise, we design, construct, and rehabilitate complex bridge structures that serve communities and economies for generations.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Concrete Bridge Construction', desc: 'Expert execution of complex concrete structures, specializing in Pre-Stressed Concrete (PSC) girder bridges, traditional RC T-beam bridges, and extensive box culvert systems for major roadways.' },
              { title: 'Steel Bridge Construction', desc: 'Comprehensive services for steel and composite bridge structures, from precision structural fabrication in our facilities to complex heavy-lifting and on-site erection.' },
              { title: 'Bridge Rehabilitation', desc: 'Extending the lifecycle of critical infrastructure through advanced structural repair techniques, redecking, structural strengthening, and lane capacity widening without full replacement.' }
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
                Unlimited Engineering Capacity
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                We hold the highest capabilities for Bridge Construction, authorizing us to execute projects of unlimited financial value and technical complexity. Our specialized heavy machinery and precision equipment ensure successful execution.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Major National Bridge Works
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                Our capabilities allow us to undertake the nation's most demanding bridge construction contracts, including the Mahanama Bridge, critical crossings in Padiyathalawa, and the multi-bridge Hirana/Molkawa/Lathpadura project.
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
                  'Post-Tensioned (PSC) Girder & RC T-Beam Bridges',
                  'Steel Truss, Composite & Pre-cast Concrete Bridges',
                  'Heavy-duty mobile cranes and hydraulic lifting gear',
                  'Deep foundation piling and bridge formwork systems',
                  'Structural strengthening and lane capacity widening'
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