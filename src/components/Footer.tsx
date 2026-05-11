import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Our Work', href: '/our-work' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface-2)', paddingTop: '5rem', paddingBottom: '2.5rem', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {/* Branding col */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }} aria-label="Biz Genies home">
              <img
                src="/biz-genies-logo.png"
                alt="Biz Genies"
                className="brand-logo brand-logo--footer"
                width={240}
                height={120}
              />
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--text)', transition: 'color .2s' }}>
                <Phone size={18} style={{ color: 'var(--accent)' }} /> (305) 600-5727
              </a>
              <a href="mailto:hello@bizgenies.com" style={{ display: 'flex', alignItems: 'center', gap: '.75rem', color: 'var(--text)', transition: 'color .2s' }}>
                <Mail size={18} style={{ color: 'var(--accent)' }} /> hello@bizgenies.com
              </a>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['𝕏', 'in', 'f'].map((icon, i) => (
                <a key={i} href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', fontSize: '.8rem', fontWeight: 700, transition: 'background .2s, color .2s' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} style={{ color: 'var(--muted)', transition: 'color .2s' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '.875rem', color: 'var(--muted)' }}>
          <p>© {new Date().getFullYear()} Biz Genies. All rights reserved.</p>
          <Link href="/privacy-policy" style={{ transition: 'color .2s' }}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
