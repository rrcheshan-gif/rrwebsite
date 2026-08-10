"use client";

import Link from 'next/link';
import { Target, TrendingUp, Globe, Users } from 'lucide-react';

export default function GoalsTargets() {
  const goals = [
    {
      icon: <TrendingUp size={32} />,
      title: "Market Leadership",
      desc: "To consolidate our position as the top-tier civil engineering contractor in Sri Lanka by securing and executing national-scale infrastructure projects."
    },
    {
      icon: <Globe size={32} />,
      title: "Sustainable Expansion",
      desc: "To integrate green building technologies and reduce carbon emissions across all our batching and asphalt plants by 20% over the next 5 years."
    },
    {
      icon: <Users size={32} />,
      title: "Workforce Development",
      desc: "To invest significantly in the continuous training and upskilling of our 1,800+ employees, ensuring they remain at the forefront of modern construction methodologies."
    },
    {
      icon: <Target size={32} />,
      title: "Operational Excellence",
      desc: "To maintain our perfect track record of project delivery without compromising on ISO standards for quality, safety, and environmental protection."
    }
  ];

  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/corporate-office.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Looking Ahead</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>GOALS & TARGETS</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", maxWidth: "1000px", margin: "0 auto" }}>
            {goals.map((goal, idx) => (
              <div key={idx} style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", transition: "transform 0.3s ease", cursor: "default" }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
                <div style={{ background: "rgba(15,23,42,0.05)", color: "var(--text-dark)", padding: "15px", borderRadius: "16px", display: "inline-block", marginBottom: "25px" }}>
                  {goal.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "15px" }}>{goal.title}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
