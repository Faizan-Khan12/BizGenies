'use client';
import { useState } from 'react';
import Link from 'next/link';

const BUSINESS_TYPES = [
  'Pressure Washing',
  'HVAC',
  'Landscaping',
  'Roofing',
  'Plumbing',
  'Auto Detailing',
  'Other',
];

// pravatar.cc avatar IDs that look like real contractor-type people
const AVATAR_IDS = [10, 11, 12, 13, 14];

export default function HeroSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="hero-section"
      style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="grain-overlay" />

      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.25,
          backgroundImage:
            'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'rotate(-5deg) scale(1.5)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="hero-grid"
        >
          {/* ── Left: copy ── */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div
              style={{
                display: 'inline-block',
                padding: '.3rem .9rem',
                marginBottom: '1.5rem',
                borderRadius: '999px',
                background: 'rgba(255,107,53,.1)',
                border: '1px solid rgba(255,107,53,.2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  color: 'var(--accent)',
                  fontSize: '.8rem',
                  fontWeight: 700,
                }}
              >
                MIAMI&apos;S #1 LOCAL SERVICE MARKETING AGENCY
              </span>
            </div>

            <h1
              className="hero-headline"
              style={{ color: 'var(--text)', marginBottom: '1.5rem' }}
            >
              Websites &amp; Marketing Systems That Actually Get Your Phone
              Ringing
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--muted)',
                marginBottom: '2.5rem',
                maxWidth: '36rem',
              }}
            >
              We build done-for-you marketing systems for local service
              businesses. Websites, automation, reviews, and SEO — without the
              agency BS.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
            >
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}
              >
                Book a Free Strategy Call
              </a>
              <Link
                href="/our-work"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--muted)',
                  fontWeight: 500,
                  transition: 'color .2s',
                }}
              >
                See Our Work →
              </Link>
            </div>

            {/* Social proof row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              {/* Real avatar photos */}
              <div style={{ display: 'flex' }}>
                {AVATAR_IDS.map((id, idx) => (
                  <div
                    key={id}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      border: '2px solid var(--bg)',
                      overflow: 'hidden',
                      marginLeft: idx === 0 ? 0 : '-10px',
                      flexShrink: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.pravatar.cc/100?img=${id}`}
                      alt="Client"
                      width={40}
                      height={40}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ))}
              </div>

              {/* Text + ratings */}
              <div>
                <p
                  style={{
                    fontSize: '.875rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    marginBottom: '.35rem',
                  }}
                >
                  Trusted by 200+ contractors across the US
                </p>
                {/* Only Google rating */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.35rem',
                    fontSize: '.8rem',
                    color: 'var(--muted)',
                  }}
                >
                  <span style={{ color: '#F5A623' }}>★</span>
                  <span>Google — 5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: lead-capture form ── */}
          <div
            id="contact"
            style={{
              background: 'var(--surface)',
              borderTop: '4px solid var(--accent)',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 24px 64px rgba(0,0,0,.4)',
            }}
          >
            <h3
              style={{
                fontSize: '1.75rem',
                color: 'var(--text)',
                marginBottom: '.5rem',
              }}
            >
              Get a Free Website Audit
            </h3>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '.9rem',
                marginBottom: '2rem',
              }}
            >
              We&apos;ll review your current online presence and tell you
              exactly what&apos;s costing you leads.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h4 style={{ color: 'var(--text)', marginBottom: '.5rem' }}>
                  Audit Request Received!
                </h4>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
                  We&apos;ll be in touch shortly to review your online presence.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input
                  className="input"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="input"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <select
                  className="input"
                  required
                  value={form.businessType}
                  onChange={(e) =>
                    setForm({ ...form, businessType: e.target.value })
                  }
                  style={{
                    color: form.businessType ? 'var(--text)' : 'var(--muted)',
                    cursor: 'pointer',
                  }}
                >
                  <option value="" disabled>
                    Select Business Type
                  </option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '.5rem', fontSize: '1.05rem' }}
                >
                  {loading ? (
                    <>
                      <span
                        className="animate-spin"
                        style={{
                          display: 'inline-block',
                          width: '1rem',
                          height: '1rem',
                          border: '2px solid #fff',
                          borderTopColor: 'transparent',
                          borderRadius: '50%',
                          marginRight: '.5rem',
                        }}
                      />
                      Submitting...
                    </>
                  ) : (
                    'Get My Free Audit →'
                  )}
                </button>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '.75rem',
                    color: 'var(--muted)',
                    marginTop: '.5rem',
                  }}
                >
                  No spam. No pressure. Just honest advice.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
