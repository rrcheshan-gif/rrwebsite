"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, HardHat, BookOpen, ArrowRight, CheckCircle2, Award, Shield, Wrench } from 'lucide-react';
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function People() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const categories = [
    {
      icon: <HardHat size={32} color="var(--primary-red)" />,
      title: 'Engineering & Technical',
      desc: 'Our core strength lies in our formidable, multidisciplinary team of industry veterans. This includes highly qualified Chartered Civil Engineers, precision-focused Quantity Surveyors, Geotechnical Experts, dedicated Health & Safety Professionals, and meticulous QA/QC Specialists. Together, they deploy advanced engineering methodologies and innovative problem-solving to ensure that every infrastructure project not only meets but consistently exceeds rigorous global engineering benchmarks.',
    },
    {
      icon: <Wrench size={32} color="var(--primary-red)" />,
      title: 'Skilled Trades & Operators',
      desc: 'Recognized as the resilient backbone of our field operations, our direct workforce comprises highly trained, certified heavy machinery operators, master masons, specialized steel fixers, and expert asphalt technicians. We take immense pride in our long-term employee retention, with many of our seasoned tradespeople having been with us since the company\'s inception.',
    },
    {
      icon: <BookOpen size={32} color="var(--primary-red)" />,
      title: 'Training & Development',
      desc: 'We are profoundly committed to the Continuous Professional Development (CPD) of our workforce. We invest heavily in structured upskilling programs, ranging from rigorous ISO-certified occupational health and safety training to advanced workshops in modern structural technologies.',
    },
  ];

  const stats = [
    { number: '1,400+', label: 'Dedicated Professionals' },
    { number: '30+', label: 'Years of Experience' },
    { number: '3', label: 'ISO Certifications' },
    { number: '1,000+', label: 'Heavy Machines Operated' },
  ];

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>

      {/* Hero Section — full-quality photo, no diagonal override */}
      <style dangerouslySetInnerHTML={{ __html: `.people-hero::before, .people-hero::after { display: none !important; }` }} />
      <section className="page-header people-hero" style={{
        backgroundImage: "url('/images/page-headers/people-team-final.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        minHeight: isMobile ? "400px" : "580px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: isMobile ? "120px 20px 40px" : "160px 20px 50px",
        textAlign: "left",
        position: "relative",
        borderRadius: isMobile ? "20px" : "32px",
        margin: isMobile ? "0 12px 30px" : "0 20px 50px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      }}>
        {/* Dark gradient overlay for text readability */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "linear-gradient(to top, rgba(10,14,26,0.95) 0%, rgba(10,14,26,0.5) 50%, transparent 100%)",
          zIndex: 1
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AutoBreadcrumb />
          <h1 style={{
            color: "white", fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 7vw, 5rem)",
            margin: "0 0 12px", fontWeight: 800,
            textShadow: "0 4px 30px rgba(0,0,0,0.6)",
            lineHeight: 1.05,
          }}>
            Our <span style={{ color: "var(--primary-red)" }}>People</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", maxWidth: "580px", lineHeight: 1.7, margin: 0 }}>
            Over 1,400+ professionals building the infrastructure of tomorrow — together.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ padding: isMobile ? "0 12px 50px" : "0 20px 60px" }}>
        <div style={{
          maxWidth: "1500px", margin: "0 auto",
          display: "grid", gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`,
          gap: "1px", background: "rgba(0,0,0,0.08)",
          borderRadius: "16px", overflow: "hidden",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "var(--white)", padding: isMobile ? "28px 16px" : "40px 32px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--primary-red)", fontFamily: "var(--font-heading)", lineHeight: 1 }}>
                {s.number}
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-light)", marginTop: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: isMobile ? "20px 12px 50px" : "20px 20px 70px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }} />
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>OUR TEAM</h4>
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            color: "var(--text-dark)", marginBottom: "20px",
            fontWeight: 800, lineHeight: 1.1
          }}>
            The Engine of RR <span className="text-gradient" style={{ fontWeight: 300 }}>Construction</span>
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", maxWidth: "900px" }}>
            Infrastructure isn't built by machines; it's built by people. From our boardroom in Colombo to the furthest reaches of our highway projects, the RR Construction family consists of over <strong>1,400+ dedicated professionals</strong>. We cultivate an environment that rewards precision, promotes safety, and encourages lifelong learning.
          </p>
        </div>
      </section>

      {/* Workforce Categories */}
      <section style={{ padding: isMobile ? "0 12px 60px" : "0 20px 80px" }}>
        <div className="container" style={{
          maxWidth: "1500px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "28px"
        }}>
          {categories.map((c, i) => (
            <div key={i} style={{
              background: "var(--white)",
              borderRadius: "16px",
              padding: isMobile ? "28px 24px" : "40px 36px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
              borderTop: "4px solid var(--primary-red)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}>
              <div style={{ marginBottom: "18px" }}>{c.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-heading)", fontSize: "1.35rem",
                color: "var(--text-dark)", fontWeight: 800, marginBottom: "14px"
              }}>{c.title}</h3>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1rem" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: isMobile ? "50px 12px" : "70px 20px", background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }} />
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>WHAT WE STAND FOR</h4>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-dark)", fontWeight: 800, marginBottom: "40px", lineHeight: 1.1 }}>
            Our Culture &amp; <span className="text-gradient" style={{ fontWeight: 300 }}>Values</span>
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "20px"
          }}>
            {[
              { icon: <Shield size={20} color="var(--primary-red)" />, title: "Safety First", desc: "Every employee goes home safe. Our ISO 45001-certified HSE framework governs every site." },
              { icon: <Award size={20} color="var(--primary-red)" />, title: "Quality Excellence", desc: "ISO 9001:2015 quality management embedded in every process from planning to delivery." },
              { icon: <CheckCircle2 size={20} color="var(--primary-red)" />, title: "Continuous Learning", desc: "Structured CPD programs, technical workshops, and international certification support." },
              { icon: <Users size={20} color="var(--primary-red)" />, title: "Team Ownership", desc: "A family culture — high retention, long-term careers, and recognition of field excellence." },
            ].map((v, i) => (
              <div key={i} style={{
                display: "flex", gap: "18px", alignItems: "flex-start",
                padding: "24px", borderRadius: "12px",
                background: "var(--bg-light)",
                border: "1px solid rgba(0,0,0,0.05)"
              }}>
                <div style={{ flexShrink: 0, marginTop: "3px" }}>{v.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-dark)", marginBottom: "6px", fontSize: "1.05rem" }}>{v.title}</div>
                  <div style={{ color: "var(--text-light)", lineHeight: 1.7, fontSize: "0.97rem" }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section style={{
        padding: isMobile ? "50px 12px" : "80px 20px",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        color: "white",
        textAlign: "left"
      }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: "32px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "14px" }}>
              <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }} />
              <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>JOIN OUR TEAM</h4>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "16px", color: "white", lineHeight: 1.1 }}>
              Build Your Career<br />With Us
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.7 }}>
              Ready to engineer tomorrow? We are always looking for passionate engineers, project managers, and skilled tradespeople to join our growing team.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Link href="/career" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "var(--primary-red)", color: "white",
              padding: "16px 36px", borderRadius: "10px",
              fontWeight: 700, fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 8px 30px rgba(229, 57, 53, 0.4)",
            }}>
              View Open Positions <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
