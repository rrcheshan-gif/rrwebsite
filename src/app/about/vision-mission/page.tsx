
"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, HardHat, Lightbulb, Leaf, Award, Handshake, Compass } from 'lucide-react';

import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

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
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
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
    <div style={{ paddingTop: "0px", backgroundColor: "var(--white)", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Hero Section */}
      <section 
        className="page-header" 
        style={{ 
          backgroundImage: "url('/images/page-headers/engineering-blueprint-banner.jpg')" , 
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
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.4) 100%)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>
            Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>
          </h1>
          
        </div>
      </section>

      {/* Clean Layout: Vision, Mission, Strategy */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 20px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          
          <Reveal direction="up">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "20px" : "60px", marginBottom: "80px", borderBottom: "1px solid var(--border-soft)", paddingBottom: "80px" }}>
              <div style={{ flex: "0 0 80px" }}>
                <Eye size={isMobile ? 50 : 80} color="var(--primary-red)" opacity={0.9} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.85rem" }}>FUTURE OUTLOOK</h4>
                </div>
                <h2 style={{ fontSize: isMobile ? "2rem" : "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "20px", letterSpacing: "-1px" }}>Our <span className="text-gradient" style={{ fontWeight: 300 }}>Vision</span></h2>
                <p style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 400, textAlign: "justify" }}>
                  To be a leading force in Sri Lanka's infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "20px" : "60px", marginBottom: "80px", borderBottom: "1px solid var(--border-soft)", paddingBottom: "80px" }}>
              <div style={{ flex: "0 0 80px" }}>
                <Target size={isMobile ? 50 : 80} color="var(--primary-red)" opacity={0.9} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.85rem" }}>PURPOSE</h4>
                </div>
                <h2 style={{ fontSize: isMobile ? "2rem" : "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "20px", letterSpacing: "-1px" }}>Our <span className="text-gradient" style={{ fontWeight: 300 }}>Mission</span></h2>
                <p style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 400, textAlign: "justify" }}>
                  To deliver complex infrastructure and heavy civil engineering projects with excellence, innovation, and integrity — combining experienced people, advanced technology, integrated resources, uncompromising quality, and a strong commitment to safety, sustainability, and client satisfaction.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "20px" : "60px", paddingBottom: "40px" }}>
              <div style={{ flex: "0 0 80px" }}>
                <Compass size={isMobile ? 50 : 80} color="var(--primary-red)" opacity={0.9} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "30px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", margin: 0, fontSize: "0.85rem" }}>STRATEGY</h4>
                </div>
                <h2 style={{ fontSize: isMobile ? "2rem" : "3rem", fontFamily: "var(--font-heading)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "20px", letterSpacing: "-1px" }}>Our <span className="text-gradient" style={{ fontWeight: 300 }}>Direction</span></h2>
                <p style={{ color: "var(--text-light)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "20px", fontWeight: 400, textAlign: "justify" }}>
                  RR Construction (Pvt) Ltd continues to strengthen its position in Sri Lanka's infrastructure sector through integrated heavy civil engineering capabilities covering highways and expressways, bridges, railway construction, maritime and marine infrastructure, water infrastructure, geotechnical works and other major civil engineering projects.
                </p>
                <p style={{ color: "var(--text-dark)", fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-heading)", margin: 0, letterSpacing: "0.5px" }}>
                  Our vision guides where we are going, while our mission defines how we deliver value along the way.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Clean Core Values List Design */}
      <section style={{ padding: "80px 20px 100px", background: "var(--bg-light)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          
          <Reveal>
            <div style={{ textAlign: "left", marginBottom: "60px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
                  <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>PRINCIPLES</h4>
                </div>
                <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
                  Our Core <span className="text-gradient" style={{ fontWeight: 300 }}>Values</span>
                </h2>
              </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              { title: "EXCELLENCE", subtitle: "Built to Perform", desc: "Delivering every project with technical expertise, precision and a consistent commitment to quality.", icon: <Award size={40} color="var(--primary-red)" strokeWidth={1.5} /> },
              { title: "INNOVATION", subtitle: "Engineered for Tomorrow", desc: "Applying modern engineering methods, technology and practical solutions to address complex infrastructure challenges.", icon: <Lightbulb size={40} color="var(--primary-red)" strokeWidth={1.5} /> },
              { title: "INTEGRITY", subtitle: "Trust & Transparency", desc: "Building lasting relationships through accountability, transparency and professional conduct.", icon: <ShieldCheck size={40} color="var(--primary-red)" strokeWidth={1.5} /> },
              { title: "SAFETY", subtitle: "Zero Harm", desc: "Protecting our people, communities and environment through responsible and disciplined construction practices.", icon: <HardHat size={40} color="var(--primary-red)" strokeWidth={1.5} /> },
              { title: "SUSTAINABILITY", subtitle: "Responsible Execution", desc: "Creating long-term infrastructure value while respecting environmental and social responsibilities.", icon: <Leaf size={40} color="var(--primary-red)" strokeWidth={1.5} /> },
              { title: "PARTNERSHIP", subtitle: "Shared Success", desc: "Working collaboratively with clients, professionals, communities and stakeholders to achieve shared success.", icon: <Handshake size={40} color="var(--primary-red)" strokeWidth={1.5} /> }
            ].map((val, idx) => (
              <Reveal key={idx} delay={idx * 100} direction="up">
                <div style={{ 
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: isMobile ? "15px" : "40px",
                  paddingBottom: "30px",
                  borderBottom: idx !== 5 ? "1px solid var(--border-soft)" : "none"
                }}>
                  <div style={{ flex: "0 0 60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {val.icon}
                  </div>
                  <div style={{ flex: "1" }}>
                    <h3 style={{ color: 'var(--text-dark)', fontFamily: 'var(--font-heading)', fontWeight: 800, margin: "0 0 5px 0", fontSize: '1.4rem' }}>
                      {val.title}
                    </h3>
                    <h4 style={{ color: 'var(--primary-red)', fontSize: '0.95rem', fontWeight: 600, margin: "0 0 10px 0", letterSpacing: "1px" }}>
                      {val.subtitle}
                    </h4>
                  </div>
                  <div style={{ flex: "2" }}>
                    <p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0, fontSize: "1.1rem" }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
