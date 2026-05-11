'use client';
import SiteLayout from '@/components/SiteLayout';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';

const BUSINESS_TYPES = ['Pressure Washing', 'HVAC', 'Landscaping', 'Roofing', 'Plumbing', 'Auto Detailing', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', businessType: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' }} className="contact-grid">
            {/* Left */}
            <div>
              <span className="tag">LET&apos;S TALK</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: 'var(--text)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Book Your Free Strategy Call</h1>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '3rem' }}>In 20 minutes, we&apos;ll show you exactly what&apos;s costing you leads online and what we&apos;d do to fix it. No pressure, no commitment.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {([
                  { Icon: Phone, label: 'Phone', value: '(305) 600-5727' },
                  { Icon: Mail, label: 'Email', value: 'hello@bizgenies.com' },
                  { Icon: MapPin, label: 'Location', value: 'Miami, FL (Serving Nationwide)' },
                ] satisfies { Icon: LucideIcon; label: string; value: string }[]).map(item => {
                  const IconComponent = item.Icon;
                  return (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', color: 'var(--badge-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}><IconComponent size={20} /></div>
                    <div>
                      <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontFamily: 'Space Mono, monospace', marginBottom: '.15rem' }}>{item.label}</div>
                      <div style={{ color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: 'var(--form-surface)', border: '2px solid var(--accent-2)', borderRadius: '12px', padding: '2.5rem', boxShadow: 'var(--form-shadow)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: 'var(--text)', marginBottom: '.75rem', fontSize: '1.5rem' }}>Request Received!</h3>
                  <p style={{ color: 'var(--muted)' }}>We&apos;ll reach out within one business day to schedule your call.</p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--text)', marginBottom: '2rem' }}>Get In Touch</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <input className="input" type="text" placeholder="Full Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input className="input" type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    <input className="input" type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    <select className="input" required value={form.businessType} onChange={e => setForm({ ...form, businessType: e.target.value })} style={{ color: form.businessType ? 'var(--input-text)' : 'var(--input-placeholder)', cursor: 'pointer' }}>
                      <option value="" disabled>Select Business Type</option>
                      {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <textarea className="input" placeholder="Tell us about your business (optional)" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                    <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', fontSize: '1.05rem', padding: '1rem' }}>
                      {loading ? (
                        <><span className="animate-spin" style={{ display: 'inline-block', width: '1rem', height: '1rem', border: '2px solid var(--on-accent)', borderTopColor: 'transparent', borderRadius: '50%', marginRight: '.5rem' }} />Sending...</>
                      ) : 'Book My Free Call →'}
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '.75rem', color: 'var(--muted)' }}>No spam. No pressure. Just honest advice.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </SiteLayout>
  );
}
