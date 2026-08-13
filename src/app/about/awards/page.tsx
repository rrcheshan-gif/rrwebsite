"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, ShieldCheck, HardHat, Cog, CheckCircle2, Award } from 'lucide-react';

export default function Awards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const achievements = [
    {
      title: "100+ Completed Projects",
      desc: "Successfully delivered over a hundred large-scale infrastructure projects across Sri Lanka, ranging from rural road networks to major national highways.",
      icon: <CheckCircle2 size={40} color="var(--primary-red)" />
    },
    {
      title: "Heavy Equipment Scaling",
      desc: "Built a massive self-owned fleet of over 1,000 heavy construction machines, eliminating third-party dependencies and ensuring timeline control.",
      icon: <Cog size={40} color="var(--primary-red)" />
    },
    {
      title: "Maritime Engineering Capability",
      desc: "Recognized for the complex dredging and breakwater engineering executed at the Gandara Fishery Harbour, overcoming severe monsoonal challenges.",
      icon: <HardHat size={40} color="var(--primary-red)" />
    },
    {
      title: "Workforce Expansion",
      desc: "Grew into a major national employer, fostering a dedicated workforce of over 1,800 highly skilled engineers and construction professionals.",
      icon: <ShieldCheck size={40} color="var(--primary-red)" />
    }
  ];

  const certifications = [
    { title: "ISO 9001:2015", desc: "Quality Management System Certification" },
    { title: "ISO 14001:2015", desc: "Environmental Management System Certification" },
    { title: "ISO 45001:2018", desc: "Occupational Health & Safety Certification" }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/Background.jpeg'), linear-gradient(180deg, #1f2937, #111827)", 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2rem" : "2.8rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Project <span style={{ color: "var(--primary-red)" }}>Achievements</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Recognized milestones and certifications in our pursuit of engineering excellence.
          </p>
        </div>
      </section>

      {/* ISO Certifications */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ background: "linear-gradient(135deg, #1f2937, #111827)", borderRadius: "32px", padding: isMobile ? "40px 20px" : "60px", color: "white" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <Award size={40} color="var(--primary-red)" style={{ margin: "0 auto 15px" }} />
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>International Certifications</h2>
              <p style={{ color: "#cbd5e1", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
                Our commitment to quality, safety, and environmental responsibility is independently verified by global standards.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", padding: "30px", borderRadius: "20px", backdropFilter: "blur(10px)", textAlign: "center", transition: "transform 0.3s" }} className="hover-lift">
                  <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--primary-red)", margin: "0 0 10px" }}>{cert.title}</h3>
                  <p style={{ color: "#f1f5f9", margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Achievements */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Operational Milestones</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              Our true achievements are measured by the scale of our capabilities, the strength of our workforce, and the physical infrastructure we have built across Sri Lanka.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {achievements.map((item, idx) => (
              <div 
                key={idx} 
                 
                style={{ 
                  background: "var(--white)", 
                  padding: "40px 30px", 
                  borderRadius: "24px", 
                  border: "1px solid var(--border-soft)", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease"
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)' }} 
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ marginBottom: "25px", background: "var(--bg-light)", display: "inline-block", padding: "16px", borderRadius: "20px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>{item.title}</h3>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, fontSize: "1rem", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "40px 20px" : "60px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Trophy size={48} color="var(--primary-red)" style={{ margin: "0 auto 20px" }} />
          <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            See Our <span style={{ color: "var(--primary-red)" }}>Projects</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            The best proof of our capability is the infrastructure we have built. 
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              Explore Our Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
