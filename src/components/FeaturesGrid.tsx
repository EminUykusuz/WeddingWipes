"use client";

export default function FeaturesGrid() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>🏥</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Hygiëne
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Professioneel gereinigd
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>👤</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Persoonlijk
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Met uw bedrijfslogo
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>🌿</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Milieuvriendelijk
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Duurzame opties
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>👍</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Waardering
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Beste Cadeau Keuze
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
