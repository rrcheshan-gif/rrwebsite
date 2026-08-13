"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COMPANY_DATA } from '@/data/company-data';

const SERVICES = [
  {
    slug: 'road-construction',
    num: '01',
    title: 'Road & Highway Construction',
    subtitle: 'National Highways · Rural Roads · Rehabilitation',
    desc: 'Three decades of road-building experience across every province in Sri Lanka. From high-speed expressway packages to rural connectivity roads under the iRoad Programme, our highway division operates with a self-owned asphalt plant fleet and 500+ dedicated personnel.',
    highlights: ['Highway Grade CS-2', 'Self-owned Asphalt Plants', 'iRoad Programme', 'Central Expressway Package'],
    image: '/images/home/slider/polished/road.jpg',
    cta: '/services/road-construction',
  },
  {
    slug: 'bridge-construction',
    num: '02',
    title: 'Bridge Construction & Rehabilitation',
    subtitle: 'River Crossings · Overpasses · Causeways',
    desc: 'Holding CIDA Grade CS-1 — the highest bridge construction grading — RR Construction builds PSC girder bridges, T-beam spans, box culverts, and complex overpasses engineered to carry extreme traffic loads.',
    highlights: ['Bridge Grade CS-1 (Highest)', 'PSC Girder & T-Beam', 'Mahanama Bridge', 'Padiyathalawa Bridges'],
    image: '/images/home/slider/polished/bridge.jpg',
    cta: '/services/bridge-construction',
  },
  {
    slug: 'maritime-construction',
    num: '03',
    title: 'Maritime & Harbour Construction',
    subtitle: 'Fishery Harbours · Breakwaters · Marine Civil Engineering',
    desc: 'Specialised marine civil engineering across Sri Lanka\'s coastline — fishery harbours, commercial breakwaters, quay walls, jetties, and coastal protection structures from seabed to superstructure.',
    highlights: ['Maritime Grade CS-2', 'Gandara Fishery Harbour', 'Breakwaters & Rock Armour', 'Marine Pile Installation'],
    image: '/images/home/slider/polished/maritime.jpg',
    cta: '/services/maritime-construction',
  },
  {
    slug: 'dredging-reclamation',
    num: '04',
    title: 'Dredging & Reclamation',
    subtitle: 'Capital Dredging · Land Reclamation · Coastal Works',
    desc: 'Capital and maintenance dredging for ports, harbours, and navigational channels. Our self-owned marine fleet enables efficient deep-water dredging and coastal land reclamation to ISO 14001 standards.',
    highlights: ['Dredging Grade C-2', 'Self-Owned Marine Fleet', 'ISO 14001 Compliance', 'Coastal Reclamation'],
    image: '/images/home/slider/polished/coastal.jpg',
    cta: '/services/dredging-reclamation',
  },
  {
    slug: 'water-infrastructure',
    num: '05',
    title: 'Water Infrastructure',
    subtitle: 'Water Supply · Treatment Plants · Irrigation',
    desc: 'End-to-end water infrastructure construction across Sri Lanka. Holding CIDA\'s highest Water Supply grade (C-7) and highest Irrigation grade (C-1) — treatment plants, transmission mains, distribution networks, and large-scale irrigation schemes.',
    highlights: ['Water Grade C-7 (Highest)', 'Irrigation Grade C-1 (Highest)', 'Ampara Water Treatment Plant', 'NWSDB Contractor'],
    image: '/images/omanthai-plant-main.jpg',
    cta: '/services/water-infrastructure',
  },
  {
    slug: 'landslide-mitigation',
    num: '06',
    title: 'Landslide Mitigation & Slope Stabilisation',
    subtitle: 'Geotechnical Engineering · Retaining Structures · Rock-fall Protection',
    desc: 'Specialist geotechnical works across Sri Lanka\'s critical hill-country zones — soil nailing, shotcrete, gabion retaining walls, reinforced earth structures, and rock-fall net systems protecting national roads.',
    highlights: ['Nuwara Eliya & Hatton Corridor', 'NBRO-Compliant Design', 'Rock-fall Protection Systems', 'Emergency Slope Repair'],
    image: '/images/home/slider/polished/hatton.jpg',
    cta: '/services/landslide-mitigation',
  },
  {
    slug: 'buildings-structures',
    num: '07',
    title: 'Buildings & Structures',
    subtitle: 'Multi-Storey Buildings · Water Towers · Steel Fabrication',
    desc: 'Reinforced concrete multi-storey buildings, water retaining structures, elevated water towers, and complex steel fabrication. CIDA Building Grade C-2 qualified for major structural projects across Sri Lanka.',
    highlights: ['Building Grade C-2', 'Multi-storey RC Buildings', 'Elevated Water Towers', 'Heavy Steel Fabrication'],
    image: '/images/page-headers/services-build.jpg',
    cta: '/services',
  },
  {
    slug: 'railway-civil-works',
    num: '08',
    title: 'Railway Civil Works',
    subtitle: 'Formation · Civil Infrastructure · Track Upgradation',
    desc: 'Civil and formation works in connection with railway line upgradation projects — earthworks, drainage, retaining structures, and ancillary civil works supporting Sri Lanka\'s national rail network modernisation.',
    highlights: ['Railway Formation Works', 'Maho–Anuradhapura Line', 'Earthworks & Drainage', 'Ancillary Civil Structures'],
    image: '/images/page-headers/services-build.jpg',
    cta: '/services',
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
        padding: isMobile ? '70px 20px 60px' : '110px 20px 90px',
        borderRadius: isMobile ? '20px' : '28px',
        margin: isMobile ? '0 12px 36px' : '0 20px 52px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '5px', height: '100%', background: 'var(--primary-red)', borderRadius: '0 4px 4px 0' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
            ← Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>Engineering Capabilities</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: isMobile ? '2.8rem' : '4.8rem', fontWeight: 900, margin: '0 0 20px', lineHeight: 1.05, letterSpacing: '-1px' }}>
            Technology & <span style={{ color: 'var(--primary-red)' }}>Services</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: isMobile ? '1rem' : '1.2rem', maxWidth: '640px', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
            From national highways and river bridges to fishery harbours and hill-country landslide works — RR Construction covers the full spectrum of civil engineering infrastructure in Sri Lanka.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: isMobile ? '0 12px 40px' : '0 20px 56px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '16px' }}>
          {STATS.map((s, i) => (
            <div key={i} className="stat-card">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2.2rem' : '3rem', fontWeight: 900, color: 'var(--primary-red)', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALL SERVICES GRID ── */}
      <section style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>Our Services</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.8rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 44px', lineHeight: 1.15 }}>
            All Engineering Disciplines
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
            {SERVICES.map((svc, idx) => (
              <Link key={svc.slug} href={svc.cta} className="svc-card" style={{ animationDelay: `${(idx % 3) * 80}ms` }}>
                {/* Image */}
                <div style={{ overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="svc-card-img"
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).src = '/images/page-headers/services-build.jpg';
                    }}
                  />
                  {/* Number badge */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', background: 'var(--primary-red)', color: 'white', borderRadius: '8px', padding: '3px 10px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>
                    {svc.num}
                  </div>
                </div>

                {/* Body */}
                <div className="svc-card-body">
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>{svc.subtitle}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '1.3rem' : '1.45rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.2 }}>{svc.title}</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.93rem', margin: '0 0 20px', flex: 1 }}>{svc.desc}</p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '22px' }}>
                    {svc.highlights.map((h, i) => (
                      <span key={i} className="highlight-tag">{h}</span>
                    ))}
                  </div>

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

      {/* ── CIDA GRADES ── */}
      <section style={{ padding: isMobile ? '50px 12px' : '80px 20px', background: 'var(--white)', borderTop: '1px solid var(--border-soft)', borderBottom: '1px solid var(--border-soft)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'start' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>CIDA Registered</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.6rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.15 }}>
              All Registered Disciplines
            </h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '1rem', margin: '0 0 28px' }}>
              Registration No. <strong>{COMPANY_DATA.cidaRegistration}</strong> — covering {COMPANY_DATA.cidaGrades.length} construction disciplines with the highest available grades in bridges and irrigation.
            </p>
            <Link href="/about/cida-registration" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-red)', color: 'white', padding: '13px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}>
              View Full CIDA Profile →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
            {COMPANY_DATA.cidaGrades.map((g, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-light)', borderRadius: '12px', padding: '14px 18px', border: '1px solid var(--border-soft)' }}>
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-dark)' }}>{g.field}</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1rem', color: 'var(--primary-red)', marginLeft: '12px', flexShrink: 0 }}>{g.grade}</span>
              </div>
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
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.82rem' }}>Resource Management</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: isMobile ? '2rem' : '2.8rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
              Planned Before<br />Ground is Broken
            </h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '18px' }}>
              Every project begins with a meticulous pre-construction resource plan — construction schedule, organisation chart, plant allocation, and materials schedule — mapped to the master programme before mobilisation.
            </p>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '36px' }}>
              With a self-owned fleet of {COMPANY_DATA.machineryFleet} machines and {COMPANY_DATA.workforce} personnel, we eliminate third-party dependency and deliver on schedule.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-red)', color: 'white', padding: '13px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem', boxShadow: '0 8px 24px rgba(229,57,53,0.3)' }}>
                View Our Projects →
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '2px solid var(--border-soft)', color: 'var(--text-dark)', padding: '13px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.92rem' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: isMobile ? '0 12px 60px' : '0 20px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ backgroundImage: "linear-gradient(135deg, rgba(10,18,35,0.94), rgba(30,10,10,0.97)), url('/images/home/slider/polished/bridge.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '28px', padding: isMobile ? '50px 28px' : '80px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px', position: 'relative', overflow: 'hidden' }}>
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
