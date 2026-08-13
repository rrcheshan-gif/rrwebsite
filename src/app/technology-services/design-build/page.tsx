"use client";
import Link from 'next/link';

const containerStyle = { maxWidth: '1100px', margin: '0 auto', padding: '0 20px' };
const headerStyle = {
  backgroundImage: "linear-gradient(rgba(17,24,39,0.85), rgba(17,24,39,0.85)), url('/images/page-headers/services-build.jpg')",
  backgroundSize: 'cover', backgroundPosition: 'center',
  color: 'white', padding: '140px 20px 90px', textAlign: 'center' as const,
};

const solutions = [
  {
    title: 'Integrated Project Delivery',
    desc: 'Our Design-Build approach provides a single point of responsibility for both the design and construction phases. This integrated method fosters collaboration, reduces risks, and significantly accelerates the project delivery timeline compared to traditional design-bid-build models.',
  },
  {
    title: 'In-House Engineering Excellence',
    desc: 'RR Construction boasts a highly qualified in-house engineering team comprising chartered civil and structural engineers. We leverage advanced CAD and BIM (Building Information Modeling) technologies to develop optimized, constructible designs that solve complex infrastructure challenges.',
  },
  {
    title: 'Value Engineering',
    desc: 'By involving our construction experts during the design phase, we identify opportunities for value engineering early on. We optimize material selection, structural systems, and construction methodologies to reduce overall costs without compromising on quality or functionality.',
  },
  {
    title: 'Customized Infrastructure Solutions',
    desc: 'From specialized maritime structures and long-span bridges to landslide mitigation systems, our design-build capabilities are tailored to meet the unique environmental and technical requirements of each specific project site.',
  }
];

export default function DesignBuildPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      <section style={headerStyle}>
        <div style={containerStyle}>
          <Link href="/technology-services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            ← Technology & Services
          </Link>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', margin: '0 0 20px', lineHeight: 1.15 }}>
            Design-Build <span style={{ color: 'var(--primary-red)' }}>Solutions</span>
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '680px', margin: '0 auto', lineHeight: 1.75 }}>
            Providing end-to-end engineering solutions by seamlessly integrating design and construction to deliver superior value and accelerated timelines.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 20px' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '40px' }}>
            {solutions.map((sol, index) => (
              <div key={sol.title} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary-red)', fontWeight: 800, opacity: 0.2, lineHeight: 1 }}>0{index + 1}</div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-dark)', fontWeight: 800, margin: '0 0 12px' }}>{sol.title}</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
