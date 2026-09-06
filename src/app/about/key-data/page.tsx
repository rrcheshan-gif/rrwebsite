
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

export default function KeyDataPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/history-hero.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About Us
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>
            Key <span style={{ color: "var(--primary-red)" }}>Data</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            The fundamental metrics, registrations, and structural pillars behind RR Construction's national capacity.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: isMobile ? "20px 10px 80px" : "20px 20px 120px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: isMobile ? '24px' : '32px', 
            padding: isMobile ? '30px 20px' : '50px 60px', 
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Company Name</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>RR Construction (Pvt) Ltd</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Registered / Established</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>1995</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Head Office</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.6 }}>No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Company Registration No</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>PV 11346</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Managing Director</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>Mr. Ranjith Senadeera S. D.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Workforce</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>1,400+ Employees</p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Machinery & Equipment</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>1,000+ Self-Owned Heavy Machinery Units</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>ISO Certificates</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>ISO 9001:2015, ISO 14001:2015, ISO 45001:2018</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Company Auditor</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.6 }}>
                  P. Wijayawardana & Co.<br />
                  No. 22/2, Pepiliyana Road, Gansabha Junction, Gangodawila, Nugegoda.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px', borderBottom: '1px solid #f1f5f9', paddingBottom: '25px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Company Bankers</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.6 }}>
                  Hatton National Bank, DFCC Bank, Sampath Bank, National Development Bank, Commercial Bank, Peoples Bank & Nations Trust Bank.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '300px 1fr', gap: '10px' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1a202c', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>Completed Projects</h3>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>100+ Major National Projects</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
