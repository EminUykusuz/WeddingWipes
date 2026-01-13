"use client";

import { useState } from 'react';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const linkStyle = (linkName: string) => ({
    color: hoveredLink === linkName ? '#cdac00' : '#2e2a5b',
    textDecoration: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    position: 'relative' as const,
    paddingBottom: '0.3rem',
    borderBottom: hoveredLink === linkName ? '2px solid #cdac00' : '2px solid transparent',
  });

  const buttonStyle = {
    background: 'linear-gradient(135deg, #cdac00 0%, #b89b00 100%)',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.8rem',
    borderRadius: '8px',
    fontWeight: 700,
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(205, 172, 0, 0.3)',
  };

  return (
    <nav style={{
      background: '#fff',
      boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      padding: '1rem 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src="/logo.jpg"
            alt="Wedding Wypes Logo"
            style={{
              height: '80px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
          <a 
            href="#products" 
            style={linkStyle('products')}
            onMouseEnter={() => setHoveredLink('products')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Producten
          </a>
          <a 
            href="#solutions" 
            style={linkStyle('solutions')}
            onMouseEnter={() => setHoveredLink('solutions')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Oplossingen
          </a>
          <a 
            href="#why" 
            style={linkStyle('why')}
            onMouseEnter={() => setHoveredLink('why')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Waarom Wij
          </a>
          <a 
            href="#faq" 
            style={linkStyle('faq')}
            onMouseEnter={() => setHoveredLink('faq')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            FAQ
          </a>
          <a href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie">
            <button
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(205, 172, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(205, 172, 0, 0.3)';
              }}
            >
              Bestel Monster
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
