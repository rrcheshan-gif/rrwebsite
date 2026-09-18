"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, ShieldCheck, HardHat, Cog, CheckCircle2, Award, Leaf, CheckCircle } from 'lucide-react';

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
      desc: "Successfully delivered over a hundred large-scale infrastructure projects across Sri Lanka, ranging from rural highway and expressway networks to major national highways.",
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
      desc: "Grew into a major national employer, fostering a dedicated workforce of over 1,400+ highly skilled engineers and construction professionals.",
      icon: <ShieldCheck size={40} color="var(--primary-red)" />
    }
  ];

  const certifications = [
    { 
      title: "ISO 9001:2015", 
      subtitle: "Quality Management System",
      desc: "This certification validates our rigorous approach to quality assurance. From raw material selection to final structural handover, our quality control protocols ensure that every civil engineering project meets or exceeds international standards, minimizing defects and maximizing infrastructure lifespan.",
      icon: <ShieldCheck size={48} color="var(--primary-red)" />
    },
    { 
      title: "ISO 14001:2015", 
      subtitle: "Environmental Management",
      desc: "Our commitment to sustainable engineering is verified by our ISO 14001 certification. We enforce strict environmental impact mitigation strategies across all sites, including noise and dust suppression, waste recycling, and ecological preservation during large-scale earthworks.",
      icon: <Leaf size={48} color="var(--primary-red)" />
    },
    { 
      title: "ISO 45001:2018", 
      subtitle: "Occupational Health & Safety",
      desc: "Safety is our paramount core value. Operating under a strict 'Zero Harm' policy, this certification reflects our uncompromising safety protocols, mandatory PPE compliance, regular toolbox talks, and comprehensive emergency response planning across all high-risk construction zones.",
      icon: <HardHat size={48} color="var(--primary-red)" />
    }
  ];

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/awards-recognition.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "90px 20px 30px" : "140px 20px 40px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
           
          borderRadius: isMobile ? '24px' : '32px',
          margin: isMobile ? '0 12px 30px' : '0 20px 40px',  
          overflow: "hidden" 
        }}
      >
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to About
            </Link>
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Project <span style={{ color: "var(--primary-red)" }}>Achievements</span></h1>
          
        </div>
      </section>

      {/* ISO Certifications */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ background: "var(--white)", borderRadius: "32px", padding: isMobile ? "40px 20px" : "60px", border: "1px solid var(--border-soft)", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
            <div style={{ textAlign: "left", marginBottom: "50px", maxWidth: "800px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>STANDARDS</h4>
              </div>
              <h2 style={{ fontSize: isMobile ? "2rem" : "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.1 }}>
                International <span className="text-gradient" style={{ fontWeight: 600 }}>Certifications</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", margin: "0", lineHeight: 1.7 }}>
                Our commitment to quality, safety, and environmental responsibility is independently verified by global standards.
              </p>
            </div>
            
                          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px" }}>
                {certifications.map((cert, idx) => (
                  <div key={idx} style={{ background: "var(--white)", border: "1px solid var(--border-soft)", padding: "50px 30px", borderRadius: "24px", textAlign: "center", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", position: "relative", overflow: "hidden", boxShadow: "0 15px 40px rgba(0,0,0,0.04)" }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 25px 50px rgba(229, 57, 53, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.04)'; }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", background: "linear-gradient(90deg, var(--primary-red), #ff7b7b)" }}></div>
                    
                    <div style={{ display: "inline-flex", background: "rgba(229, 57, 53, 0.05)", padding: "25px", borderRadius: "50%", marginBottom: "30px", border: "1px dashed rgba(229, 57, 53, 0.3)" }}>
                      {cert.icon}
                    </div>
                    
                    <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", margin: "0 0 10px" }}>{cert.title}</h3>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary-red)", margin: "0 0 25px", letterSpacing: "1.5px", textTransform: "uppercase" }}>{cert.subtitle}</h4>
                    
                    <p style={{ color: "var(--text-light)", margin: 0, fontSize: "1.05rem", lineHeight: 1.8 }}>{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



      

    </div>
  );
}

