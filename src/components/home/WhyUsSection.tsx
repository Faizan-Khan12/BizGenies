import {
  CircleDollarSign,
  RefreshCw,
  Target,
  TrendingUp,
  Wrench,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHY_US: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Wrench, title: 'Simple To Use', desc: 'We built our system for contractors, not tech bros. If you can text a customer, you can use our tools.' },
  { Icon: CircleDollarSign, title: 'Affordable Pricing', desc: 'Our pricing is designed to keep you for 10 years, not 10 weeks. We make money when you make money.' },
  { Icon: Zap, title: 'Fast Turnaround', desc: 'Your website and marketing system goes live in 7–10 days. Not 3 months. Not "when we get around to it."' },
  { Icon: Target, title: 'No BS Guarantee', desc: 'We don\'t believe in fluff. We tell you exactly what we\'ll do, and we do it. No vague promises.' },
  { Icon: TrendingUp, title: 'Proven Results', desc: 'We have 200+ clients, 5-star ratings across platforms, and real testimonials to back up every claim.' },
  { Icon: RefreshCw, title: 'Always Improving', desc: 'We regularly update our systems and tech so you\'re never stuck with outdated tools.' },
];

export default function WhyUsSection() {
  return (
    <section className="section" style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="tag">WHY US</span>
          <h2 className="section-headline" style={{ color: 'var(--text)' }}>We&apos;re Not Your Average Agency</h2>
        </div>

        <div className="grid-3">
          {WHY_US.map((item) => {
            const IconComponent = item.Icon;
            return (
            <div key={item.title} style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <IconComponent size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
