import Link from 'next/link';
import {
  Globe,
  Star,
  MessageSquare,
  Zap,
  Megaphone,
  MapPin,
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'website',
    Icon: Globe,
    title: 'Functional Website',
    desc: 'Get a site that converts visitors into text conversations that go straight to your phone.',
    bullets: [
      'Mobile-first design',
      'Instant lead-to-text conversion',
      'Quote forms with SMS confirmations',
      'Hyperlinked phone numbers',
      'Optimized for local Google searches',
    ],
  },
  {
    id: 'reviews',
    Icon: Star,
    title: '5-Star Review Funnel',
    desc: "Stop worrying about bad reviews. Our system guides customers to leave you 5 stars, automatically.",
    bullets: [
      'Prevents bad reviews from going public',
      'Auto follow-up reminders (4 max)',
      'One-click review requests',
      "Works while you're on the job",
    ],
  },
  {
    id: 'text-back',
    Icon: MessageSquare,
    title: 'Missed Call Text Back',
    desc: 'Every missed call is a lost customer. We fix that automatically.',
    bullets: [
      'Instant SMS reply when you miss a call',
      'Starts the conversation for you',
      'Available 24/7, even after hours',
      'Outshine your competition instantly',
    ],
  },
  {
    id: 'follow-up',
    Icon: Zap,
    title: 'Automated Lead Follow-Up',
    desc: "Strike while the iron's hot. We follow up with every lead automatically.",
    bullets: [
      'Instant SMS to all new website leads',
      'Automated 7-day follow-up sequences',
      'Never lose a lead to slow response again',
    ],
  },
  {
    id: 'campaigns',
    Icon: Megaphone,
    title: 'One-Click Marketing Campaigns',
    desc: 'Referrals and repeat customers are your best leads. We go get them for you.',
    bullets: [
      'Pre-built campaigns — just click activate',
      'Referral discount campaigns',
      'Return customer win-back campaigns',
      'Done-for-you, zero effort required',
    ],
  },
  {
    id: 'seo',
    Icon: MapPin,
    title: 'Local SEO',
    desc: 'Rank on Google without paying for leads. Real organic acquisition.',
    bullets: [
      'Keyword research & optimization',
      'Google My Business revamp',
      'Alt tags, schema, page speed',
      'Consistent blog content',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="tag">WHAT WE DO</span>
          <h2
            className="section-headline"
            style={{ color: 'var(--text)', marginBottom: '1.5rem' }}
          >
            Simple Systems That Actually Work
          </h2>
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '1.1rem',
              maxWidth: '36rem',
              margin: '0 auto',
            }}
          >
            No degrees required. No agency fluff. Just tools that put money in
            your pocket.
          </p>
        </div>

        <div className="grid-3">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.Icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Icon box — matches original style */}
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '10px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <IconComponent
                    size={22}
                    style={{ color: 'var(--accent)' }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--text)',
                    marginBottom: '.75rem',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '.9rem',
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}
                >
                  {service.desc}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '.5rem',
                        fontSize: '.875rem',
                        color: 'var(--text)',
                      }}
                    >
                      <span style={{ color: 'var(--accent)', marginTop: '.15rem' }}>
                        ✓
                      </span>{' '}
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  style={{
                    color: 'var(--accent)',
                    fontWeight: 500,
                    fontSize: '.875rem',
                    marginTop: 'auto',
                  }}
                >
                  See Demo →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
