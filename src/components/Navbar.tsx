'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Our Work', href: '/our-work' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
];

const SERVICES_MEGA = [
  {
    col: 'Core Systems',
    items: [
      { name: 'Functional Website', hash: 'website', desc: 'Mobile-first sites that convert' },
      { name: 'Missed Call Text Back', hash: 'text-back', desc: 'Never lose a lead to voicemail' },
      { name: 'Automated Lead Follow-Up', hash: 'follow-up', desc: 'Instant SMS to new leads' },
    ],
  },
  {
    col: 'Growth Tools',
    items: [
      { name: '5-Star Review Funnel', hash: 'reviews', desc: 'Automate your reputation' },
      { name: 'One-Click Campaigns', hash: 'campaigns', desc: 'Done-for-you promotions' },
      { name: 'Local SEO', hash: 'seo', desc: 'Rank higher on Google' },
    ],
  },
  {
    col: 'Advanced',
    items: [
      { name: 'Google Ads Management', hash: 'ads', desc: 'High-intent PPC leads' },
      { name: 'All-in-One Inbox', hash: 'inbox', desc: 'Centralize your comms' },
      { name: 'Business Phone Number', hash: 'phone', desc: 'Trackable local lines' },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all .3s',
          padding: scrolled ? '1rem 0' : '1.5rem 0',
          background: scrolled ? 'rgba(14,14,14,.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/">
            <span className="biz-genies-logo biz-genies-logo--sm" aria-label="Biz Genies" />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {NAV_LINKS.map(({ label, href }) =>
              label === 'Services' ? (
                <div
                  key={href}
                  style={{ position: 'relative', padding: '1rem 0', margin: '-1rem 0' }}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={href}
                    style={{
                      fontSize: '.875rem',
                      fontWeight: 500,
                      color: isActive(href) ? 'var(--accent)' : 'var(--text)',
                      borderBottom: isActive(href) ? '2px solid var(--accent)' : 'none',
                      transition: 'color .2s',
                    }}
                  >
                    {label}
                  </Link>
                  {servicesOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '0',
                        width: '780px',
                        background: 'var(--surface-2)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        boxShadow: '0 24px 64px rgba(0,0,0,.5)',
                        padding: '2rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                      }}
                    >
                      {SERVICES_MEGA.map((col) => (
                        <div key={col.col}>
                          <div style={{ fontSize: '.7rem', fontFamily: 'Space Mono, monospace', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>{col.col}</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {col.items.map((item) => (
                              <Link key={item.hash} href={`/services#${item.hash}`} style={{ display: 'flex', flexDirection: 'column', gap: '.2rem' }}>
                                <span style={{ fontSize: '.875rem', fontWeight: 500, color: 'var(--text)', transition: 'color .2s' }}>{item.name}</span>
                                <span style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{item.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: '.875rem',
                    fontWeight: 500,
                    color: isActive(href) ? 'var(--accent)' : 'var(--text)',
                    borderBottom: isActive(href) ? '2px solid var(--accent)' : 'none',
                    transition: 'color .2s',
                  }}
                >
                  {label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.875rem', fontWeight: 500, color: 'var(--text)', transition: 'color .2s' }}>
              📞 (305) 600-5727
            </a>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '.65rem 1.5rem', fontSize: '.875rem' }}>
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="mobile-menu-btn"
            style={{ padding: '.5rem', color: 'var(--text)' }}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)' }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <span className="biz-genies-logo biz-genies-logo--sm" />
            </Link>
            <button onClick={() => setMobileOpen(false)} style={{ padding: '.5rem', color: 'var(--text)' }} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{ fontSize: '1.75rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'var(--text)' }}>{label}</Link>
            ))}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <a href="#" style={{ fontSize: '1.25rem', color: 'var(--text)' }}>📞 (305) 600-5727</a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ textAlign: 'center', fontSize: '1.1rem', padding: '1.1rem 2rem' }}>
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  );
}
