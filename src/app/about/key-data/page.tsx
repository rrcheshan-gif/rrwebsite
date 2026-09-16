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

  const keyData = [
    { label: "Company Name", value: "RR Construction (Pvt) Ltd", icon: <Building2 size={32} /> },
    { label: "Established", value: "1995", icon: <Calendar size={32} /> },
    { label: "Registration No", value: "PV 11346", icon: <FileText size={32} /> },
    { label: "Managing Director", value: "Mr. Ranjith Senadeera S. D.", icon: <UserCircle size={32} /> },
    { label: "Workforce", value: "1,400+ Employees", icon: <Users size={32} /> },
    { label: "Machinery & Equipment", value: "1,000+ Heavy Units", icon: <Truck size={32} /> },
    { label: "ISO Certificates", value: "ISO 9001, 14001, 45001", icon: <ShieldCheck size={32} /> },
    { label: "Completed Projects", value: "100+ Major Projects", icon: <CheckCircle2 size={32} /> },
    { label: "Company Auditor", value: "P. Wijayawardana & Co.", icon: <Calculator size={32} /> },
    { label: "Head Office", value: "No. 865, Baseline Road, Colombo 9", icon: <MapPin size={32} />, fullWidth: true },
    { label: "Company Bankers", value: "HNB, DFCC, Sampath, NDB, Commercial, Peoples Bank & NTB", icon: <Landmark size={32} />, fullWidth: true }
  ];

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

      {/* Modern Content Section */}
      <section style={{ padding: isMobile ? "20px 10px 80px" : "20px 20px 120px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {keyData.map((item, idx) => (
              <div key={idx} style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '20px', 
                padding: '30px', 
                border: '1px solid #f1f5f9',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                gridColumn: item.fullWidth && !isMobile ? '1 / -1' : 'auto',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }} className="hover-lift">
                
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary-red)' }}></div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ color: 'var(--primary-red)', background: 'rgba(229, 57, 53, 0.08)', padding: '12px', borderRadius: '12px', display: 'flex' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</h3>
                </div>
                
                <div style={{ paddingLeft: '65px' }}>
                  <p style={{ color: '#0f172a', margin: 0, fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}>{item.value}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
