"use client";
﻿import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Training() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/training-dev-header.jpg')", padding: "140px 20px 40px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center 30%",  borderRadius: '32px',
          margin: '0 20px 40px', overflow: "hidden" }}>
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home
            </Link>
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Training & <span style={{ color: "var(--primary-red)" }}>Development</span></h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px 50px" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>DEVELOPMENT</h4>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
            Continuous Learning at <span className="text-gradient" style={{ fontWeight: 300 }}>RR</span>
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "40px", textAlign: "left" }}>
            At RR Construction, we believe that an investment in our people is an investment in our future. As construction methodologies evolve rapidly, we ensure our workforce is equipped with the latest technical knowledge and safety protocols through rigorous, continuous training programs.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px" }}>
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Technical Skills Enhancement</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We conduct regular workshops for our engineers on advanced BIM (Building Information Modeling) software, modern structural design analysis, and GPS-guided machinery operation to maintain our edge as a leading engineering contractor.</p>
          </div>
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>HSE (Health, Safety & Environment)</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>Safety is non-negotiable. Every employee undergoes mandatory ISO 45001 safety induction and frequent refresher courses covering working at heights, hazard identification, and emergency response procedures.</p>
          </div>
          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>Leadership Development</h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>We identify high-potential individuals within our ranks and provide them with project management training, financial literacy workshops, and leadership seminars to groom the next generation of RR Construction leaders.</p>
          </div>
        </div>
      </section>

      {/* Special Initiatives Section */}
      <section style={{ padding: "0 20px 80px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "50px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>PROGRAMS</h4>
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", margin: "0 0 15px 0", fontWeight: 800, lineHeight: 1.1 }}>
                Special <span className="text-gradient" style={{ fontWeight: 300 }}>Initiatives</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.15rem", margin: 0, textAlign: "left" }}>Discover the extra steps we take to empower our team and stay ahead of industry curves.</p>
            </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            
            {/* Initiative Item 1: Coursera AI */}
            <div className="hover-lift" style={{ background: "var(--white)", borderRadius: "24px", border: "1px solid var(--border-soft)", overflow: "hidden", display: "flex", flexDirection: isMobile ? "column" : "row", boxShadow: "0 15px 40px rgba(0,0,0,0.05)" }}>
              {/* Left Content */}
              <div style={{ flex: 1, padding: isMobile ? "30px 20px" : "50px" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.8rem", background: "rgba(15, 23, 42, 0.08)", color: "var(--text-dark)", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>Corporate Training</span>
                    <span style={{ fontSize: "0.8rem", background: "var(--primary-red)", color: "white", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>Upcoming Program</span>
                 </div>
                 
                 <h3 style={{ fontFamily: "var(--font-heading)", fontSize: isMobile ? "1.6rem" : "2rem", color: "var(--text-dark)", marginBottom: "20px", lineHeight: 1.3 }}>
                   Empowering Our Team with <br/>
                   <span style={{ color: "var(--primary-red)" }}>Coursera AI Certification</span>
                 </h3>
                 
                 <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "30px" }}>
                   At RR Construction, we are taking a bold step into the future. We are launching a comprehensive <strong>Artificial Intelligence & Machine Learning</strong> training program for our staff through the global learning platform, Coursera. This initiative ensures our workforce remains at the absolute cutting edge of construction technology, ready to integrate AI-driven efficiencies into our engineering operations.
                 </p>
                 
                 <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
                   {[
                     "AI-Driven Project Management",
                     "Automated Construction Workflows",
                     "Data Analytics & Safety Prediction",
                     "Generative AI for Planning"
                   ].map((item, i) => (
                     <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-dark)", fontWeight: 700, fontSize: "0.95rem" }}>
                       <CheckCircle size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} /> 
                       <span>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
              
              {/* Right Graphic/Logo area */}
              <div style={{ width: isMobile ? "100%" : "40%", background: "var(--bg-light)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "50px 30px", borderLeft: isMobile ? "none" : "1px solid var(--border-soft)", borderTop: isMobile ? "1px solid var(--border-soft)" : "none" }}>
                 
                 {/* Coursera simulated logo */}
                 <div style={{ fontSize: isMobile ? "3rem" : "3.5rem", fontWeight: 900, color: "var(--text-dark)", letterSpacing: "-2px", fontFamily: "Arial, sans-serif", marginBottom: "25px" }}>
                   coursera
                 </div>
                 
                 <h4 style={{ textAlign: "center", color: "var(--text-dark)", fontWeight: 800, fontSize: "1.2rem", lineHeight: 1.5, margin: 0, fontFamily: "var(--font-heading)" }}>
                   Global Standard <br/>Tech Education
                 </h4>
                 
                 <p style={{ textAlign: "center", color: "#475569", fontSize: "0.95rem", marginTop: "15px", maxWidth: "250px" }}>
                   Equipping our people with world-class tech skills to engineer tomorrow.
                 </p>
                 
                 {/* Decorative elements */}
                 <div style={{ marginTop: "40px", display: "flex", gap: "12px" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary-red)", opacity: 0.2 }}></div>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary-red)", opacity: 0.5 }}></div>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary-red)", opacity: 1 }}></div>
                 </div>
              </div>
            </div>

            {/* Space for future items */}

          </div>
        </div>
      </section>
    </div>
  );
}

