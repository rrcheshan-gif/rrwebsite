"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

import BackButton from "@/app/components/BackButton";
const SERVICES = [
  {
    slug: 'highway-and-expressway-construction',
    num: '01',
    title: 'Highway and Expressway Construction',
    subtitle: 'National Highways   rural highways and expressways   Rehabilitation',
    desc: 'Three decades of highway and expressway-building experience across every province in Sri Lanka. From high-speed expressway packages to rural connectivity highways and expressways under the iRoad Programme, our highway division operates with a self-owned asphalt plant fleet and 500+ dedicated personnel.',
    highlights: ['Self-owned Asphalt Plants', 'iRoad Programme', 'Central Expressway Package'],
    image: '/images/page-headers/sustainability-road-hq.jpg',
    cta: '/services/highway-and-expressway-construction',
  },
  {
    slug: 'bridge-construction',
    num: '02',
    title: 'Bridge Construction & Rehabilitation',
    subtitle: 'River Crossings   Overpasses   Causeways',
    desc: 'RR Construction builds PSC girder bridges, T-beam spans, box culverts, and complex overpasses engineered to carry extreme traffic loads.',
    highlights: ['PSC Girder & T-Beam', 'Mahanama Bridge', 'Padiyathalawa Bridges'],
    image: '/images/service-bridge-card.jpeg',
    cta: '/services/bridge-construction',
  },
  {
    slug: 'buildings-structures',
    num: '03',
    title: 'Civil Structures',
    subtitle: 'Water Retaining Structures   Water Towers   Steel Fabrication',
    desc: 'Reinforced concrete structures, water retaining structures, elevated water towers, and complex steel fabrication.',
    highlights: ['Complex RC Structures', 'Elevated Water Towers', 'Heavy Steel Fabrication'],
    image: '/images/BADULLA/WhatsApp Image 2026-07-28 at 14.03.18.jpeg',
    cta: '/services/buildings-structures',
  }
];

export default function TransportationCivilPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-light)', paddingTop: '0px' }}>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-card {
          background: var(--white);
          border-radius: 24px;
          border: 1px solid var(--border-soft);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
          text-decoration: none;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 56px rgba(0,0,0,0.1);
          border-color: var(--primary-red);
        }
        .svc-card-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.08);
        }
        .svc-card-body {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="page-header" style={{
        backgroundImage: "url('/images/hambantota-iroad/hambantota-2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        padding: isMobile ? "90px 20px 30px" : "140px 20px 40px",
        borderRadius: isMobile ? '24px' : '32px',
        margin: isMobile ? '0 12px 30px' : '0 20px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        <div style={{ position: 'absolute', left: 0, top: 0, width: '5px', height: '100%', background: 'var(--primary-red)', borderRadius: '0 4px 4px 0' }} />

        <div style={{ maxWidth: "1500px", margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>OUR DISCIPLINES</span>
              <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            </div>

          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", lineHeight: 1.2 }}>
            Transportation & <span style={{ color: "var(--primary-red)" }}>Civil Infrastructure</span>
          </h1>
              <BackButton />
        </div>
      </section>

      {/* TABS SECTION */}
      <section style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: "1500px", margin: '0 auto' }}>
          
          {/* Tabs Navigation */}
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '10px' : '20px', 
            overflowX: 'auto', 
            marginBottom: '40px', 
            paddingBottom: '10px',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
          }}>
            {SERVICES.map((svc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: isMobile ? '12px 20px' : '15px 35px',
                  backgroundColor: activeTab === idx ? 'var(--primary-red)' : 'var(--white)',
                  color: activeTab === idx ? 'white' : 'var(--text-dark)',
                  border: '1px solid',
                  borderColor: activeTab === idx ? 'var(--primary-red)' : 'var(--border-soft)',
                  borderRadius: '50px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: isMobile ? '0.9rem' : '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === idx ? '0 10px 20px rgba(229, 57, 53, 0.2)' : 'none',
                  flexShrink: 0
                }}
                onMouseOver={(e) => { if (activeTab !== idx) e.currentTarget.style.borderColor = 'var(--primary-red)'; }}
                onMouseOut={(e) => { if (activeTab !== idx) e.currentTarget.style.borderColor = 'var(--border-soft)'; }}
              >
                {svc.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ 
            background: 'var(--white)', 
            borderRadius: '24px', 
            overflow: 'hidden',
            border: '1px solid var(--border-soft)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
            animation: 'fadeSlideUp 0.5s ease-out',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <div style={{ flex: '1', position: 'relative' }}>
              <img 
                src={encodeURI(SERVICES[activeTab].image)} 
                alt={SERVICES[activeTab].title}
                style={{ width: '100%', height: '100%', minHeight: isMobile ? '300px' : '500px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--primary-red)', color: 'white', borderRadius: '12px', padding: '8px 16px', fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {SERVICES[activeTab].num}
              </div>
            </div>
            
            <div style={{ flex: '1', padding: isMobile ? '30px 20px' : '60px 50px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-red)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>
                {SERVICES[activeTab].subtitle}
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.8rem' : '2.5rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 25px', lineHeight: 1.2 }}>
                {SERVICES[activeTab].title}
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '1.1rem', margin: '0 0 35px' }}>
                {SERVICES[activeTab].desc}
              </p>
              
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '15px', fontWeight: 700 }}>Key Highlights</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SERVICES[activeTab].highlights.map((hl, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)', fontWeight: 500, fontSize: '1.05rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      {hl}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '10px' }}>
                <Link href={SERVICES[activeTab].cta} className="btn-glass-red" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 35px !important', fontSize: '1rem', fontWeight: 600 }}>
                  Explore Details
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
