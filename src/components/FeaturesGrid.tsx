"use client";

import { FaHandSparkles, FaUser, FaGift, FaStar } from 'react-icons/fa';

export default function FeaturesGrid() {
  return (
    <section style={{ padding: 'clamp(2rem, 5vw, 5rem) clamp(1rem, 3vw, 1.5rem)', background: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div className="features-grid" style={{ gap: 'clamp(0.5rem, 2vw, 1rem)' }}>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FaHandSparkles style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#cdac00' }} />
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Verzorging
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Verfijnde hygiëne voor uw gasten
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FaUser style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#cdac00' }} />
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Persoonlijk
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Persoonlijk ontworpen met jullie namen
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FaGift style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#cdac00' }} />
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Extra
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Welkomstkaartje als attent cadeau vanaf 500 stuks
            </p>
          </div>
          <div style={{
            textAlign: 'center',
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FaStar style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#cdac00' }} />
            </div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-gray-dark)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              Beleving
            </h3>
            <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#6B7280' }}>
              Een detail dat bijblijft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
