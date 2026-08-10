"use client";

import Link from 'next/link';

export default function VisionMission() {
  return (
    <div style={{ paddingTop: "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <section className="page-header" style={{ backgroundImage: "url('/images/page-headers/vision-mission.jpg')", padding: "80px 20px", textAlign: "center", position: "relative", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "32px", margin: "0 20px 40px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,23,42,0.9), rgba(15,23,42,0.7))", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Home</Link>
          </div>
          <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "15px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>Our Future</h4>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "3.5rem", color: "white", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>VISION & MISSION</h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
            
            {/* Vision */}
            <div style={{ background: "var(--white)", padding: "50px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", borderTop: "5px solid var(--primary-red)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
                <div style={{ background: "rgba(229,57,53,0.1)", padding: "15px", borderRadius: "16px", color: "var(--primary-red)" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", margin: 0 }}>Our Vision</h2>
              </div>
              <p style={{ color: "var(--text-light)", fontSize: "1.2rem", lineHeight: 1.8, fontWeight: 500, fontStyle: "italic", marginBottom: "20px" }}>
                "To be the premier civil engineering and infrastructure development organization in Sri Lanka, recognized for our unwavering commitment to quality, timely delivery, and sustainable engineering solutions that elevate the nation."
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                At RR Construction, our vision extends beyond mere brick and mortar. We envision a highly connected, rapidly developing Sri Lanka where world-class infrastructure is the backbone of economic prosperity. We aim to set the absolute benchmark in the construction industry, where our name becomes synonymous with reliability, engineering excellence, and monumental scale. By continually pushing the boundaries of what is possible in civil engineering, we strive to leave a lasting legacy for future generations.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: "var(--white)", padding: "50px", borderRadius: "24px", boxShadow: "0 15px 40px rgba(0,0,0,0.06)", border: "1px solid var(--border-soft)", borderTop: "5px solid var(--text-dark)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
                <div style={{ background: "rgba(15,23,42,0.1)", padding: "15px", borderRadius: "16px", color: "var(--text-dark)" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--text-dark)", margin: 0 }}>Our Mission</h2>
              </div>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                Our mission is to translate our grand vision into actionable, day-to-day excellence across every project site. We are dedicated to:
              </p>
              <ul style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li><strong>Uncompromising Delivery:</strong> Executing complex, high-value infrastructure projects safely, on time, and strictly within budget, regardless of logistical challenges.</li>
                <li><strong>Technological Integration:</strong> Fostering a culture of continuous improvement by heavily investing in state-of-the-art heavy machinery and modern engineering practices.</li>
                <li><strong>Empowering People:</strong> Cultivating a highly skilled, motivated workforce of over 1,800 direct employees through rigorous training, career development, and a zero-harm safety culture.</li>
                <li><strong>Sustainable Practices:</strong> Maintaining the highest standards of environmental stewardship and corporate social responsibility in accordance with ISO 14001 and ISO 45001 certifications.</li>
                <li><strong>Client Satisfaction:</strong> Building enduring relationships with state and private stakeholders through absolute transparency, ethical bidding, and flawless contract execution.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
