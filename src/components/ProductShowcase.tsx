"use client";

export default function ProductShowcase() {
  return (
    <section id="products" style={{ padding: '5rem 1.5rem', background: '#fff' }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div style={{
          height: '450px',
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
            fontSize: '2.3rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: 'var(--color-gray-dark)',
            lineHeight: 1.2
          }}>
            Bedrukte vochtige doekjes: fris, hygiënisch en opvallend
          </h2>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--color-gray-dark)',
            marginBottom: '1.5rem'
          }}>
            Wij zijn gespecialiseerd in bedrukte vochtige doekjes. Onze vochtige doekjes bevatten meestal alcohol en zijn daarom aantrekkelijk in gebruik.
          </p>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--color-gray-dark)',
            marginBottom: '2rem'
          }}>
            De bedrukking is volledig aanpasbaar naar uw wensen. Bij Wypes printen we de doekjes precies naar uw voorkeuren. Veel bedrijven gebruiken deze producten als meest favoriete geschenken.
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
