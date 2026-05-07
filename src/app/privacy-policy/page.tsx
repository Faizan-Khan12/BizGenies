import SiteLayout from '@/components/SiteLayout';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text)', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem' }}>Last updated: {new Date().getFullYear()}</p>

          {[
            { title: 'Information We Collect', body: 'We collect information you provide directly to us when you fill out forms on our website, including your name, phone number, email address, and business type.' },
            { title: 'How We Use Your Information', body: 'We use the information collected to respond to your inquiries, provide our services, send you relevant communications about our business offerings, and improve our website and services.' },
            { title: 'Information Sharing', body: 'We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information without your consent, except to trusted third parties who assist us in operating our website and conducting our business.' },
            { title: 'Data Security', body: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons.' },
            { title: 'Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us at hello@bizgenies.com or call (305) 600-5727.' },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '1rem' }}>{section.title}</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>{section.body}</p>
            </div>
          ))}

          <Link href="/" style={{ color: 'var(--accent)', fontWeight: 500 }}>← Back to Home</Link>
        </div>
      </div>
    </SiteLayout>
  );
}
