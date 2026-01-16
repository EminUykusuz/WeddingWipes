"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Update these font values to match the actual font-family names loaded in your project (Google Fonts, local, etc.)
const fontOptions = [
  { label: "Bidena trial", value: "'Bidena trial', sans-serif" },
  { label: "Great vibes", value: "'Great Vibes', cursive" },
  { label: "Soralize", value: "'Soralize', sans-serif" },
  { label: "Merona Island", value: "'Merona Island', cursive" },
  { label: "Rankut", value: "'Rankut', sans-serif" },
  { label: "Sephir", value: "'Sephir', serif" },
  { label: "Italianno", value: "'Italianno', cursive" },
];

type AutoScaleTextProps = {
  text: string;
  font: string;
  maxFontSize: number;
  minFontSize: number;
  color?: string;
  fontWeight?: number | string;
  style?: React.CSSProperties;
};

function AutoScaleText({ text, font, maxFontSize, minFontSize, color = '#8A7500', fontWeight = 700, style = {} }: AutoScaleTextProps) {
  let fontSize = maxFontSize;
  if (text.length > 22) fontSize = maxFontSize * 0.8;
  if (text.length > 32) fontSize = maxFontSize * 0.65;
  if (fontSize < minFontSize) fontSize = minFontSize;
  return (
    <span
      style={{
        fontFamily: font,
        fontSize: fontSize + 'rem',
        color,
        fontWeight,
        ...style,
      }}
    >
      {text}
    </span>
  );
}

export default function Configurator() {
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [font, setFont] = useState(fontOptions[0].value);
  // Per-font style tweaks for best appearance
  const fontStyleTweaks: Record<string, React.CSSProperties> = {
    "'Bidena trial', sans-serif": { fontWeight: 700, letterSpacing: 1.5 },
    "'Great Vibes', cursive": { fontWeight: 400, letterSpacing: 0.5, fontStyle: 'italic' },
    "'Soralize', sans-serif": { fontWeight: 700, letterSpacing: 1 },
    "'Merona Island', cursive": { fontWeight: 400, letterSpacing: 0.5 },
    "'Rankut', sans-serif": { fontWeight: 700, letterSpacing: 1 },
    "'Sephir', serif": { fontWeight: 700, letterSpacing: 1 },
    "'Italianno', cursive": { fontWeight: 400, letterSpacing: 0.5, fontStyle: 'italic' },
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <Navbar />
      {/* Title above the grid */}
<div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 1rem",
    marginTop: "2.5rem",
    marginBottom: "1.5rem",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: 1100,
      display: "flex",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        fontWeight: 700,
        color: "#222",
        textAlign: "center",
        margin: 0,
      }}
    >
      Stel je eigen Weddingwipe samen
    </h2>
  </div>
