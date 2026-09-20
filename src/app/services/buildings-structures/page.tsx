
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

import BackButton from "@/app/components/BackButton";
interface Props { hideHero?: boolean; }
export default function CivilStructuresPage({ hideHero = false }: Props) {
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
          backgroundImage: "url('/images/BADULLA/WhatsApp%20Image%202026-07-28%20at%2014.03.18.jpeg')",
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
            Civil <span style={{ color: 'var(--primary-red)' }}>Structures</span>
          </h1>
              <BackButton />
          
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
              Comprehensive <span className="text-gradient" style={{ fontWeight: 300 }}>Structural Engineering</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "left", margin: 0 }}>
              With over three decades of experience, RR Construction's civil division handles highly specialized structural concrete and steel works, ensuring safety, durability, and compliance with the most stringent global standards.
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
