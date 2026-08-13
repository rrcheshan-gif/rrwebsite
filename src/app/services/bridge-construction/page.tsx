'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BridgeConstructionPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          padding: isMobile ? '120px 20px 60px' : '160px 20px 80px',
          backgroundImage: 'url("/images/page-headers/services-build.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            zIndex: 1,
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--white)',
              textDecoration: 'none',
              marginBottom: '24px',
              fontSize: '16px',
              opacity: 0.8,
              transition: 'opacity 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <h1
            style={{
              fontSize: isMobile ? '36px' : '56px',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Bridge Construction & <span style={{ color: 'var(--primary-red)' }}>Rehabilitation in Sri Lanka</span>
          </h1>
          <p
            style={{
              fontSize: isMobile ? '18px' : '20px',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            Building vital connections across the island since 1995. Highest-tier CIDA CS-1 certified bridge engineering contractors.
          </p>
        </div>
      </section>

      {/* 2. Bridge Construction Capabilities */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '40px' : '60px',
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: isMobile ? '28px' : '40px',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-dark)',
                  marginBottom: '24px',
                }}
              >
                Premier Bridge Engineering Capabilities
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: 'var(--text-light)',
                  marginBottom: '24px',
                }}
              >
                RR Construction is a leading force in Sri Lankan infrastructure development. With decades of structural engineering expertise, we design, construct, and rehabilitate complex bridge structures that serve communities and economies for generations.
              </p>
              <div
                style={{
                  backgroundColor: 'var(--bg-light)',
                  padding: '24px',
                  borderRadius: '16px',
                  borderLeft: '4px solid var(--primary-red)',
                }}
              >
                <h3 style={{ fontSize: '20px', color: 'var(--text-dark)', marginBottom: '12px' }}>
                  CIDA Grade: CS-1 (Highest Tier)
                </h3>
                <p style={{ color: 'var(--text-light)', margin: 0 }}>
                  We hold the highest possible national grading (CS-1) for Bridge Construction from the Construction Industry Development Authority (CIDA) of Sri Lanka, authorizing us to execute projects of unlimited financial value and technical complexity.
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px',
              }}
            >
              {[
                'Post-Tensioned (PSC) Girder Bridges',
                'Reinforced Concrete T-Beam Bridges',
                'Steel Truss and Composite Bridges',
                'Pre-cast Concrete Bridges',
                'Pedestrian Overpasses',
                'Large Scale Box Culverts',
              ].map((capability, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border-soft)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                  }}
                >
                  <CheckCircle2 color="var(--primary-red)" size={24} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '18px', color: 'var(--text-dark)', fontWeight: 500 }}>
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4 & 5. Core Services Grid */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2
              style={{
                fontSize: isMobile ? '32px' : '40px',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-dark)',
                marginBottom: '24px',
              }}
            >
              Specialized Bridge Construction Services
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-light)' }}>
              From initial foundation works in challenging terrain to final deck surfacing, our technical capabilities cover every aspect of bridge building and structural intervention.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '32px',
            }}
          >
            {/* Concrete Bridge Construction */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '40px 32px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <h3 style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '16px' }}>
                Concrete Bridge Construction
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                Expert execution of complex concrete structures, specializing in Pre-Stressed Concrete (PSC) girder bridges, traditional RC T-beam bridges, and extensive box culvert systems for major roadways.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>PSC & RC Cast In-situ decks</span></li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Deep pile foundation construction</span></li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Pre-cast element manufacturing</span></li>
              </ul>
            </div>

            {/* Steel Bridge Construction */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '40px 32px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <h3 style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '16px' }}>
                Steel Bridge Construction
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                Comprehensive services for steel and composite bridge structures, from precision structural fabrication in our facilities to complex heavy-lifting and on-site erection.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Structural steel fabrication</span></li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Precision onsite erection</span></li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Corrosion protection systems</span></li>
              </ul>
            </div>

            {/* Bridge Rehabilitation */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                padding: '40px 32px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <h3 style={{ fontSize: '24px', color: 'var(--text-dark)', marginBottom: '16px' }}>
                Bridge Rehabilitation
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                Extending the lifecycle of critical infrastructure through advanced structural repair techniques, redecking, structural strengthening, and lane capacity widening without full replacement.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Bridge widening and redecking</span></li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Substructure underpinning</span></li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}><ArrowRight size={16} color="var(--primary-red)" style={{ marginTop: '4px' }}/> <span style={{ color: 'var(--text-dark)' }}>Carbon fiber structural strengthening</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Selected Bridge Projects */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isMobile ? '32px' : '40px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Major National Bridge Works
          </h2>
          <p style={{ textAlign: 'center', fontSize: '18px', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 60px' }}>
            Our CIDA CS-1 grading for bridges allows us to undertake the nation's most demanding bridge construction contracts. Below are key highlights from our portfolio of critical river crossings and highway bridges.
          </p>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Mahanama Bridge',
                desc: 'Construction of the major Mahanama Bridge over Nilwala River, forming a vital link in the southern transportation network.',
              },
              {
                title: 'Padiyathalawa Bridges',
                desc: 'Design and construction of critical bridge infrastructure in the Padiyathalawa region, facilitating regional agricultural transport.',
              },
              {
                title: 'Hirana/Molkawa/Lathpadura',
                desc: 'A significant multi-bridge project replacing dilapidated crossings with modern concrete structures across several key waterways.',
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: 'var(--bg-light)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-soft)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--primary-red)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontSize: '22px', color: 'var(--text-dark)', marginBottom: '12px' }}>
                  {proj.title}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
             <Link
              href="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--primary-red)',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '18px',
              }}
            >
              View Full Project Portfolio <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7 & 8. Technical Equipment and Quality */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--text-dark)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '60px',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: isMobile ? '28px' : '36px',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '24px',
                }}
              >
                Specialized Technical Resources
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.9, marginBottom: '24px' }}>
                Successful bridge construction requires specialized heavy machinery and precision equipment. We maintain a comprehensive in-house fleet of construction plant tailored for heavy civil engineering.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--primary-red)" size={20} />
                  <span>Heavy-duty mobile and crawler cranes</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--primary-red)" size={20} />
                  <span>Hydraulic heavy lifting and launching gear</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--primary-red)" size={20} />
                  <span>Specialized bridge formwork and scaffolding systems</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <CheckCircle2 color="var(--primary-red)" size={20} />
                  <span>Deep foundation piling rigs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2
                style={{
                  fontSize: isMobile ? '28px' : '36px',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '24px',
                }}
              >
                International Quality Standards
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, opacity: 0.9, marginBottom: '32px' }}>
                Safety and structural integrity are paramount in bridge engineering. All our operations are governed by integrated management systems certified to international standards.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {COMPANY_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '30px',
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                    }}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isMobile ? '32px' : '40px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "What types of bridges does RR Construction build?",
                a: "We construct all types of major bridges including Pre-Stressed Concrete (PSC) girder bridges, Reinforced Concrete T-beam bridges, steel composite bridges, large box culverts, and pedestrian overpasses. Our extensive experience permits us to undertake bridges of any complexity."
              },
              {
                q: "Do you undertake bridge repair and widening projects?",
                a: "Yes, bridge rehabilitation is a core service. We handle structural repairs, capacity widening, deck replacements, substructure strengthening, and anti-corrosion treatments for existing bridge structures to extend their operational lifespan."
              },
              {
                q: "Do you own your own bridge construction equipment?",
                a: "Yes, we own a vast fleet of heavy machinery, including heavy-lifting cranes, deep piling rigs, and specialized formwork systems. This in-house capacity ensures we maintain strict control over project timelines and quality without relying heavily on third-party equipment rentals."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  backgroundColor: 'var(--white)',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-soft)',
                  cursor: 'pointer',
                }}
              >
                <summary
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    outline: 'none',
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ color: 'var(--primary-red)', fontSize: '24px' }}>+</span>
                </summary>
                <p style={{ marginTop: '16px', color: 'var(--text-light)', lineHeight: 1.6, paddingRight: '24px' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: isMobile ? '32px' : '48px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-dark)',
              marginBottom: '24px',
            }}
          >
            Ready to Build the Future?
          </h2>
          <p
            style={{
              fontSize: '20px',
              color: 'var(--text-light)',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}
          >
            Contact our structural engineering team to discuss your next bridge construction or infrastructure project.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--primary-red)',
                color: 'var(--white)',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Contact Us Today
            </Link>
            <Link
              href="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                color: 'var(--text-dark)',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '2px solid var(--border-soft)',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-dark)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-soft)';
              }}
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
