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
    <div style={{ paddingTop: "0px", backgroundColor: "var(--bg-light)", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%), url('/images/IMAGES/Kadugannawa/IMG_20230224_115842.jpg')" , 
          padding: isMobile ? "90px 20px 30px" : "140px 20px 40px", 
          textAlign: "center", 
          position: "relative", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
           
          borderRadius: isMobile ? '24px' : '32px',
          margin: isMobile ? '0 12px 30px' : '0 20px 40px',  
          overflow: "hidden" 
        }}
      >
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to About Us
            </Link>
        </div>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>
            Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
          </h1>
          
        </div>
      </section>

                        {/* Vision & Mission Redesign */}
      <section style={{ padding: isMobile ? "60px 20px" : "120px 20px", backgroundColor: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "30px" : "40px" }}>
          
                    {/* Vision Block */}
          <Reveal direction="left">
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--text-dark)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 30px 60px rgba(15, 23, 42, 0.2)", 
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.05, zIndex: -1, pointerEvents: "none" }}>
                <Eye size={300} color="#fff" />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", backdropFilter: "blur(10px)" }}>
                <Eye size={40} color="#ffffff" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "#ffffff", marginBottom: "25px", letterSpacing: "-1px" }}>Our Vision</h2>
              
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 400, position: "relative", paddingLeft: "25px", borderLeft: "4px solid var(--primary-red)" }}>
                To be a leading force in Sri Lanka's infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future.
              </p>
            </div>
          </Reveal>

          {/* Mission Block */}
          <Reveal direction="right" delay={200}>
            <div className="hover-lift" style={{ 
              position: "relative",
              backgroundColor: "var(--text-dark)", 
              borderRadius: "32px", 
              padding: isMobile ? "40px 30px" : "70px 60px", 
              boxShadow: "0 30px 60px rgba(15, 23, 42, 0.2)", 
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              zIndex: 1
            }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", opacity: 0.05, zIndex: -1, pointerEvents: "none" }}>
                <Target size={300} color="#fff" />
              </div>
              
              <div style={{ width: "80px", height: "80px", borderRadius: "24px", backgroundColor: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", backdropFilter: "blur(10px)" }}>
                <Target size={40} color="#ffffff" />
              </div>
              
              <h2 style={{ fontSize: isMobile ? "2.2rem" : "3.2rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "#ffffff", marginBottom: "25px", letterSpacing: "-1px" }}>Our Mission</h2>
              
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 400, position: "relative", paddingLeft: "25px", borderLeft: "4px solid var(--primary-red)" }}>
                To deliver complex infrastructure and heavy civil engineering projects with excellence, innovation, and integrity�combining experienced people, advanced technology, integrated resources, uncompromising quality, and a strong commitment to safety, sustainability, and client satisfaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
  {/* Brand Statement Banner */}
      <section style={{ padding: "80px 20px", background: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)", position: "relative", borderTop: "4px solid var(--primary-red)", borderBottom: "4px solid var(--primary-red)" }}>
        <Reveal>
          <div className="container" style={{ textAlign: "center", maxWidth: "1000px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "white", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, letterSpacing: "1px", lineHeight: 1.3 }}>
              Engineering Excellence. Building Infrastructure. Shaping the Future.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* Modern Core Values Grid */}
      <section style={{ padding: "80px 20px 80px", background: "var(--bg-light)", position: "relative" }}>
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
                    padding: "40px", 
                    borderRadius: "12px", 
                    borderLeft: "5px solid var(--primary-red)", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    height: "100%",
                    transition: "transform 0.3s ease",
                  }}
                  className="hover-lift"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ color: 'var(--primary-red)' }}>
                        {val.icon}
                      </div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", margin: 0, color: "var(--text-dark)", fontWeight: 800 }}>
                        {val.title}
                      </h3>
                    </div>
                    <h4 style={{ fontSize: "1.1rem", color: "var(--primary-red)", fontWeight: 700, margin: "0 0 15px" }}>
                      {val.subtitle}
                    </h4>
                    <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0 }}>
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
        <div className="container" style={{ margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: "0 0 30px", textAlign: "center" }}>
              Our Direction
            </h2>
            <div style={{ width: "100%" }}>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px" }}>
                RR Construction (Pvt) Ltd continues to strengthen its position in Sri Lanka’s infrastructure sector through integrated heavy civil engineering capabilities covering <Link href="/services/road-construction" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>roads and highways</Link>, <Link href="/services/bridge-construction" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>bridges</Link>, <Link href="/services/railway-civil-works" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>railway construction</Link>, <Link href="/services/maritime-construction" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>maritime and marine infrastructure</Link>, <Link href="/services/water-infrastructure" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>water infrastructure</Link>, <Link href="/services/landslide-mitigation" style={{ color: "inherit", textDecoration: "none", fontWeight: "normal" }}>geotechnical works</Link> and other major civil engineering projects.
              </p>
              <p style={{ color: "var(--text-dark)", fontSize: "1.25rem", fontWeight: 800, fontFamily: "var(--font-heading)", textAlign: "center", margin: 0 }}>
                Our vision guides where we are going, while our mission defines how we deliver value along the way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}