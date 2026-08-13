"use client";
import Link from 'next/link';

const SUB_PAGES = [
  { href: '/technology-services/market-segments', label: 'Market Segments' },
  { href: '/technology-services/our-resources', label: 'Our Resources' },
  { href: '/technology-services/construction-management', label: 'Construction Management Services' },
  { href: '/technology-services/design-build', label: 'Design-Build Solutions' },
  { href: '/technology-services/products-services', label: 'Products & Services' },
  { href: '/technology-services/research-development', label: 'Research & Development' },
];

const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.82), rgba(17,24,39,0.82)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

export default function TechnologyServicesPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Back to Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Technology & <span style={{ color: 'var(--primary-red)' }}>Services</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            RR Construction leverages three decades of engineering expertise, advanced machinery, and innovative construction technologies to deliver world-class infrastructure across Sri Lanka.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '28px' }}>
            {SUB_PAGES.map((page) => (
              <Link key={page.href} href={page.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: '12px', padding: '36px 32px', transition: 'all 0.25s', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', cursor: 'pointer' }}
                  onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(183,28,28,0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary-red)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-soft)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ width: '44px', height: '4px', background: 'var(--primary-red)', borderRadius: '2px', marginBottom: '20px' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--text-dark)', margin: '0 0 10px', fontWeight: 800 }}>{page.label}</h3>
                  <div style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                    Learn More <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
