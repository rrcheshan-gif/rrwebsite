"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <div className="absolute-back-btn" style={{ position: "absolute", top: "110px", left: "clamp(20px, 4vw, 40px)", zIndex: 99 }}>
          <Link href="/services" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.5)", paddingBottom: "3px", fontWeight: "bold", letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>&larr; Back to Services</Link>
        </div>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '5px', height: '100%', background: 'var(--primary-red)', borderRadius: '0 4px 4px 0' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>OUR DISCIPLINES</span>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
          </div>

          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 6vw, 4.2rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", lineHeight: 1.2 }}>
            Transportation & <span style={{ color: "var(--primary-red)" }}>Civil Infrastructure</span>
          </h1>
        </div>
      </section>

      {/* GRID SECTION */}
      <section style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px', marginTop: '20px' }}>
            {SERVICES.map((svc, idx) => {
              return (
                <Link key={svc.slug} href={svc.cta} className="svc-card" style={{ animationDelay: `${(idx % 3) * 80}ms` }}>
                  <div style={{ overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={encodeURI(svc.image)}
                      alt={svc.title}
                      className="svc-card-img"
                      onError={(e: any) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.style.display = 'none';
                      }}
                    />
                    <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'var(--primary-red)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>
                      {svc.num}
                    </div>
                  </div>

                  <div className="svc-card-body">
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-red)',  letterSpacing: '1.5px', marginBottom: '8px' }}>{svc.subtitle}</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.3rem' : '1.45rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>{svc.title}</h3>
                    <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.93rem', margin: '0 0 20px', flex: 1 }}>{svc.desc}</p>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', paddingTop: '15px' }}>
                      <div className="btn-glass-red" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 30px !important' }}>
                        More Details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
