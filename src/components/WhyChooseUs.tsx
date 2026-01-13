"use client";

import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const images = [
    "/whychooseus/wetwipes1.png",
    "/whychooseus/wetwipes2.png"
  ];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPrev(current);
        setCurrent((prevIdx) => (prevIdx + 1) % images.length);
        setFade(true);
      }, 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, images.length]);

  return (
    <section id="why" style={{ paddingTop: '3rem', paddingBottom: '5rem', background: '#fff' }}>
      <div style={{
        width: '100%',
        height: '80px',
        background: 'linear-gradient(to right, #d4b896 0%, #e5c9a8 50%, #d4b896 100%)',
        clipPath: 'polygon(0 30%, 0 100%, 100% 100%, 100% 30%, 50% 0%)',
        marginBottom: '-1px'
      }} />
      <div style={{ background: '#e8d4b8', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.3rem',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'var(--color-purple)',
            textAlign: 'center'
          }}>
            Waarom Onze Vochtige Doekjes Opvallen
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
            marginTop: '3rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--color-gray-light) 0%, #e5e7eb 100%)',
              height: '400px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)'
            }}>
              <img
                src={images[prev]}
                alt="Önceki ıslak mendil görseli"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  transition: 'opacity 1.5s',
                  opacity: fade ? 0 : 1,
                  zIndex: 1,
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)'
                }}
                draggable={false}
              />
              <img
                src={images[current]}
                alt="Islak mendil görseli"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  transition: 'opacity 1.5s',
                  opacity: fade ? 1 : 0,
                  zIndex: 2,
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)'
                }}
                draggable={false}
              />
            </div>
            <div>
              <ul style={{ display: 'grid', gap: '1.5rem' }}>
                <li style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}>
                  <span style={{ fontSize: '1.3rem' }}>✓</span>
                  <span style={{ color: 'var(--color-purple)' }}>
                    Bereik uw doelgroep effectief
                  </span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}>
                  <span style={{ fontSize: '1.3rem' }}>✓</span>
                  <span style={{ color: 'var(--color-purple)' }}>
                    Zeer herkenbare branding
                  </span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}>
                  <span style={{ fontSize: '1.3rem' }}>✓</span>
                  <span style={{ color: 'var(--color-purple)' }}>
                    Milieuvriendelijke opties beschikbaar
                  </span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}>
                  <span style={{ fontSize: '1.3rem' }}>✓</span>
                  <span style={{ color: 'var(--color-purple)' }}>
                    Snelle levertijd
                  </span>
                </li>
              </ul>
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
          </div>
        </div>
      </div>
    </section>
  );
}
