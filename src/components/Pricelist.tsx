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
  const priceData: PriceRow[] = [
    {
      type: "Gevouwen",
      formaat: "20 x 20 cm.",
      prijzen: { 300: 1.00, 500: 0.80, 750: 0.60, 1000: 0.50 }
    },
    {
      type: "Gevouwen",
      formaat: "20 x 25 cm.",
      prijzen: { 300: 1.05, 500: 0.85, 750: 0.65, 1000: 0.55 }
    },
    {
      type: "Gevouwen",
      formaat: "23 x 25 cm.",
      prijzen: { 300: 1.10, 500: 0.90, 750: 0.70, 1000: 0.60 }
    },
    {
      type: "Opgerold",
      formaat: "25 x 25 cm.",
      prijzen: { 300: 1.00, 500: 0.80, 750: 0.60, 1000: 0.50 }
    },
    {
      type: "Opgerold",
      formaat: "30 x 30 cm.",
      prijzen: { 300: 1.05, 500: 0.85, 750: 0.65, 1000: 0.55 }
    },
    {
      type: "Opgerold",
      formaat: "30 x 36 cm.",
      prijzen: { 300: 1.10, 500: 0.90, 750: 0.70, 1000: 0.60 }
    }
  ];

  const aantallen = [300, 500, 750, 1000];
  const [selectedAantal, setSelectedAantal] = React.useState(300);

  const renderGrid = (type: "Gevouwen" | "Opgerold") => (
    <>
      <div
        style={{
          fontWeight: 800,
          color: "#a67c52",
          fontSize: "1.15rem",
          marginBottom: "1.2rem",
          letterSpacing: "0.01em"
        }}
      >
        {type}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          justifyItems: "center",
          marginBottom: "3rem"
        }}
      >
        {priceData
          .filter(row => row.type === type)
          .map(row => (
            <div
              key={row.type + row.formaat}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 2px 12px rgba(166,124,82,0.10)",
                border: "1.5px solid #f7e9d7",
                padding: "2rem 1.2rem 1.5rem 1.2rem",
                minWidth: "200px",
                maxWidth: "240px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.2s, border 0.2s",
                cursor: "default"
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(166,124,82,0.18)";
                e.currentTarget.style.border = "2px solid #a67c52";
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(166,124,82,0.10)";
                e.currentTarget.style.border = "1.5px solid #f7e9d7";
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  color: "#a67c52",
                  fontSize: "1.02rem",
                  marginBottom: "1.2rem"
                }}
              >
                {row.formaat}
              </span>

              <span
                style={{
                  fontWeight: 900,
                  color: "#a67c52",
                  fontSize: "2.1rem",
                  marginBottom: "0.2rem",
                  letterSpacing: "0.01em"
                }}
              >
                €
                {(row.prijzen[selectedAantal as keyof Prijzen] * selectedAantal)
                  .toFixed(2)
                  .replace(".", ",")}
              </span>

              <span
                style={{
                  fontWeight: 400,
                  color: "#a67c52",
                  fontSize: "0.98rem",
                  opacity: 0.7
                }}
              >
                voor {selectedAantal} stuks
              </span>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(166,124,82,0.10)",
          padding: "2.5rem 2rem",
          border: "1.5px solid #f7e9d7"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.7rem, 4vw, 2.5rem)",
            fontWeight: 900,
            marginBottom: "2.5rem",
            color: "#a67c52",
            textAlign: "center"
          }}
        >
          Prijslijst
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2.5rem"
          }}
        >
          {aantallen.map(aantal => (
            <button
              key={aantal}
              onClick={() => setSelectedAantal(aantal)}
              style={{
                padding: "0.6rem 1.3rem",
                borderRadius: "999px",
                border:
                  selectedAantal === aantal
                    ? "2px solid #a67c52"
                    : "1.5px solid #f7e9d7",
                background:
                  selectedAantal === aantal ? "#f7e9d7" : "#fff",
                color: "#a67c52",
                fontWeight: 700,
                fontSize: "1.05rem",
                cursor: "pointer"
              }}
            >
              {aantal}
            </button>
          ))}
        </div>

        {renderGrid("Gevouwen")}
        {renderGrid("Opgerold")}

        <p
          style={{
            marginTop: "2rem",
            color: "#a67c52",
            textAlign: "center",
            fontWeight: 500,
            fontSize: "1.05rem",
            background: "#fcf7f0",
            borderRadius: "8px",
            padding: "1rem 1.5rem",
            boxShadow: "0 1px 6px rgba(166,124,82,0.04)"
          }}
        >
          Alle prijzen zijn inclusief ontwerp, BTW en verzending binnen Nederland.
        </p>
      </div>
    </section>
  );
}
