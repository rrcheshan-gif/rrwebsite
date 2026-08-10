"use client";

import Link from 'next/link';

export default function BoardOfDirectors() {
  const board = [
    {
      name: "Mr. Ranjith Senadheera",
      role: "Managing Director",
      desc: "A visionary civil engineer with decades of experience steering monumental infrastructure projects across Sri Lanka. He founded RR Construction with a commitment to unmatched quality and robust engineering.",
      image: "/images/about-md.jpg"
    },
    {
      name: "Mr. S.R. Gamage",
      role: "General Manager (Operations)",
      desc: "Spearheads field operations, ensuring all sites are equipped, manned, and running strictly to schedule and quality standards. He oversees the deployment of our massive machinery fleet and workforce.",
      image: "/images/completed-hero.jpg"
    },
    {
      name: "Mr. Ajith P. Galahitiyawa",
      role: "General Manager (Contracts)",
      desc: "Oversees tender processes, contract administration, and client relations, safeguarding corporate interests and compliance while ensuring transparent dealings with state and private stakeholders.",
      image: "/images/page-headers/contact-connect.jpg"
    }
  ];

  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/completed-hero.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Leadership</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>BOARD OF DIRECTORS</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
            {board.map((person, idx) => (
              <div key={idx} style={{ background: "var(--white)", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", overflow: "hidden", display: "flex", flexDirection: "row", alignItems: "center" }}>
                <div style={{ width: "35%", height: "300px", background: "var(--bg-base)" }}>
                  <img src={person.image} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ width: "65%", padding: "40px" }}>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", marginBottom: "5px" }}>{person.name}</h2>
                  <div style={{ color: "var(--primary-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.95rem", marginBottom: "20px" }}>{person.role}</div>
                  <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, margin: 0 }}>{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
