"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
            textAlign: "left", 
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
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>OUR COMPANY</h4>
            </div>
            <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Key <span className="text-gradient" style={{ fontWeight: 600 }}>Data</span></h1>
        </div>
      </section>

      {/* Simple List Layout (As requested) */}
      <section style={{ padding: isMobile ? "10px 10px 80px" : "20px 20px 120px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: isMobile ? "0" : "0 16px" }}>
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: '16px',
            padding: isMobile ? '30px 20px' : '50px 60px',
            border: '1px solid var(--primary-red)', boxShadow: '0 4px 25px rgba(229, 57, 53, 0.08)',
            
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

              {[
                { label: "Company Name", value: "RR Construction (Pvt) Ltd" },
                { label: "Head Office", value: "No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta." },
                { label: "Registration No", value: "PV 11346" },
                { label: "Year Established", value: "1995" },
                { label: "Ownership", value: "Private Limited Liability Company" },
                { label: "Managing Director", value: "Mr. Ranjith Senadeera S. D." },
                { label: "National Grading (CIDA)", value: "CS2 (Highest Grade in Buildings, Roads, Water Supply & Drainage, Bridges)" },
                { label: "Workforce", value: "1,400+ Dedicated Employees" },
                { label: "Machinery Units", value: "1,000+ Heavy Machinery Units" },
                { label: "Quality Certifications", value: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018" },
                { label: "Company Auditor", value: "P. Wijayawardana & Co." },
                { label: "Company Bankers", value: "HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB" }
              ].map((item, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 10px', fontFamily: 'var(--font-heading)' }}>
                    {item.label}
                  </h3>
                  <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {item.value}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
