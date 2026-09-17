const fs = require('fs');
const file = 'src/app/about/key-data/page.tsx';

const newContent = `"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Building2, Calendar, MapPin, Users, Truck, ShieldCheck, CheckCircle2, Award, Globe } from 'lucide-react';

export default function KeyDataPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
          className="page-header" 
          style={{ 
            backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.65) 60%, rgba(15, 23, 42, 0.92) 100%), url('/images/page-headers/engineering-blueprint-banner.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center top", 
            minHeight: isMobile ? "400px" : "600px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "flex-end",
            padding: isMobile ? "120px 20px 20px" : "160px 20px 20px", 
            textAlign: "center", 
            position: "relative", 
            borderRadius: isMobile ? "24px" : "32px",
            margin: isMobile ? "0 12px 30px" : "0 20px 40px",  
            overflow: "hidden"
          }}
        >
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to About Us</Link>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Key <span style={{ color: "var(--primary-red)" }}>Data</span></h1>
        </div>
      </section>

      {/* Bento Grid */}
      <section style={{ padding: isMobile ? "10px 10px 80px" : "20px 20px 120px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0" : "0 16px" }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '15px' : '25px' }}>
            
            {/* 1. Identity Wide (span 2) */}
            <div className="hover-lift" style={{ 
              gridColumn: isMobile ? 'span 1' : 'span 2',
              background: 'var(--white)', borderRadius: '24px',
              padding: isMobile ? '35px 25px' : '50px 55px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
              position: 'relative', overflow: 'hidden',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              <Building2 size={220} color="var(--bg-light)" style={{ position: 'absolute', right: '-40px', top: '-40px', opacity: 0.6, zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2.5px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '12px' }}>Corporate Identity</p>
                <h2 style={{ fontSize: isMobile ? '2rem' : '2.8rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '30px', lineHeight: 1.1 }}>
                  RR Construction <span style={{ color: 'var(--text-light)', fontWeight: 600 }}>(Pvt) Ltd</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '16px' : '40px' }}>
                  <div>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Registration No</p>
                    <p style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.2rem', margin: 0 }}>PV 11346</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Managing Director</p>
                    <p style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.1rem', margin: 0 }}>Mr. Ranjith Senadeera S. D.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Established (red) */}
            <div className="hover-lift" style={{ 
              background: 'var(--primary-red)',
              borderRadius: '24px',
              padding: isMobile ? '35px 25px' : '50px 40px',
              color: 'white', display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(211,47,47,0.2)'
            }}>
              <Calendar size={180} style={{ position: 'absolute', right: '-25px', bottom: '-25px', opacity: 0.08 }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 700, fontSize: '0.8rem', marginBottom: '10px', opacity: 0.85 }}>Established</p>
                <h3 style={{ fontSize: isMobile ? 'clamp(3rem, 12vw, 4.5rem)' : '4.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900, margin: 0, lineHeight: 1 }}>1995</h3>
                <div style={{ width: '36px', height: '3px', backgroundColor: 'rgba(255,255,255,0.4)', margin: '18px auto 0', borderRadius: '2px' }}></div>
              </div>
            </div>

            {/* 3. Workforce (dark) */}
            <div className="hover-lift" style={{ 
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              borderRadius: '24px', padding: isMobile ? '35px 25px' : '40px 40px',
              color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(15,23,42,0.15)'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={26} color="white" />
              </div>
              <div style={{ marginTop: '35px' }}>
                <h3 style={{ fontSize: isMobile ? 'clamp(2.5rem, 9vw, 3.5rem)' : '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, lineHeight: 1 }}>1,400<span style={{ color: 'var(--primary-red)' }}>+</span></h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '8px', fontWeight: 500, margin: '8px 0 0' }}>Dedicated Employees</p>
              </div>
            </div>

            {/* 4. Machinery */}
            <div className="hover-lift" style={{ 
              background: 'var(--white)', borderRadius: '24px',
              padding: isMobile ? '35px 25px' : '40px 40px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              <div style={{ background: 'rgba(211,47,47,0.08)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={26} color="var(--primary-red)" />
              </div>
              <div style={{ marginTop: '35px' }}>
                <h3 style={{ fontSize: isMobile ? 'clamp(2.5rem, 9vw, 3.5rem)' : '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, color: 'var(--text-dark)', lineHeight: 1 }}>1,000<span style={{ color: 'var(--primary-red)' }}>+</span></h3>
                <p style={{ color: 'var(--text-light)', fontSize: '1rem', marginTop: '8px', fontWeight: 500, margin: '8px 0 0' }}>Heavy Machinery Units</p>
              </div>
            </div>

            {/* 5. Projects */}
            <div className="hover-lift" style={{ 
              background: 'var(--white)', borderRadius: '24px',
              padding: isMobile ? '35px 25px' : '40px 40px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              <div style={{ background: 'rgba(211,47,47,0.08)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={26} color="var(--primary-red)" />
              </div>
              <div style={{ marginTop: '35px' }}>
                <h3 style={{ fontSize: isMobile ? 'clamp(2.5rem, 9vw, 3.5rem)' : '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, color: 'var(--text-dark)', lineHeight: 1 }}>100<span style={{ color: 'var(--primary-red)' }}>+</span></h3>
                <p style={{ color: 'var(--text-light)', fontSize: '1rem', marginTop: '8px', fontWeight: 500, margin: '8px 0 0' }}>Major National Projects</p>
              </div>
            </div>

            {/* 6. Head Office (1/3) */}
            <div className="hover-lift" style={{ 
              background: 'var(--white)', borderRadius: '24px',
              padding: isMobile ? '35px 25px' : '40px 40px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
              <div style={{ background: 'rgba(211,47,47,0.08)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <MapPin size={26} color="var(--primary-red)" />
              </div>
              <h4 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>Head Office</h4>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.</p>
            </div>

            {/* 7. Certifications + Partners (span 2) */}
            <div className="hover-lift" style={{ 
              gridColumn: isMobile ? 'span 1' : 'span 2',
              background: 'var(--white)', borderRadius: '24px',
              padding: isMobile ? '35px 25px' : '45px 55px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '30px' : '50px'
            }}>
              
              {/* ISO */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                  <ShieldCheck size={20} color="var(--primary-red)" />
                  <h4 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-heading)', margin: 0 }}>ISO Certifications</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['ISO 9001:2015 — Quality Management', 'ISO 14001:2015 — Environmental Management', 'ISO 45001:2018 — Occupational Health & Safety'].map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Award size={14} color="var(--primary-red)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <p style={{ color: 'var(--text-dark)', fontWeight: 600, margin: 0, fontSize: '0.9rem' }}>{c}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners */}
              <div style={{ borderLeft: isMobile ? 'none' : '1px solid var(--border-soft)', paddingLeft: isMobile ? '0' : '50px', borderTop: isMobile ? '1px solid var(--border-soft)' : 'none', paddingTop: isMobile ? '25px' : '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                  <Globe size={20} color="var(--primary-red)" />
                  <h4 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.1rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Corporate Partners</h4>
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.72rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Auditor</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>P. Wijayawardana & Co.</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.72rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Bankers</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync(file, newContent, 'utf8');
console.log('Restored original bento grid layout for key-data');
