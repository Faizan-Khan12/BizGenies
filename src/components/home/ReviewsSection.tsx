export const REVIEWS_DATA = [
  { name: 'Cody', trade: 'Pressure Washing', quote: 'If you are looking for someone to get that phone ringing, they\'re the right fit for you! I\'m so happy with them!' },
  { name: 'Armando', trade: 'Landscaping', quote: 'They built me a new website and within 10 days I got my first unpaid lead! Best money spent.' },
  { name: 'James', trade: 'HVAC', quote: 'After going through 2–3 other people I finally found someone that told me the truth. Really easy to work with.' },
  { name: 'Manny', trade: 'Roofing', quote: 'Ever since they implemented the new website and landing pages, our conversion has gone way up. We started getting calls almost immediately.' },
  { name: 'Adam', trade: 'Plumbing', quote: 'It\'s been great and all I needed was one sale a month to pay for the service. Since I signed up I\'ve gotten quite a bit more.' },
  { name: 'Mason', trade: 'Auto Detailing', quote: 'They made me a brand new website, super professional and it\'s been absolutely amazing. It turned 100s of viewers into 100s of clients!' },
  { name: 'Frank', trade: 'Electrician', quote: 'I would highly recommend — my business has ramped up literally overnight and their prices are very affordable.' },
  { name: 'Rick', trade: 'General Contracting', quote: 'Our company finally has the web presence it needs and our sales and profits have grown significantly!' },
  { name: 'Wendy', trade: 'Pest Control', quote: 'Getting 5-star reviews has always given me anxiety. They\'ve taken all that away and I\'ve seen a significant increase in business.' },
  { name: 'Lopaka', trade: 'Moving Company', quote: 'Before I started with them I was paying $1,500/month with another service that wasn\'t working. They\'re super affordable and do a fantastic job!' },
];

import Link from 'next/link';

export default function ReviewsSection() {
  const doubled = [...REVIEWS_DATA.slice(0, 5), ...REVIEWS_DATA.slice(0, 5)];

  return (
    <section className="section" style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center' }}>
          <span className="tag">CLIENT RESULTS</span>
          <h2 className="section-headline" style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>Real Contractors. Real Results.</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '36rem', margin: '0 auto' }}>Don&apos;t take our word for it — here&apos;s what our clients say.</p>
        </div>
      </div>

      {/* Scrolling row */}
      <div style={{ width: '100%', overflow: 'hidden', display: 'flex', marginBottom: '4rem' }}>
        <div className="animate-ticker-slow" style={{ display: 'flex', gap: '1.5rem', paddingLeft: '1.5rem', width: 'max-content' }}>
          {doubled.map((r, i) => (
            <div key={i} style={{ width: '360px', flexShrink: 0, background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--surface-2), var(--border))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', color: 'var(--text)', fontWeight: 700 }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '.25rem', marginBottom: '.25rem' }}>
                    {[1,2,3,4,5].map(n => <span key={n} style={{ color: 'var(--accent)' }}>⭐</span>)}
                  </div>
                  <div style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--text)' }}>{r.name} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>— {r.trade}</span></div>
                </div>
              </div>
              <p style={{ color: 'var(--text)', fontSize: '.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>&ldquo;{r.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/reviews" style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '1.5rem', display: 'block' }}>See All Reviews →</Link>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '.875rem', color: 'var(--muted)' }}>
          <span>⭐ Google 5.0</span>
          <span>⭐ Facebook 5.0</span>
        </div>
      </div>
    </section>
  );
}
