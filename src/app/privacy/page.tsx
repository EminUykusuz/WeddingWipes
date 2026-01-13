import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacybeleid - Wedding Wipes',
  description: 'Lees ons privacybeleid over hoe Wedding Wipes uw persoonlijke gegevens verzamelt, gebruikt en beschermt in overeenstemming met de AVG.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
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

      {/* Privacy Content */}
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
          Privacybeleid
        </h1>

        <div style={{ color: '#333', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              1. Introductie
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Wedding Wipes respecteert uw privacy en zet zich in voor de bescherming van uw persoonlijke gegevens. 
              Dit privacybeleid legt uit hoe wij uw persoonlijke informatie verzamelen, gebruiken en beschermen 
              wanneer u onze website bezoekt of gebruik maakt van onze diensten.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              2. Gegevens die Wij Verzamelen
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Wij kunnen de volgende soorten informatie van u verzamelen:
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
              <li>Bedrijfsinformatie (bedrijfsnaam, adres)</li>
              <li>Bestelgegevens en voorkeuren</li>
              <li>Communicatie met ons team</li>
              <li>Technische gegevens (IP-adres, browsertype)</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              3. Hoe Wij Uw Gegevens Gebruiken
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Wij gebruiken uw persoonlijke gegevens voor:
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>Het verwerken en afhandelen van uw bestellingen</li>
              <li>Het verstrekken van klantenservice en ondersteuning</li>
              <li>Het verbeteren van onze producten en diensten</li>
              <li>Het versturen van marketingcommunicatie (met uw toestemming)</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              4. Gegevensbescherming
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens 
              te beschermen tegen ongeautoriseerde toegang, wijziging, openbaarmaking of vernietiging.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              5. Cookies
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Onze website kan cookies gebruiken om uw ervaring te verbeteren. U kunt cookies beheren 
              via uw browserinstellingen.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              6. Uw Rechten
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Onder de AVG heeft u de volgende rechten:
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>Recht op inzage van uw persoonlijke gegevens</li>
              <li>Recht op rectificatie van onjuiste gegevens</li>
              <li>Recht op verwijdering van uw gegevens</li>
              <li>Recht op beperking van de verwerking</li>
              <li>Recht op overdraagbaarheid van uw gegevens</li>
              <li>Recht van bezwaar tegen verwerking</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              7. Contact
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Voor vragen over dit privacybeleid of om gebruik te maken van uw rechten, neem contact met ons op:
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>E-mail:</strong> info@weddingwipes.nl
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Telefoon:</strong> +31 6 27141526
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2e2a5b', marginBottom: '1rem' }}>
              8. Wijzigingen in dit Beleid
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. De meest recente versie 
              wordt altijd op deze pagina gepubliceerd.
            </p>
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
