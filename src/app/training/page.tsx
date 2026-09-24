"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';


import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";
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
            {/* Hero Section - Standard page-header with diagonal slant + full image on right */}
      <section className="page-header" style={{
        backgroundImage: "url('/images/about/blueprint-blue-bg-wide.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "350px" : "520px",
      }}>
        <div className="container">
          <AutoBreadcrumb />
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? "2.4rem" : "clamp(2.5rem, 7vw, 5rem)",
            margin: "0 0 14px", fontWeight: 800,
            lineHeight: 1.05, color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}>
            Training & <span style={{ color: "var(--primary-red)" }}>Development</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px 50px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", textAlign: "left" }}>
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
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px" }}>
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
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
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
                    <span style={{ fontSize: "0.8rem", background: "var(--border-soft)", color: "var(--text-dark)", padding: "6px 15px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "800" }}>Corporate Training</span>
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
                <div style={{ width: isMobile ? "100%" : "40%", position: "relative", minHeight: isMobile ? "300px" : "auto", display: "flex" }}>
                  <img 
                    src="/images/training/coursera-ai.jpg" 
                    alt="AI Training at RR Construction" 
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
                  />
                  <div style={{ position: "absolute", bottom: "20px", right: "20px", background: "white", padding: "8px 16px", borderRadius: "8px", boxShadow: "0 10px 20px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "10px" }}>
                     <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0056D2", letterSpacing: "-1px", fontFamily: "Arial, sans-serif" }}>coursera</span>
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


