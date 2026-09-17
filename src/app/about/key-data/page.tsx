"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Building2, Calendar, MapPin, FileText, UserCircle, Users, Truck, ShieldCheck, Calculator, Landmark, CheckCircle2 } from 'lucide-react';

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
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to About Us</Link>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Key <span style={{ color: "var(--primary-red)" }}>Data</span></h1>
        </div>
      </section>

      {/* Modern Bento Grid Section */}
      <section style={{ padding: isMobile ? "10px 10px 80px" : "20px 20px 120px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0" : "0 16px" }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '15px' : '25px' }}>
            
            {/* 1. Identity (Wide) */}
            <div className="hover-lift" style={{ gridColumn: isMobile ? 'span 1' : 'span 2', background: 'var(--white)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '50px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden' }}>
              <Building2 size={200} color="var(--bg-light)" style={{ position: 'absolute', right: '-40px', top: '-40px', opacity: 0.5, zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2.5px', fontWeight: 800, fontSize: '0.85rem', marginBottom: '15px' }}>Corporate Identity</h4>
                <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '30px', lineHeight: 1.1 }}>RR Construction <br/><span style={{ color: '#64748b' }}>(Pvt) Ltd</span></h2>
                
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '20px' : '50px' }}>
                  <div>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '5px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Registration No</p>
                    <p style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.3rem' }}>PV 11346</p>
                  </div>
                  <div>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '5px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Managing Director</p>
                    <p style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.3rem' }}>Mr. Ranjith Senadeera S. D.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Established (Square, Dark Red) */}
            <div className="hover-lift" style={{ background: 'linear-gradient(135deg, var(--primary-red) 0%, #b71c1c 100%)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '50px 40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(229,57,53,0.2)' }}>
              <Calendar size={180} style={{ position: 'absolute', right: '-30px', bottom: '-30px', opacity: 0.1 }} />
              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '10px', opacity: 0.9 }}>Established</p>
                <h3 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)', fontWeight: 900, margin: 0, lineHeight: 1 }}>1995</h3>
                <div style={{ width: '40px', height: '4px', backgroundColor: 'white', margin: '20px auto 0', borderRadius: '2px', opacity: 0.5 }}></div>
              </div>
            </div>

            {/* 3. Workforce (Square, Dark Navy) */}
            <div className="hover-lift" style={{ background: 'linear-gradient(135deg, var(--text-dark) 0%, #0f172a 100%)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '40px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(15,23,42,0.15)' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}>
                <Users size={30} color="white" />
              </div>
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, lineHeight: 1 }}>1,400<span style={{ color: 'var(--primary-red)' }}>+</span></h3>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '10px', fontWeight: 500 }}>Dedicated Employees</p>
              </div>
            </div>

            {/* 4. Machinery (Square, Light) */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #f1f5f9', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ background: 'rgba(229,57,53,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={30} color="var(--primary-red)" />
              </div>
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, color: 'var(--text-dark)', lineHeight: 1 }}>1,000<span style={{ color: 'var(--primary-red)' }}>+</span></h3>
                <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '10px', fontWeight: 500 }}>Heavy Machinery Units</p>
              </div>
            </div>

            {/* 5. Projects (Square, Light) */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #f1f5f9', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ background: 'rgba(229,57,53,0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 size={30} color="var(--primary-red)" />
              </div>
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: 0, color: 'var(--text-dark)', lineHeight: 1 }}>100<span style={{ color: 'var(--primary-red)' }}>+</span></h3>
                <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '10px', fontWeight: 500 }}>Major National Projects</p>
              </div>
            </div>

            {/* 6. Head Office (1/3) */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '40px', border: '1px solid #f1f5f9', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ background: 'rgba(229,57,53,0.1)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
                <MapPin size={24} color="var(--primary-red)" />
              </div>
              <h4 style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.3rem', marginBottom: '15px', fontFamily: 'var(--font-heading)' }}>Head Office</h4>
              <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.</p>
            </div>

            {/* 7. Certifications & Partners (Wide 2/3) */}
            <div className="hover-lift" style={{ gridColumn: isMobile ? 'span 1' : 'span 2', background: 'var(--white)', borderRadius: '32px', padding: isMobile ? '35px 25px' : '50px 60px', border: '1px solid #f1f5f9', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '30px' : '40px' }}>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <ShieldCheck size={28} color="var(--primary-red)" />
                  <h4 style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '0.85rem', margin: 0 }}>Global Standards</h4>
                </div>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '20px' }}>ISO Certified</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-red)' }}></div><p style={{ color: '#475569', fontWeight: 600, margin: 0 }}>ISO 9001:2015</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-red)' }}></div><p style={{ color: '#475569', fontWeight: 600, margin: 0 }}>ISO 14001:2015</p></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-red)' }}></div><p style={{ color: '#475569', fontWeight: 600, margin: 0 }}>ISO 45001:2018</p></div>
                </div>
              </div>

              <div style={{ borderLeft: isMobile ? 'none' : '1px solid #e2e8f0', paddingTop: isMobile ? '20px' : '0', paddingLeft: isMobile ? '0' : '40px', borderTop: isMobile ? '1px solid #e2e8f0' : 'none' }}>
                <h4 style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '0.85rem', marginBottom: '25px' }}>Corporate Partners</h4>
                
                <div style={{ marginBottom: '25px' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Auditor</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>P. Wijayawardana & Co.</p>
                </div>
                
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Bankers</p>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
