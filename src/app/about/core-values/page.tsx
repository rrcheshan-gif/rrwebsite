"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, HeartHandshake, Lightbulb, Users, CheckCircle, Leaf, Target, Handshake, Gem } from 'lucide-react';

export default function CoreValues() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const values = [
    { title: "Engineering Excellence", desc: "We strive for technical superiority in every project, ensuring our infrastructure solutions are robust, efficient, and built to last.", icon: <Star size={32} /> },
    { title: "Integrity & Transparency", desc: "We conduct our business with absolute honesty. Transparency in our processes builds lasting trust with our clients and partners.", icon: <ShieldCheck size={32} /> },
    { title: "Quality", desc: "Our commitment to ISO 9001 standards ensures that quality is never compromised, from raw material selection to final execution.", icon: <Gem size={32} /> },
    { title: "Safety First", desc: "A 'Zero Harm' culture is our priority. We strictly enforce ISO 45001 standards to protect our workforce and the public.", icon: <HardHat size={32} /> },
    { title: "Sustainability", desc: "We integrate ISO 14001 environmental management practices into our operations to minimize ecological impact and conserve resources.", icon: <Leaf size={32} /> },
    { title: "Accountability", desc: "We take full ownership of our actions, decisions, and project outcomes, ensuring we deliver exactly what we promise.", icon: <Target size={32} /> },
    { title: "Teamwork", desc: "Collaboration is our strength. We foster an environment where our 1,800+ employees work seamlessly toward common goals.", icon: <Users size={32} /> },
    { title: "Innovation", desc: "We continuously adapt and adopt new construction technologies and methodologies to solve complex engineering challenges.", icon: <Lightbulb size={32} /> },
    { title: "Customer Focus", desc: "Our clients' success is our success. We build strong partnerships through responsiveness and dedicated project management.", icon: <HeartHandshake size={32} /> },
    { title: "Respect for People", desc: "We value diversity and treat every employee, stakeholder, and community member with dignity and fairness.", icon: <Handshake size={32} /> }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/core-values.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.8rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Core <span className="text-gradient">Values</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            The fundamental beliefs that shape our culture, drive our performance, and define our identity.
          </p>
        </div>
      </section>

      {/* Values Grid Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Our Guiding Principles</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              These 10 core values are deeply embedded in everything we do—from planning a new highway to managing our daily operations.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "30px" }}>
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="glass-panel hover-lift" 
                style={{ 
                  background: "var(--white)", 
                  padding: "40px 30px", 
                  borderRadius: "24px", 
                  border: "1px solid var(--border-soft)", 
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)' }} 
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ marginBottom: "25px", background: "rgba(229, 57, 53, 0.08)", display: "inline-flex", padding: "16px", borderRadius: "16px", color: "var(--primary-red)" }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>{val.title}</h3>
                <p style={{ color: "var(--text-light)", lineHeight: 1.7, fontSize: "1rem", margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Review Our <span className="text-gradient">Key Policies</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            See how we translate our core values into actionable corporate policies.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/key-policies" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              View Key Policies <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
// Fix lucide react import error: hardhat is exported as HardHat but used as such. 
// Adding custom HardHat icon component just in case it doesn't exist in the current lucide-react version.
function HardHat(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0"/><path d="M14 6h0a6 6 0 0 1 6 6v3"/></svg>
  );
}
