"use client";
import Link from 'next/link';

const containerStyle = { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

const resources = [
  {
    icon: '🚜',
    title: 'Heavy Machinery Fleet',
    desc: 'We maintain one of the largest privately-owned heavy machinery fleets in Sri Lanka. Our extensive inventory includes excavators, bulldozers, motor graders, wheel loaders, compactors, and specialized paving equipment, ensuring we have the right tools for any scale of civil engineering project.',
  },
  {
    icon: '🏭',
    title: 'Asphalt & Concrete Plants',
    desc: 'To guarantee material quality and steady supply, RR Construction operates state-of-the-art asphalt mixing plants and concrete batching plants strategically located across the island, including major facilities in Omanthai, Veerapuram, Thudugala, and Yakawewa.',
  },
  {
    icon: '🪨',
    title: 'Quarries & Aggregates',
    desc: 'Our vertical integration strategy includes owning and operating multiple metal quarries and crusher plants. This allows us to produce high-grade aggregates and M-Sand, securing the supply chain for our major infrastructure projects.',
  },
  {
    icon: '👥',
    title: 'Human Capital',
    desc: 'Our most valuable resource is our people. A dedicated workforce of over 1,400 professionals, including chartered engineers, project managers, technical officers, skilled technicians, and support staff, forms the backbone of RR Construction.',
  },
  {
    icon: '🔬',
    title: 'Quality Control Laboratories',
    desc: 'We operate fully equipped material testing laboratories at our key project sites and production facilities. These labs ensure that all soils, aggregates, concrete, and asphalt meet stringent national and international engineering standards.',
  },
  {
    icon: '🚛',
    title: 'Logistics & Transport',
    desc: 'A robust logistics network and a massive fleet of tipper trucks, prime movers, and low-bed trailers enable the efficient transportation of materials and heavy equipment to project sites, even in the most remote areas of the country.',
  }
];

export default function OurResourcesPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/technology-services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Technology & Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Our <span style={{ color: 'var(--primary-red)' }}>Resources</span>
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            Unmatched capacity driven by a massive self-owned machinery fleet, strategic material production facilities, and a dedicated workforce of over 1,400 professionals.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '32px' }}>
            {resources.map((res) => (
              <div key={res.title} style={{ background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{res.icon}</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--primary-red)', fontWeight: 800, margin: '0 0 14px' }}>{res.title}</h2>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '0' }}>{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
