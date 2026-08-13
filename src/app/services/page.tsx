"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

const CATEGORIES = [
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'marine', label: 'Marine & Coastal' },
  { id: 'water', label: 'Water & Irrigation' },
  { id: 'geo', label: 'Geotechnical' },
  { id: 'other', label: 'Other Disciplines' },
];

const SERVICES = [
  {
    category: 'infrastructure',
    slug: 'road-construction',
    num: '01',
    title: 'Road & Highway Construction',
    subtitle: 'National Highways · Rural Roads · Rehabilitation',
    desc: 'Three decades of road-building experience across every province in Sri Lanka. From high-speed expressway packages to rural connectivity roads under the iRoad Programme, our highway division operates with a self-owned asphalt plant fleet and 500+ dedicated personnel.',
    highlights: ['National Highway Grade CS-2', 'Self-owned Asphalt Plants', 'iRoad Programme Completed', 'Central Expressway Package (Subcontractor)'],
    image: '/images/home/slider/polished/road.jpg',
    cta: '/services/road-construction',
    accentImage: '/images/page-headers/services-build.jpg',
  },
  {
    category: 'infrastructure',
    slug: 'bridge-construction',
    num: '02',
    title: 'Bridge Construction & Rehabilitation',
    subtitle: 'River Crossings · Overpasses · Causeways',
    desc: 'Holding CIDA Grade CS-1 — the highest bridge construction grading — RR Construction designs and builds PSC girder bridges, T-beam spans, box culverts, and complex overpasses engineered to carry extreme traffic loads across Sri Lanka\'s rivers and gorges.',
    highlights: ['CIDA Bridge Grade CS-1 (Highest)', 'PSC Girder & T-Beam Bridges', 'Mahanama Bridge', 'Padiyathalawa & Hirana Bridges'],
    image: '/images/home/slider/polished/bridge.jpg',
    cta: '/services/bridge-construction',
    accentImage: null,
  },
  {
    category: 'marine',
    slug: 'maritime-construction',
    num: '03',
    title: 'Maritime & Harbour Construction',
    subtitle: 'Fishery Harbours · Breakwaters · Marine Civil Engineering',
    desc: 'Specialised marine civil engineering across Sri Lanka\'s coastline. We construct fishery harbours, commercial breakwaters, quay walls, jetties, and coastal protection structures — from seabed preparation to above-water superstructures.',
    highlights: ['CIDA Maritime Grade CS-2', 'Gandara Fishery Harbour', 'Breakwaters & Rock Armour', 'Marine Pile Installation'],
    image: '/images/home/slider/polished/maritime.jpg',
    cta: '/services/maritime-construction',
    accentImage: null,
  },
  {
    category: 'marine',
    slug: 'dredging-reclamation',
    num: '04',
    title: 'Dredging & Reclamation',
    subtitle: 'Capital Dredging · Land Reclamation · Coastal Works',
    desc: 'Capital and maintenance dredging for ports, harbours, and navigational channels. Our self-owned marine fleet enables efficient deep-water dredging and coastal land reclamation, executed to ISO 14001 environmental standards.',
    highlights: ['CIDA Dredging Grade C-2', 'Self-Owned Marine Fleet', 'ISO 14001 Environmental Compliance', 'Coastal Reclamation & Fill'],
    image: '/images/home/slider/polished/coastal.jpg',
    cta: '/services/dredging-reclamation',
    accentImage: null,
  },
  {
    category: 'water',
    slug: 'water-infrastructure',
    num: '05',
    title: 'Water Infrastructure',
    subtitle: 'Water Supply · Treatment Plants · Irrigation',
    desc: 'End-to-end water infrastructure construction across Sri Lanka. Holding CIDA\'s highest Water Supply & Sewerage grade (C-7) and the highest Irrigation grade (C-1), we build treatment plants, transmission mains, distribution networks, and large-scale irrigation schemes.',
    highlights: ['CIDA Water Grade C-7 (Highest)', 'CIDA Irrigation Grade C-1 (Highest)', 'Ampara Water Treatment Plant', 'NWSDB Registered Contractor'],
    image: '/images/omanthai-plant-main.jpg',
    cta: '/services/water-infrastructure',
    accentImage: null,
  },
  {
    category: 'geo',
    slug: 'landslide-mitigation',
    num: '06',
    title: 'Landslide Mitigation & Slope Stabilisation',
    subtitle: 'Geotechnical Engineering · Retaining Structures · Rock-fall Protection',
    desc: 'Specialist geotechnical works in Sri Lanka\'s critical hill-country zones. We deploy soil nailing, shotcrete, gabion walls, reinforced earth retaining structures, and rock-fall net systems to protect national roads in Nuwara Eliya, Hatton, and the Central highlands.',
    highlights: ['Nuwara Eliya & Hatton Corridor', 'NBRO-Compliant Design', 'Rock-fall Protection Systems', 'Emergency Slope Repair'],
    image: '/images/home/slider/polished/hatton.jpg',
    cta: '/services/landslide-mitigation',
    accentImage: null,
  },
  {
    category: 'other',
    slug: 'buildings-structures',
    num: '07',
    title: 'Buildings & Structures',
    subtitle: 'Multi-Storey Buildings · Water Towers · Steel Fabrication',
    desc: 'Reinforced concrete multi-storey buildings, water retaining structures, elevated water towers, and complex steel fabrication. CIDA Building Grade C-2 qualified for major structural projects.',
    highlights: ['CIDA Building Grade C-2', 'Multi-storey RC Buildings', 'Elevated Water Towers', 'Heavy Steel Fabrication'],
    image: '/images/page-headers/services-build.jpg',
    cta: '/services',
    accentImage: null,
  },
  {
    category: 'other',
    slug: 'railway-civil-works',
    num: '08',
    title: 'Railway Civil Works',
    subtitle: 'Formation · Civil Infrastructure · Track Upgradation',
    desc: 'Civil and formation works in connection with railway line upgradation projects. Earthworks, drainage, retaining structures, and ancillary civil works supporting Sri Lanka\'s rail network modernisation.',
    highlights: ['Railway Formation Works', 'Maho–Anuradhapura Line', 'Earthworks & Drainage', 'Ancillary Civil Structures'],
    image: '/images/page-headers/services-build.jpg',
    cta: '/services',
    accentImage: null,
  },
];

