"use client";
import Link from 'next/link';

const containerStyle = { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

const servicesList = [
  {
    icon: '📊',
    title: 'Project Planning & Scheduling',
    desc: 'Comprehensive project master planning using advanced scheduling software. We optimize critical paths and resource allocation to ensure timely project delivery without compromising quality.',
  },
  {
    icon: '🛡️',
    title: 'Quality Assurance (ISO 9001)',
    desc: 'Our construction management is underpinned by ISO 9001:2015 Quality Management Systems. We enforce strict QA/QC protocols at every stage, from material sourcing to final handover.',
  },
  {
    icon: '⛑️',
    title: 'Health, Safety & Environment',
    desc: 'Certified with ISO 45001:2018 (OH&S) and ISO 14001:2015 (EMS), we prioritize a zero-harm workplace and sustainable construction practices that minimize environmental impact.',
  },
  {
    icon: '💰',
    title: 'Cost Engineering & Control',
    desc: 'Accurate estimation, value engineering, and rigorous cost control mechanisms ensure projects are delivered within budget while maximizing the value for our clients.',
  },
  {
    icon: '📋',
    title: 'Contract Administration',
    desc: 'Expert management of complex FIDIC and CIDA contracts, handling claims, variations, and procurement with full transparency and regulatory compliance.',
  },
  {
    icon: '🤝',
    title: 'Stakeholder Coordination',
    desc: 'Seamless coordination between clients, consultants, sub-contractors, and local authorities to resolve technical challenges and maintain project momentum.',
  }
];

export default function ConstructionManagementPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/technology-services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Technology & Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Construction <span style={{ color: 'var(--primary-red)' }}>Management</span>
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            Delivering complex infrastructure projects with precision, efficiency, and uncompromising standards of quality and safety.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '32px' }}>
            {servicesList.map((srv) => (
              <div key={srv.title} style={{ background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: '16px' }}>{srv.icon}</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--primary-red)', fontWeight: 800, margin: '0 0 14px' }}>{srv.title}</h2>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: '0' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
