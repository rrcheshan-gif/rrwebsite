"use client";

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

      {/* Stats Highlight Row */}
      <section style={{ padding: isMobile ? "0 12px 30px" : "0 20px 50px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '12px' : '20px' }}>
            {[
              { num: "1995", label: "Established", icon: <Calendar size={24} />, gradient: "linear-gradient(135deg, var(--primary-red) 0%, #b71c1c 100%)" },
              { num: "1,400+", label: "Employees", icon: <Users size={24} />, gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" },
              { num: "1,000+", label: "Machinery", icon: <Truck size={24} />, gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" },
              { num: "100+", label: "Projects", icon: <CheckCircle2 size={24} />, gradient: "linear-gradient(135deg, var(--primary-red) 0%, #b71c1c 100%)" },
            ].map((s, i) => (
              <div key={i} className="hover-lift" style={{ 
                background: s.gradient, borderRadius: isMobile ? '20px' : '24px', 
                padding: isMobile ? '24px 20px' : '35px 30px', color: 'white', 
                textAlign: 'center', position: 'relative', overflow: 'hidden',
                boxShadow: i % 2 === 0 ? '0 15px 30px rgba(229,57,53,0.15)' : '0 15px 30px rgba(15,23,42,0.15)'
              }}>
                <div style={{ marginBottom: '12px', opacity: 0.7 }}>{s.icon}</div>
                <h3 style={{ fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : '2.8rem', fontFamily: 'var(--font-heading)', fontWeight: 900, margin: 0, lineHeight: 1 }}>{s.num}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: isMobile ? '0.8rem' : '0.95rem', marginTop: '8px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: '8px 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Info Cards */}
      <section style={{ padding: isMobile ? "10px 12px 40px" : "20px 20px 80px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: isMobile ? '15px' : '25px' }}>
            
            {/* Company Profile Card */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '24px', padding: isMobile ? '30px 24px' : '45px 50px', border: '1px solid var(--border-soft)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <Building2 size={180} color="var(--bg-light)" style={{ position: 'absolute', right: '-30px', top: '-30px', opacity: 0.5, zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                  <div style={{ background: 'rgba(229,57,53,0.1)', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={22} color="var(--primary-red)" />
                  </div>
                  <h3 style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '0.8rem', margin: 0 }}>Corporate Identity</h3>
                </div>
                <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '30px', lineHeight: 1.1 }}>RR Construction <br/><span style={{ color: 'var(--text-light)', fontSize: '0.7em' }}>(Pvt) Ltd</span></h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
                  <div style={{ padding: '15px 20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Registration No</p>
                    <p style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.2rem', margin: 0 }}>PV 11346</p>
                  </div>
                  <div style={{ padding: '15px 20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Managing Director</p>
                    <p style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.05rem', margin: 0 }}>Mr. Ranjith Senadeera S. D.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Head Office Card */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '24px', padding: isMobile ? '30px 24px' : '45px 40px', border: '1px solid var(--border-soft)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(229,57,53,0.1)', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={22} color="var(--primary-red)" />
                </div>
                <h4 style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.2rem', margin: 0, fontFamily: 'var(--font-heading)' }}>Head Office</h4>
              </div>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '1rem', margin: 0 }}>No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section style={{ padding: isMobile ? "10px 12px 60px" : "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '15px' : '25px' }}>
            
            {/* ISO Certifications */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '24px', padding: isMobile ? '30px 24px' : '45px 50px', border: '1px solid var(--border-soft)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{ background: 'rgba(229,57,53,0.1)', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={22} color="var(--primary-red)" />
                </div>
                <h3 style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.3rem', margin: 0, fontFamily: 'var(--font-heading)' }}>ISO Certified</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {["ISO 9001:2015 � Quality Management", "ISO 14001:2015 � Environmental Management", "ISO 45001:2018 � Occupational Health & Safety"].map((cert, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: 'var(--bg-light)', borderRadius: '12px', borderLeft: '3px solid var(--primary-red)' }}>
                    <Award size={18} color="var(--primary-red)" />
                    <p style={{ color: 'var(--text-dark)', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Partners */}
            <div className="hover-lift" style={{ background: 'var(--white)', borderRadius: '24px', padding: isMobile ? '30px 24px' : '45px 50px', border: '1px solid var(--border-soft)', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{ background: 'rgba(229,57,53,0.1)', width: '45px', height: '45px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe size={22} color="var(--primary-red)" />
                </div>
                <h3 style={{ color: 'var(--text-dark)', fontWeight: 800, fontSize: '1.3rem', margin: 0, fontFamily: 'var(--font-heading)' }}>Corporate Partners</h3>
              </div>
              
              <div style={{ padding: '18px 20px', background: 'var(--bg-light)', borderRadius: '12px', marginBottom: '15px' }}>
                <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Auditor</p>
                <p style={{ color: 'var(--text-dark)', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>P. Wijayawardana & Co.</p>
              </div>
              
              <div style={{ padding: '18px 20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
                <p style={{ color: 'var(--text-light)', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Company Bankers</p>
                <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
