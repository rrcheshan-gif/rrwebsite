
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function CivilStructuresPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionPadding = isMobile ? "60px 10px" : "100px 20px";
  const containerStyle = { maxWidth: '1200px', margin: '0 auto' };

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* 1. Hero Section */}
      <section 
        className="page-header" 
        style={{ position: 'relative', 
          backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/BADULLA/WhatsApp%20Image%202026-07-28%20at%2014.03.18.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: 'center'
        }}
      >
        {/* Absolute Back Button */}
        <div style={{ position: 'absolute', top: isMobile ? '100px' : '140px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
            &larr; Back to Services
          </Link>
        </div>

        <div style={containerStyle}>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2.5rem' : '4rem', 
            margin: '0 0 24px',
            lineHeight: 1.2
          }}>
            Civil <span style={{ color: 'var(--primary-red)' }}>Structures</span>
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.25rem', 
            maxWidth: '800px', 
            margin: '0 auto', 
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Delivering robust reinforced concrete structures, complex water retaining towers, and heavy steel fabrication that form the backbone of modern industrial and municipal developments in Sri Lanka.
          </p>
        </div>
      </section>

      {/* 2. Capabilities */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              color: 'var(--text-dark)',
              marginBottom: '20px'
            }}>
              Comprehensive Structural Engineering
            </h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
              With over three decades of experience, RR Construction�s civil division handles highly specialized structural concrete and steel works, ensuring safety, durability, and compliance with the most stringent global standards.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'Reinforced Concrete', desc: 'Expertise in high-grade structural concrete forming, pouring, and curing for heavy load-bearing infrastructure.' },
              { title: 'Water Retaining Structures', desc: 'Precision construction of elevated water towers, reservoirs, and complex treatment plant basins.' },
              { title: 'Heavy Steel Fabrication', desc: 'In-house fabrication and installation of structural steel frameworks, bridges, and industrial supports.' }
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
                Elevated Water Towers & Reservoirs
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                Constructing water retaining structures demands absolute precision and flawless execution to ensure zero leakage and long-term structural integrity. We specialize in building massive elevated water towers and ground-level reservoirs for the National Water Supply & Drainage Board (NWSDB) across the island.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                Industrial & Commercial Frameworks
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                Beyond water infrastructure, our civil engineering teams execute foundation and superstructure works for large industrial plants, warehouses, and transport hubs. Our deep foundation capabilities include pile driving, massive retaining walls, and heavily reinforced raft foundations.
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
                  'Advanced formwork and falsework systems',
                  'In-house high-grade concrete production',
                  'Expertise in specialized water-proofing',
                  'Dedicated structural engineering and design teams',
                  'Strict quality control and material testing'
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
