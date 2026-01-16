"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Kan ik ook een bestelling nemen onder de 300 stuks?",
    answer: "Dit is mogelijk, maar de prijs per stuk zal hoger zijn. Neem contact met ons op voor meer informatie."
  },
  {
    question: "Wat is de levertijd?",
    answer: "Standaard 2-4 weken na goedkeuring van uw ontwerp."
  },
  {
    question: "Is Weddingwipes alleen voor bruiloften of ook voor andere evenementen?",
    answer: "Weddingwipes is perfect voor elke gelegenheid! Of het nu gaat om bruiloften, verjaardagen, bedrijfsfeesten of andere speciale evenementen, onze gepersonaliseerde vochtige doekjes voegen een uniek en attent detail toe."
  },
  {
    question: "Is het mogelijk om een tester te ontvangen?",
    answer: "Ja, we bieden testers aan zodat u de kwaliteit van onze producten kunt beoordelen voordat u een grotere bestelling plaatst. (Let op: deze zijn niet gepersonaliseerd.) Neem contact met ons op om een tester aan te vragen."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" style={{ padding: '5rem 1.5rem', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.3rem)',
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
                padding: 'clamp(1rem, 3vw, 2rem)',
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
      </div>
    </section>
  );
}
