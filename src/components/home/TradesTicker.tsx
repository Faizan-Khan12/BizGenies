import {
  Bug,
  Brush,
  Car,
  Droplets,
  Hammer,
  Home,
  Leaf,
  Package,
  Paintbrush,
  PlugZap,
  Snowflake,
  Trees,
  Waves,
  Wind,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const TRADES_ROW_1: { label: string; Icon: LucideIcon }[] = [
  { label: 'Pressure Washing', Icon: Droplets },
  { label: 'Landscaping', Icon: Leaf },
  { label: 'HVAC', Icon: Snowflake },
  { label: 'Roofing', Icon: Home },
  { label: 'Plumbing', Icon: Wrench },
  { label: 'Electrician', Icon: PlugZap },
  { label: 'Pest Control', Icon: Bug },
  { label: 'Handyman', Icon: Hammer },
];

const TRADES_ROW_2: { label: string; Icon: LucideIcon }[] = [
  { label: 'Window Cleaning', Icon: Wind },
  { label: 'Auto Detailing', Icon: Car },
  { label: 'Moving Companies', Icon: Package },
  { label: 'Painting', Icon: Paintbrush },
  { label: 'Pool Construction', Icon: Waves },
  { label: 'Tree Service', Icon: Trees },
  { label: 'Carpet Cleaning', Icon: Brush },
  { label: 'General Contracting', Icon: Hammer },
];

export default function TradesTicker() {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <span className="tag">WHO WE WORK WITH</span>
        <h2 className="section-headline" style={{ color: 'var(--text)' }}>Serving All These Trades &amp; More</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="animate-ticker" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...TRADES_ROW_1, ...TRADES_ROW_1, ...TRADES_ROW_1].map(({ label, Icon }, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '999px', padding: '.75rem 1.5rem', margin: '0 .75rem', whiteSpace: 'nowrap' }}>
              <Icon size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="animate-ticker-slow" style={{ display: 'flex', whiteSpace: 'nowrap', animationDirection: 'reverse' }}>
          {[...TRADES_ROW_2, ...TRADES_ROW_2, ...TRADES_ROW_2].map(({ label, Icon }, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '999px', padding: '.75rem 1.5rem', margin: '0 .75rem', whiteSpace: 'nowrap' }}>
              <Icon size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
