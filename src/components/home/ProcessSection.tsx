const STEPS = [
  { num: '1', title: 'Strategy Call (20 min)', desc: 'We show you exactly what\'s broken in your current marketing and what we\'d do to fix it. No pressure — just real talk.' },
  { num: '2', title: 'We Build Everything (7–10 Days)', desc: 'Fill out a simple onboarding form. We handle the website, automations, SEO setup, review funnel — everything. You don\'t touch a thing.' },
  { num: '3', title: 'Launch & Grow', desc: 'We walk you through your new system in 25 minutes. After that? You just answer your phone and close jobs.' },
];

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="tag">THE PROCESS</span>
          <h2 className="section-headline" style={{ color: 'var(--text)' }}>From Zero to Booked Out in 3 Steps</h2>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'none' }} className="process-dashed-line" />
          <div className="grid-3" style={{ position: 'relative', zIndex: 1 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', background: 'var(--surface-2)', border: '4px solid var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: 'var(--accent)', marginBottom: '2rem', boxShadow: 'var(--shadow-soft)' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, maxWidth: '22rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
