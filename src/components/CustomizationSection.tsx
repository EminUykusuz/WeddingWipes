"use client";

import { motion } from "framer-motion";

export default function CustomizationSection() {
  return (
    <section style={{
      padding: "6rem 1.5rem",
      background: "linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container" style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.div
            style={{
              display: "inline-block",
              background: "rgba(139, 92, 246, 0.1)",
              padding: "0.5rem 1.5rem",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--color-purple)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            ✨ Tamamen Özelleştirilebilir
          </motion.div>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              marginBottom: "1.5rem",
              color: "var(--color-purple)",
              lineHeight: 1.2,
            }}
          >
            Breng Uw Droomontwerp Tot Leven
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#6B7280",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Pas elk detail aan zoals u wilt. Logo, boodschap, kleur en ontwerp zijn volledig onder uw controle.
          </p>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Sol Taraf - Örnek Ürün */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                background: "linear-gradient(135deg, #cdac00 0%, #FFA500 100%)",
                borderRadius: "24px",
                padding: "2rem",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="/ornek.png"
                alt="Örnek Kişiselleştirilmiş Islak Mendil"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "2rem",
                  background: "#fff",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--color-purple)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>✏️</span>
                100% Özelleştirilebilir
              </motion.div>
            </div>
          </motion.div>
          {/* Sağ Taraf - Özellikler */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: "grid", gap: "1.5rem" }}>
              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #cdac00 0%, #FFA500 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    flexShrink: 0,
                  }}
                >
                  🎨
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--color-gray-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Uw Eigen Logo
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Breng uw merk onder de aandacht, print uw logo en ontwerp precies zoals u wilt
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    flexShrink: 0,
                  }}
                >
                  ✍️
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--color-gray-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Uw Persoonlijke Boodschap
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Naam, datum, persoonlijke boodschap - voeg elke tekst toe die u wenst
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    flexShrink: 0,
                  }}
                >
                  🎭
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--color-gray-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Ontwerpvrijheid
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Kleuren, lettertype, lay-out - alles onder uw controle
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.button
              className="btn-gold"
              style={{
                width: "100%",
                marginTop: "2.5rem",
                padding: "1.25rem 2.5rem",
                fontWeight: 700,
                border: "none",
                borderRadius: "14px",
                cursor: "pointer",
                fontSize: "1.1rem",
                boxShadow: "0 8px 24px rgba(255, 215, 0, 0.3)",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(255, 215, 0, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              Hemen Tasarımınızı Oluşturun →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
