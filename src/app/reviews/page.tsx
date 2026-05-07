import SiteLayout from '@/components/SiteLayout';
import { REVIEWS_DATA } from '@/components/home/ReviewsSection';

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>Real Contractors. Real Results.</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '36rem', margin: '0 auto' }}>
              200+ businesses trust Biz Genies to grow their online presence.
            </p>
          </div>

          {/* Masonry grid */}
          <div style={{ columns: '1', gap: '1.5rem' }} className="reviews-masonry">
            {REVIEWS_DATA.map((review, i) => (
              <div
                key={i}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: '12px', breakInside: 'avoid', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: 'linear-gradient(135deg, var(--surface-2), var(--border))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', flexShrink: 0 }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ display: 'flex', gap: '.2rem', marginBottom: '.25rem' }}>
                      {[1,2,3,4,5].map(n => <span key={n} style={{ color: 'var(--accent)', fontSize: '.85rem' }}>⭐</span>)}
                    </div>
                    <div style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--text)' }}>
                      {review.name} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>— {review.trade}</span>
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--text)', fontSize: '.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>&ldquo;{review.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) { .reviews-masonry { columns: 2 !important; } }
        @media (min-width: 1024px) { .reviews-masonry { columns: 3 !important; } }
      `}</style>
    </SiteLayout>
  );
}
