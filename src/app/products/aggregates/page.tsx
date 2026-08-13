'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AggregatesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', message: '' });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will get back to you soon.');
    setFormData({ name: '', company: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-light)' }}>
      {/* Hero Section */}
      <section className="page-header" style={{
        position: 'relative',
        height: isMobile ? '40vh' : '60vh',
        minHeight: '300px',
        backgroundImage: "url('/images/page-headers/quarry-hero-new.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--white)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 20px', maxWidth: '800px' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/" style={{ color: 'var(--white)', textDecoration: 'none', opacity: 0.8 }}>Home</Link>
            <span style={{ margin: '0 10px', opacity: 0.8 }}>/</span>
            <span style={{ color: 'var(--primary-red)' }}>Aggregates</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Construction Aggregates & <span style={{ color: 'var(--primary-red)' }}>Quarry Products</span> in Sri Lanka
          </h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', opacity: 0.9 }}>
            High-grade crushed stone materials for robust civil infrastructure.
          </p>
        </div>
      </section>

      {/* Overview & Products */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
              Aggregate Production Overview
            </h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
              RR Construction operates four dedicated quarry plants across Sri Lanka, equipped with multi-stage crushing circuits. We produce comprehensive ranges of aggregates essential for road bases, concrete structures, and general civil engineering works.
            </p>
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '30px', color: 'var(--text-dark)', textAlign: 'center' }}>
            Crushed Stone Types
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
            {['6mm (Dust/Chips)', '12mm (Half inch)', '19mm (3/4 inch)', '37.5mm', '63mm (Road Base)', 'ABC / Sub-base materials'].map((type, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg-light)',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid var(--border-soft)',
                textAlign: 'center',
                fontWeight: 500,
                color: 'var(--text-dark)'
              }}>
                {type}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/products/m-sand" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', backgroundColor: 'var(--primary-red)', color: 'var(--white)', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
              Learn about our M-Sand Production <ArrowRight size={18} style={{ marginLeft: '10px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations & Standards */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>
            <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Quarry Locations</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Our extraction and crushing facilities are strategically distributed to ensure reliable supply lines to key development regions.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Thudugala Quarry', 'Veerapuram Quarry', 'Omanthai Quarry', 'Yakawewa Quarry'].map((loc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: 'var(--text-dark)', fontWeight: 500 }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-red)', borderRadius: '50%', marginRight: '15px' }} />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Quality Standards</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Our aggregate materials adhere to rigorous quality controls, guaranteeing structural performance.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Compliance with national engineering specifications',
                  'Regular impact value and crushing strength tests',
                  'Controlled flakiness and elongation indices',
                  'Consistent grading analysis'
                ].map((std, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px', color: 'var(--text-light)' }}>
                    <CheckCircle2 style={{ color: 'var(--primary-red)', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} size={20} />
                    {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Inquiry */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '50px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '30px', color: 'var(--text-dark)' }}>Key Applications</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                {[
                  { title: 'Road Construction', desc: 'Sub-base, base course, and aggregate base course (ABC) materials.' },
                  { title: 'Concrete Production', desc: 'Coarse aggregates for structural concrete mixes.' },
                  { title: 'Drainage & Earthworks', desc: 'Permeable layers, rip-rap, and structural fill materials.' }
                ].map((app, idx) => (
                  <div key={idx} style={{ padding: '20px', borderLeft: '4px solid var(--primary-red)', backgroundColor: 'var(--bg-light)', borderRadius: '0 12px 12px 0' }}>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '5px', fontSize: '1.1rem' }}>{app.title}</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ flex: 1, backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Material Inquiry</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px', fontSize: '0.9rem' }}>Contact us for details on aggregate availability and specifications.</p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none' }} />
                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none' }} />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none' }} />
                <textarea name="message" placeholder="Material Requirements" value={formData.message} onChange={handleInputChange} required rows={4} style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none', resize: 'vertical' }} />
                <button type="submit" className="btn btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '15px', borderRadius: '8px', fontWeight: 600 }}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '30px', color: 'var(--text-dark)' }}>
          Discover Our Facilities
        </h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/quarries-aggregates" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Full Plant Details
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
