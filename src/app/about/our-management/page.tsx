"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, User, Quote } from 'lucide-react';
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
            <BackButton />
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Our <span style={{ color: "var(--primary-red)" }}>Management</span></h1>
              
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
              <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, maxWidth: "100%", marginTop: "20px", textAlign: "justify" }}>
                At the helm of RR Construction is a visionary leadership team that blends decades of heavy civil engineering expertise with strategic foresight. Rather than simply managing projects, our leadership is deeply involved in the operational intricacies—from expanding our massive proprietary machinery fleet to advancing our asphalt and concrete production capabilities. It is this hands-on approach and unwavering commitment to total resource independence that ensures we consistently deliver uncompromising quality and forge lasting trust across Sri Lanka’s infrastructure landscape.
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


      {/* MD Message Section */}
      <section style={{ padding: isMobile ? "0px 10px 40px" : "0px 20px 80px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{ 
            background: "linear-gradient(135deg, #1b2738 0%, #0f172a 100%)", 
            borderRadius: "24px", 
            padding: isMobile ? "40px 20px" : "60px 80px", 
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
          }}>
            {/* Decorative background elements */}
            <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "50%", height: "150%", background: "rgba(255,255,255,0.03)", transform: "rotate(15deg)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", bottom: isMobile ? "15px" : "40px", right: isMobile ? "15px" : "60px", opacity: 0.06, pointerEvents: "none" }}>
              <Quote size={isMobile ? 80 : 160} color="#ffffff" fill="currentColor" />
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
                <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>Message from the Managing Director</h4>
              </div>
              
              <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 400, margin: "0 0 30px 0", lineHeight: 1.4, fontStyle: "italic" }}>
                "We don't just build structures; we build the foundations for our nation's progress with uncompromising quality."
              </h2>
              
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "20px", maxWidth: "900px", textAlign: "justify" }}>
                At RR Construction, our journey of over three decades has been defined by a singular commitment: delivering construction excellence. Since our inception, we have continually invested in our most valuable assets—our people and our state-of-the-art machinery fleet.
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "40px", maxWidth: "900px", textAlign: "justify" }}>
                This operational independence allows us to execute complex infrastructure projects that shape the future of Sri Lanka. As we look to the future, our core values of integrity, innovation, and uncompromising quality will continue to guide every project we undertake.
              </p>
              
              <div style={{ display: "flex", alignItems: "center", gap: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px" }}>
                <div>
                  <h4 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 800, margin: "0 0 5px 0" }}>Mr. Ranjith Senadhera S.D.</h4>
                  <p style={{ color: "var(--primary-red)", fontWeight: 600, margin: 0, fontSize: "0.95rem", letterSpacing: "1px" }}>MANAGING DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



