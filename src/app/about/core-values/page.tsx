"use client";

import Link from 'next/link';
import { Shield, Target, Users, Zap, Leaf, Award } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: <Shield size={32} />,
      title: "Integrity & Ethics",
      desc: "We operate with absolute transparency, honesty, and uncompromising ethical standards in every contract we undertake. Trust is the foundation of our relationships with clients, partners, and the communities we serve."
    },
    {
      icon: <Target size={32} />,
      title: "Commitment to Quality",
      desc: "Excellence is not an option; it is our baseline. Our ISO 9001 certification reflects our dedication to flawless execution, utilizing top-tier materials and rigorous quality control protocols on every site."
    },
    {
      icon: <Users size={32} />,
      title: "Team Empowerment",
      desc: "Our 1,800+ workforce is our greatest asset. We invest heavily in training, safety, and mutual respect, fostering an inclusive environment where every employee is encouraged to grow and innovate."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation & Efficiency",
      desc: "By integrating modern engineering methodologies and maintaining our own massive fleet of heavy machinery, we eliminate delays, optimize project timelines, and drive unprecedented operational efficiency."
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainability",
      desc: "We build for tomorrow. Our ISO 14001 certification ensures our environmental footprint is minimized. We prioritize eco-friendly practices, waste reduction, and sustainable resource management."
    },
    {
      icon: <Award size={32} />,
      title: "Safety First",
      desc: "Zero harm is our standard. Our ISO 45001 certified protocols ensure the physical well-being of everyone on our sites. We believe that no job is so important that it cannot be done safely."
    }
  ];

  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/projects-portfolio.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Our Principles</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>CORE VALUES</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto 50px", textAlign: "center" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8 }}>
              At RR Construction, our core values are the fundamental beliefs that guide our actions and behavior. They dictate how we interact with our clients, our partners, and each other. These principles are deeply embedded in our corporate culture and are reflected in every project we complete.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
            {values.map((val, idx) => (
              <div key={idx} style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", transition: "transform 0.3s ease", cursor: "default" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <div style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "15px", borderRadius: "16px", display: "inline-block", marginBottom: "25px" }}>
                  {val.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "15px" }}>{val.title}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
