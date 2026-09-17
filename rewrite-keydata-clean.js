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
            backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.3) 60%, rgba(15, 23, 42, 0.9) 100%), url('/images/page-headers/blueprint-bg-hq.jpg')", 
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

      {/* Main Content */}
      <section style={{ padding: isMobile ? "0 12px 60px" : "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: isMobile ? "20px" : "30px" }}>

          {/* Key Stats — simple row */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '12px' : '20px' }}>
            {[
              { num: "1995", label: "Year Established", icon: <Calendar size={20} /> },
              { num: "1,400+", label: "Employees", icon: <Users size={20} /> },
              { num: "1,000+", label: "Machinery Units", icon: <Truck size={20} /> },
              { num: "100+", label: "Major Projects", icon: <CheckCircle2 size={20} /> },
            ].map((s, i) => (
              <div key={i} className="hover-lift" style={{ 
                background: 'var(--white)', 
                borderRadius: '16px', 
                padding: isMobile ? '20px 16px' : '28px 24px',
                border: '1px solid var(--border-soft)',
                textAlign: 'center',
                borderTop: '3px solid var(--primary-red)'
              }}>
                <div style={{ color: 'var(--primary-red)', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? '1.8rem' : '2.2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: '0 0 4px', color: 'var(--text-dark)', lineHeight: 1 }}>{s.num}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: 0, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Corporate Identity */}
          <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '16px', padding: isMobile ? '28px 24px' : '40px 45px', border: '1px solid var(--border-soft)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Building2 size={20} color="var(--primary-red)" />
              <h3 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Corporate Identity</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { label: "Company Name", value: "RR Construction (Pvt) Ltd" },
                { label: "Registration No", value: "PV 11346" },
                { label: "Managing Director", value: "Mr. Ranjith Senadeera S. D." },
              ].map((item, i) => (
                <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-soft)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>{item.label}</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Head Office */}
          <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '16px', padding: isMobile ? '28px 24px' : '40px 45px', border: '1px solid var(--border-soft)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <MapPin size={20} color="var(--primary-red)" />
              <h3 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Head Office</h3>
            </div>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '1rem', margin: 0 }}>No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.</p>
          </div>

          {/* ISO & Partners row */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '20px' : '30px' }}>

            {/* ISO Certifications */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '16px', padding: isMobile ? '28px 24px' : '40px 45px', border: '1px solid var(--border-soft)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <ShieldCheck size={20} color="var(--primary-red)" />
                <h3 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', margin: 0 }}>ISO Certifications</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  "ISO 9001:2015 — Quality Management",
                  "ISO 14001:2015 — Environmental Management",
                  "ISO 45001:2018 — Occupational Health & Safety"
                ].map((cert, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingBottom: '10px', borderBottom: i < 2 ? '1px solid var(--border-soft)' : 'none' }}>
                    <Award size={16} color="var(--primary-red)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ color: 'var(--text-dark)', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Partners */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '16px', padding: isMobile ? '28px 24px' : '40px 45px', border: '1px solid var(--border-soft)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Globe size={20} color="var(--primary-red)" />
                <h3 className="card-heading" style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Corporate Partners</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-soft)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Auditor</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1rem', margin: 0 }}>P. Wijayawardana & Co.</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Bankers</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB</p>
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
console.log('Rewrote key-data page with clean minimal design');
