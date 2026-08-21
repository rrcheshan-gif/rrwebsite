'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function MSandPage() {
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
        backgroundImage: "url('/images/thudugala-5.jpg')",
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
            <span style={{ color: 'var(--primary-red)' }}>M-Sand</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            M-Sand & <span style={{ color: 'var(--primary-red)' }}>Manufactured Sand</span> in Sri Lanka
          </h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', opacity: 0.9 }}>
            High-quality manufactured sand production from advanced VSI crushers.
          </p>
        </div>
      </section>

      {/* What is M-Sand */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
                What is M-Sand?
              </h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '15px', lineHeight: 1.6 }}>
                Manufactured Sand (M-Sand) is a substitute for river sand for concrete construction. It is produced from hard granite stone by crushing using modern Vertical Shaft Impact (VSI) technology.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px', lineHeight: 1.6 }}>
                Unlike river sand, which is depleted through extraction, M-Sand offers a consistent, engineered gradation with cubical particle shapes that enhance the strength and workability of concrete mixes.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                height: '300px',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                 <span style={{ color: 'var(--text-light)' }}>VSI Crusher Process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production & Locations */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
            M-Sand Production Plants
          </h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 40px' }}>
            Our M-Sand is available from our specialized quarry plants equipped with washing and screening facilities to ensure a silt-free, precisely graded final product.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {['Thudugala', 'Veerapuram', 'Omanthai', 'Yakawewa'].map((loc, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--white)',
                padding: '20px 40px',
                borderRadius: '100px',
                border: '1px solid var(--primary-red)',
                color: 'var(--text-dark)',
                fontWeight: 600
              }}>
                {loc} Plant
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs & Advantages */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Technical Specifications</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Zone II grading for general concrete work',
                  'Controlled fineness modulus',
                  'Optimized void ratio for lower cement requirement',
                  'Compliant with Sri Lankan construction specifications'
                ].map((spec, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px', color: 'var(--text-light)' }}>
                    <CheckCircle2 style={{ color: 'var(--primary-red)', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} size={20} />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Advantages of M-Sand</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Consistent quality throughout the year',
                  'No organic impurities or silt',
                  'Eco-friendly alternative to river sand extraction',
                  'Better compressive strength for concrete'
                ].map((adv, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px', color: 'var(--text-light)' }}>
                    <CheckCircle2 style={{ color: 'var(--primary-red)', marginRight: '10px', marginTop: '2px', flexShrink: 0 }} size={20} />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Inquiry */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '50px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Primary Applications</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'Concrete Production', desc: 'Ideal for ready-mix concrete and precast elements.' },
                  { title: 'Plastering', desc: 'Finer grades available for smooth wall finishes.' },
                  { title: 'Road Base', desc: 'Used in sub-base layers for structural integrity.' }
                ].map((app, idx) => (
                  <div key={idx} style={{ backgroundColor: 'var(--white)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-soft)' }}>
                    <h4 style={{ color: 'var(--text-dark)', marginBottom: '5px' }}>{app.title}</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ flex: 1, backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Production Inquiry</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px', fontSize: '0.9rem' }}>Inquire about M-Sand availability from our production plants.</p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none' }} />
                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none' }} />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none' }} />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} required rows={4} style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid var(--border-soft)', outline: 'none', resize: 'vertical' }} />
                <button type="submit" className="btn btn-primary" style={{ border: 'none', cursor: 'pointer', padding: '15px', borderRadius: '8px', fontWeight: 600 }}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', textAlign: 'center', backgroundColor: 'var(--white)' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '30px', color: 'var(--text-dark)' }}>
          Explore Our Material Division
        </h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/facilities" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Quarry Plants
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

