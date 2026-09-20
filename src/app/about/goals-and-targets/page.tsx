"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Target, TrendingUp, CheckCircle } from "lucide-react";

import BackButton from "@/app/components/BackButton";
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
        "Optimize operational cost efficiency"
      ]
    }
  ];

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* 1. Page Header */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/engineering-blueprint-banner.jpg')", 
          padding: isMobile ? "90px 20px 30px" : "140px 20px 40px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          minHeight: isMobile ? "400px" : "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          borderRadius: isMobile ? '24px' : '32px',
          margin: isMobile ? '0 12px 30px' : '0 20px 40px',  
          overflow: "hidden" 
        }}
      >
        
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Goals & <span style={{ color: "var(--primary-red)" }}>Targets</span></h1>
              <BackButton />
          
        </div>
      </section>

      {/* 2. Strategic Goals Grid */}
      <section style={{ padding: isMobile ? "20px 10px" : "40px 20px" }}>
        <div className="container" style={{ margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "left", marginBottom: "60px", maxWidth: "1500px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>OBJECTIVES</h4>
              </div>
              <h2 style={{ fontSize: isMobile ? "2rem" : "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 20px 0", lineHeight: 1.1 }}>
                Strategic <span className="text-gradient" style={{ fontWeight: 300 }}>Goals</span>
              </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.7, textAlign: "left", margin: 0 }}>
              Our operational and strategic objectives are designed to continuously improve our performance across all phases of <Link href="/services" style={{ color: "var(--primary-red)", textDecoration: "none" }}>construction and engineering</Link>.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {strategicGoals.map((goal, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? "20px" : "60px",
                  paddingBottom: "40px",
                  borderBottom: idx !== strategicGoals.length - 1 ? "1px solid var(--border-soft)" : "none",
                  alignItems: "flex-start"
                }}
              >
                <div style={{ flex: "0 0 80px", borderRight: isMobile ? "none" : "2px solid rgba(229, 57, 53, 0.2)", paddingRight: isMobile ? "0" : "30px" }}>
                  <div style={{ fontSize: "3rem", fontWeight: 900, color: "var(--primary-red)", fontFamily: "var(--font-heading)", lineHeight: 1 }}>
                    {goal.num}
                  </div>
                </div>
                
                <div style={{ flex: "1" }}>
                  <h3 style={{ fontSize: "1.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px 0", lineHeight: 1.2 }}>
                    {goal.title}
                  </h3>
                  <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: "0", fontSize: "1.1rem" }}>
                    {goal.desc}
                  </p>
                </div>
                
                <div style={{ flex: "1" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "15px" }}>
                    {goal.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "var(--text-dark)", fontSize: "1.05rem", lineHeight: 1.5, fontWeight: 500 }}>
                        <CheckCircle size={20} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic Priorities */}
      <section style={{ padding: isMobile ? "50px 10px" : "80px 20px", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", padding: "0 16px" }}>
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
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "15px", padding: "20px 0", borderBottom: "1px solid var(--border-soft)", color: "var(--text-dark)", fontSize: "1.2rem", fontWeight: 600 }}>
                      <CheckCircle size={24} color="var(--primary-red)" />
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
          <div style={{ textAlign: "left", marginBottom: "30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>FUTURE FOCUS</h4>
              </div>
              <h2 style={{ fontSize: isMobile ? "2rem" : "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0", lineHeight: 1.1 }}>
                Looking <span className="text-gradient" style={{ fontWeight: 300 }}>Ahead</span>
              </h2>
            </div>
          <div style={{ width: "100%" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, margin: 0 }}>
              RR Construction (Pvt) Ltd continues to strengthen its capabilities with a clear focus on effective project delivery, engineering advancement, infrastructure development and operational excellence. By continuously improving its people, processes, resources and technical capabilities, the company aims to respond effectively to the evolving requirements of Sri Lanka's infrastructure sector and create lasting value through reliable construction and civil engineering solutions.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
