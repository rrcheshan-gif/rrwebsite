"use client";
import Link from 'next/link';

const containerStyle = { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

const initiatives = [
  {
    title: 'Sustainable Materials Research',
    desc: 'Our engineering teams continuously test and develop sustainable construction materials. A key focus is the optimization of Manufactured Sand (M-Sand) and the incorporation of recycled materials in asphalt mixes to reduce our environmental footprint.',
  },
  {
    title: 'Advanced Geotechnical Analysis',
    desc: 'In collaboration with the National Building Research Organisation (NBRO), we conduct specialized geotechnical research to develop more resilient landslide mitigation structures and slope stabilization techniques tailored for Sri Lanka\'s tropical climate.',
  },
  {
    title: 'Process Optimization',
    desc: 'We invest heavily in digitizing our construction management processes. From implementing advanced BIM (Building Information Modeling) workflows to IoT-enabled fleet tracking, we constantly seek ways to improve operational efficiency and safety.',
  },
  {
    title: 'Industry-Academia Partnerships',
    desc: 'RR Construction maintains active partnerships with leading engineering universities in Sri Lanka, providing industrial training for undergraduates and collaborating on cutting-edge civil engineering research projects.',
  }
];

export default function ResearchDevelopmentPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/technology-services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Technology & Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Research & <span style={{ color: 'var(--primary-red)' }}>Development</span>
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            Driving innovation in the Sri Lankan construction industry through continuous research, material optimization, and the adoption of next-generation engineering technologies.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '40px' }}>
            {initiatives.map((item, index) => (
              <div key={item.title} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary-red)', fontWeight: 800, opacity: 0.2, lineHeight: 1 }}>0{index + 1}</div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 12px' }}>{item.title}</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
