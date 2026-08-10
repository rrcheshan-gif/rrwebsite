"use client";

import Link from 'next/link';

export default function KeyData() {
  const infoData = [
    { label: "Company Name", value: "RR Construction (Pvt) Ltd" },
    { label: "Year of Incorporation", value: "1995" },
    { label: "Registration Number", value: "C 4268" },
    { label: "Legal Status", value: "Private Limited Liability Company" },
    { label: "Registered Office", value: "No. 865, Dr. Danister de Silva MW, Baseline Road, Colombo 09, Sri Lanka" },
    { label: "Core Expertise", value: "Highways & Roads, Bridges, Water Supply & Drainage, Irrigation, Maritime Structures & Building Construction" },
    { label: "Certifications", value: "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 (Accredited)" },
    { label: "Workforce", value: "Over 1,800 Direct Highly-Skilled Employees" },
    { label: "Heavy Machinery Fleet", value: "Over 1,000+ Company-owned Advanced Equipment Units" },
    { label: "Completed Projects", value: "100+ Mega National Infrastructure Projects" },
    { label: "CIDA Grading", value: "Top-Tier National Contractor" },
  ];

  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/corporate-office.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Corporate Profile</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>KEY DATA</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto 40px", textAlign: "center" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8 }}>
              RR Construction (Pvt) Ltd is a premier, CIDA-registered civil engineering contractor in Sri Lanka. With over two decades of operational excellence, we possess the financial stability, immense equipment fleet, and skilled workforce required to execute the nation's most demanding infrastructure projects.
            </p>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", background: "var(--white)", padding: "40px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "30px", borderBottom: "2px solid var(--border-soft)", paddingBottom: "15px" }}>Corporate Information</h2>
            
            <div style={{ display: "grid", gap: "25px" }}>
              {infoData.map((info, idx) => (
                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "15px", background: "var(--bg-base)", borderRadius: "12px", borderLeft: "4px solid var(--primary-red)" }}>
                  <strong style={{ color: "var(--primary-red)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.2px", fontWeight: 700 }}>{info.label}</strong>
                  <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.4 }}>{info.value}</div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: "40px", padding: "20px", background: "rgba(229,57,53,0.05)", borderRadius: "16px", border: "1px solid rgba(229,57,53,0.1)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "10px" }}>Bankers & Financial Partners</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>Backed by major national and commercial banks in Sri Lanka, granting RR Construction unparallelled financial stability to undertake and complete mega-infrastructure projects without delays.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
