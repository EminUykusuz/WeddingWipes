"use client";

export default function ProductShowcase() {
  return (
    <section id="products" style={{ padding: '5rem 1.5rem', background: '#fff' }}>
        <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <div className="product-image" style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <img
            src="/WhatsApp Image 2026-01-13 at 16.29.21.jpeg"
            alt="Gepersonaliseerde Bedrukte Vochtige Doekjes"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: 'var(--color-gray-dark)',
            lineHeight: 1.2
          }}>
            Voeg een persoonlijk en stijlvol accent toe aan jullie bruiloft
          </h2>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--color-gray-dark)',
            marginBottom: '1.5rem'
          }}>
            Onze bedrukte Weddingwipes zijn het perfecte verfijnde detail voor jullie dag. Elk doekje wordt voorzien van jullie namen en een persoonlijke tekst, volledig afgestemd op jullie wensen. Zo combineer je frisheid, hygiëne en elegantie op een subtiele manier.
          </p>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--color-gray-dark)',
            marginBottom: '2rem'
          }}>
            Weddingwipes zijn niet alleen praktisch, maar dragen ook bij aan de beleving en sfeer van jullie bruiloft. Een attent gebaar op elke tafel dat gasten waarderen én onthouden.
          </p>
          <a href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{
            padding: '0.875rem 2rem',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Neem Contact Op
          </a>
        </div>
      </div>
    </section>
  );
}
