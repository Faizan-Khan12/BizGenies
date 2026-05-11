import SiteLayout from '@/components/SiteLayout';
import Link from 'next/link';
import { RefreshCw, Search, TrendingUp, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const VALUES: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Search, title: 'Transparency First', desc: 'No hidden fees, no confusing jargon. We tell you exactly what we\'re doing and why.' },
  { Icon: TrendingUp, title: 'Results Over Reports', desc: 'We don\'t care about vanity metrics. We care about how many times your phone rings.' },
  { Icon: Wrench, title: 'Built for the Trades', desc: 'We only work with local service businesses. We know your industry inside and out.' },
  { Icon: RefreshCw, title: 'Always Improving', desc: 'We constantly update our systems to ensure you\'re always ahead of the competition.' },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section style={{ paddingTop: '9rem', paddingBottom: '5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="about-headline" style={{ color: 'var(--text)', textAlign: 'center' }}>
            We&apos;re{' '}
            <span style={{ color: '#FF6B35' }}>Biz Genies</span>
            {' '} <br />A Marketing Team Built for the Trades
          </h1>
          <div style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>We started Biz Genies because we watched too many good contractors get ripped off by agencies that delivered pretty websites with no results.</p>
            <p>We realized that a website alone doesn&apos;t grow a business. A website needs traffic, a way to capture leads, and a system to follow up with them automatically.</p>
            <p>So, we stopped building &quot;just websites&quot; and started building <strong style={{ color: 'var(--text)' }}>systems</strong>. Systems that capture leads, automate follow-ups, gather 5-star reviews, and actually put money in your pocket.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="tag">OUR VALUES</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)' }}>What We Stand For</h2>
          </div>
          <div className="grid-2">
            {VALUES.map((v) => {
              const IconComponent = v.Icon;
              return (
                <div key={v.title} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '3rem', height: '3rem', flexShrink: 0, borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                  <IconComponent size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text)', marginBottom: '.5rem' }}>{v.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0 6rem', background: 'var(--bg)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>Want to work with us?</h2>
        <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1rem 2rem', display: 'inline-flex' }}>
          Book a Call →
        </Link>
      </section>
    </SiteLayout>
  );
}
