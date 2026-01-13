"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Wat is de minimale bestelhoeveelheid?",
    answer: "Minimaal 1000 stuks per bestelling."
  },
  {
    question: "Wat is de levertijd?",
    answer: "Standaard 2-4 weken na goedkeuring van uw ontwerp."
  },
  {
    question: "Kan ik de kleur wijzigen?",
    answer: "Ja, we bieden alle standaardkleuren en full-color printing aan."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: '5rem 1.5rem', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.3rem',
          fontWeight: 800,
          marginBottom: '3rem',
          color: 'var(--color-gray-dark)',
          textAlign: 'center'
        }}>
          Veelgestelde Vragen
        </h2>
        <div style={{
          display: 'grid',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              style={{
                background: 'var(--color-gray-light)',
                padding: '2rem',
                borderRadius: '12px',
                borderLeft: '4px solid var(--color-gold)',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
                borderLeftWidth: '6px'
              }}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <motion.h3 
                style={{
                  fontWeight: 700,
                  marginBottom: 0,
                  color: 'var(--color-purple)',
                  fontSize: '1.05rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>• {faq.question}</span>
                <motion.span
                  style={{ 
                    fontSize: '1.3rem', 
                    marginLeft: '1rem',
                    display: 'inline-block'
                  }}
                  animate={{ rotate: openIdx === idx ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▶
                </motion.span>
              </motion.h3>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{
                      overflow: 'hidden'
                    }}
                  >
                    <motion.p
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      style={{
                        color: 'var(--color-gray-dark)',
                        lineHeight: 1.6,
                        marginTop: '1rem',
                        paddingTop: '0.5rem'
                      }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://wa.me/31627141526?text=Hallo%20Wedding%20Wipes%20ik%20wil%20graag%20meer%20informatie" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{
            padding: '1rem 2.5rem',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Neem Contact Op
          </a>
        </div>
      </div>
    </section>
  );
}
