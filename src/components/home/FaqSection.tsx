'use client';
import { useState } from 'react';

const FAQS = [
  { q: 'When will I start seeing results?', a: 'It depends on your advertising mix, how long you\'ve been in business, and how committed you are to using the system. Clients typically start seeing leads within the first 30 days of launch.' },
  { q: 'Why is your pricing affordable?', a: 'Our only goal is keeping you as a client for 10+ years. We believe the best way to do that is to be fairly priced. If we overcharge and underdeliver, you leave. Simple as that.' },
  { q: 'What happens if I cancel?', a: 'No hard feelings. You lose access to the tools and assets we built within your account. We recommend giving the system at least 90 days before making any decision.' },
  { q: 'Can people find my website on Google?', a: 'Yes. Every site we build is SEO-optimized from day one: keyword research, meta tags, alt tags, schema markup, SSL, and page speed optimization.' },
  { q: 'Why do I need a website if word-of-mouth is working?', a: 'Word-of-mouth is great — but your website lets referrals trust you instantly, lets you run ads, and helps you land bigger clients who Google you before calling.' },
  { q: 'How is Biz Genies different from a regular web agency?', a: 'We\'re not just building you a website. We\'re building a full marketing system: website, automations, review funnel, missed call text-back, SEO, and campaigns — all working together.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="tag">FAQ</span>
          <h2 className="section-headline" style={{ color: 'var(--text)' }}>Straight Answers to Real Questions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', textAlign: 'left', color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '1rem', fontWeight: 500, paddingRight: '2rem' }}>{faq.q}</span>
                <span style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0, transition: 'transform .3s', display: 'block', transform: open === i ? 'rotate(180deg)' : 'none' }}>▼</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--muted)', lineHeight: 1.7 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
