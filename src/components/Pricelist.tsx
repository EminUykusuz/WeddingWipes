"use client";
import React from "react";

type Prijzen = {
  300: number;
  500: number;
  750: number;
  1000: number;
};

type PriceRow = {
  type: "Gevouwen" | "Opgerold";
  formaat: string;
  prijzen: Prijzen;
};


export default function Pricelist() {
  // Prijzen per type en aantal stuks
  // Kaartdata: type, prijs, aantal, formaat, gift
  const cards = [
    { type: "Opgerold", price: 315, aantal: 300, size: "30 x 30 cm", gift: false },
    { type: "Opgerold", price: 425, aantal: 500, size: "30 x 30 cm", gift: true },
    { type: "Opgerold", price: 487.5, aantal: 750, size: "30 x 30 cm", gift: true },
    { type: "Opgerold", price: 550, aantal: 1000, size: "30 x 30 cm", gift: true },
    { type: "Gevouwen", price: 330, aantal: 300, size: "23 x 25 cm", gift: false },
    { type: "Gevouwen", price: 450, aantal: 500, size: "23 x 25 cm", gift: true },
    { type: "Gevouwen", price: 525, aantal: 750, size: "23 x 25 cm", gift: true },
    { type: "Gevouwen", price: 600, aantal: 1000, size: "23 x 25 cm", gift: true },
  ];

  // SVG icons
  const sizeIcon = (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:8}}>
      <rect x="3" y="3" width="16" height="16" rx="3" stroke="#2e2a5b" strokeWidth="2" />
      <path d="M3 11H19" stroke="#2e2a5b" strokeWidth="2" />
      <path d="M11 3V19" stroke="#2e2a5b" strokeWidth="2" />
    </svg>
  );
  const giftIcon = (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:8}}>
      <rect x="4" y="8" width="14" height="10" rx="2" stroke="#2e2a5b" strokeWidth="2" />
      <path d="M4 8L11 3L18 8" stroke="#2e2a5b" strokeWidth="2" />
    </svg>
  );

  return (
    <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
      <h2 style={{
        fontSize: "clamp(2rem, 6vw, 3.5rem)",
        fontWeight: 900,
        textAlign: "center",
        marginBottom: "2.5rem",
        color: "#111"
      }}>Prijslijst</h2>
      {/* Geen knoppen meer, alles direct zichtbaar per kaart */}
      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <div className="pricelist-grid center" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          justifyItems: 'center',
          maxWidth: '1200px',
          width: '100%',
          gridAutoRows: '1fr'
        }}>
        {cards.map((card, i) => (
          <div key={i} className={`pricelist-card ${card.type === 'Opgerold' ? 'opgerold' : 'gevouwen'}`} style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            borderLeft: `6px solid ${card.type === 'Opgerold' ? '#ffe564' : '#2e2a5b'}`,
            padding: "2rem 1.5rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            transition: "box-shadow 0.2s, border 0.2s",
            cursor: "default",
            height: '100%'
          }}>
            <span style={{
              fontWeight: 900,
              fontSize: "2rem",
              color: "#111",
              marginBottom: "0.5rem"
            }}>{card.type}</span>
            <span style={{
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#111",
              marginBottom: "0.2rem",
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'inherit'
            }}>
              {`€${card.price.toFixed(2).replace('.', ',')}`}
              <span style={{ fontSize: '1rem', color: '#888', fontWeight: 400, fontFamily: 'inherit' }}>
                {`/ ${card.aantal} stuks`}
              </span>
            </span>
            <hr style={{width:'100%',border:'none',borderTop:'2px solid #2e2a5b1a',margin:'0.7rem 0 1rem 0'}} />
            <div style={{display:'flex',alignItems:'center',fontSize:'1rem',color:'#222',marginBottom:'0.5rem'}}>
              {sizeIcon} {card.size}
            </div>
            {card.gift && (
              <div style={{display:'flex',alignItems:'center',fontSize:'1rem',color:'#222'}}>
                {giftIcon} Gratis welkomstkaartje
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
