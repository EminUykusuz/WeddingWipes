"use client";

export default function FeaturesGrid() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏥</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)' }}>
              Hijyen
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>
              Profesyonel olarak temizlenen
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👤</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)' }}>
              Kişisel
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>
              Şirket logonuzla
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)' }}>
              Çevre Dostu
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>
              Sürdürülebilir seçenekler
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👍</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)' }}>
              Takdir
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>
              En İyi Hediye Seçimi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
