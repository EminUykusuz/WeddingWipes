
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: "70vh",
        background: "#fff",
        color: "#2e2a5b",
        textAlign: "center",
        padding: "2rem 1rem 0 1rem"
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 900, marginBottom: "1.2rem", color: "#2e2a5b" }}>404</h1>
          <p style={{ fontSize: "1.25rem", color: "#4a4a4a", marginBottom: "2.2rem" }}>
            Ken je dat? Dat je op een feestje staat en denkt hier moet ik niet wezen? Dit is ook zoiets.
          </p>
          <Link href="/" style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #ffe564 0%, #cdac00 100%)",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 8,
            padding: "0.9rem 2.2rem",
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 12px #ffe56455",
            marginBottom: "2.5rem",
            transition: "background 0.2s"
          }}>Terug naar een beter feestje</Link>
          <div style={{ margin: "2.5rem auto 0 auto", maxWidth: 900 }}>
            <img
              src="/whychooseus/wetwipes2.png"
              alt="Saaie feestje"
              style={{ width: "100%", maxWidth: 800, borderRadius: 18, boxShadow: "0 4px 32px #ffe56433" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
