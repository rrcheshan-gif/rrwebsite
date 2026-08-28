import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function OngoingProjects() {
  return (
    <div style={{ minHeight: '70vh', background: '#f8fafc' }}>
      {/* Hero Section */}
      <section style={{ padding: '180px 20px 100px', textAlign: 'center', width: '100%' }}>
        <div className='container' style={{ maxWidth: '1000px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 900, 
            color: 'var(--text-dark)', 
            marginBottom: '40px',
            lineHeight: 1.1
          }}>
            Ongoing <span style={{ color: 'var(--primary-red)' }}>Projects</span>
          </h1>
          
          <div className='glass-panel' style={{ 
             padding: '40px', 
             borderRadius: '16px', 
             background: 'white', 
             border: '1px solid var(--border-soft)',
             boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
          }}>
             <p style={{ 
               color: 'var(--text-dark)', 
               fontSize: '1.15rem', 
               lineHeight: 1.9, 
               textAlign: 'justify',
               margin: 0
             }}>
               RR Construction is currently executing a diverse and expansive portfolio of large-scale infrastructure projects. Our ongoing commitments span across all critical engineering sectors, including national road networks, complex bridges, comprehensive water supply and irrigation systems, major maritime developments, multi-storey buildings, railway infrastructure, disaster management and landslide mitigation, as well as specialized overseas construction projects. Operating simultaneously across multiple provinces in Sri Lanka, we strategically deploy our fully self-owned proprietary fleet of heavy machinery to guarantee maximum efficiency, rapid mobilization, and uncompromised structural integrity on every site. Our dedicated engineering and project management teams ensure that every ongoing operation progresses seamlessly from groundbreaking to final handover. By strictly adhering to internationally recognized ISO 9001, ISO 14001, and ISO 45001 standards, we consistently deliver high-quality results that empower the nation's socio-economic growth, all while maintaining the highest levels of occupational health, safety, and environmental stewardship.
             </p>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '50px' }}>
             <Link href='/projects' className='btn btn-primary hover-lift hover-glow' style={{ padding: '16px 32px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem' }}>
                View Completed Projects <ArrowRight size={20} />
             </Link>
             <Link href='/services' className='btn hover-lift' style={{ padding: '16px 32px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', background: 'white', color: 'var(--text-dark)', border: '1px solid var(--border-soft)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                Explore Our Services
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
