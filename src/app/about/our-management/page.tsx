"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, User } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

import BackButton from "@/app/components/BackButton";
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
            backgroundImage: "url('/images/page-headers/engineering-blueprint-banner.jpg')", 
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
          
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Our <span style={{ color: "var(--primary-red)" }}>Management</span></h1>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "800px", lineHeight: 1.6, margin: "10px 0 0 0" }}>
               As one of Sri Lanka’s foremost Building and Civil Engineering Organizations, our strength is drawn from our Management Team, who is the backbone of our Company. Integrating strong values into our business model, they continue to anticipate and exceed our customers’ expectations, ensuring that we grow in success as the years go by.
            </p>
              <BackButton />
          </div>
        </section>

      {/* Leadership List */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ marginBottom: "50px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>LEADERSHIP</h4>
              </div>
              <h2 style={{ fontSize: isMobile ? "2rem" : "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
                Our <span className="text-gradient" style={{ fontWeight: 300 }}>Management</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "1000px", marginTop: "20px" }}>
                As one of Sri Lanka’s foremost Building and Civil Engineering Organizations, our strength is drawn from our Management Team, who is the backbone of our Company. Integrating strong values into our business model, they continue to anticipate and exceed our customers’ expectations, ensuring that we grow in success as the years go by.
              </p>
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

        </div>
      </section>
    </div>
  );
}


