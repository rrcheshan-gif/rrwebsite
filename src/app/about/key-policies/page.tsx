"use client";

import Link from 'next/link';

export default function KeyPolicies() {
  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/projects-portfolio.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Our Standards</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>KEY POLICIES</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
            
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", borderLeft: "5px solid var(--primary-red)" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", marginBottom: "15px" }}>Quality Policy (ISO 9001:2015)</h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                RR Construction (Pvt) Ltd is committed to delivering civil engineering solutions that exceed client expectations through stringent quality control. We ensure that every project phase, from material sourcing to final execution, adheres to the highest national and international standards.
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Continuous monitoring and improvement of the Quality Management System.</li>
                <li>Strict adherence to project specifications and engineering best practices.</li>
                <li>Regular training for staff to maintain technical excellence.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", borderLeft: "5px solid #10b981" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", marginBottom: "15px" }}>Environmental Policy (ISO 14001:2015)</h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                We recognize our responsibility to protect the environment. Our construction practices are designed to minimize ecological impact, reduce waste, and promote sustainable resource usage.
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Prevention of pollution and minimizing waste generation at construction sites.</li>
                <li>Compliance with all applicable environmental legislation in Sri Lanka.</li>
                <li>Promoting awareness among employees and subcontractors on eco-friendly practices.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", borderLeft: "5px solid #3b82f6" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", marginBottom: "15px" }}>Occupational Health & Safety Policy (ISO 45001:2018)</h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                The safety of our workforce, subcontractors, and the public is our highest priority. We maintain a "Zero Harm" target across all our project sites.
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Providing and maintaining safe working environments and equipment.</li>
                <li>Conducting regular risk assessments and safety audits.</li>
                <li>Ensuring all workers are equipped with necessary PPE and safety training.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
