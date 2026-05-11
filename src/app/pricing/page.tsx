import SiteLayout from '@/components/SiteLayout';
import ProcessSection from '@/components/home/ProcessSection';
import FaqSection from '@/components/home/FaqSection';

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 197,
    popular: false,
    features: ['Website', 'Mobile optimized', 'Website hosting included', 'Google Business Profile setup'],
  },
  {
    name: 'Pro',
    price: 497,
    popular: true,
    features: ['Everything in Starter', 'Missed Call Text Back', '5-Star Review Gating', 'Automated Lead Flow', 'All-in-One Inbox (Personalized App)', 'One-Click Marketing Campaigns'],
  },
  {
    name: 'Custom',
    price: "Let's Talk",
    popular: false,
    features: ['Everything in Pro', 'Custom requirements beyond Starter and Pro', 'Tailored workflows and automations', 'Custom integrations and growth support'],
  },
];

export default function PricingPage() {
  return (
    <SiteLayout>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>Simple, Transparent Pricing</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '36rem', margin: '0 auto' }}>Our pricing is designed to keep you for 10 years, not 10 weeks. We make money when you make money.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1000px', margin: '0 auto', alignItems: 'center' }} className="pricing-grid">
            {PRICING_TIERS.map((tier, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  background: 'var(--surface)',
                  borderRadius: '16px',
                  border: tier.popular ? '2px solid var(--accent)' : '1px solid var(--border)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: tier.popular ? '0 0 60px rgba(255,107,53,.2)' : 'none',
                  transform: tier.popular ? 'scale(1.05)' : 'none',
                }}
              >
                {tier.popular && (
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--accent)', color: '#fff', padding: '.3rem 1rem', borderRadius: '999px', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '.75rem' }}>{tier.name}</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '.25rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text)' }}>{typeof tier.price === 'number' ? `$${tier.price}` : tier.price}</span>
                  {typeof tier.price === 'number' && (
                    <span style={{ color: 'var(--muted)', fontSize: '.875rem', marginBottom: '.4rem' }}>/mo</span>
                  )}
                </div>
                <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }} />
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', fontSize: '.875rem', color: 'var(--text)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '.1rem' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    transition: 'all .2s',
                    background: tier.popular ? 'var(--accent)' : 'var(--surface-2)',
                    color: tier.popular ? '#fff' : 'var(--text)',
                    border: tier.popular ? 'none' : '1px solid var(--border)',
                  }}
                >
                  Book a Call
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProcessSection />
      <FaqSection />

      <style>{`
        @media (max-width: 1023px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </SiteLayout>
  );
}
