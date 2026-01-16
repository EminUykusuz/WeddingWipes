"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="hero-section" style={{
      backgroundImage: 'url(/hero.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#fff'
    }}>
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(240, 200, 0, 0.08) 0%, rgba(255, 215, 0, 0.05) 100%)',
        zIndex: 1
      }} />
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px'
      }}>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeInUp}
          style={{ textAlign: 'center', maxWidth: '800px' }}
        >
          <motion.div
            style={{
              background: 'rgba(255,255,255,0.25)',
              display: 'inline-block',
              padding: '0.5rem 1.2rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
            whileHover={{ scale: 1.05 }}
          >
            Weddingwipes ✓
          </motion.div>
          <motion.h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.15,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
            variants={fadeInUp}
          >
                        Luxe vochtige doekjes, perfect voor jouw bruiloft!
          </motion.h1>
          <motion.p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              marginBottom: '2.5rem',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.95)',
              padding: '0 1rem'
            }}
            variants={fadeInUp}
          >
            Weddingwipes, bedrukt met jullie namen en een persoonlijke boodschap.
          </motion.p>
          <motion.a
            href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(46, 42, 91, 0.4), 0 4px 12px rgba(163, 196, 76, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Neem contact op
          </motion.a>
        </motion.div>
      </div>
      {/* Wave Divider */}
      <svg
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          width: '100%',
          height: '120px',
          filter: 'drop-shadow(0 -2px 3px rgba(0,0,0,0.1))'
        }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#fff" />
      </svg>
    </section>
  );
}
