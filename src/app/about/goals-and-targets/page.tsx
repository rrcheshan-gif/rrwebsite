"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function GoalsAndTargets() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const strategicGoals = [
    {
      num: "01",
      title: "Project Delivery & Performance",
      desc: "Strengthen project planning, coordination and execution to deliver complex infrastructure projects efficiently and reliably.",
      bullets: [
        "Improve project planning and monitoring",
        "Strengthen engineering and construction coordination",
        "Reduce avoidable delays and rework",
        "Improve overall project performance"
      ]
    },
    {
      num: "02",
      title: "Infrastructure Capability Expansion",
      desc: "Expand RR Construction's capability to undertake increasingly complex and technically demanding infrastructure projects.",
      bullets: [
        "Strengthen major infrastructure capabilities",
        "Build capacity for complex engineering environments",
        "Improve integrated project execution",
        "Develop suitable regional and international opportunities"
      ]
    },
    {
      num: "03",
      title: "Engineering & Technical Advancement",
      desc: "Advance engineering expertise and construction methodologies to respond effectively to complex project requirements.",
      bullets: [
        "Strengthen technical expertise",
        "Improve engineering planning and methods",
        "Develop practical solutions for challenging conditions",
        "Apply lessons learned to future projects"
      ]
    },
    {
      num: "04",
      title: "Operational & Resource Efficiency",
      desc: "Maximize the effective use of equipment, materials and internal resources to improve productivity and project efficiency.",
      bullets: [
        "Improve equipment planning and utilization",
        "Strengthen material and resource planning",
        "Reduce avoidable equipment downtime",
        "Improve project resource allocation"
      ]
    },
    {
      num: "05",
      title: "Client & Stakeholder Value",
      desc: "Create long-term value through dependable delivery, professional communication and strong stakeholder relationships.",
      bullets: [
        "Understand client requirements",
        "Improve project communication",
        "Respond effectively to stakeholder needs",
        "Build long-term professional relationships"
      ]
    },
    {
      num: "06",
      title: "Market & Business Development",
      desc: "Strengthen RR Construction's position in Sri Lanka's construction and infrastructure sector through strategic growth and suitable project opportunities.",
      bullets: [
        "Strengthen participation in major infrastructure projects",
        "Diversify the project portfolio",
        "Develop specialized construction opportunities",
        "Explore suitable regional and international opportunities"
      ]
    },
    {
      num: "07",
      title: "Digital Transformation & Innovation",
      desc: "Use appropriate digital technologies and modern management practices to improve project visibility, decision-making and operational efficiency.",
      bullets: [
        "Improve digital project monitoring",
        "Strengthen data-based decision-making",
        "Improve information flow",
        "Evaluate practical construction technologies"
      ]
    },
    {
      num: "08",
      title: "Organizational Strength & Governance",
      desc: "Strengthen management systems, coordination and professional practices required for long-term organizational growth.",
      bullets: [
        "Improve internal coordination",
        "Strengthen management processes",
        "Support effective decision-making",
        "Maintain accountability and professional conduct"
      ]
    }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* 1. Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/projects/new-folder/sagt-road/1.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About Us
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <div style={{ background: "var(--primary-red)", padding: "12px", borderRadius: "50%", display: "inline-flex" }}>
              <Target size={32} color="white" />
            </div>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Goals & <span style={{ color: "var(--primary-red)" }}>Targets</span></h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "20px", display: "inline-block", lineHeight: 1.6, fontWeight: 500, textAlign: "center", maxWidth: "900px" }}>
            Driving Sri Lanka's infrastructure development through effective project delivery, engineering excellence, resource efficiency and sustainable business growth.
          </p>
        </div>
      </section>

      {/* 2. Strategic Goals Grid */}
      <section style={{ padding: isMobile ? "20px 10px" : "40px 20px" }}>
        <div className="container" style={{ margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px", lineHeight: 1.2 }}>
              Strategic <span style={{ color: "var(--primary-red)" }}>Goals</span>
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto", lineHeight: 1.7, textAlign: "center" }}>
              Our operational and strategic objectives are designed to continuously improve our performance across all phases of <Link href="/services" style={{ color: "var(--primary-red)", textDecoration: "none" }}>construction and engineering</Link>.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
            {strategicGoals.map((goal, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: "var(--white)", 
                  padding: "40px 30px", 
                  borderRadius: "24px", 
                  boxShadow: "0 15px 35px rgba(0,0,0,0.04)", 
                  border: "1px solid var(--border-soft)",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(229, 57, 53, 0.15)", fontFamily: "var(--font-heading)", lineHeight: 1 }}>
                    {goal.num}
                  </div>
                  <h3 style={{ fontSize: "1.3rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, lineHeight: 1.3 }}>
                    {goal.title}
                  </h3>
                </div>
                <p style={{ color: "var(--text-light)", lineHeight: 1.6, margin: "0 0 20px 0", fontSize: "1.05rem" }}>
                  {goal.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0 0" }}>
                  {goal.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px", color: "var(--text-dark)", fontSize: "0.95rem", lineHeight: 1.5, fontWeight: 500 }}>
                      <CheckCircle size={18} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic Priorities */}
      <section style={{ padding: isMobile ? "50px 10px" : "80px 20px", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "40px", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <TrendingUp size={28} color="var(--primary-red)" />
                <h2 style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>
                  Strategic Priorities
                </h2>
              </div>
              <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", borderRadius: "2px", marginBottom: "30px" }}></div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                {[
                  "Effective delivery of complex infrastructure projects",
                  "Expansion of technical and project capabilities",
                  "Efficient use of internal resources",
                  "Strong client and stakeholder relationships",
                  "Long-term organizational and business growth"
                ].map((priority, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "15px", background: "var(--bg-light)", padding: "15px 20px", borderRadius: "12px", borderLeft: "4px solid var(--primary-red)", color: "var(--text-dark)", fontSize: "1.1rem", fontWeight: 600 }}>
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {!isMobile && (
              <div style={{ flex: 1, position: "relative" }}>
                <div style={{ background: "linear-gradient(135deg, rgba(229,57,53,0.1) 0%, rgba(229,57,53,0.02) 100%)", borderRadius: "24px", padding: "40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                   <p style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                     "By aligning our resources, capabilities, and goals, we ensure that every project contributes directly to Sri Lanka's national development footprint."
                   </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Looking Ahead */}
      <section style={{ padding: isMobile ? "50px 10px" : "80px 20px", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ margin: "0 auto", padding: "0 16px" }}>
          <h2 style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", textAlign: "center" }}>
            Looking Ahead
          </h2>
          <div style={{ width: "100%" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, margin: 0, textAlign: "justify", textAlignLast: "center" }}>
              RR Construction (Pvt) Ltd continues to strengthen its capabilities with a clear focus on effective project delivery, engineering advancement, infrastructure development and operational excellence. By continuously improving its people, processes, resources and technical capabilities, the company aims to respond effectively to the evolving requirements of Sri Lanka's infrastructure sector and create lasting value through reliable construction and civil engineering solutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}