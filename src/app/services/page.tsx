"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
          <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
        </svg>
      ),
      iconBg: 'rgba(255,255,255,0.08)',
      iconBorder: '1px solid rgba(255,255,255,0.12)',
      cardBg: 'linear-gradient(135deg, #111827, #1f2937)',
      titleColor: '#ffffff',
      textColor: '#9ca3af',
      title: 'Buildings & Structures',
      desc: 'Multi-storied buildings, water retaining structures, water towers, and heavy steel fabrication raised with absolute precision.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" x2="9" y1="3" y2="18"/>
          <line x1="15" x2="15" y1="6" y2="21"/>
        </svg>
      ),
      iconBg: 'rgba(229,57,53,0.1)',
      iconBorder: 'none',
      cardBg: 'var(--white)',
      titleColor: 'var(--text-dark)',
      textColor: 'var(--text-light)',
      title: 'Roads & Highways',
      desc: 'Rehabilitating rural road networks and constructing major national expressways using state-of-the-art asphalt paving.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
      iconBg: 'rgba(229,57,53,0.1)',
      iconBorder: 'none',
      cardBg: 'var(--white)',
      titleColor: 'var(--text-dark)',
      textColor: 'var(--text-light)',
      title: 'Bridges',
      desc: 'High-strength river crossings, complex overpasses, flyovers, and steel superstructures built to outlast generations.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
        </svg>
      ),
      iconBg: 'rgba(229,57,53,0.1)',
      iconBorder: 'none',
      cardBg: 'var(--white)',
      titleColor: 'var(--text-dark)',
      textColor: 'var(--text-light)',
      title: 'Water Supply & Drainage',
      desc: 'Extensive pipe networks, high-output treatment plants, and water storage towers delivering clean water securely.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6c.6 0 1.2-.2 1.7-.6.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6.6 0 1.2-.2 1.7-.6.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6"/>
          <path d="M2 12c.6 0 1.2-.2 1.7-.6.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6.6 0 1.2-.2 1.7-.6.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6"/><path d="M2 18c.6 0 1.2-.2 1.7-.6.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6.6 0 1.2-.2 1.7-.6.9-.6 2.5-.6 3.5 0 .5.4 1.1.6 1.7.6"/>
        </svg>
      ),
      iconBg: 'rgba(229,57,53,0.1)',
      iconBorder: 'none',
      cardBg: 'var(--white)',
      titleColor: 'var(--text-dark)',
      textColor: 'var(--text-light)',
      title: 'Irrigation & Canals',
      desc: 'Large-scale agricultural irrigation schemes, distribution canals, and flood prevention dams.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8"/>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
          <circle cx="12" cy="5" r="3"/>
        </svg>
      ),
      iconBg: 'rgba(255,255,255,0.08)',
      iconBorder: '1px solid rgba(255,255,255,0.12)',
      cardBg: 'linear-gradient(135deg, #1f2937, #111827)',
      titleColor: '#ffffff',
      textColor: '#9ca3af',
      title: 'Maritime & Dredging',
      desc: 'Fishery harbours, commercial breakwaters, coastal erosion stabilization, and marine dredging.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <line x1="12" x2="12" y1="9" y2="13"/>
          <line x1="12" x2="12.01" y1="17" y2="17"/>
        </svg>
      ),
      iconBg: 'rgba(229,57,53,0.1)',
      iconBorder: 'none',
      cardBg: 'var(--white)',
      titleColor: 'var(--text-dark)',
      textColor: 'var(--text-light)',
      title: 'Disaster Mitigation & Civil Works',
      desc: 'Landslide vulnerability reduction, unstable slope rectification, road disaster countermeasures, and general civil works.',
    },
  ];

  return (
    <div className="services-page-top" style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Scope-isolated clean CSS classes specifically for this page */}
      <style>{`
        .services-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }
        
        .services-item-card {
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid transparent;
        }

        .services-item-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.08);
          border-color: var(--primary-red) !important;
        }

        .services-resource-layout {
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .services-resource-image-box {
          flex: 1.2;
          min-height: 500px;
          border-radius: 32px;
          background-image: url('/images/machinery-combined.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 55px rgba(0,0,0,0.12);
        }

        .services-resource-text-box {
          flex: 1;
        }

        @media (max-width: 768px) {
          .services-card-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .services-item-card {
            padding: 30px 24px !important;
            border-radius: 20px !important;
          }
          .services-item-card:hover {
            transform: translateY(-3px) !important;
          }
          .services-resource-layout {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .services-resource-image-box {
            width: 100% !important;
            min-height: 300px !important;
            border-radius: 24px !important;
          }
          .services-resource-text-box {
            width: 100% !important;
          }
        }
      `}</style>

      {/* Page Header */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/services-build.jpg')", 
          padding: isMobile ? "70px 20px" : "100px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 30%", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 40px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.65) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1.5px solid var(--primary-red)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)" }}>← Back to Home</Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.5rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>What We Build</h1>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: isMobile ? "50px 10px" : "100px 20px", backgroundColor: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.95rem" }}>Our Expertise</h4>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
            </div>
            <p style={{ fontSize: isMobile ? "1.1rem" : "1.25rem", color: "var(--text-light)", lineHeight: 1.85, fontWeight: 500 }}>
              Earthworks and structural concrete are where we started — they&apos;re far from where we stopped. Today our expertise reaches across nearly every discipline civil engineering has to offer.
            </p>
          </div>

          <div className="services-card-grid" style={{ width: "100%" }}>
            {services.map((svc, index) => (
              <div 
                key={index} 
                className="services-item-card"
                style={{ 
                  background: svc.cardBg, 
                  border: svc.cardBg === 'var(--white)' ? "1px solid var(--border-soft)" : "1px solid rgba(255,255,255,0.05)",
                  width: "100%",
                  boxSizing: "border-box"
                }}
              >
                <div style={{ 
                  background: svc.iconBg, 
                  border: svc.iconBorder,
                  display: "inline-flex", 
                  padding: "18px", 
                  borderRadius: "20px", 
                  marginBottom: "30px",
                  alignSelf: "flex-start",
                  boxShadow: svc.cardBg === 'var(--white)' ? "none" : "0 8px 20px rgba(0,0,0,0.3)"
                }}>
                  {svc.icon}
                </div>
                
                <h3 style={{ 
                  fontFamily: "var(--font-heading)", 
                  fontSize: isMobile ? "1.5rem" : "1.8rem", 
                  color: svc.titleColor, 
                  marginBottom: "15px",
                  fontWeight: 800,
                  letterSpacing: "-0.5px"
                }}>
                  {svc.title}
                </h3>
                
                <p style={{ 
                  color: svc.textColor, 
                  lineHeight: 1.8, 
                  fontSize: isMobile ? "1rem" : "1.05rem", 
                  margin: 0,
                  fontWeight: 500
                }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Planning */}
      <section style={{ padding: isMobile ? "50px 10px" : "100px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div className="services-resource-layout">
            <div className="services-resource-image-box">
              <div style={{ background: "linear-gradient(to top, rgba(15,23,42,0.95), rgba(15,23,42,0.4) 50%, transparent)", padding: isMobile ? "30px 20px" : "50px", width: "100%", position: "absolute", bottom: 0, left: 0, boxSizing: "border-box" }}>
                <h3 style={{ color: "white", marginBottom: "8px", fontFamily: "var(--font-heading)", fontSize: isMobile ? "1.8rem" : "2.5rem", fontWeight: 800 }}>Meticulous Planning</h3>
                <p style={{ color: "#cbd5e1", margin: 0, fontSize: isMobile ? "0.95rem" : "1.1rem", fontWeight: 500 }}>Strategic asset management and resource deployment.</p>
              </div>
            </div>
            
            <div className="services-resource-text-box">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                <div style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></div>
                <span style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem" }}>Operational Logistics</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.2rem" : "3.2rem", color: "var(--text-dark)", marginBottom: "25px", fontWeight: 800, lineHeight: 1.15 }}>Resource Planning</h2>
              
              <p style={{ color: "var(--text-light)", fontSize: isMobile ? "1.05rem" : "1.15rem", lineHeight: 1.9, marginBottom: "20px", fontWeight: 500 }}>
                Every great build starts long before the first excavation. Resource planning at the pre-construction stage is what separates a project that runs on schedule from one that doesn&apos;t — mismanagement here is the single biggest cause of delay and cost overrun.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: isMobile ? "1.05rem" : "1.15rem", lineHeight: 1.9, marginBottom: "40px", fontWeight: 500 }}>
                That&apos;s why, before breaking ground, we map out the construction schedule, organisation chart, plant and equipment allocation, and materials schedule against the master programme — so every resource is in the right place before it&apos;s needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
