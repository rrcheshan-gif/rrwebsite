"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {  CheckCircle2, ArrowRight , ArrowLeft } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function RoadConstructionPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
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
          backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/hambantota-iroad/hambantota-2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: isMobile ? '40px 20px' : '70px 20px',
          textAlign: 'center'
        }}
      >
        {/* Absolute Back Button */}
        <div style={{ position: 'absolute', top: isMobile ? '20px' : '40px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
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
            Road & Highway <span style={{ color: 'var(--primary-red)' }}>Construction in Sri Lanka</span>
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.25rem', 
            maxWidth: '800px', 
            margin: '0 auto', 
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Since {COMPANY_DATA.established}, RR Construction has been a cornerstone of Sri Lanka's infrastructure development. With extensive experience, we deliver expert road construction, rehabilitation, and asphalt paving services across all provinces.
          </p>
        </div>
      </section>

      {/* 2. Road Construction Capabilities */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              color: 'var(--text-dark)',
              marginBottom: '20px'
            }}>
              Comprehensive Road Construction Capabilities
            </h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Our dedicated highway division operates with a massive workforce of over {COMPANY_DATA.workforce} professionals and a self-owned fleet of {COMPANY_DATA.machineryFleet} machinery units, ensuring we can tackle national-scale projects efficiently.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
            gap: '30px' 
          }}>
            {[
              { title: 'New Highway Construction', desc: 'Full-scale development of multi-lane highways and expressways with advanced engineering.' },
              { title: 'Rural Road Rehabilitation', desc: 'Improving connectivity through the upgrading and widening of rural road networks.' },
              { title: 'Asphalt Surfacing', desc: 'High-quality asphalt concrete paving for roads, highways, and specialized projects.' }
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

      {/* 3. Highway Construction & 4. Road Rehabilitation */}
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
                Major Highway Construction
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                We possess the technical capability and machinery to execute major highway and expressway projects. Our involvement as a key subcontractor for the Central Expressway Section 2 (Package A) demonstrates our capacity to deliver complex infrastructure elements to international standards.
              </p>
              
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.75rem' : '2.25rem', color: 'var(--text-dark)', margin: '40px 0 20px' }}>
                National Road Rehabilitation
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                RR Construction is extensively involved in the iRoad Programme initiated by the Road Development Authority (RDA). We have successfully rehabilitated hundreds of kilometers of rural roads, improving transport efficiency and connectivity in districts across Sri Lanka.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--white)', 
              padding: '40px', 
              borderRadius: '24px',
              border: `1px solid var(--border-soft)`,
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '24px' }}>
                Key Technical Strengths
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Specialized in Highway Construction',
                  'In-house material testing and quality control laboratories',
                  'Dedicated earthworks and pavement divisions',
                  'Advanced surveying and setting out capabilities',
                  'Large-scale material sourcing networks'
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

      {/* 5. Earthworks & Drainage & 6. Asphalt & Pavement Works */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '40px'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-light)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-soft)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
                Earthworks & Drainage
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '20px' }}>
                Stable roads begin with solid foundations. Our heavy machinery division handles massive earthmoving, subgrade preparation, and embankment construction. We also construct complex drainage systems, including concrete culverts and side drains, critical for the longevity of roads in Sri Lanka's tropical climate.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-light)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-soft)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
                Asphalt & Pavement Works
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '24px' }}>
                We operate our own asphalt mixing plants and possess a modern fleet of pavers and compactors. This vertical integration allows us to maintain strict quality control over ABC (Aggregate Base Course) laying and asphalt surfacing.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      

      {/* 8. Equipment & Resources & 9. Quality & Safety */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={containerStyle}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '40px'
          }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
                Equipment & Resources
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '20px' }}>
                A successful road construction project depends on reliable machinery. RR Construction owns and maintains a vast fleet of over {COMPANY_DATA.machineryFleet} units, including excavators, motor graders, rollers, asphalt pavers, and dump trucks. This extensive self-owned resource base ensures zero downtime waiting for equipment rentals and keeps projects strictly on schedule.
              </p>
            </div>
            
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
                Quality & Safety Standards
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '24px' }}>
                We operate under strict international standards to ensure the durability of our roads and the safety of our workforce and the public.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {COMPANY_DATA.certifications.map((cert, i) => (
                  <span key={i} style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--bg-light)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: '20px',
                    color: 'var(--text-dark)',
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[

              {
                q: "Who are your primary clients for road construction?",
                a: "We work extensively with government bodies, primarily the Road Development Authority (RDA) of Sri Lanka, executing large-scale projects like the iRoad Programme and Expressway developments."
              },
              {
                q: "Do you manufacture your own asphalt?",
                a: "Yes, we have our own asphalt manufacturing plants. This vertical integration allows us to ensure the highest quality of asphalt concrete for our paving projects."
              },
              {
                q: "Where do you provide road construction services?",
                a: "We mobilize our resources and workforce across all provinces in Sri Lanka, having successfully completed projects in districts such as Kalutara, Mannar, Kilinochchi, and Kurunegala."
              }
            ].map((faq, i) => (
              <details key={i} style={{
                backgroundColor: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--border-soft)',
                overflow: 'hidden'
              }}>
                <summary style={{
                  padding: '24px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {faq.q}
                  <span style={{ color: 'var(--primary-red)' }}>+</span>
                </summary>
                <div style={{
                  padding: '0 24px 24px',
                  color: 'var(--text-light)',
                  lineHeight: 1.6
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}

