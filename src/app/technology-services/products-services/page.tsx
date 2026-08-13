"use client";
import Link from 'next/link';

const containerStyle = { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

const products = [
  {
    title: 'High-Grade Asphalt',
    desc: 'Produced at our modern asphalt mixing plants in Omanthai and Veerapuram, our hot-mix asphalt meets the rigorous standards required by the Road Development Authority (RDA) for national highways and expressways.',
  },
  {
    title: 'Aggregates & M-Sand',
    desc: 'Our network of metal quarries and crusher plants supplies high-quality aggregates of various grades, along with Manufactured Sand (M-Sand), an eco-friendly and superior alternative to river sand for concrete production.',
  },
  {
    title: 'Ready-Mix Concrete',
    desc: 'We operate advanced concrete batching plants to produce consistent, high-strength ready-mix concrete tailored for diverse applications, from high-rise building foundations to massive bridge piers.',
  },
  {
    title: 'Pre-cast Elements',
    desc: 'To accelerate construction timelines, we manufacture a range of pre-cast concrete elements including culverts, retaining wall blocks, and drainage channels, ensuring factory-controlled quality and rapid on-site assembly.',
  }
];

export default function ProductsServicesPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/technology-services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Technology & Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Products & <span style={{ color: 'var(--primary-red)' }}>Services</span>
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            Ensuring project success through the internal production of high-quality construction materials, backed by rigorous laboratory testing.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '40px' }}>
            {products.map((prod) => (
              <div key={prod.title} style={{ background: 'var(--white)', border: '1px solid var(--border-soft)', borderRadius: '16px', padding: '36px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '40px', height: '4px', background: 'var(--primary-red)', marginBottom: '20px' }} />
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 14px' }}>{prod.title}</h2>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.75, fontSize: '0.95rem', margin: 0 }}>{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