</div>

      <main
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 1rem',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            maxWidth: 1100,
            width: '100%',
            alignItems: 'flex-start',
          }}
          className="ww-configurator-grid"
        >
          {/* Left: Product photo */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                border: '3px solid #ffe564',
                borderRadius: 16,
                overflow: 'hidden',
                width: '100%',
                maxWidth: 600,
                background: '#fff',
                marginBottom: 24,
                position: 'relative',
                aspectRatio: '4/3',
                minHeight: 220,
                boxSizing: 'border-box',
                transition: 'max-width 0.3s, min-height 0.3s',
              }}
              className="ww-mockup-container"
            >
              <img
                src="/emptywipe.png"
                alt="Lege Weddingwipe op bord"
                style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: 420, transform: 'scale(1.5)' }}
              />
              {/* Overlayed text */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '53%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  zIndex: 2,
                  padding: '0 8%',
                  gap: 2,
                }}
              >
                <div style={{
                  maxWidth: '80%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  textAlign: 'center',
                }}>
                  <AutoScaleText
                    text={name ? name : 'Sara & Stan'}
                    font={font}
                    maxFontSize={2.5}
                    minFontSize={1.1}
                    color="#8A7500"
                    fontWeight={fontStyleTweaks[font]?.fontWeight ?? 700}
                    style={{
                      marginBottom: 2,
                      letterSpacing: fontStyleTweaks[font]?.letterSpacing ?? 1,
                      fontStyle: fontStyleTweaks[font]?.fontStyle,
                      textShadow: '0 1px 8px #fff, 0 0px 2px #fff',
                      lineHeight: 1.1,
                    }}
                  />
                </div>
                <div style={{
                  maxWidth: '70%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'normal',
                  width: '100%',
                  textAlign: 'center',
                }}>
                  <AutoScaleText
                    text={subtitle ? subtitle : 'Jouw speciale dag'}
                    font={'Arial, Helvetica, sans-serif'}
                    maxFontSize={0.85}
                    minFontSize={0.65}
                    color="#8A7500"
                    fontWeight={400}
                    style={{ letterSpacing: 0.2, textShadow: '0 1px 8px #fff, 0 0px 2px #fff' }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right: Form and preview */}
          <div style={{ width: '100%', maxWidth: 440 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label style={{ fontWeight: 700, color: '#222', fontSize: '1.1rem', marginBottom: 6, display: 'block' }}>Namen</label>
                <input
                  type="text"
                  placeholder="Voer hier de namen in"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 0',
                    border: 'none',
                    borderBottom: '2px solid #ffe564',
                    borderRadius: 0,
                    fontSize: '1.1rem',
                    marginBottom: 18,
                    outline: 'none',
                    color: '#b89b00',
                    background: 'transparent',
                    boxShadow: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>
              <div>
                <label style={{ fontWeight: 700, color: '#222', fontSize: '1.1rem', marginBottom: 6, display: 'block' }}>Onderschrift</label>
                <input
                  type="text"
                  placeholder="Voer hier het onderschrift in"
                  value={subtitle}
                  onChange={e => setSubtitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 0',
                    border: 'none',
                    borderBottom: '2px solid #ffe564',
                    borderRadius: 0,
                    fontSize: '1.1rem',
                    outline: 'none',
                    color: '#b89b00',
                    background: 'transparent',
                    boxShadow: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>
              <div>
                <label style={{ fontWeight: 700, color: '#222', fontSize: '1.1rem', marginBottom: 10, display: 'block' }}>Lettertype</label>
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                    marginBottom: 18,
                    flexWrap: 'wrap',
                  }}
                  className="ww-font-slider"
                >
                  {fontOptions.map(opt => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setFont(opt.value)}
                      style={{
                        padding: '0.7rem 1.5rem',
                        border: font === opt.value ? '2px solid #ffe564' : '2px solid #eee',
                        background: font === opt.value ? '#fffbe6' : '#fff',
                        borderRadius: 8,
                        fontWeight: 700,
                        fontFamily: opt.value,
                        fontSize: '1.1rem',
                        color: '#b89b00',
                        cursor: 'pointer',
                        boxShadow: font === opt.value ? '0 2px 8px #ffe56455' : 'none',
                        transition: 'all 0.2s',
                        minWidth: 120,
                        flex: '0 0 auto',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Responsive styles */}
      <style>{`
        /* Mobile: <600px */
        @media (max-width: 599px) {
          .ww-configurator-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
            max-width: 100% !important;
          }
          .ww-mockup-container {
            max-width: 100vw !important;
            min-height: 140px !important;
            aspect-ratio: 1/1 !important;
          }
          .ww-font-slider {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            gap: 8px !important;
            padding-bottom: 4px !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: thin !important;
          }
        }
        /* Tablet: 600px–900px */
        @media (min-width: 600px) and (max-width: 900px) {
          .ww-configurator-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2.5rem !important;
            max-width: 100% !important;
          }
          .ww-mockup-container {
            max-width: 90vw !important;
            min-height: 180px !important;
            aspect-ratio: 5/4 !important;
          }
          .ww-font-slider {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            gap: 10px !important;
            padding-bottom: 4px !important;
            -webkit-overflow-scrolling: touch !important;
            scrollbar-width: thin !important;
          }
        }
        /* Desktop: >900px */
        @media (min-width: 901px) {
          .ww-mockup-container {
            max-width: 600px !important;
            min-height: 220px !important;
            aspect-ratio: 4/3 !important;
          }
          .ww-font-slider {
            flex-wrap: wrap !important;
            overflow-x: visible !important;
            gap: 12px !important;
          }
        }
        .ww-font-slider::-webkit-scrollbar {
          height: 6px;
        }
        .ww-font-slider::-webkit-scrollbar-thumb {
          background: #ffe564;
          border-radius: 4px;
        }
      `}</style>
      <Footer />
    </div>
  );
}