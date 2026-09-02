"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, HardHat, AlertTriangle, UserCheck, CheckCircle2, HeartPulse } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function HealthAndSafety() {
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
          backgroundImage: "url('/images/health-safety-site.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center 40%", 
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
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Occupational <span style={{ color: "var(--primary-red)" }}>Health & Safety</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.05rem" : "1.3rem", marginTop: "20px", maxWidth: "800px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Protecting our {COMPANY_DATA.workforce} workers with a rigid 'Zero Harm' policy and absolute compliance to ISO 45001:2018.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "60px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "50px", alignItems: "center" }}>
            <div>
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px",  marginBottom: "10px" }}>Iso 45001:2018</h4>
              <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.2 }}>
                Safety is Not Optional. <span style={{ color: "var(--primary-red)" }}>It is Mandatory.</span>
              </h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                Operating heavy machinery, handling controlled rock blasting, and mitigating volatile landslides naturally involves massive risk. At RR Construction, we do not compromise on safety. Our <strong>"Zero Harm"</strong> philosophy guarantees that the physical wellbeing of our employees and the surrounding community supersedes operational speed or cost.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Certified under the rigorous <strong>ISO 45001:2018 Occupational Health and Safety Management System</strong>, we enforce safety protocols that often exceed standard regulatory requirements.
              </p>
            </div>
            <div style={{ background: "var(--white)", padding: isMobile ? "30px" : "50px", borderRadius: "24px", border: "1px solid rgba(229, 57, 53, 0.2)", boxShadow: "0 20px 40px rgba(229, 57, 53, 0.05)" }}>
              <ShieldCheck size={50} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "25px" }}>The Zero Harm Framework</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Mandatory daily toolbox talks before heavy operations begin.",
                  "Strict, 100% compliance with Personal Protective Equipment (PPE) on all active sites.",
                  "Routine, specialized safety training for heavy machinery operators.",
                  "Full-time, certified Safety Officers deployed to all major projects.",
                  "Immediate stoppage authority granted to any worker identifying a critical hazard."
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

            {/* HSE KPIs Section */}
      <section style={{ padding: "40px 20px", background: "var(--primary-red)", color: "white" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", textAlign: "center" }}>
            <div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800, margin: "0 0 10px 0", fontFamily: "var(--font-heading)" }}>0</h2>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0, opacity: 0.9 }}>Fatalities across all major projects</p>
            </div>
            <div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800, margin: "0 0 10px 0", fontFamily: "var(--font-heading)" }}>100%</h2>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0, opacity: 0.9 }}>PPE Compliance on active sites</p>
            </div>
            <div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800, margin: "0 0 10px 0", fontFamily: "var(--font-heading)" }}>ISO</h2>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0, opacity: 0.9 }}>45001:2018 Certified Standards</p>
            </div>
            <div>
              <h2 style={{ fontSize: "3rem", fontWeight: 800, margin: "0 0 10px 0", fontFamily: "var(--font-heading)" }}>{COMPANY_DATA.workforce}</h2>
              <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0, opacity: 0.9 }}>Safety-Trained Personnel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Areas Grid */}
      <section style={{ padding: "50px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2.2rem" : "3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0" }}>
              Active Safety Measures
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            
            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <AlertTriangle size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Hazard Identification</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Risk mitigation begins long before ground is broken. Prior to any major excavation or complex structural lift, our certified Health and Safety (HSE) Professionals execute exhaustive, multi-tiered hazard assessments. In exceptionally high-risk environments - such as deep maritime dredging or steep-gradient landslide mitigations - we deploy advanced predictive analysis and continuous proactive monitoring to neutralize threats before they materialize.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <HardHat size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Equipment Safety</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Managing an extensive internal fleet of over {COMPANY_DATA.machineryFleet} heavy machines necessitates an uncompromising approach to mechanical integrity. We enforce rigorous, daily multipoint inspections and strict preventive maintenance cycles. This systematic approach eradicates the risk of catastrophic equipment failures on-site, ensuring both personnel safety and seamless operational continuity.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <UserCheck size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Competency Training</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                Personal Protective Equipment (PPE) is only the first line of defense; true safety stems from profound technical competence. We invest heavily in continuous, specialized occupational health and safety training for our {COMPANY_DATA.workforce} personnel. By ensuring that every worker fundamentally understands the mechanics and latent hazards of their specific tasks, we foster an instinctual, proactive safety culture across all divisions.
              </p>
            </div>

            <div className="glass-panel hover-lift" style={{ background: "var(--bg-light)", padding: "40px", borderRadius: "20px", border: "1px solid var(--border-soft)" }}>
              <HeartPulse size={40} color="var(--primary-red)" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Employee Wellbeing</h3>
              <p style={{ color: "var(--text-light)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0, textAlign: "left" }}>
                The holistic well-being of our workforce is a paramount corporate priority. Beyond standard accident prevention, we proactively combat occupational ill health through ergonomic assessments, continuous ambient site monitoring, and stringent health protocols. By equipping our personnel with meticulously selected, task-specific Personal Protective Equipment (PPE), we create a highly secure work environment free from preventable harm.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HSE Policy Integration Section */}
      <section style={{ padding: "80px 20px", background: "var(--bg-base)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0" }}>
              Comprehensive HSE Policy Integration
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: 1.8 }}>
              Our commitment to Occupational Health and Safety extends beyond basic compliance. We have integrated strict protocols covering worker participation, emergency response, and continuous hazard management.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
            
            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "16px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Worker Consultation & Participation</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "10px" }}>
                Effective HSE performance requires active engagement from every employee. We guarantee reasonable time, information, and resources for workers to participate in:
              </p>
              <ul style={{ color: "var(--text-light)", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
                <li>Hazard identification and risk assessments.</li>
                <li>Toolbox meetings and safety briefings.</li>
                <li>Reporting hazards or stopping work where immediate danger exists - without fear of retaliation.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "16px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Emergency Preparedness</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "10px" }}>
                Our sites are high-stakes environments. We maintain rigorous emergency response procedures to handle foreseeable situations instantly, including:
              </p>
              <ul style={{ color: "var(--text-light)", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
                <li>Fire, explosion, and natural disasters.</li>
                <li>Serious injuries or medical emergencies.</li>
                <li>Chemical and fuel spills.</li>
                <li>Working-at-height and confined-space emergencies.</li>
              </ul>
            </div>

            <div style={{ background: "var(--white)", padding: "30px", borderRadius: "16px", borderTop: "4px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "15px" }}>Incident & Nonconformity Actions</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.7, marginBottom: "10px" }}>
                All near-misses, accidents, and significant unsafe conditions are systematically reported and investigated. We actively:
              </p>
              <ul style={{ color: "var(--text-light)", lineHeight: 1.7, paddingLeft: "20px", margin: 0 }}>
                <li>Identify immediate and underlying root causes.</li>
                <li>Implement corrective actions within agreed timeframes.</li>
                <li>Communicate lessons learned across all operational teams to prevent recurrence.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}



