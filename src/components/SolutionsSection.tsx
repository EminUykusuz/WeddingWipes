"use client";

export default function SolutionsSection() {
  return (
    <section id="solutions" style={{ padding: '5rem 1.5rem', background: 'var(--color-gray-light)' }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{
            fontSize: '2.3rem',
            fontWeight: 800,
            marginBottom: '2.5rem',
            color: 'var(--color-gray-dark)'
          }}>
            Onze Oplossingen
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginTop: '0.3rem' }}>✓</div>
              <div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'var(--color-gray-dark)' }}>
                  Effectief Bereik
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Doorbreek de reclamechaos met vochtige doekjes
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginTop: '0.3rem' }}>✓</div>
              <div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'var(--color-gray-dark)' }}>
                  Zeer Herkenbaar
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Uw merk blijft langer bij uw doelgroep
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginTop: '0.3rem' }}>✓</div>
              <div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.3rem', color: 'var(--color-gray-dark)' }}>
                  Hoge Waarde
                </h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Een waardevol product dat klanten zeker zullen gebruiken
                </p>
              </div>
            </div>
          </div>
          <a href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{
            marginTop: '2rem',
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
        <div style={{
          background: 'linear-gradient(135deg, var(--color-gold) 0%, #f0c800 100%)',
          height: '450px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5rem'
        }}>
          📦
        </div>
      </div>
    </section>
  );
}
