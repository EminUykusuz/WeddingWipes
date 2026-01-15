"use client";

import { FaWandMagicSparkles, FaClipboardCheck, FaGem } from 'react-icons/fa6';

export default function SolutionsSection() {
  return (
    <section id="solutions" style={{ padding: '5rem 1.5rem', background: 'var(--color-gray-light)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Intro Sectie */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'var(--color-gray-dark)'
          }}>
            Hoe werkt Weddingwipes?
          </h2>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#6B7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            Wij creëren gepersonaliseerde vochtige doekjes die perfect passen bij jouw bruiloft. Van ontwerp tot bezorging - elk detail wordt met zorg uitgevoerd
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Linker Kolom - Tekst */}
          <div>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: 800,
              marginBottom: '2rem',
              color: 'var(--color-gray-dark)'
            }}>
              Wat wij aanbieden
            </h3>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {/* Item 1 */}
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '8px',
                borderLeft: '5px solid #cdac00',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#cdac00',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #cdac00 0%, #f0c800 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(205, 172, 0, 0.2)'
                  }}>
                    <FaWandMagicSparkles style={{ fontSize: '1.3rem', color: '#fff' }} />
                  </div>
                  Volledige personalisatie
                </h4>
                <p style={{
                  color: '#6B7280',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Jullie namen en een klein tekst dat jullie zelf kiezen. Persoonlijk en uniek, helemaal naar jouw wens
                </p>
              </div>

              {/* Item 2 */}
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '8px',
                borderLeft: '5px solid #cdac00',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#cdac00',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #cdac00 0%, #f0c800 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(205, 172, 0, 0.2)'
                  }}>
                    <FaClipboardCheck style={{ fontSize: '1.3rem', color: '#fff' }} />
                  </div>
                  Met zorg aangevuld
                </h4>
                <p style={{
                  color: '#6B7280',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Stijlvolle welkomstkaartjes bij elke bestelling vanaf 500 stuks, als attent gebaar voor je gasten
                </p>
              </div>

              {/* Item 3 */}
              <div style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '8px',
                borderLeft: '5px solid #cdac00',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s'
              }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#cdac00',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #cdac00 0%, #f0c800 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(205, 172, 0, 0.2)'
                  }}>
                    <FaGem style={{ fontSize: '1.3rem', color: '#fff' }} />
                  </div>
                  Een verfijnd detail
                </h4>
                <p style={{
                  color: '#6B7280',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Perfect passend bij de uitstraling van jullie dag
                </p>
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
              display: 'inline-block',
              background: '#cdac00',
              color: '#fff',
              transition: 'all 0.3s'
            }}>
              Meer informatie aanvragen
            </a>
          </div>

          {/* Rechter Kolom - Visueel */}
          <div style={{
            background: '#fff',
            height: '450px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(60,60,60,0.10)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img
              src="/dilruba&usame.png"
              alt="Klaar voor je bruiloft"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0',
                boxShadow: 'none',
                border: 'none',
                background: 'transparent',
                zIndex: 2,
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
