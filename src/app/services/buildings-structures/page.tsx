"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--white)' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        backgroundImage: "url('" + encodeURI('/images/BADULLA/WhatsApp Image 2026-07-28 at 14.03.18.jpeg') + "')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: isMobile ? '80px 20px 40px' : '120px 20px 70px',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        {/* Absolute Back Button */}
        <div style={{ position: 'absolute', top: isMobile ? '100px' : '140px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
            &larr; Back to Services
          </Link>
        </div>

        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', margin: '0 0 20px', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>
            Civil Structures
          </h1>
          <p style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', lineHeight: 1.6, opacity: 0.9 }}>
            Reinforced concrete structures, water retaining structures, elevated water towers, and complex steel fabrication.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: isMobile ? '60px 20px' : '100px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>
            Service Overview
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            RR Construction brings decades of engineering excellence to civil structures. 
            Our commitment to quality, safety, and sustainable practices ensures that every project 
            meets the highest industry standards. We leverage our extensive self-owned heavy machinery fleet 
            and experienced workforce to deliver complex projects on time and within budget.
          </p>
        </div>
      </section>
    </div>
  );
}