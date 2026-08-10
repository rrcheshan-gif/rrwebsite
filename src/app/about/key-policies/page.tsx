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
          
          <div style={{ maxWidth: "800px", margin: "0 auto 50px", textAlign: "center" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8 }}>
              Our commitment to excellence is governed by rigorous policies that form the backbone of our operations. RR Construction (Pvt) Ltd is proudly certified with three major international standards, ensuring that we deliver world-class infrastructure without compromising on quality, environmental integrity, or the safety of our workforce.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
            
            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", borderLeft: "5px solid var(--primary-red)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "15px" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", margin: 0 }}>Quality Policy</h2>
                <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "8px 16px", borderRadius: "30px", fontWeight: "bold", fontSize: "0.9rem", letterSpacing: "1px" }}>ISO 9001:2015</span>
              </div>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                RR Construction (Pvt) Ltd is committed to delivering civil engineering solutions that exceed client expectations through stringent quality control. We ensure that every project phase, from material sourcing to final execution, adheres to the highest national and international standards. Our dedicated quality assurance teams rigorously test materials in our own fully-equipped laboratories to ensure unmatched durability and performance.
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Continuous monitoring and improvement of the Quality Management System (QMS).</li>
                <li>Strict adherence to project specifications, structural designs, and engineering best practices.</li>
                <li>Regular training and upskilling for our engineering and technical staff to maintain operational excellence.</li>
                <li>Ensuring absolute transparency and accountability at every stage of the project lifecycle.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", borderLeft: "5px solid #10b981" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "15px" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", margin: 0 }}>Environmental Policy</h2>
                <span style={{ background: "rgba(16,185,129,0.1)", color: "#10b981", padding: "8px 16px", borderRadius: "30px", fontWeight: "bold", fontSize: "0.9rem", letterSpacing: "1px" }}>ISO 14001:2015</span>
              </div>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                We recognize our profound responsibility to protect the natural environment in which we operate. Our construction practices are meticulously designed to minimize ecological impact, reduce carbon footprints, and promote sustainable resource usage. From dust suppression at our quarry sites to eco-friendly waste disposal on our construction sites, sustainability is integrated into our core operations.
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Active prevention of pollution and minimizing waste generation across all active construction sites and manufacturing plants.</li>
                <li>Absolute compliance with all applicable environmental legislation, regulations, and guidelines in Sri Lanka.</li>
                <li>Promoting environmental awareness among employees, subcontractors, and local communities.</li>
                <li>Continuous investment in green technologies, such as advanced filtration systems for our asphalt and crushing plants.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: "1px solid var(--border-soft)", borderLeft: "5px solid #3b82f6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "15px" }}>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", color: "var(--text-dark)", margin: 0 }}>Occupational Health & Safety Policy</h2>
                <span style={{ background: "rgba(59,130,246,0.1)", color: "#3b82f6", padding: "8px 16px", borderRadius: "30px", fontWeight: "bold", fontSize: "0.9rem", letterSpacing: "1px" }}>ISO 45001:2018</span>
              </div>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                The physical well-being and safety of our massive workforce, trusted subcontractors, and the general public is our highest priority. We maintain a steadfast "Zero Harm" target across all our project sites, recognizing that a successful project is primarily a safe project.
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Providing and maintaining safe working environments, state-of-the-art equipment, and secure scaffolding systems.</li>
                <li>Conducting regular, rigorous risk assessments, safety audits, and emergency response drills.</li>
                <li>Ensuring all workers are equipped with high-quality Personal Protective Equipment (PPE) and undergo mandatory safety inductions.</li>
                <li>Fostering a safety-first culture where every employee is empowered to report hazards and halt unsafe work without repercussion.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
