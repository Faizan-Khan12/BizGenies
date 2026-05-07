import Link from 'next/link';
import Image from 'next/image';

export default function CtaSection() {
  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'var(--surface-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="grain-overlay" />
      {/* Left accent bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'var(--accent)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="cta-grid"
        >
          {/* Left — copy */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'var(--text)',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}
            >
              Ready to Stop Losing Leads?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted)',
                marginBottom: '2.5rem',
                maxWidth: '32rem',
              }}
            >
              Let&apos;s build your system. Book a free 20-minute strategy call
              and we&apos;ll show you exactly what we&apos;d do for your
              business.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                fontSize: '1.05rem',
                padding: '1rem 2rem',
                display: 'inline-flex',
                marginBottom: '1rem',
              }}
            >
              Book My Free Call →
            </Link>
            <p style={{ fontSize: '.875rem', color: 'var(--muted)' }}>
              No commitment. No pressure. Just results.
            </p>
          </div>

          {/* Right — dashboard image */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 32px 80px rgba(0,0,0,.5)',
            }}
          >
            <Image
              src="/dashboard-preview.png"
              alt="Biz Genies dashboard preview showing leads, calls, and reviews"
              width={900}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
