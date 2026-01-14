import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Wedding Wipes',
  description: 'Lees de algemene voorwaarden van Wedding Wipes voor het bestellen van gepersonaliseerde vochtige doekjes. Informatie over bestellingen, prijzen, levering en garantie.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function VoorwaardenPage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Top Bar */}
      <div style={{
        background: '#cdac00',
        padding: '0.75rem 1.5rem',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 600
      }}>
        Bestel nu uw gepersonaliseerde vochtige doekjes - Gratis verzending bij bestellingen boven € 500
      </div>

      {/* Navbar */}
      <nav style={{
        background: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '1rem 1.5rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
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
          </Link>
          <Link href="/">
            <button style={{
              background: '#cdac00',
              color: '#fff',
              border: 'none',
              padding: '0.7rem 1.5rem',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Terug naar Home
            </button>
          </Link>
        </div>
      </nav>

      {/* Voorwaarden Content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '4rem 1.5rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2e2a5b',
          marginBottom: '2rem'
        }}>
          Algemene Voorwaarden
        </h1>

        <div style={{ color: '#333', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              1. Definities
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              In deze algemene voorwaarden wordt verstaan onder:
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li><strong>Wedding Wipes:</strong> de verkoper van gepersonaliseerde vochtige doekjes</li>
              <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die gebruik maakt van onze diensten</li>
              <li><strong>Product:</strong> de gepersonaliseerde vochtige doekjes en gerelateerde artikelen</li>
              <li><strong>Overeenkomst:</strong> de koopovereenkomst tussen Wedding Wipes en de klant</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              2. Toepasselijkheid
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten 
              tussen Wedding Wipes en de klant. Afwijkingen zijn alleen geldig indien deze schriftelijk door 
              Wedding Wipes zijn bevestigd.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              3. Bestellingen en Offertes
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>3.1</strong> Alle offertes zijn vrijblijvend, tenzij anders aangegeven.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>3.2</strong> Een overeenkomst komt tot stand na schriftelijke bevestiging door Wedding Wipes.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>3.3</strong> De minimale bestelhoeveelheid is 200 stuks.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              4. Prijzen en Betaling
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>4.1</strong> Alle prijzen zijn exclusief BTW, tenzij anders vermeld.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>4.2</strong> Gratis verzending geldt bij bestellingen boven € 500.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>4.3</strong> Betaling dient te geschieden binnen 14 dagen na factuurdatum.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>4.4</strong> Bij niet-tijdige betaling zijn wij gerechtigd de wettelijke rente in rekening te brengen.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              5. Levertijd
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>5.1</strong> De standaard levertijd bedraagt 3-4 weken na goedkeuring van het ontwerp.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>5.2</strong> Overschrijding van de levertijd geeft de klant geen recht op schadevergoeding 
              of ontbinding van de overeenkomst, tenzij de vertraging meer dan 4 weken bedraagt.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              6. Personalisatie en Ontwerp
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>6.1</strong> De klant is verantwoordelijk voor het aanleveren van het juiste logo en/of ontwerp.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>6.2</strong> Wedding Wipes levert een ontwerp ter goedkeuring voorafgaand aan productie.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>6.3</strong> Na goedkeuring van het ontwerp kunnen geen wijzigingen meer worden aangebracht.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>6.4</strong> De klant garandeert dat het aangeleverde materiaal geen inbreuk maakt op auteursrechten 
              of andere rechten van derden.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              7. Annulering en Retourneren
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>7.1</strong> Vanwege het op maat gemaakte karakter van de producten is annulering na 
              orderbevestiging niet meer mogelijk.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>7.2</strong> Gepersonaliseerde producten kunnen niet worden geretourneerd, tenzij er sprake is 
              van een fabricagefout.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>7.3</strong> Bij beschadiging tijdens transport dient de klant dit binnen 48 uur te melden.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              8. Garantie en Klachten
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>8.1</strong> Wedding Wipes garandeert producten van hoge kwaliteit.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>8.2</strong> Klachten dienen binnen 7 dagen na ontvangst schriftelijk te worden gemeld.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>8.3</strong> Bij gegronde klachten zullen de producten kosteloos worden vervangen.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              9. Aansprakelijkheid
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              <strong>9.1</strong> Wedding Wipes is niet aansprakelijk voor indirecte schade, zoals gevolgschade, 
              gederfde winst of gemiste besparingen.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>9.2</strong> De aansprakelijkheid is in alle gevallen beperkt tot het factuurbedrag.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              10. Intellectueel Eigendom
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Alle rechten van intellectuele eigendom op ontwerpen, foto's en andere materialen 
              berusten bij Wedding Wipes, tenzij anders overeengekomen.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              11. Toepasselijk Recht
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd 
              aan de bevoegde rechter in het arrondissement waar Wedding Wipes is gevestigd.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              12. Contact
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Voor vragen over deze voorwaarden kunt u contact met ons opnemen:
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>E-mail:</strong> info@weddingwipes.nl
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Telefoon:</strong> +31 6 27141526
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Laatst bijgewerkt:</strong> Januari 2026
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: '#808080',
        color: '#fff',
        padding: '3rem 1.5rem 1.5rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            © 2026 Wedding Wipes | Alle Rechten Voorbehouden
          </p>
        </div>
      </footer>
    </div>
  );
}
