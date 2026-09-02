"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, BookOpen, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export default function SocialResponsibility() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/about_section.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 30%", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(229, 57, 53, 0.4) 0%, rgba(15, 23, 42, 0.95) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/sustainability" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to Sustainability
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Social <span style={{ color: "var(--primary-red)" }}>Responsibility</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            We do not just construct infrastructure; we build communities, empower local economies, and minimize disruption.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "50px", alignItems: "flex-start" }}>
            <div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px",  marginBottom: "10px" }}>Community First</h4>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
                Engineering for <span style={{ color: "var(--primary-red)" }}>The People</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Large-scale construction inherently impacts local communities. Whether we are driving a new expressway through the heart of the country or mitigating dangerous landslides in the central hills, RR Construction views the local community as a primary stakeholder.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Our Corporate Social Responsibility (CSR) initiatives are deeply integrated into our project planning. We aim to leave every community vastly improved not just by the final infrastructure, but by the economic and social opportunities generated during the construction phase.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                We strictly adhere to a policy of transparent communication, conducting comprehensive environmental and social impact assessments before breaking ground. By keeping community leaders informed and actively seeking their input, we ensure that our operational footprint causes zero undue disruption to their daily lives and livelihoods.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                Furthermore, our commitment to sustainable development means that a portion of our project budget is reinvested directly into the local economy. From sourcing raw materials locally to empowering grassroots vendors, our operations serve as a catalyst for immediate socio-economic upliftment.
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: isMobile ? "30px" : "50px", borderRadius: "24px", border: "1px solid rgba(229, 57, 53, 0.2)", boxShadow: "0 20px 40px rgba(229, 57, 53, 0.05)" }}>
              <Users size={50} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>Core CSR Objectives</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Prioritizing the hiring of local labor surrounding project sites.",
                  "Providing vocational and technical training for rural youth in construction trades.",
                  "Upgrading local access roads and drainage systems during primary construction.",
                  "Direct financial and material support for local schools, hospitals, and temples.",
                  "Strict community liaison protocols to address public grievances rapidly."
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "15px", paddingBottom: "15px", borderBottom: idx !== 4 ? "1px solid var(--border-soft)" : "none" }}>
                    <CheckCircle2 size={22} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "var(--text-dark)", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Areas Grid */}
      <section style={{ padding: "50px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Making an Impact
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            
            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <MapPin size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Rural Connectivity</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                Through strategic infrastructure developments such as the iRoad program and critical rural bridge reconstructions, we play a pivotal role in bridging the urban-rural divide. By systematically enhancing regional connectivity, we directly stimulate local agrarian economies, drastically reducing transport times for agricultural supply chains, and facilitating seamless access to urban markets and essential services for remote communities.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <BookOpen size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Education & Youth</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                We are deeply committed to community empowerment through localized workforce integration. By actively recruiting and mentoring youth from regions adjacent to our major infrastructure sites - such as the Central Expressway and large-scale maritime projects - we provide invaluable, hands-on technical training. This proactive knowledge transfer equips the next generation with specialized skills, creating sustainable, long-term career trajectories in the heavy civil engineering sector.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <Building2 size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Minimizing Disruption</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
                Executing complex projects in densely populated urban centers demands meticulous logistical planning. During critical water infrastructure upgrades and high-traffic road rehabilitations, we deploy advanced traffic management protocols and strategically phased night-time operations. Our uncompromising commitment to operational efficiency ensures that public safety is prioritized and the daily routines of citizens remain undisturbed, minimizing civic disruption while maximizing project momentum.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}


