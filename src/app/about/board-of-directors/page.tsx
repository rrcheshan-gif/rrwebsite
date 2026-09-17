"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function BoardOfDirectors() {
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
            <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Board of <span style={{ color: "var(--primary-red)" }}>Directors</span></h1>
          </div>
        </section>

      {/* Leadership List */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>Board of Directors</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px", marginBottom: "60px" }}>
            {COMPANY_DATA.leadership.filter(l => l.role.includes('Director')).map((leader, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "stretch", gap: "40px", background: "var(--white)", padding: isMobile ? "30px 20px" : "50px", borderRadius: "24px", border: "1px solid var(--border-soft)", textAlign: isMobile ? "center" : "left", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                {leader.image ? (
                  <div style={{ display: "flex", flexShrink: 0, width: isMobile ? "100%" : "320px", margin: isMobile ? "0 0 20px 0" : "0", borderRadius: "16px", padding: "8px", background: "var(--bg-light)", border: "1px solid var(--border-soft)", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
                    <img src={leader.image} alt={leader.name} style={{ width: "100%", height: isMobile ? "auto" : "100%", objectFit: "cover", display: "block", borderRadius: "10px" }} />
                  </div>
                ) : (
                  <div style={{ flexShrink: 0, width: isMobile ? "100%" : "330px", height: "330px", margin: isMobile ? "0 0 20px 0" : "0", background: "rgba(229, 57, 53, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}>
                    <User size={80} color="var(--primary-red)" />
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 8px 0" }}>{leader.name}</h3>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.2rem", fontWeight: 700,  letterSpacing: "1px", margin: "0 0 15px 0" }}>{leader.role}</p>
                  <p style={{ color: "var(--text-light)", fontSize: "1.1rem", margin: "0 0 20px 0", fontWeight: 600 }}>{leader.qual}</p>
                  {leader.bio && (
                    <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "20px", marginTop: "20px" }}>
                      <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0, textAlign: "justify" }}>
                        {leader.bio}
                      </p>
                    </div>
                  )}
                </div>
                
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "50px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>Executive Management</h2>
            <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", borderRadius: "2px" }}></div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
            {COMPANY_DATA.leadership.filter(l => !l.role.includes('Director')).map((leader, idx) => (
              <div key={idx} style={{ display: "flex", gap: "30px", background: "var(--white)", padding: isMobile ? "30px 20px" : "40px", borderRadius: "24px", border: "1px solid var(--border-soft)", alignItems: isMobile ? "center" : "stretch", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left" }}>
                {leader.image ? (
                  <div style={{ display: "flex", width: isMobile ? "100%" : "200px", borderRadius: "16px", padding: "6px", background: "var(--bg-light)", border: "1px solid var(--border-soft)", flexShrink: 0, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
                    <img src={leader.image} alt={leader.name} style={{ width: "100%", height: isMobile ? "auto" : "100%", objectFit: "cover", display: "block", borderRadius: "10px" }} />
                  </div>
                ) : (
                  <div style={{ width: isMobile ? "100%" : "200px", height: "200px", background: "rgba(229, 57, 53, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                    <User size={60} color="var(--primary-red)" />
                  </div>
                )}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ fontSize: "isMobile ? '1.5rem' : '1.8rem'", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 5px 0" }}>{leader.name}</h3>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 10px 0" }}>{leader.role}</p>
                  <p style={{ color: "var(--text-light)", fontSize: "1rem", margin: 0, fontWeight: 600 }}>{leader.qual}</p>
                  {leader.bio && (
                    <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: "15px", marginTop: "15px" }}>
                      <p style={{ color: "var(--text-dark)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0, textAlign: "justify" }}>
                        {leader.bio}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}


