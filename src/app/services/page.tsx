import SiteLayout from '@/components/SiteLayout';
import Link from 'next/link';
import {
  Globe,
  Star,
  MessageSquare,
  Zap,
  Megaphone,
  MapPin,
  TrendingUp,
  Inbox,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SERVICES: {
  id: string;
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  steps: string[];
}[] = [
  {
    id: 'website', Icon: Globe, title: 'Functional Website', subtitle: 'Websites that work as hard as you do.',
    desc: "We don't build digital brochures. We build lead-generation machines optimized for local search and mobile users. Every site includes built-in SMS quote forms and tap-to-call functionality.",
    features: ['Mobile-first responsive design', 'Instant lead-to-text conversion', 'Quote forms with SMS confirmations', 'Hyperlinked phone numbers', 'Optimized for local Google searches'],
    steps: ['We analyze your current site', 'We build a custom 5–10 page site', 'We launch and optimize for SEO'],
  },
  {
    id: 'text-back', Icon: MessageSquare, title: 'Missed Call Text Back', subtitle: 'Never lose a lead to voicemail again.',
    desc: "When you're on a roof or under a sink, you can't always answer the phone. Our system instantly texts back any missed calls, starting the conversation and saving the lead before they call your competitor.",
    features: ['Instant SMS reply when you miss a call', 'Customizable response messages', 'Starts the conversation automatically', 'Available 24/7, even after hours', 'Outshine your competition instantly'],
    steps: ['We connect your phone system', 'We write your custom reply', 'You never lose a missed call lead again'],
  },
  {
    id: 'reviews', Icon: Star, title: '5-Star Review Funnel', subtitle: 'Automate your reputation management.',
    desc: 'Stop worrying about bad reviews. Our system automatically requests reviews from happy customers and intercepts negative feedback before it goes public.',
    features: ['Prevents bad reviews from going public', 'Auto follow-up reminders (up to 4)', 'One-click SMS review requests', "Works while you're on the job", 'Integrates with Google and Facebook'],
    steps: ['Customer pays invoice', 'System sends SMS review request', 'Watch your 5-star rating grow'],
  },
  {
    id: 'follow-up', Icon: Zap, title: 'Automated Lead Follow-Up', subtitle: "Strike while the iron's hot.",
    desc: 'Speed to lead is everything. We automatically follow up with every new lead via SMS and email for 7 days, ensuring no opportunity slips through the cracks.',
    features: ['Instant SMS to all new website leads', 'Automated 7-day follow-up sequences', 'Multi-channel (SMS & Email)', 'Stop sequences on reply', 'Never lose a lead to slow response'],
    steps: ['Lead fills out form', 'System sends instant text', 'Follows up automatically until they reply'],
  },
  {
    id: 'campaigns', Icon: Megaphone, title: 'One-Click Marketing Campaigns', subtitle: 'Reactivate your past customers.',
    desc: 'Your past customers are your best source of new revenue. We provide pre-built SMS and email campaigns you can launch with a single click.',
    features: ['Pre-built campaigns — just click activate', 'Referral discount campaigns', 'Return customer win-back campaigns', 'Holiday specials and promotions', 'Done-for-you, zero effort required'],
    steps: ['Choose a pre-built campaign', 'Select your past customer list', 'Click send and watch the calendar fill'],
  },
  {
    id: 'seo', Icon: MapPin, title: 'Local SEO', subtitle: 'Dominate your local market.',
    desc: 'Rank higher on Google without paying for ads. We optimize your website and Google Business Profile so customers find you first when they search for your services.',
    features: ['Keyword research & optimization', 'Google My Business revamp and management', 'Alt tags, schema markup, page speed', 'Consistent blog content', 'Local directory citations'],
    steps: ['We audit your current rankings', 'We optimize your site and GMB', 'We build authority month over month'],
  },
  {
    id: 'ads', Icon: TrendingUp, title: 'Google Ads Management', subtitle: 'High-intent leads on demand.',
    desc: 'When you need leads right now, nothing beats Google Ads. We manage your Pay-Per-Click and Local Services Ads to ensure maximum ROI and lowest cost per lead.',
    features: ['Campaign setup and management', 'Keyword negative lists to stop wasted spend', 'Ad copy testing and optimization', 'Landing page creation', 'Conversion tracking'],
    steps: ['We define your target cost per lead', 'We build and launch the campaigns', 'We optimize daily for best results'],
  },
  {
    id: 'inbox', Icon: Inbox, title: 'All-in-One Inbox', subtitle: 'Centralize your communications.',
    desc: 'Stop jumping between texts, emails, Facebook messages, and Instagram DMs. Our app brings all customer communications into one single, easy-to-use inbox.',
    features: ['SMS, Email, FB, IG in one place', 'Desktop and mobile app access', 'Team collaboration and assignment', 'Conversation history tracking', 'Template responses'],
    steps: ['Connect your social accounts', 'Download the mobile app', 'Manage all messages from one place'],
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
        {/* Header */}
        <div className="container" style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>Our Services</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '36rem', margin: '0 auto' }}>
            Everything you need to turn your local service business into a lead-generating machine.
          </p>
        </div>

        {/* Services list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {SERVICES.map((svc, idx) => (
            <section key={svc.id} id={svc.id} style={{ scrollMarginTop: '8rem', borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
              <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="service-grid">
                  {/* Visual */}
                  <div style={{ order: idx % 2 !== 0 ? 2 : 1 }}>
                    <div style={{ aspectRatio: '4/3', borderRadius: '16px', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                      {/* Large faint icon in background */}
                      <div style={{ position: 'absolute', opacity: .06 }}>
                        <svc.Icon size={160} color='var(--accent)' />
                      </div>
                      {/* Mini card mockup */}
                      <div style={{ position: 'relative', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem', width: '100%', maxWidth: '260px', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--badge-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svc.Icon size={16} color='var(--accent)' />
                          </div>
                          <div>
                            <div style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--text)' }}>{svc.title}</div>
                            <div style={{ height: '8px', borderRadius: '4px', background: 'var(--border)', marginTop: '.4rem', width: '80px' }} />
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          {[70, 50, 60].map((w, i) => <div key={i} style={{ height: '8px', borderRadius: '4px', background: 'var(--border)', width: `${w}%` }} />)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ order: idx % 2 !== 0 ? 1 : 2 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.35rem 1rem', borderRadius: '999px', background: 'var(--surface-2)', border: '1px solid var(--border)', marginBottom: '1.5rem', fontSize: '.75rem', fontFamily: 'Space Mono, monospace', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      <svc.Icon size={12} color='var(--accent)' /> {svc.title}
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--text)', marginBottom: '1rem', lineHeight: 1.15 }}>{svc.subtitle}</h2>
                    <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.7 }}>{svc.desc}</p>

                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--text)', fontWeight: 700, marginBottom: '1rem' }}>Key Features</h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                        {svc.features.map((f) => (
                          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', color: 'var(--muted)', fontSize: '.9rem' }}>
                            <span style={{ color: 'var(--accent)', marginTop: '.1rem' }}>✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ background: 'var(--surface-2)', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>How It Works</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {svc.steps.map((step, si) => (
                          <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', background: 'var(--badge-bg)', color: 'var(--badge-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 700, flexShrink: 0 }}>{si + 1}</div>
                            <span style={{ fontSize: '.875rem', color: 'var(--text)' }}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn btn-outline" style={{ display: 'inline-flex' }}>Book a Call →</Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .service-grid { grid-template-columns: 1fr !important; }
          .service-grid > div { order: unset !important; }
        }
      `}</style>
    </SiteLayout>
  );
}
