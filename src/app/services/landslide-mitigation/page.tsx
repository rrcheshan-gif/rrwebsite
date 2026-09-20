"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function LandslideMitigationPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionPadding = isMobile ? "60px 10px" : "100px 20px";
  const containerStyle = { maxWidth: "1500px", margin: '0 auto' };

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* 1. Hero Section */}
      <section 
        className="page-header" 
        style={{ position: 'relative', 
          backgroundImage: "url('/images/service-landslide-hero.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: 'center'
        }}
      >
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Services
          </Link>
        </div>
        {/* Absolute Back Button */}
        <div style={containerStyle}>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Slope Stabilization &amp; <span style={{ color: 'var(--primary-red)' }}>Landslide Mitigation</span>
          </h1>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "550px", lineHeight: 1.6, margin: "10px 0 0 0" }}>
               Protecting communities and infrastructure through advanced geotechnical stabilization.
            </p>
          
        </div>
      </section>

      {/* 2. Capabilities */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "800px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>CAPABILITIES</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
              Geotechnical Capabilities <span className="text-gradient" style={{ fontWeight: 300 }}>Overview</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              RR Construction provides specialized geotechnical engineering services to mitigate landslide risks across Sri Lanka's hill country. We work in strict adherence to National Building Research Organisation (NBRO) guidelines and regulations, executing complex heavy civil engineering countermeasures to ensure long-term structural integrity and public safety.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Slope Stabilization', desc: 'We implement comprehensive slope stabilization measures including soil nailing, shotcreting, and surface/subsurface drainage systems to prevent deep-seated and shallow slope failures.' },
              { title: 'Retaining Structures', desc: 'Our teams construct robust gabion walls, gravity retaining walls, and reinforced earth walls designed to withstand significant lateral earth pressures and provide critical toe support to unstable slopes.' },
              { title: 'Rock-fall Protection', desc: 'Installation of high-tensile rock-fall nets and catch fences to protect transport corridors and critical infrastructure from unpredictable rock mass detachments.' }
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
                Highway and Expressway Disaster Countermeasures
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                A significant portion of our geotechnical work involves emergency slope repair and preventative landslide mitigation on national highways and expressways. We have extensive experience executing road disaster countermeasures, ensuring that critical transport links remain open and safe. Our expertise in this sector is backed by works carried out under Japanese JICA technical assistance programs, bringing international best practices to local landslide mitigation efforts.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Vulnerability Assessment &amp; Quality
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Before initiating structural interventions, we conduct detailed site assessments guided by the National Building Research Organisation (NBRO) parameters. This ensures our mitigation designs address the specific geological and hydrological characteristics of the site, providing optimal, long-lasting solutions.
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                Geotechnical engineering in hazardous terrain demands uncompromising safety standards. Our operations adhere strictly to ISO-certified safety protocols, mitigating risks to both our workforce and the surrounding environment while delivering structural solutions that meet all regulatory compliance requirements.
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
                Key Projects &amp; Capabilities
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Nuwara Eliya District: Extensive stabilization works in high-altitude terrain.',
                  'Hatton-Nuwara Eliya Corridor: Protection of critical road networks from recurring slope failures.',
                  'Kandy Region & Central Hills: Implementation of comprehensive drainage and retaining systems.',
                  'NBRO Compliance: Mitigation designs and execution methods comply entirely with NBRO standards.',
                  'Techniques Used: Soil nailing, shotcrete application, gravity drains, and retaining walls.',
                  'International Standards: Substantial experience executing foreign-funded mitigation projects (e.g., JICA).'
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
