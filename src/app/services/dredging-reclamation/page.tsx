"use client";
import { ArrowLeft } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

export default function DredgingReclamationPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionPadding = isMobile ? "60px 10px" : "100px 20px";

  const services = [
    {
      title: "Marine & Harbour Dredging",
      desc: "Capital and maintenance dredging for ports, harbours, and navigational channels to ensure safe vessel passage.",
      icon: "🚢"
    },
    {
      title: "Land Reclamation",
      desc: "Coastal reclamation, fill placement, and compaction to create new land for port expansion and coastal development.",
      icon: "🏖️"
    },
    {
      title: "Coastal Civil Works",
      desc: "Construction of seawalls, breakwaters, and coastal protection structures to safeguard marine infrastructure.",
      icon: "🌊"
    },
    {
      title: "Dredging Equipment Fleet",
      desc: "Self-owned and operated marine equipment fleet enabling efficient execution of complex dredging projects.",
      icon: "🏗️"
    }
  ];

  const faqs = [
    {
      q: "Do you own your own dredging equipment?",
      a: "Yes, we maintain a self-owned marine equipment fleet, ensuring reliable availability and efficient project execution."
    },
    {
      q: "How do you manage environmental impact during dredging?",
      a: `We strictly adhere to ISO 14001:2015 Environmental Management standards, implementing comprehensive environmental management plans to protect marine ecosystems.`
    },
    {
      q: "Do you handle both capital and maintenance dredging?",
      a: "Yes, we provide both capital dredging for new developments and maintenance dredging to preserve navigational depths in existing harbours."
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--white)' }}>
      {/* Hero Section */}
      <section className="page-header" style={{
        position: 'relative',
        padding: isMobile ? '40px 20px' : '70px 20px',
        backgroundColor: 'var(--text-dark)',
        backgroundImage: "linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url('/images/projects/filadhoo/img3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        {/* Absolute Back Button */}
        <div style={{ position: 'absolute', top: isMobile ? '100px' : '140px', left: isMobile ? '20px' : '40px', zIndex: 10 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>
            &larr; Back to Services
          </Link>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          

          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontFamily: 'var(--font-heading)',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            Dredging & <span style={{ color: 'var(--primary-red)' }}>Reclamation</span> Services in Sri Lanka
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: '600px',
          }}>
            Advanced marine dredging, harbour development, and land reclamation solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-dark)',
            marginBottom: '30px'
          }}>Expertise in Marine Environments</h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            lineHeight: 1.8,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            RR Construction provides specialized dredging and reclamation services for ports, harbours, and coastal developments across Sri Lanka. Utilizing our own fleet of marine equipment and adhering to ISO 14001:2015 environmental management systems, we deliver complex marine engineering projects with a focus on efficiency and sustainability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Our Dredging Capabilities</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--white)',
                padding: '40px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: 'var(--text-dark)',
                  marginBottom: '15px',
                  fontFamily: 'var(--font-heading)'
                }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: sectionPadding, backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: '50px'
          }}>Frequently Asked Questions</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--bg-light)',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid var(--border-soft)'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-dark)',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-heading)'
                }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
