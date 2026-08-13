"use client";
import Link from 'next/link';

const containerStyle = { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

const segments = [
  {
    icon: '🛣️',
    title: 'Roads & Highways',
    desc: 'RR Construction is a leading contractor for national highway rehabilitation, rural road improvement, and expressway development across all nine provinces of Sri Lanka.',
    projects: ['A002 Colombo–Galle–Hambantota Road', 'Northern Province Rural Roads (LOT/03)', 'Palindanuwara Rural Roads, Kalutara', 'Badulla District Rural Roads'],
  },
  {
    icon: '🌉',
    title: 'Bridges & Flyovers',
    desc: 'From single-span culverts to major multi-span concrete bridges, RR Construction has designed and built over 80 bridge structures across the island — in conflict-affected areas, flood zones, and remote terrain.',
    projects: ['Vadduvakal Bridge, Mullaitivu', 'Bentara–Uragaha–Elpitiya Road (B055)', 'Thihagoda–Mawarala–Kotapola (B415)', 'Colombo–Galle–Hambantota Road Bridges'],
  },
  {
    icon: '⚓',
    title: 'Maritime & Ports',
    desc: 'Our marine construction teams handle jetty construction, boat launching ramps, fishery harbour development, and coastal protection — delivering durable maritime infrastructure for Sri Lanka\'s coastal communities.',
    projects: ['Kurikadduvan Jetty Rehabilitation', 'Beruwala Boat Launching Ramp', 'Kirinda Fishery Harbour Sand Removal', 'Gandara Fishery Harbour'],
  },
  {
    icon: '🌊',
    title: 'Water Infrastructure',
    desc: 'We design and construct water treatment plants, distribution networks, and irrigation infrastructure, serving both urban and rural communities with access to clean water.',
    projects: ['Ampara Water Treatment Plant (172,000 m³/day)', 'Pipeline Networks', 'Pumping Stations', 'Irrigation Canals'],
  },
  {
    icon: '🏔️',
    title: 'Landslide Mitigation',
    desc: 'RR Construction is approved by the National Building Research Organisation (NBRO) to execute slope stabilisation, retaining wall construction, and landslide mitigation at critical locations across high-risk districts.',
    projects: ['Ratnapura District (RLVMMP)', 'Kegalle District Mitigation', 'Colombo & Kegalle Sites', 'Railway Mainline (22 Sites)'],
  },
  {
    icon: '🏗️',
    title: 'Buildings & Structures',
    desc: 'Multi-storey reinforced concrete buildings, elevated water towers, and heavy steel fabrication — RR Construction applies the same engineering discipline to vertical construction as it does to infrastructure.',
    projects: ['Multi-storey RC Buildings', 'Elevated Water Towers', 'Steel Fabrication Works'],
  },
];

export default function MarketSegmentsPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/technology-services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Technology & Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Market <span style={{ color: 'var(--primary-red)' }}>Segments</span>
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            RR Construction operates across six core market segments, delivering high-quality civil engineering solutions for both public sector clients and international development partners.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '32px' }}>
            {segments.map((seg) => (
              <div key={seg.title} style={{ background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{seg.icon}</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--primary-red)', fontWeight: 800, margin: '0 0 14px' }}>{seg.title}</h2>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '20px' }}>{seg.desc}</p>
                <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '16px' }}>
                  <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Key Projects</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {seg.projects.map(p => (
                      <li key={p} style={{ fontSize: '0.88rem', color: 'var(--text-light)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: 'var(--primary-red)', marginTop: '2px', flexShrink: 0 }}>▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
