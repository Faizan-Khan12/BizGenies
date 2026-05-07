'use client';
import SiteLayout from '@/components/SiteLayout';
import { useState } from 'react';

const PROJECTS = [
  { id: 1, category: 'Pressure Washing', name: 'AquaClean Pro', size: 'large' },
  { id: 2, category: 'HVAC', name: 'Climate Control Experts', size: 'medium' },
  { id: 3, category: 'Landscaping', name: 'GreenThumb Designs', size: 'medium' },
  { id: 4, category: 'Roofing', name: 'Apex Roofing', size: 'large' },
  { id: 5, category: 'Plumbing', name: 'FlowRite Plumbing', size: 'medium' },
  { id: 6, category: 'Auto Detailing', name: 'Shine Auto Spa', size: 'medium' },
  { id: 7, category: 'Pressure Washing', name: 'BlastAway Wash', size: 'medium' },
  { id: 8, category: 'HVAC', name: 'Arctic Air Solutions', size: 'large' },
  { id: 9, category: 'Landscaping', name: 'Elite Lawn Care', size: 'medium' },
];

const FILTERS = ['All', 'Pressure Washing', 'HVAC', 'Landscaping', 'Roofing', 'Plumbing', 'Auto Detailing'];

export default function OurWorkPage() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <SiteLayout>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>Websites We&apos;ve Built That Actually Convert</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '36rem', margin: '0 auto' }}>
              Take a look at some of the revenue-generating systems we&apos;ve built for contractors across the country.
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '.75rem', marginBottom: '4rem' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ padding: '.5rem 1.25rem', borderRadius: '999px', fontSize: '.875rem', fontWeight: 500, transition: 'all .2s', background: filter === f ? 'var(--accent)' : 'var(--surface)', color: filter === f ? '#fff' : 'var(--muted)', border: filter === f ? '1px solid var(--accent)' : '1px solid var(--border)', cursor: 'pointer' }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3" style={{ marginBottom: '6rem' }}>
            {visible.map(p => (
              <div
                key={p.id}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', background: 'linear-gradient(135deg, var(--surface), var(--surface-2))', border: '1px solid var(--border)', aspectRatio: p.size === 'large' ? '16/9' : '1', gridColumn: p.size === 'large' ? 'span 2' : 'span 1', cursor: 'pointer' }}
                className="work-card"
              >
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.3)', opacity: 0, transition: 'opacity .3s, background .3s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }} className="work-card-overlay">
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>{p.name}</span>
                  <span style={{ color: 'rgba(255,255,255,.8)', fontSize: '.875rem', marginTop: '.25rem' }}>View Live Site →</span>
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 3 }}>
                  <span style={{ background: 'rgba(14,14,14,.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.15)', borderRadius: '6px', padding: '.3rem .75rem', fontSize: '.8rem', fontWeight: 500, color: '#fff' }}>{p.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '.4rem 1rem', borderRadius: '999px', background: 'rgba(255,107,53,.1)', border: '1px solid rgba(255,107,53,.2)', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent)', fontSize: '.8rem', fontWeight: 700 }}>200+ SITES BUILT</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>Ready for your own high-converting site?</h2>
            <a href="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}>Book a Strategy Call →</a>
          </div>
        </div>
      </div>

      <style>{`
        .work-card:hover .work-card-overlay { opacity: 1 !important; background: rgba(255,107,53,.88) !important; }
        @media (max-width: 1023px) { .work-card[style*="span 2"] { grid-column: span 1 !important; aspect-ratio: 16/9 !important; } }
      `}</style>
    </SiteLayout>
  );
}
