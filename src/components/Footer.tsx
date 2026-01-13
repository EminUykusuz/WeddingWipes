"use client";

export default function Footer() {
  return (
    <footer style={{
      background: '#808080',
      color: '#fff',
      padding: '3rem 1.5rem 1rem'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'var(--color-gold)'
            }}>
              Wedding Wipes
            </h3>
            <p style={{ opacity: 0.85, fontSize: '0.9rem', lineHeight: 1.6 }}>
              Premium Bedrukte Vochtige Doekjes voor Uw Bedrijf
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Contact</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#cdac00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#cdac00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:info@weddingwipes.nl" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.85, wordBreak: 'break-word' }}>
                info@weddingwipes.nl
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#cdac00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://wa.me/31627141526" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontSize: '0.9rem', transition: 'opacity 0.3s' }}>
                +31 6 27141526
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Links</h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <a href="/privacy" style={{
                color: 'var(--color-gold)',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                Privacy
              </a>
              <a href="/voorwaarden" style={{
                color: 'var(--color-gold)',
                textDecoration: 'none',
                fontSize: '0.9rem'
              }}>
                Voorwaarden
              </a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          opacity: 0.7,
          fontSize: '0.85rem'
        }}>
          <p>© 2026 Wedding Wipes | Alle Rechten Voorbehouden</p>
        </div>
      </div>
    </footer>
  );
}
