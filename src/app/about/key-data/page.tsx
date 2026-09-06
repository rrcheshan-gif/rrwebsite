"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

export default function KeyDataPage() {
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
          <Link href="/about" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>About Us</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--text-dark)', fontWeight: 500 }}>Key Data</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: 'var(--font-heading)', color: '#1a202c', fontSize: isMobile ? '2.5rem' : '3.5rem', marginBottom: '40px', fontWeight: 800 }}>
          Key Data
        </h1>

        {/* Image */}
        <div style={{ width: '100%', height: isMobile ? '250px' : '450px', marginBottom: '30px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <img 
            src="/images/page-headers/history-hero.jpg" 
            alt="RR Construction Heavy Machinery" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            onError={(e) => { e.currentTarget.src = '/images/machinery/plant-6.jpg' }}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Name
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                RR Construction (Pvt) Ltd
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Registered / Established
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1995
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Head Office
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Registration No
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                PV 11346
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Managing Director
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                Mr. Ranjith Senadeera S. D.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Workforce
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1,400+ Employees
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Machinery & Equipment
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1,000+ Self-Owned Heavy Machinery Units
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                ISO Certificates
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Auditor
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                P. Wijayawardana & Co.<br />
                No. 22/2, Pepiliyana Road, Gansabha Junction, Gangodawila, Nugegoda.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Bankers
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                Hatton National Bank, DFCC Bank, Sampath Bank, National Development Bank, Commercial Bank, Peoples Bank & Nations Trust Bank.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Completed Projects
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                100+ Major National Projects
              </p>
            </div>
</div>
        </div>

      </div>
    </main>
  );
}