const STATS = [
  { value: COMPANY_DATA.yearsOfExcellence, label: 'Years of Experience' },
  { value: COMPANY_DATA.completedProjects, label: 'Projects Completed' },
  { value: COMPANY_DATA.workforce, label: 'Strong Workforce' },
  { value: COMPANY_DATA.machineryFleet, label: 'Heavy Machines' },
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('infrastructure');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setAnimKey(k => k + 1);
  };

  const filtered = SERVICES.filter(s => s.category === activeCategory);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-light)', paddingTop: isMobile ? '85px' : '130px' }}>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-fade { animation: fadeSlideUp 0.45s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .svc-fade:nth-child(1){ animation-delay:0ms; }
        .svc-fade:nth-child(2){ animation-delay:80ms; }
        .svc-fade:nth-child(3){ animation-delay:160ms; }
        .svc-fade:nth-child(4){ animation-delay:240ms; }

        .cat-pill {
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          border: 1.5px solid var(--border-soft);
          background: var(--white);
          color: var(--text-light);
        }
        .cat-pill.active {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
          box-shadow: 0 6px 20px rgba(229,57,53,0.3);
        }
        .cat-pill:hover:not(.active) {
          border-color: var(--primary-red);
          color: var(--primary-red);
        }

        .svc-card {
          background: var(--white);
          border-radius: 24px;
          border: 1px solid var(--border-soft);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.09);
        }
        .svc-card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }
        .svc-card-img-placeholder {
          width: 100%;
          height: 220px;
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .svc-card-body {
          padding: 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .svc-big-card {
          background: var(--white);
          border-radius: 28px;
          border: 1px solid var(--border-soft);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }
        .svc-big-card:hover { box-shadow: 0 28px 60px rgba(0,0,0,0.1); }

        @media(max-width: 768px){
          .svc-big-card { grid-template-columns: 1fr !important; }
          .svc-big-card-img { display: none !important; }
          .cat-pills-wrap { overflow-x: auto; padding-bottom: 8px; }
        }

        .highlight-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dark);
          background: var(--bg-light);
          border-radius: 8px;
          padding: 6px 12px;
          border: 1px solid var(--border-soft);
        }
        .highlight-tag::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary-red);
          flex-shrink: 0;
        }

        .stat-card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          border: 1px solid var(--border-soft);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.07);
        }

        .discipline-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .discipline-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--white);
          border: 1px solid var(--border-soft);
          border-radius: 50px;
          padding: 8px 18px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-dark);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .discipline-chip:hover {
          border-color: var(--primary-red);
          color: var(--primary-red);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(229,57,53,0.12);
        }
        .discipline-chip span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-red);
          display: block;
          flex-shrink: 0;
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(10,18,35,0.72), rgba(10,18,35,0.82)), url('/images/page-headers/services-build.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        padding: isMobile ? '70px 20px 60px' : '110px 20px 90px',
        borderRadius: isMobile ? '20px' : '28px',
        margin: isMobile ? '0 12px 36px' : '0 20px 52px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Red accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, width: '5px', height: '100%', background: 'var(--primary-red)', borderRadius: '0 4px 4px 0' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
            ← Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>Engineering Capabilities</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: isMobile ? '2.8rem' : '4.8rem', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.05, letterSpacing: '-1px' }}>
            What We <span style={{ color: 'var(--primary-red)' }}>Build</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: isMobile ? '1rem' : '1.2rem', maxWidth: '640px', lineHeight: 1.75, margin: '0 0 36px', fontWeight: 400 }}>
            From national highways and river bridges to fishery harbours and hill-country landslide works — RR Construction covers the full spectrum of civil engineering infrastructure in Sri Lanka.
          </p>

          {/* Discipline quick-links */}
          <div className="discipline-strip">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => {
                setActiveCategory(c.id);
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} className="discipline-chip" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', fontFamily: 'inherit' }}>
                <span /> {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ padding: isMobile ? '0 12px 40px' : '0 20px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
          {STATS.map((s, i) => (
            <div key={i} className="stat-card">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2.2rem' : '3rem', fontWeight: 900, color: 'var(--primary-red)', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY FILTER + SERVICES ── */}
      <section ref={sectionRef} style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>Our Expertise</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '3rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 36px', lineHeight: 1.15 }}>
            Services by Discipline
          </h2>

          {/* Category pills */}
          <div className="cat-pills-wrap" style={{ display: 'flex', gap: '10px', marginBottom: '48px', flexWrap: isMobile ? 'nowrap' : 'wrap' }}>
            {CATEGORIES.map(c => (
              <button key={c.id} className={`cat-pill${activeCategory === c.id ? ' active' : ''}`} onClick={() => handleCategoryChange(c.id)} style={{ fontFamily: 'inherit' }}>
                {c.label}
              </button>
            ))}
          </div>

          {/* Service cards */}
          <div key={animKey} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '24px' }}>
            {filtered.map((svc, idx) => (
              <Link key={svc.slug + idx} href={svc.cta} style={{ textDecoration: 'none' }} className="svc-fade">
                <div className="svc-card" style={{ height: '100%' }}>
                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={svc.image} alt={svc.title} className="svc-card-img" style={{ transition: 'transform 0.5s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      onError={e => { e.currentTarget.style.display = 'none'; }} />
                    {/* Number badge */}
                    <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--primary-red)', color: 'white', borderRadius: '10px', padding: '4px 12px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1px' }}>
                      {svc.num}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="svc-card-body">
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>{svc.subtitle}</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.4rem' : '1.6rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 14px', lineHeight: 1.2 }}>{svc.title}</h3>
                    <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.97rem', margin: '0 0 24px', flex: 1 }}>{svc.desc}</p>

                    {/* Highlights */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {svc.highlights.map((h, i) => (
                        <span key={i} className="highlight-tag">{h}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.92rem' }}>
                      Explore this service
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL DISCIPLINES QUICK LIST ── */}
      <section style={{ padding: isMobile ? '40px 12px' : '80px 20px', background: 'var(--white)', borderTop: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '40px' : '80px', alignItems: 'flex-start' }}>

            <div style={{ flex: '0 0 auto', maxWidth: isMobile ? '100%' : '360px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
                <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>CIDA Registered</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.6rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.15 }}>
                All Registered Disciplines
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '1rem', margin: '0 0 30px' }}>
                RR Construction holds CIDA registration No. {COMPANY_DATA.cidaRegistration} across {COMPANY_DATA.cidaGrades.length} construction disciplines — including the highest available grades in bridges and irrigation.
              </p>
              <Link href="/about/cida-registration" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-red)', color: 'white', padding: '13px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', transition: 'all 0.3s ease', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(229,57,53,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(229,57,53,0.3)'; }}>
                View Full CIDA Profile →
              </Link>
            </div>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '12px' }}>
              {COMPANY_DATA.cidaGrades.map((g, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-light)', borderRadius: '14px', padding: '16px 20px', border: '1px solid var(--border-soft)' }}>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-dark)' }}>{g.field}</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--primary-red)', marginLeft: '12px', flexShrink: 0 }}>{g.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCE PLANNING ── */}
      <section style={{ padding: isMobile ? '60px 12px' : '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
            {/* Image side */}
            <div style={{ borderRadius: '28px', overflow: 'hidden', minHeight: isMobile ? '280px' : '480px', position: 'relative', boxShadow: '0 28px 60px rgba(0,0,0,0.14)' }}>
              <img src="/images/machinery-combined.jpg" alt="RR Construction heavy machinery fleet" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0 }}
                onError={e => { e.currentTarget.style.display = 'none'; }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,18,35,0.9) 0%, rgba(10,18,35,0.2) 60%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: isMobile ? '28px' : '44px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: isMobile ? '1.6rem' : '2.4rem', fontWeight: 900, marginBottom: '8px' }}>Self-Reliant Fleet</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>{COMPANY_DATA.machineryFleet} heavy machines — owned & operated</div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
                <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>Resource Management</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.8rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
                Planned Before<br />Ground is Broken
              </h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '20px' }}>
                Every project at RR Construction begins with a meticulous pre-construction resource plan — construction schedule, organisation chart, plant allocation, and materials schedule — mapped to the master programme before mobilisation.
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: '36px' }}>
                With a self-owned fleet of {COMPANY_DATA.machineryFleet} machines and {COMPANY_DATA.workforce} personnel, we eliminate third-party dependency and deliver on schedule — on every site, across every province.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-red)', color: 'white', padding: '13px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}>
                  View Our Projects →
                </Link>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid var(--border-soft)', color: 'var(--text-dark)', padding: '13px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', background: 'transparent' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ backgroundImage: "linear-gradient(135deg, rgba(10,18,35,0.92), rgba(30,10,10,0.95)), url('/images/home/slider/polished/bridge.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px', padding: isMobile ? '50px 28px' : '80px 80px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, width: '5px', height: '100%', background: 'var(--primary-red)' }} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: isMobile ? '1.8rem' : '2.6rem', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.15 }}>
                Ready to Start Your Project?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', margin: 0, maxWidth: '480px' }}>
                Discuss your infrastructure requirement with our engineering team. We handle projects of every scale across Sri Lanka.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '14px', flexShrink: 0 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--primary-red)', color: 'white', padding: '15px 36px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', boxShadow: '0 8px 24px rgba(229,57,53,0.4)', whiteSpace: 'nowrap' }}>
                Get in Touch →
              </Link>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '2px solid rgba(255,255,255,0.3)', color: 'white', padding: '15px 36px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', whiteSpace: 'nowrap' }}>
                Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
