"use client";

import Link from 'next/link';

export default function CompanyHistory() {
  const milestones = [
    {
      year: "1995",
      title: "Foundation",
      desc: "RR Construction was incorporated as a private limited liability company with a vision to transform Sri Lanka's infrastructure."
    },
    {
      year: "2000",
      title: "CIDA Registration",
      desc: "Achieved top-tier registration with the Construction Industry Development Authority, cementing our capability to undertake mega projects."
    },
    {
      year: "2010",
      title: "Fleet Expansion",
      desc: "Massive investment in heavy machinery, growing our owned fleet to over 1,000 units, significantly boosting operational independence."
    },
    {
      year: "2015",
      title: "ISO Certification",
      desc: "Awarded ISO 9001, ISO 14001, and ISO 45001 certifications, reflecting our absolute commitment to quality, environment, and safety."
    },
    {
      year: "Present",
      title: "National Leadership",
      desc: "Today, with over 1,800 direct employees and 100+ completed mega projects, RR Construction stands as a pillar of Sri Lankan engineering."
    }
  ];

  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/contact-connect.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Our Journey</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>COMPANY HISTORY</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            
            {/* Vertical Line */}
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "4px", background: "var(--border-soft)", borderRadius: "4px", zIndex: 1 }}></div>

            <div style={{ display: "flex", flexDirection: "column", gap: "50px", position: "relative", zIndex: 2 }}>
              {milestones.map((ms, idx) => (
                <div key={idx} style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", background: "var(--primary-red)", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", boxShadow: "0 4px 15px rgba(229,57,53,0.4)" }}>
                    <div style={{ width: "12px", height: "12px", background: "white", borderRadius: "50%" }}></div>
                  </div>
                  <div style={{ background: "var(--white)", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", flexGrow: 1 }}>
                    <div style={{ color: "var(--primary-red)", fontWeight: 800, fontSize: "1.4rem", marginBottom: "5px" }}>{ms.year}</div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "var(--text-dark)", marginBottom: "15px" }}>{ms.title}</h3>
                    <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>{ms.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
