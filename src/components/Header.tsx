export default function Header() {
  return (
    <header style={{
      background: 'var(--color-gold)',
      color: 'var(--color-white)',
      padding: '1rem 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{fontWeight: 700, fontSize: 28, letterSpacing: 1}}>
          Wypes<span style={{color: 'var(--color-gray-dark)'}}>.nl</span>
        </div>
        <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
          <a href="#neden" style={{fontWeight: 500, color: 'var(--color-white)', textDecoration: 'none'}}>Neden Wypes?</a>
          <a href="#cozumler" style={{fontWeight: 500, color: 'var(--color-white)', textDecoration: 'none'}}>Çözümler</a>
          <a href="#avantaj" style={{fontWeight: 500, color: 'var(--color-white)', textDecoration: 'none'}}>Avantajlar</a>
          <a href="#sss" style={{fontWeight: 500, color: 'var(--color-white)', textDecoration: 'none'}}>SSS</a>
          <a href="#iletisim" className="btn-gold" style={{marginLeft: 12, color: 'var(--color-white)'}}>İletişim</a>
        </nav>
      </div>
    </header>
  );
}
