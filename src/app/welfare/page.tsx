"use client";
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import AutoBreadcrumb from "@/app/components/AutoBreadcrumb";

export default function Welfare() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ paddingTop: "0px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      {/* Page Header */}
            {/* Hero Section - Standard page-header with diagonal slant + full image on right */}
      <section className="page-header" style={{
        backgroundImage: "url('/images/about/blueprint-blue-bg-wide.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "350px" : "520px",
      }}>
        <div className="container">
          <AutoBreadcrumb />
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: isMobile ? "2.4rem" : "clamp(2.5rem, 7vw, 5rem)",
            margin: "0 0 14px", fontWeight: 800,
            lineHeight: 1.05, color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.6)",
          }}>
            Employee <span style={{ color: "var(--primary-red)" }}>Welfare</span>
          </h1>
        </div>
      </section>

      <section style={{ padding: "60px 20px 50px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--primary-red)" }}></div>
            <h4 style={{ color: "var(--primary-red)", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: 0, fontSize: "0.9rem" }}>CARE & SUPPORT</h4>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", color: "var(--text-dark)", marginBottom: "20px", fontWeight: 800, lineHeight: 1.1 }}>
            Beyond the <span className="text-gradient" style={{ fontWeight: 300 }}>Worksite</span>
          </h2>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-light)", marginBottom: "40px", textAlign: "left" }}>
            The well-being of our 1400+ workforce is our highest priority. We understand that our success is built on their hard work, and we are committed to providing a supportive, secure, and rewarding environment for them and their families.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 20px 100px" }}>
        <div className="container" style={{ maxWidth: "1500px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "50px" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <img className="img-polished img-hover-zoom" src="/images/page-headers/bg-6.jpg" alt="Health Benefits" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "20px", color: "var(--text-dark)" }}>Health & Medical Benefits</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Comprehensive medical insurance coverage for employees and their immediate families.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Annual comprehensive health screening camps conducted at major project sites.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>24/7 on-site medical officers and fully equipped first-aid facilities at all active construction zones.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container" style={{ maxWidth: "1500px", margin: "80px auto 0", display: "flex", flexWrap: "wrap-reverse", gap: "50px" }}>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "20px", color: "var(--text-dark)" }}>Financial & Social Support</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Subsidized high-quality meals and comfortable accommodation provided for remote site workers.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Educational scholarships and support programs for the children of our long-serving staff members.</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.6 }}>Annual sports festivals, cultural events, and family days to foster community spirit.</span>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 'min(100%, 300px)' }}>
            <img className="img-polished img-hover-zoom" src="/images/welfare-support.jpg" alt="Social Support" style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
          </div>
        </div>
      </section>
    </div>
  );
}


