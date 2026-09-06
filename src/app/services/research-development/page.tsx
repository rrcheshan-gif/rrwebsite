"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

export default function ResearchAndDevelopmentPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#f9fafb', minHeight: '100vh', padding: isMobile ? '100px 20px 60px' : '160px 40px 100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '24px' }}>
          <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link href="/services" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Technology & Services</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>Research & Development</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#1a202c', fontSize: isMobile ? '2.5rem' : '3.5rem', marginBottom: '40px', fontWeight: 800 }}>
          Research & Development
        </h1>

        {/* Image */}
        <div style={{ width: '100%', height: isMobile ? '250px' : '400px', marginBottom: '30px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <img 
            src="/images/research-development.jpg" 
            alt="Research and Development Blueprint" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Content Box */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '24px', 
          padding: isMobile ? '30px 20px' : '50px 60px', 
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
        }}>
          <p style={{ color: '#4a5568', fontSize: isMobile ? '1.05rem' : '1.15rem', lineHeight: 1.8, margin: 0 }}>
            Research & Development (R&D) plays a key role at RR Construction. The use of new technologies and rigorous R&D has helped the organization achieve greater efficiency in operations, become more productive, and overcome complex technical issues in the heavy civil engineering sphere. RR Construction continues its internal R&D focused on Lean Production, Performance Management, and advanced construction methodologies. Furthermore, upon the successful integration of Enterprise Resource Planning (ERP) systems for our project management needs, RR Construction is actively moving towards implementing a fully-fledged, AI-assisted integrated ERP system to optimize resource allocation across all national-scale projects.
          </p>
        </div>

      </div>
    </main>
  );
}