'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.rrconstruction.lk${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        flexWrap: 'wrap',
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.7)',
        marginBottom: '16px',
      }}>
        {allItems.map((item, index) => (
          <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {index > 0 && <ChevronRight size={14} style={{ opacity: 0.5 }} />}
            {item.href && index < allItems.length - 1 ? (
              <Link href={item.href} style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {index === 0 && <Home size={13} />}
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                {index === 0 && <Home size={13} />}
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
