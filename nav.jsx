
// Nav component — exports to window
const NavBar = ({ currentPage, setPage }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { id: 'home', label: 'Início' },
    { id: 'historia', label: 'História' },
    { id: 'processo', label: 'Processo Seletivo' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'patrocinadores', label: 'Patrocinadores' },
    { id: 'membros', label: 'Membros' },
    { id: 'contato', label: 'Contato' },
  ];


  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(10,18,42,0.97)' : 'rgba(10,18,42,0.0)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.35s ease',
    borderBottom: scrolled ? '1px solid rgba(249,115,22,0.15)' : 'none'
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <button onClick={() => {setPage('home');setMenuOpen(false);}} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="escudo-nobg.png" alt="Baja Griffon" style={{ objectFit: 'contain', display: 'block', width: "100px", height: "100px" }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#fff', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, lineHeight: 1.1, letterSpacing: '0.04em', textTransform: 'uppercase' }}>BAJA GRIFFON</div>
            <div style={{ color: 'rgba(249,115,22,0.85)', fontFamily: 'DM Sans, sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>IFF · Campos Centro</div>
          </div>
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {links.slice(0, 6).map((l) =>
          <button key={l.id} onClick={() => setPage(l.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: currentPage === l.id ? '#F97316' : 'rgba(255,255,255,0.75)',
            fontFamily: 'DM Sans, sans-serif', fontSize: 13.5, fontWeight: 500,
            padding: '8px 12px', borderRadius: 6, letterSpacing: '0.01em',
            transition: 'color 0.2s',
            borderBottom: currentPage === l.id ? '2px solid #F97316' : '2px solid transparent'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
          onMouseLeave={(e) => e.currentTarget.style.color = currentPage === l.id ? '#F97316' : 'rgba(255,255,255,0.75)'}>
            {l.label}</button>
          )}
          <button onClick={() => setPage('contato')} style={{
            marginLeft: 8, background: '#F97316', border: 'none', cursor: 'pointer',
            color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: 13.5, fontWeight: 600,
            padding: '9px 20px', borderRadius: 8, letterSpacing: '0.02em', transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#ea580c'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#F97316'}>
            Contato</button>
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5, padding: 8
        }}>
          {[0, 1, 2].map((i) =>
          <div key={i} style={{ width: 24, height: 2, background: '#fff', borderRadius: 2,
            transition: 'all 0.3s',
            transform: menuOpen ? i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translate(5px,-5px)' : 'none'
          }} />
          )}
        </button>
      </div>

      {/* Mobile Menu — overlay fixo */}
      {menuOpen &&
      <div style={{
        position: 'fixed', top: 72, left: 0, right: 0, bottom: 0,
        background: '#0A0A0A', padding: '12px 28px 48px',
        display: 'flex', flexDirection: 'column', gap: 0,
        zIndex: 999, overflowY: 'auto',
        borderTop: '1px solid rgba(249,115,22,0.25)',
      }}>
          {links.map((l) =>
        <button key={l.id} onClick={() => {setPage(l.id);setMenuOpen(false);}} style={{
          background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          color: currentPage === l.id ? '#F97316' : 'rgba(255,255,255,0.85)',
          fontFamily: 'Oswald, sans-serif', fontSize: 20, fontWeight: 600,
          padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          transition: 'color 0.15s',
        }}>{l.label}</button>
        )}
        </div>
      }

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>);

};

Object.assign(window, { NavBar });