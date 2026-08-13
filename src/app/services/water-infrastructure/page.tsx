"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

export default function WaterInfrastructurePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--white)', minHeight: '100vh', width: '100%' }}>
      {/* Hero Section */}
      <section className="page-header" style={{
        position: 'relative',
        padding: isMobile ? '40px 20px' : '70px 20px',
        backgroundColor: 'var(--text-dark)',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/services/water-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: "20px" }}>
          <Link href="/services" style={{ color: 'var(--white)', textDecoration: 'none', fontSize: '14px', opacity: 0.8 }}>
            ← Back to Services
          </Link>
        </div>
        <h1 style={{ color: 'var(--white)', fontSize: isMobile ? '36px' : '48px', fontFamily: 'var(--font-heading)', margin: '0 0 20px 0' }}>
          Water <span style={{ color: 'var(--primary-red)' }}>Infrastructure & Civil Engineering</span> in Sri Lanka
        </h1>
        <p style={{ color: 'var(--bg-light)', fontSize: '18px', maxWidth: '800px', lineHeight: 1.6, margin: 0 }}>
          Expert engineering solutions for water supply systems, treatment plants, drainage, and irrigation works across Sri Lanka.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 40px", backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--text-dark)', fontSize: '32px', fontFamily: 'var(--font-heading)', textAlign: 'center', marginBottom: '60px' }}>
            Our Water Infrastructure Services
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '40px' }}>
            {/* Water Supply Systems */}
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ color: 'var(--primary-red)', fontSize: '24px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Water Supply Systems
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Extensive experience in constructing municipal and regional water supply networks to deliver clean drinking water to communities across Sri Lanka.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {['Pipe networks and transmission mains', 'Distribution systems', 'Pumping stations', 'Elevated water towers', 'Ground reservoirs'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: 'var(--text-dark)' }}>
                    <span style={{ color: 'var(--primary-red)', marginRight: '12px', fontSize: '18px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Water Treatment Plants */}
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ color: 'var(--primary-red)', fontSize: '24px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Water Treatment Plants
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Civil engineering and structural works for industrial and municipal water treatment facilities. We partner with process engineers to deliver complete facilities.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {['Clarifiers and filtration structures', 'Chemical dosing buildings', 'Intake structures', 'Civil works for M&E installations', 'Facility administrative buildings'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: 'var(--text-dark)' }}>
                    <span style={{ color: 'var(--primary-red)', marginRight: '12px', fontSize: '18px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Irrigation & Drainage */}
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ color: 'var(--primary-red)', fontSize: '24px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Irrigation & Drainage
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                We handle large-scale irrigation projects essential for Sri Lanka's agricultural sector and rural development.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {['Irrigation canals and channels', 'Spillways and weirs', 'Anicuts and sluice structures', 'Tank (wewa) rehabilitation', 'Agricultural drainage systems'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: 'var(--text-dark)' }}>
                    <span style={{ color: 'var(--primary-red)', marginRight: '12px', fontSize: '18px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Storm Water Management */}
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-soft)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ color: 'var(--primary-red)', fontSize: '24px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Storm Water & Land Drainage
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Urban and regional storm water management solutions to prevent flooding and ensure proper land drainage.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {['Urban drainage networks', 'Culverts and cross drainage', 'Retention basins', 'Flood protection structures', 'Land reclamation drainage'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: 'var(--text-dark)' }}>
                    <span style={{ color: 'var(--primary-red)', marginRight: '12px', fontSize: '18px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 40px", backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--text-dark)', fontSize: '32px', fontFamily: 'var(--font-heading)', textAlign: 'center', marginBottom: '50px' }}>
            Featured Water Projects
          </h2>
          
          <div style={{
            backgroundColor: 'var(--bg-light)',
            borderRadius: '24px',
            border: '1px solid var(--border-soft)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: 'var(--primary-red)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px', marginBottom: '10px' }}>
                Major Project
              </div>
              <h3 style={{ color: 'var(--text-dark)', fontSize: '28px', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
                Ampara Water Treatment Plant
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                A critical infrastructure project involving the construction and civil engineering works for the water treatment facility in Ampara, designed to improve the quality and reliability of the region's potable water supply.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, marginBottom: '30px' }}>
                <li style={{ marginBottom: '10px', color: 'var(--text-dark)', display: 'flex' }}>
                  <strong style={{ width: '120px' }}>Client:</strong> NWSDB (National Water Supply & Drainage Board)
                </li>
                <li style={{ marginBottom: '10px', color: 'var(--text-dark)', display: 'flex' }}>
                  <strong style={{ width: '120px' }}>Sector:</strong> Water Treatment
                </li>
              </ul>
            </div>
            <div style={{ 
              flex: 1, 
              minHeight: '300px', 
              backgroundColor: '#e0e0e0',
              backgroundImage: 'url("/images/projects/ampara-water.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              {/* Image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Quality */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 40px", backgroundColor: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '50px' }}>
          <div>
            <h2 style={{ color: 'var(--text-dark)', fontSize: '28px', fontFamily: 'var(--font-heading)', marginBottom: '30px' }}>
              Key Client organization's
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              We are a trusted partner and registered contractor for major government bodies and authorities responsible for water infrastructure in Sri Lanka:
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: 'var(--text-dark)', padding: '15px', backgroundColor: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border-soft)' }}>
                <span style={{ color: 'var(--primary-red)', marginRight: '15px', fontSize: '20px' }}>✓</span>
                <strong>National Water Supply & Drainage Board (NWSDB)</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: 'var(--text-dark)', padding: '15px', backgroundColor: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border-soft)' }}>
                <span style={{ color: 'var(--primary-red)', marginRight: '15px', fontSize: '20px' }}>✓</span>
                <strong>Department of Irrigation</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: 'var(--text-dark)', padding: '15px', backgroundColor: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border-soft)' }}>
                <span style={{ color: 'var(--primary-red)', marginRight: '15px', fontSize: '20px' }}>✓</span>
                <strong>Provincial Councils and Local Authorities</strong>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 style={{ color: 'var(--text-dark)', fontSize: '28px', fontFamily: 'var(--font-heading)', marginBottom: '30px' }}>
              Quality & Safety Standards
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              Water infrastructure projects demand stringent quality controls to ensure structural integrity and hygienic conditions.
            </p>
            <div style={{ backgroundColor: 'var(--white)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-soft)', marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--text-dark)', fontSize: '18px', marginBottom: '10px' }}>Material Testing & Concrete Quality</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Rigorous testing of aggregates, cement, and concrete mixes to ensure water-tight structures for reservoirs and treatment facilities.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--white)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-soft)' }}>
              <h4 style={{ color: 'var(--text-dark)', fontSize: '18px', marginBottom: '10px' }}>Environmental Controls</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Strict adherence to environmental regulations during construction, particularly for projects near existing waterways and irrigation tanks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 40px", backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--text-dark)', fontSize: '32px', fontFamily: 'var(--font-heading)', textAlign: 'center', marginBottom: '50px' }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div style={{ padding: '25px', backgroundColor: 'var(--bg-light)', borderRadius: '16px', border: '1px solid var(--border-soft)' }}>
              <h4 style={{ color: 'var(--text-dark)', fontSize: '18px', marginBottom: '10px' }}>Do you provide mechanical and electrical (M&E) installation for treatment plants?</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Our core expertise lies in the extensive civil and structural engineering requirements of treatment plants. We typically collaborate with specialized M&E contractors or act as the main contractor managing M&E subcontractors.
              </p>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'var(--bg-light)', borderRadius: '16px', border: '1px solid var(--border-soft)' }}>
              <h4 style={{ color: 'var(--text-dark)', fontSize: '18px', marginBottom: '10px' }}>What types of irrigation projects do you handle?</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                We construct major irrigation canals, structures such as anicuts and spillways, and undertake rehabilitation of tanks and reservoirs for agricultural zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: isMobile ? "60px 20px" : "100px 40px", backgroundColor: 'var(--bg-light)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--text-dark)', fontSize: '32px', fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>
            Discuss Your Infrastructure Project
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px' }}>
            Contact our engineering team to learn how we can deliver your water supply, treatment, or irrigation project to the highest standards.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link href="/contact" style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'var(--primary-red)',
              color: 'var(--white)',
              textDecoration: 'none',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: '2px solid var(--primary-red)',
              transition: 'all 0.3s ease'
            }}>
              Contact Us
            </Link>
            <Link href="/projects" style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: 'var(--primary-red)',
              textDecoration: 'none',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: '2px solid var(--primary-red)',
              transition: 'all 0.3s ease'
            }}>
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
