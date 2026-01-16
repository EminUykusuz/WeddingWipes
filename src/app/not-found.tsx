
"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  // Randomize content
  const titles = [
    "404",
    "Oeps, Weddingwipes mist deze pagina",
    "Verdwaald tussen de doekjes?",
    "Hier geen doekje voor het bloeden",
    "Weggeveegd door Weddingwipes",
    "Deze pagina is ervandoor…",
    "Deze pagina is al getrouwd"
  ];
  const texts = [
    "Zelfs onze Weddingwipes kunnen deze pagina niet schoonmaken.",
    "Deze pagina is weggeveegd. Probeer het opnieuw!",
    "Je bent op een plek waar zelfs onze doekjes niet komen.",
    "Oeps! Weddingwipes heeft deze pagina per ongeluk meegenomen.",
    "Soms is een pagina zo fris als een Weddingwipe... maar deze niet!",
    "Soms gaat er iets mis — zelfs op de mooiste dag. De pagina die je zoekt is er niet, maar onze liefde voor details wel. Klik hieronder en we brengen je weer op de juiste plek.",
    "Oeps… deze pagina heeft haar jawoord al gegeven en is niet meer te vinden. Gelukkig ben je bij Weddingwipes altijd op de juiste plek voor een stijlvol detail op tafel."
  ];
  const buttons = [
    "Terug naar een fris begin",
    "Ga terug naar Weddingwipes",
    "Naar de homepage",
    "Opnieuw vegen",
    "Naar de startpagina",
    "Terug naar Weddingwipes"
  ];
  const gifs = [
    "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW9yM2RtMGtiMmtxcWx2YTV5eHNkN3ZuZ25xM21vc2Y4dXJ4azJ0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vef4sn8zhnlC/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaml3a2g3NjZ1YTdhcmw3cGJnZ3l2ZG5xNDZtZTFiYXI0eDVpcDFvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs7SYIm3yiUbL0yc/giphy.gif"
  ];

  // Pick a random index
  const idx = Math.floor(Math.random() * titles.length);
  const gifIdx = Math.floor(Math.random() * gifs.length);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }}>
      <Navbar />
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#2e2a5b',
        textAlign: 'center',
        padding: '2rem 1rem 0 1rem',
        background: '#fff',
        width: '100%'
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.3rem', fontWeight: 900, marginBottom: '1.2rem', color: '#2e2a5b' }}>{titles[idx]}</h1>
          <p style={{ fontSize: '1.25rem', color: '#4a4a4a', marginBottom: '2.2rem' }}>{texts[idx]}</p>
          <Link href="/" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #ffe564 0%, #cdac00 100%)',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 8,
            padding: '0.9rem 2.2rem',
            textDecoration: 'none',
            fontSize: '1.1rem',
            boxShadow: '0 2px 12px #ffe56455',
            marginBottom: '2.5rem',
            transition: 'background 0.2s'
          }}>{buttons[idx]}</Link>
          <div style={{ margin: '2.5rem auto 0 auto', maxWidth: 900 }}>
            <img
              src={gifs[gifIdx]}
              alt="Feestje gif"
              style={{ width: '100%', maxWidth: 800, borderRadius: 18, boxShadow: '0 4px 32px #ffe56433', marginBottom: '2.5rem' }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
