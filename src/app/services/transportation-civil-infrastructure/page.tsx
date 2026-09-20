"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

import BackButton from "@/app/components/BackButton";
import RoadConstructionPage from '../highway-and-expressway-construction/page';
import BridgeConstructionPage from '../bridge-construction/page';
import BuildingsStructuresPage from '../buildings-structures/page';
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
                  padding: '10px 20px 15px',
                  background: 'transparent',
                  color: activeTab === idx ? 'var(--primary-red)' : 'var(--text-light)',
                  border: 'none',
                  borderBottom: activeTab === idx ? '3px solid var(--primary-red)' : '3px solid transparent',
                  borderRadius: '0',
                  fontFamily: 'var(--font-heading)',
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  fontWeight: activeTab === idx ? 800 : 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  marginBottom: '-1px'
                }}
                onMouseOver={(e) => { if (activeTab !== idx) e.currentTarget.style.color = 'var(--text-dark)'; }}
                onMouseOut={(e) => { if (activeTab !== idx) e.currentTarget.style.color = 'var(--text-light)'; }}
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
            animation: 'fadeSlideUp 0.5s ease-out'
          }}>
            {activeTab === 0 && <RoadConstructionPage hideHero={true} />}
            {activeTab === 1 && <BridgeConstructionPage hideHero={true} />}
            {activeTab === 2 && <BuildingsStructuresPage hideHero={true} />}
          </div>

        </div>
      </section>
    </div>
  );
}
