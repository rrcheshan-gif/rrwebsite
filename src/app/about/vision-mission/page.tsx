"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Target, CheckCircle2, Globe, Shield, HardHat, TrendingUp } from 'lucide-react';

export default function VisionMission() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/vision.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "70px 20px" : "120px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.5rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Guiding principles that drive our commitment to engineering excellence.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <div style={{ width: "40px", height: "3px", background: "var(--primary-red)" }}></div>
                <h2 style={{ color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "1rem", fontFamily: "var(--font-heading)" }}>Our Vision</h2>
              </div>
              <h3 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", margin: "0 0 30px", fontFamily: "var(--font-heading)", lineHeight: 1.2, fontWeight: 800 }}>
                "Engineering Sri Lanka's <span style={{ color: "var(--primary-red)" }}>Tomorrow.</span>"
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "20px", fontWeight: 500 }}>
                We envision a future where robust, sustainable, and world-class infrastructure forms the backbone of Sri Lanka’s socio-economic development. 
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Our goal is to be the nation’s premier engineering and construction organization—recognized internationally for our technical capability, unwavering safety standards, and commitment to long-term national progress.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
              <div style={{ background: "linear-gradient(135deg, #1f2937, #111827)", padding: "50px", borderRadius: "32px", width: "100%", textAlign: "center", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", opacity: 0.05, transform: "scale(2)" }}>
                  <Eye size={200} color="white" />
                </div>
                <Eye size={64} color="var(--primary-red)" style={{ margin: "0 auto 30px", position: "relative", zIndex: 2 }} />
                <h4 style={{ color: "white", fontSize: "1.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px", position: "relative", zIndex: 2 }}>Vision Statement</h4>
                <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7, margin: 0, position: "relative", zIndex: 2 }}>
                  To establish RR Construction as the definitive benchmark for civil engineering excellence and infrastructure development in Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: isMobile ? "60px 10px" : "100px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Target size={40} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Our Mission</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              To deliver outstanding engineering solutions through continuous improvement, resource optimization, and a commitment to our core stakeholders.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {[
              { title: "Engineering Excellence", desc: "Consistently delivering high-quality infrastructure that meets or exceeds global engineering and architectural standards.", icon: <HardHat size={32} color="var(--primary-red)" /> },
              { title: "Timely Delivery", desc: "Optimizing our massive fleet and skilled workforce to execute complex projects strictly within scheduled timelines.", icon: <TrendingUp size={32} color="var(--primary-red)" /> },
              { title: "Uncompromising Safety", desc: "Fostering a 'Zero Harm' culture by strictly adhering to ISO 45001 Occupational Health & Safety standards.", icon: <Shield size={32} color="var(--primary-red)" /> },
              { title: "Environmental Responsibility", desc: "Minimizing ecological impact through sustainable material sourcing, waste reduction, and ISO 14001 compliance.", icon: <Globe size={32} color="var(--primary-red)" /> }
            ].map((mission, idx) => (
              <div key={idx}  style={{ background: "var(--bg-light)", padding: "40px 30px", borderRadius: "24px", border: "1px solid var(--border-soft)", transition: "transform 0.3s" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: "20px" }}>{mission.icon}</div>
                <h4 style={{ fontSize: "1.3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>{mission.title}</h4>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0 }}>{mission.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Our Commitment */}
      <section style={{ padding: isMobile ? "60px 20px" : "80px 20px", background: "linear-gradient(135deg, #1f2937, #111827)", color: "white" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "30px" }}>Our Commitment</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {[
              "Quality Construction",
              "Client Partnerships",
              "People Development",
              "Continuous Improvement"
            ].map((item, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)", padding: "15px 30px", borderRadius: "30px", display: "flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--primary-red)" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            See Our <span style={{ color: "var(--primary-red)" }}>Core Values</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            Learn more about the principles that govern our operations and relationships.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/core-values" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              View Core Values <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
