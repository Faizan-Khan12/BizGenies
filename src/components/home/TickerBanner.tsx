const STATS = [
  '200+ Active Clients',
  '7–10 Day Builds',
  '5-Star Rated on Google',
  'Miami-Based Team',
  'No Long-Term Contracts',
  'Results in 30 Days or Less',
];

export default function TickerBanner() {
  const items = [...STATS, ...STATS, ...STATS];
  return (
    <div style={{ width: '100%', background: 'var(--surface)', padding: '1rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', display: 'flex', whiteSpace: 'nowrap' }}>
      <div className="animate-ticker" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span style={{ fontFamily: 'Space Mono, monospace', color: 'var(--muted)', fontSize: '.875rem' }}>{item}</span>
            <span style={{ color: 'var(--accent)' }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
