"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

const SERVICES = [
  {
    slug: 'road-construction',
    num: '01',
    title: 'Road & Highway Construction',
    subtitle: 'National Highways • Rural Roads • Rehabilitation',
    desc: 'Three decades of road-building experience across every province in Sri Lanka. From high-speed expressway packages to rural connectivity roads under the iRoad Programme, our highway division operates with a self-owned asphalt plant fleet and 500+ dedicated personnel.',
    highlights: ['Self-owned Asphalt Plants', 'iRoad Programme', 'Central Expressway Package'],
    image: '/images/kilinochchi-iroad/kilinochchi-2.jpg',
    cta: '/services/road-construction',
  },
  {
    slug: 'bridge-construction',
    num: '02',
    title: 'Bridge Construction & Rehabilitation',
    subtitle: 'River Crossings • Overpasses • Causeways',
    desc: 'RR Construction builds PSC girder bridges, T-beam spans, box culverts, and complex overpasses engineered to carry extreme traffic loads.',
    highlights: ['PSC Girder & T-Beam', 'Mahanama Bridge', 'Padiyathalawa Bridges'],
    image: '/images/service-bridge.jpeg',
    cta: '/services/bridge-construction',
  },
  {
    slug: 'maritime-construction',
    num: '03',
    title: 'Maritime & Harbour Construction',
    subtitle: 'Fishery Harbours • Breakwaters • Marine Heavy Civil Engineering',
    desc: 'Specialised marine heavy civil engineering across Sri Lanka\'s coastline — fishery harbours, commercial breakwaters, quay walls, jetties, and coastal protection structures from seabed to superstructure.',
    highlights: ['Gandara Fishery Harbour', 'Breakwaters & Rock Armour', 'Marine Pile Installation'],
    image: '/images/wellamankara/IMG_20220124_083315_232.jpg',
    cta: '/services/maritime-construction',
  },
  {
    slug: 'dredging-reclamation',
    num: '04',
    title: 'Dredging & Reclamation',
    subtitle: 'Capital Dredging • Land Reclamation • Coastal Works',
    desc: 'Capital and maintenance dredging for ports, harbours, and navigational channels. Our self-owned marine fleet enables efficient deep-water dredging and coastal land reclamation to ISO 14001 standards.',
    highlights: ['Self-Owned Marine Fleet', 'ISO 14001 Compliance', 'Coastal Reclamation'],
    image: '/images/projects/filadhoo/img2.jpg',
    cta: '/services/dredging-reclamation',
  },
  {
    slug: 'water-infrastructure',
    num: '05',
    title: 'Water Infrastructure',
    subtitle: 'Water Supply • Treatment Plants • Irrigation',
    desc: 'End-to-end water infrastructure construction across Sri Lanka. Treatment plants, transmission mains, distribution networks, and large-scale irrigation schemes.',
    highlights: ['Ampara Water Treatment Plant', 'NWSDB Contractor', 'Large-Scale Irrigation'],
    image: '/images/KALMADU/WhatsApp Image 2026-08-01 at 11.46.27.jpeg',
    cta: '/services/water-infrastructure',
  },
  {
    slug: 'landslide-mitigation',
    num: '06',
    title: 'Landslide Mitigation & Slope Stabilisation',
    subtitle: 'Geotechnical Engineering • Retaining Structures • Rock-fall Protection',
    desc: 'Specialist geotechnical works across Sri Lanka\'s critical hill-country zones — soil nailing, shotcrete, gabion retaining walls, reinforced earth structures, and rock-fall net systems protecting national roads.',
    highlights: ['Nuwara Eliya & Hatton Corridor', 'NBRO-Compliant Design', 'Rock-fall Protection Systems', 'Emergency Slope Repair'],
    image: '/images/service-ldpp.jpeg',
    cta: '/services/landslide-mitigation',
  },
  {
    slug: 'buildings-structures',
    num: '07',
    title: 'Civil Structures',
    subtitle: 'Water Retaining Structures • Water Towers • Steel Fabrication',
    desc: 'Reinforced concrete structures, water retaining structures, elevated water towers, and complex steel fabrication.',
    highlights: ['Complex RC Structures', 'Elevated Water Towers', 'Heavy Steel Fabrication'],
    image: '/images/BADULLA/WhatsApp Image 2026-07-28 at 14.03.18.jpeg',
    cta: '/projects',
  },
  {
    slug: 'railway-civil-works',
    num: '08',
    title: 'Railway Civil Works',
    subtitle: 'Formation • Civil Infrastructure • Track Upgradation',
    desc: 'Civil and formation works in connection with railway line upgradation projects — earthworks, drainage, retaining structures, and ancillary civil works supporting Sri Lanka\'s national rail network modernisation.',
    highlights: ['Railway Formation Works', 'Maho—Anuradhapura Line', 'Earthworks & Drainage', 'Ancillary Civil Structures'],
    image: '/images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.32.07.jpeg',
    cta: '/projects',
  },
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-light)', paddingTop: isMobile ? '85px' : '130px' }}>

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
          height: 210px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.04);
        }
        .svc-card-body {
          padding: 28px 30px 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .highlight-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-dark);
          background: var(--bg-light);
          border-radius: 8px;
          padding: 5px 10px;
          border: 1px solid var(--border-soft);
        }
        .highlight-tag::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-red);
          flex-shrink: 0;
        }
        .stat-card {
          background: var(--white);
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 1px solid var(--border-soft);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.07);
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(10,18,35,0.72), rgba(10,18,35,0.84)), url('/images/page-headers/services-build.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        padding: isMobile ? '40px 20px' : '70px 20px',
        borderRadius: isMobile ? '20px' : '28px',
        margin: isMobile ? '0 12px 36px' : '0 20px 52px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '5px', height: '100%', background: 'var(--primary-red)', borderRadius: '0 4px 4px 0' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px',  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
            ← Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Engineering Capabilities</span>
          </div>

          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Technology & <span style={{ color: "var(--primary-red)" }}>Services</span></h1>

          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: isMobile ? '1rem' : '1.2rem', maxWidth: '640px', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
            From national highways and river bridges to fishery harbours and hill-country landslide works — RR Construction covers the full spectrum of heavy civil engineering infrastructure in Sri Lanka.
          </p>
        </div>
      </section>



      {/* ── ALL SERVICES GRID ── */}
      <section style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Our Services</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.8rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 44px', lineHeight: 1.15 }}>
            All Engineering Disciplines
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            {SERVICES.map((svc, idx) => (
              <Link key={svc.slug} href={svc.cta} className="svc-card" style={{ animationDelay: `${(idx % 3) * 80}ms` }}>
                {/* Image — only if provided */}
                {svc.image && (
                  <div style={{ overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={encodeURI(svc.image)}
                      alt={svc.title}
                      className="svc-card-img"
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        (e.currentTarget as HTMLImageElement).parentElement!.style.display = 'none';
                      }}
                    />
                    {/* Number badge */}
                    <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'var(--primary-red)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>
                      {svc.num}
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="svc-card-body">
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-red)',  letterSpacing: '1.5px', marginBottom: '8px' }}>{svc.subtitle}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.3rem' : '1.45rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>{svc.title}</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.93rem', margin: '0 0 20px', flex: 1 }}>{svc.desc}</p>

                  {/* Arrow CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.88rem', marginTop: 'auto' }}>
                    Learn more
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── RESOURCE PLANNING ── */}
      <section style={{ padding: isMobile ? '60px 12px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
          <div style={{ borderRadius: '28px', overflow: 'hidden', minHeight: isMobile ? '260px' : '460px', position: 'relative', boxShadow: '0 28px 60px rgba(0,0,0,0.14)' }}>
            <img src="/images/machinery-combined.jpg" alt="RR Construction heavy machinery fleet" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
              onError={e => { (e.currentTarget as HTMLImageElement).src = '/images/page-headers/services-build.jpg'; }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,18,35,0.92) 0%, rgba(10,18,35,0.2) 60%, transparent)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: isMobile ? '28px' : '44px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: isMobile ? '1.5rem' : '2.2rem', fontWeight: 900, marginBottom: '6px' }}>Self-Reliant Fleet</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{COMPANY_DATA.machineryFleet} heavy machines — owned & operated</div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Resource Management</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.8rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
              Planned Before<br />Ground is Broken
            </h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '18px' }}>
              Every project begins with a meticulous pre-construction resource plan — construction schedule, organisation chart, plant allocation, and materials schedule — mapped to the master programme before mobilisation.
            </p>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.85, fontSize: '1rem', marginBottom: 0 }}>
              With a self-owned fleet of {COMPANY_DATA.machineryFleet} machines and {COMPANY_DATA.workforce} personnel, we eliminate third-party dependency and deliver on schedule.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
