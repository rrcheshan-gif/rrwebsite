import React from 'react';
import Link from 'next/link';
import { ArrowRight, HardHat, Cog, ShieldCheck, TrendingUp } from 'lucide-react';

export default function OngoingProjects() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '80px 20px 40px', textAlign: 'center' }}>
        <div className='container' style={{ maxWidth: '900px' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 900, 
            color: 'var(--text-dark)', 
            marginBottom: '30px',
            lineHeight: 1.1
          }}>
            Ongoing <span style={{ color: 'var(--primary-red)' }}>Projects</span>
          </h1>
          <p style={{ 
            color: 'var(--text-light)', 
            fontSize: '1.15rem', 
            lineHeight: 1.9, 
            textAlign: 'justify',
            marginBottom: '40px'
          }}>
            RR Construction is currently executing a diverse and expansive portfolio of large-scale infrastructure projects. Our ongoing commitments span across all critical engineering sectors, including national road networks, complex bridges, comprehensive water supply and irrigation systems, major maritime developments, multi-storey buildings, railway infrastructure, disaster management and landslide mitigation, as well as specialized overseas construction projects. Equipped with our expansive proprietary machinery fleet and unmatched technical expertise, we are continuously driving infrastructure development forward. Our dedicated engineering and project management teams ensure that every ongoing site progresses seamlessly, consistently delivering high-quality results while adhering to the strictest international standards for occupational health, safety, and environmental sustainability.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
             <Link href='/projects' className='btn btn-primary hover-lift hover-glow' style={{ padding: '16px 32px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem' }}>
                View Completed Projects <ArrowRight size={20} />
             </Link>
             <Link href='/services' className='btn hover-lift' style={{ padding: '16px 32px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', background: 'white', color: 'var(--text-dark)', border: '1px solid var(--border-soft)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                Explore Our Services
             </Link>
          </div>
        </div>
      </section>

      {/* Decorative Stats/Features */}
      <section style={{ padding: '40px 20px 100px' }}>
         <div className='container' style={{ maxWidth: '1100px' }}>
            <div style={{ 
               display: 'grid', 
               gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
               gap: '30px' 
            }}>
               {[
                 { icon: <HardHat size={32} />, title: 'Active Work Sites', desc: 'Operating simultaneously across multiple provinces in Sri Lanka.' },
                 { icon: <Cog size={32} />, title: 'Heavy Machinery', desc: 'Deploying our fully self-owned proprietary fleet for maximum efficiency.' },
                 { icon: <ShieldCheck size={32} />, title: 'Quality Assured', desc: 'Strict adherence to ISO 9001, ISO 14001, and ISO 45001.' },
                 { icon: <TrendingUp size={32} />, title: 'Nation Building', desc: "Empowering Sri Lanka's socio-economic growth through critical infrastructure." },
               ].map((item, idx) => (
                 <div key={idx} className='glass-panel hover-lift' style={{ 
                    padding: '30px', 
                    borderRadius: '16px', 
                    textAlign: 'center',
                    background: 'white',
                    border: '1px solid var(--border-soft)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                 }}>
                    <div style={{ 
                       width: '70px', 
                       height: '70px', 
                       margin: '0 auto 20px', 
                       background: 'rgba(229,57,53,0.08)', 
                       color: 'var(--primary-red)',
                       borderRadius: '50%',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                    }}>
                       {item.icon}
                    </div>
                    <h4 style={{ color: 'var(--text-dark)', fontWeight: 800, marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
