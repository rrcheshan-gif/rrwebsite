"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';


import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";
export default function ResearchAndDevelopmentPage() {
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
        
        {/* Absolute Back Button */}
        

        <div style={containerStyle}>
          
          <AutoBreadcrumb />
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Research & <span style={{ color: 'var(--primary-red)' }}>Development</span>
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
              Innovating <span className="text-gradient" style={{ fontWeight: 300 }}>Construction Methods</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              The integration of cutting-edge technologies and rigorous R&D initiatives has enabled the organization to achieve unprecedented operational efficiency and overcome complex technical challenges.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Lean Production', desc: 'Internal R&D focused specifically on Lean Production principles to maximize productivity across sites.' },
              { title: 'Performance Management', desc: 'Advanced Performance Management systems driving operational efficiency in heavy civil engineering.' },
              { title: 'Modern Methodologies', desc: 'Integrating cutting-edge technologies and modern construction methodologies to overcome complex challenges.' }
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
                Driving Operational Efficiency
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Research & Development (R&D) plays a pivotal role at RR Construction. The integration of cutting-edge technologies and rigorous R&D initiatives has enabled the organization to achieve unprecedented operational efficiency, maximize productivity, and overcome complex technical challenges inherent to the heavy civil engineering sphere.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                AI-Assisted Ecosystem
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                RR Construction continually invests in internal R&D focused specifically on Lean Production principles, Advanced Performance Management, and modern construction methodologies. Furthermore, following the successful adoption of localized Enterprise Resource Planning (ERP) systems, the company is actively transitioning toward a fully integrated, AI-assisted ERP ecosystem to streamline resource allocation across all national-scale operations.
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
                  'Integration of cutting-edge technologies',
                  'Rigorous R&D initiatives for efficiency',
                  'Focus on Lean Production principles',
                  'Advanced Performance Management',
                  'Transition to AI-assisted ERP ecosystem'
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


