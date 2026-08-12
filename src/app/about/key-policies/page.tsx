"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function KeyPolicies() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const policies = [
    {
      id: "quality",
      title: "Quality Policy",
      image: "/images/hero-bg-2.jpg",
      points: [
        "Deliver consistent quality infrastructure that meets or exceeds client expectations.",
        "Ensure full compliance with ISO 9001:2015 standards and all relevant technical specifications.",
        "Implement rigorous quality assurance at every stage of construction, from material sourcing to final delivery.",
        "Promote a culture of continual improvement across all engineering divisions."
      ]
    },
    {
      id: "ohs",
      title: "Occupational Health & Safety Policy",
      image: "/images/hero-bg-1.jpg",
      points: [
        "Maintain a strict 'Zero Harm' working environment by adhering to ISO 45001:2018 standards.",
        "Conduct regular hazard identification and comprehensive risk assessments across all sites.",
        "Provide ongoing safety training and mandatory Personal Protective Equipment (PPE) to all 1,800+ employees.",
        "Implement proactive incident prevention strategies rather than reactive measures."
      ]
    },
    {
      id: "environment",
      title: "Environmental Policy",
      image: "/images/hero-road-roller.jpg",
      points: [
        "Strictly adhere to ISO 14001:2015 standards to minimize the ecological impact of our operations.",
        "Promote responsible resource use, including efficient water and energy consumption.",
        "Implement comprehensive waste management and pollution prevention systems on all construction sites.",
        "Ensure full compliance with national environmental regulations and community safety guidelines."
      ]
    },
    {
      id: "people",
      title: "People & Training Policy",
      image: "/images/about_section.jpg",
      points: [
        "Invest heavily in continuous competency development and technical skills training.",
        "Provide equal opportunities and a fair, respectful working environment for all employees.",
        "Ensure all heavy equipment operators and engineers receive updated safety and operational education.",
        "Foster leadership development from within the organization to ensure long-term stability."
      ]
    },
    {
      id: "ethics",
      title: "Business Ethics Policy",
      image: "/images/hero-bg-2.jpg",
      points: [
        "Conduct all business operations with absolute integrity, transparency, and fairness.",
        "Maintain strict accountability in all financial and operational reporting.",
        "Prohibit all forms of bribery, corruption, or unethical anti-competitive practices.",
        "Ensure all sub-contractors and suppliers adhere to our ethical standards."
      ]
    },
    {
      id: "risk",
      title: "Risk Management Policy",
      image: "/images/hero-bg-1.jpg",
      points: [
        "Proactively identify and mitigate technical, financial, and environmental risks before they impact project delivery.",
        "Develop robust contingency plans for supply chain disruptions, severe weather, and operational hazards.",
        "Continuously monitor project schedules and resource allocations to prevent delays.",
        "Ensure comprehensive insurance coverage and liability protection across all operations."
      ]
    }
  ];

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "140px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/policies.jpg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "70px 20px" : "120px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 30px" : "0 20px 50px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: isMobile ? "2.8rem" : "4.5rem", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", textTransform: "uppercase" }}>
            Key <span style={{ color: "var(--primary-red)" }}>Policies</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            The strict operational frameworks that govern our commitment to quality, safety, and ethics.
          </p>
        </div>
      </section>

      {/* Policies Alternating Section */}
      <section style={{ padding: isMobile ? "40px 10px" : "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: isMobile ? "2rem" : "2.8rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0 }}>Corporate Frameworks</h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "15px", maxWidth: "800px", margin: "15px auto 0" }}>
              Our policies are not just documents; they are strictly enforced daily protocols that ensure RR Construction remains a trusted leader in Sri Lankan civil engineering.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "60px" : "100px" }}>
            {policies.map((policy, idx) => (
              <div key={policy.id} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "50px", flexDirection: isMobile ? "column" : (idx % 2 === 0 ? "row" : "row-reverse") }}>
                
                {/* Image Side */}
                <div style={{ flex: 1, minWidth: "300px", width: "100%" }}>
                  <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", height: isMobile ? "300px" : "450px" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(229, 57, 53, 0.2), rgba(0,0,0,0.1))", zIndex: 1 }}></div>
                    <img src={policy.image} alt={policy.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>

                {/* Content Side */}
                <div style={{ flex: 1, minWidth: "300px", width: "100%" }}>
                  <h3 style={{ fontSize: isMobile ? "2rem" : "2.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "30px" }}>
                    {policy.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {policy.points.map((point, pIdx) => (
                      <div key={pIdx} style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                        <CheckCircle2 size={24} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px", textAlign: "center", background: "var(--white)", borderTop: "1px solid var(--border-soft)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Review Our <span style={{ color: "var(--primary-red)" }}>Goals & Targets</span>
          </h2>
          <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            See how these policies translate into measurable targets for the future.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about/goals-targets" className="btn btn-primary hover-glow" style={{ padding: "18px 40px", fontSize: "1.05rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              View Goals & Targets <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
