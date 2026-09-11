'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DATA } from '@/data/company-data';

export default function AsphaltPage() {
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
        backgroundImage: "url('/images/yakawewa-asphalt-2.jpg')",
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
            <span style={{ color: 'var(--primary-red)' }}>Asphalt</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Asphalt Production & <span style={{ color: 'var(--primary-red)' }}>Road Construction</span> in Sri Lanka
          </h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', opacity: 0.9 }}>
            High-capacity asphalt plants supporting national highway development.
          </p>
        </div>
      </section>

      {/* Asphalt Plant Operations */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
            Asphalt Plant Operations
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            RR Construction operates strategically located asphalt plants to support our extensive road construction projects across Sri Lanka. Our facilities are equipped with modern technology to ensure the continuous production of high-quality hot mix asphalt.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '30px'
          }}>
            {['Yakawewa Plant Area', 'Thudugala Plant Area'].map((loc, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg-light)',
                padding: '40px 30px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)'
              }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-dark)', marginBottom: '15px' }}>{loc}</h3>
                <p style={{ color: 'var(--text-light)' }}>Supporting regional infrastructure development with reliable asphalt production capacities tailored for our internal project requirements.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Mix Asphalt Production */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>
                Hot Mix Asphalt Production
              </h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px', lineHeight: 1.6 }}>
                We produce various types of hot mix asphalt designed to meet specific engineering requirements for different road layers and traffic conditions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Dense Graded Asphalt', 'Open Graded Asphalt', 'Gap Graded Asphalt'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: 'var(--text-dark)' }}>
                    <CheckCircle2 style={{ color: 'var(--primary-red)', marginRight: '10px' }} size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                height: '400px',
                backgroundColor: 'var(--border-soft)',
                borderRadius: '24px',
                backgroundImage: "url('/images/yakawewa-asphalt-2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Asphalt Pavement Works */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '40px', color: 'var(--text-dark)' }}>
            Asphalt Pavement Works
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {[
              { title: 'Laying', desc: 'Precision mechanical laying of asphalt courses to exact grade and slope requirements.' },
              { title: 'Compaction', desc: 'Systematic rolling and compaction to achieve optimal density and structural integrity.' },
              { title: 'Quality Testing', desc: 'On-site verification of temperature, thickness, and compaction levels during application.' }
            ].map((work, idx) => (
              <div key={idx} style={{
                padding: '30px',
                borderRadius: '24px',
                border: '1px solid var(--border-soft)',
                backgroundColor: 'var(--bg-light)'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: 'var(--text-dark)' }}>{work.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{work.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & QA */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>
            <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Plant Specifications</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '15px' }}>Our operations utilize high-capacity drum mix plants engineered for consistent output and thermal efficiency. These facilities are calibrated to maintain precise aggregate-to-bitumen ratios, ensuring the structural stability of the final mix.</p>
            </div>
            <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Quality Assurance</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Marshall stability and flow testing', 'Core testing for field density', 'Continuous temperature monitoring', 'Bitumen extraction testing'].map((qa, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px', color: 'var(--text-light)' }}>
                    <CheckCircle2 style={{ color: 'var(--primary-red)', marginRight: '10px', marginTop: '4px', flexShrink: 0 }} size={16} />
                    {qa}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Road Projects & Inquiry */}
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '50px' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Road Projects Using Our Asphalt</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
                The asphalt produced at our plants is primarily utilized in our own extensive portfolio of infrastructure developments, including national highway expansions like the Central Expressway and rural connectivity improvements under the iRoad program.
              </p>
              <Link href="/services/road-construction" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary-red)', textDecoration: 'none', fontWeight: 600 }}>
                View our Road Construction Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            
            <div style={{ flex: 1, backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-soft)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-dark)' }}>Production Inquiry</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px', fontSize: '0.9rem' }}>Contact us to discuss asphalt production availability or technical specifications for upcoming projects.</p>
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
      <section style={{ padding: isMobile ? '60px 10px' : '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '30px', color: 'var(--text-dark)' }}>
          Build With RR Construction
        </h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/services/road-construction" className="btn btn-primary" style={{ textDecoration: 'none' }}>
            Our Road Projects
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
