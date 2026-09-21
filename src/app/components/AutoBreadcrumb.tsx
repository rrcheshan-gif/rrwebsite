"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

// A mapping of path segments or full paths to readable names
const labelMap: Record<string, string> = {
  'about': 'About Us',
  'company-overview': 'RR Overview',
  'key-data': 'Key Data',
  'history': 'History & Milestones',
  'our-management': 'Our Management',
  'vision-mission': 'Vision & Mission',
  'goals-and-targets': 'Goals & Targets',
  'awards': 'Awards & Certificates',
  'projects': 'Projects',
  'ongoing': 'Ongoing Projects',
  'overseas': 'Overseas Projects',
  'people': 'People',
  'services': 'Technology & Services',
  'highway-and-expressway-construction': 'Highway & Expressway Construction',
  'bridge-construction': 'Bridge Construction',
  'buildings-structures': 'Civil Structures',
  'water-infrastructure': 'Water Infrastructure',
  'dredging-and-water-infrastructure': 'Marine Dredging & Reclamation',
  'landslide-mitigation': 'Landslide Mitigation',
  'maritime-construction': 'Maritime Construction',
  'piling-and-foundation-engineering': 'Piling & Foundation',
  'railway-civil-works': 'Railway Civil Works',
  'research-development': 'Research & Development',
  'transportation-civil-infrastructure': 'Transportation & Civil Infrastructure',
  'resources': 'Resources',
  'aggregates': 'Aggregates',
  'asphalt': 'Asphalt',
  'concrete': 'Ready Mix Concrete',
  'omanthai': 'Omanthai Plant',
  'thudugala': 'Thudugala Plant',
  'veerapuram': 'Veerapuram Plant',
  'request-order': 'Request an Order',
  'sustainability': 'Sustainability',
  'environmental-stewardship': 'Environmental Stewardship',
  'health-and-safety': 'Health & Safety',
  'quality-management': 'Quality Management',
  'social-responsibility': 'Social Responsibility',
  'news': 'News & Updates',
  'career': 'Careers',
  'contact': 'Contact Us',
  'quality-policy': 'Quality Policy',
  'welfare': 'Employee Welfare',
  'training': 'Training & Development'
};

function formatLabel(segment: string) {
  if (labelMap[segment]) return labelMap[segment];
  // fallback for unknown segments
  return segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export default function AutoBreadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  // Handle logical parents for flat routes that belong in a dropdown
  const logicalParents: Record<string, string> = {
    '/training': '/people',
    '/welfare': '/people',
    '/career': '/people'
  };

  let paths: string[] = [];
  
  if (logicalParents[pathname]) {
    paths = [logicalParents[pathname], pathname];
  } else {
    // Standard segment parsing
    const segments = pathname.split('/').filter(Boolean);
    paths = segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/'));
  }

  const items = paths.map((p, index) => {
    // Extract just the last segment to format it
    const segment = p.split('/').pop() || '';
    return {
      label: formatLabel(segment),
      href: index === paths.length - 1 ? undefined : p
    };
  });

  const allItems = [{ label: 'Home', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      flexWrap: 'wrap',
      fontSize: '0.85rem',
      color: 'rgba(255,255,255,0.7)',
      marginTop: '0px',
      marginBottom: '15px'
    }}>
      {allItems.map((item, index) => (
        <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {index > 0 && <ChevronRight size={14} style={{ opacity: 0.5 }} />}
          {item.href ? (
            <Link href={item.href} style={{
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
            >
              {index === 0 && <Home size={14} />}
              {item.label}
            </Link>
          ) : (
            <span style={{ color: '#fff', fontWeight: 600 }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
