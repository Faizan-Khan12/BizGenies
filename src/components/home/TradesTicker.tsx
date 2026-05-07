const TRADES_ROW_1 = ['Pressure Washing 🚿', 'Landscaping 🌿', 'HVAC ❄️', 'Roofing 🏠', 'Plumbing 🔧', 'Electrician ⚡', 'Pest Control 🐜', 'Handyman 🔨'];
const TRADES_ROW_2 = ['Window Cleaning 🪟', 'Auto Detailing 🚗', 'Moving Companies 📦', 'Painting 🎨', 'Pool Construction 🏊', 'Tree Service 🌳', 'Carpet Cleaning 🧹', 'General Contracting 🏗️'];

export default function TradesTicker() {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <span className="tag">WHO WE WORK WITH</span>
        <h2 className="section-headline" style={{ color: 'var(--text)' }}>Serving All These Trades &amp; More</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="animate-ticker" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...TRADES_ROW_1, ...TRADES_ROW_1, ...TRADES_ROW_1].map((t, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '999px', padding: '.75rem 1.5rem', margin: '0 .75rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
        <div className="animate-ticker-slow" style={{ display: 'flex', whiteSpace: 'nowrap', animationDirection: 'reverse' }}>
          {[...TRADES_ROW_2, ...TRADES_ROW_2, ...TRADES_ROW_2].map((t, i) => (
            <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '999px', padding: '.75rem 1.5rem', margin: '0 .75rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
