"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, HardHat, Lightbulb, Leaf, Award, Handshake } from 'lucide-react';

function Reveal({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode, delay?: number, className?: string, direction?: "up"|"left"|"right" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let transformStart = 'translateY(40px)';
  if (direction === 'left') transformStart = 'translateX(-40px)';
  if (direction === 'right') transformStart = 'translateX(40px)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0,0)' : transformStart,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) $delayms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) $delayms",
      }}
    >
      {children}
    </div>
  );
}

export default function VisionMission() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ paddingTop: isMobile ? "90px" : "110px", backgroundColor: "var(--bg-light)", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/IMAGES/Gandara/gandara-bg.jpeg'), linear-gradient(180deg, #1f2937, #111827)", 
          padding: isMobile ? "40px 20px" : "70px 20px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: isMobile ? "24px" : "32px", 
          margin: isMobile ? "0 12px 40px" : "0 20px 60px", 
          overflow: "hidden" 
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
              &larr; Back to About Us
            </Link>
          </div>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>
            Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: isMobile ? "1.1rem" : "1.3rem", marginTop: "15px", maxWidth: "700px", display: "inline-block", lineHeight: 1.6, fontWeight: 500 }}>
            Our Vision & Mission define the direction behind everything we build. They reflect RR Construction’s commitment to engineering excellence, responsible infrastructure development, innovation, safety and lasting value for Sri Lanka and the communities we serve.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section style={{ position: "relative", padding: isMobile ? "20px 20px 60px" : "20px 20px 80px" }}>
        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1440px" }}>
          <div style={{ display: "flex", gap: "30px", flexDirection: isMobile ? "column" : "row" }}>
            
            {/* Vision Card */}
            <Reveal direction="left" style={{ flex: 1 }}>
              <div style={{ 
                height: "100%", 
                background: "var(--white)", 
                border: "1px solid var(--border-soft)",
                borderRadius: "32px",
                padding: isMobile ? "40px 30px" : "60px 50px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "18rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "rgba(0,0,0,0.02)", lineHeight: 1, pointerEvents: "none" }}>V</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", color: "var(--primary-red)" }}>
                    <Eye size={40} />
                  </div>
                  <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", color: "var(--text-dark)" }}>Our Vision</h2>
                  <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, fontWeight: 500, margin: "0 0 15px 0" }}>
                    “To be a leading force in Sri Lanka’s infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future.”
                  </p>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
                    Building the infrastructure that enables tomorrow’s opportunities.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mission Card */}
            <Reveal direction="right" delay={300} style={{ flex: 1 }}>
              <div style={{ 
                height: "100%", 
                background: "var(--white)", 
                border: "1px solid var(--border-soft)",
                borderRadius: "32px",
                padding: isMobile ? "40px 30px" : "60px 50px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease"
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.04)"; }}
              >
                <div style={{ position: "absolute", top: "-20px", right: "-10px", fontSize: "18rem", fontFamily: "var(--font-heading)", fontWeight: 900, color: "rgba(0,0,0,0.02)", lineHeight: 1, pointerEvents: "none" }}>M</div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "rgba(229, 57, 53, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", color: "var(--primary-red)" }}>
                    <Target size={40} />
                  </div>
                  <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 25px 0", color: "var(--text-dark)" }}>Our Mission</h2>
                  <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 500, margin: "0 0 15px 0" }}>
                    “To deliver complex infrastructure and heavy civil engineering projects with excellence, innovation, and integrity—combining experienced people, advanced technology, integrated resources, uncompromising quality, and a strong commitment to safety, sustainability, and client satisfaction.”
                  </p>
                  <p style={{ color: "var(--primary-red)", fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>
                    Delivering dependable engineering solutions through people, technology and responsible execution.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
          
        </div>
      </section>

      {/* Brand Statement Banner */}
      <section style={{ padding: "80px 20px", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", position: "relative", borderTop: "4px solid var(--primary-red)", borderBottom: "4px solid var(--primary-red)" }}>
        <Reveal>
          <div className="container" style={{ textAlign: "center", maxWidth: "1000px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, letterSpacing: "1px", lineHeight: 1.3 }}>
              Engineering Excellence. Building Infrastructure. Shaping the Future.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* Modern Core Values Grid */}
      <section style={{ padding: "100px 20px", background: "var(--bg-light)", position: "relative" }}>
        <div className="container" style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 15px" }}>
                Our Core Values
              </h2>
              <div style={{ width: "60px", height: "4px", background: "var(--primary-red)", margin: "20px auto 20px", borderRadius: "2px" }}></div>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
            {[
              { title: "EXCELLENCE", subtitle: "Built to Perform", desc: "Delivering every project with technical expertise, precision and a consistent commitment to quality.", icon: <Award size={32} /> },
              { title: "INNOVATION", subtitle: "Engineered for Tomorrow", desc: "Applying modern engineering methods, technology and practical solutions to address complex infrastructure challenges.", icon: <Lightbulb size={32} /> },
              { title: "INTEGRITY", subtitle: "Trust & Transparency", desc: "Building lasting relationships through accountability, transparency and professional conduct.", icon: <ShieldCheck size={32} /> },
              { title: "SAFETY", subtitle: "Zero Harm", desc: "Protecting our people, communities and environment through responsible and disciplined construction practices.", icon: <HardHat size={32} /> },
              { title: "SUSTAINABILITY", subtitle: "Responsible Execution", desc: "Creating long-term infrastructure value while respecting environmental and social responsibilities.", icon: <Leaf size={32} /> },
              { title: "PARTNERSHIP", subtitle: "Shared Success", desc: "Working collaboratively with clients, professionals, communities and stakeholders to achieve shared success.", icon: <Handshake size={32} /> }
            ].map((val, idx) => (
              <Reveal key={idx} delay={idx * 150} direction="up">
                <div style={{ 
                  background: "var(--white)", 
                  border: "1px solid var(--border-soft)",
                  borderRadius: "24px", 
                  padding: "40px 30px", 
                  height: "100%",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = "var(--primary-red)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(229, 57, 53, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = "var(--border-soft)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                }}
                >
                  <div style={{ width: "70px", height: "70px", borderRadius: "20px", background: "rgba(229, 57, 53, 0.08)", color: "var(--primary-red)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px" }}>
                    {val.icon}
                  </div>
                  <h3 style={{ fontSize: "0.95rem", color: "var(--primary-red)", fontWeight: 800, letterSpacing: "2px", margin: "0 0 10px" }}>
                    {val.title}
                  </h3>
                  <h4 style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 15px", lineHeight: 1.2 }}>
                    {val.subtitle}
                  </h4>
                  <p style={{ color: "var(--text-light)", fontSize: "1rem", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Direction Section */}
      <section style={{ padding: "80px 20px 120px", background: "var(--white)", position: "relative" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 30px" }}>
              Our Direction
            </h2>
            <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "30px", fontWeight: 500 }}>
              RR Construction (Pvt) Ltd continues to strengthen its position in Sri Lanka’s infrastructure sector through integrated heavy civil engineering capabilities covering <Link href="/services/road-construction" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>roads and highways</Link>, <Link href="/services/bridge-construction" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>bridges</Link>, <Link href="/services/railway-civil-works" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>railway construction</Link>, <Link href="/services/maritime-construction" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>maritime and marine infrastructure</Link>, <Link href="/services/water-infrastructure" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>water infrastructure</Link>, <Link href="/services/landslide-mitigation" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>geotechnical works</Link> and other major civil engineering projects.
            </p>
            <p style={{ color: "var(--text-dark)", fontSize: "1.25rem", fontWeight: 800, fontFamily: "var(--font-heading)" }}>
              Our vision guides where we are going, while our mission defines how we deliver value along the way.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}