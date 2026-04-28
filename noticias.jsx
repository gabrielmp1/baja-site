// Notícias Page
const NoticiasPage = () => {
  const noticias = [
    {
      categoria: 'Competição',
      data: 'Março 2025',
      titulo: 'Baja Griffon confirma presença no Regional Sudeste 2025',
      resumo: 'Após meses de preparação intensa, a equipe confirma inscrição na competição regional com o Vitinho totalmente revisado e dentro das normas SAE.',
      destaque: true,
    },
    {
      categoria: 'Projeto',
      data: 'Janeiro 2026',
      titulo: 'Início oficial do desenvolvimento do BG02',
      resumo: 'Com o ciclo competitivo do Vitinho encerrado, a equipe lança o projeto do segundo veículo com foco na Competição Nacional 2027.',
      destaque: false,
    },
    {
      categoria: 'Parcerias',
      data: 'Novembro 2024',
      titulo: 'Nova parceria com empresa de usinagem regional',
      resumo: 'Acordo de fornecimento de peças usinadas com empresa local fortalece o ecossistema de parceiros da Baja Griffon.',
      destaque: false,
    },
    {
      categoria: 'Institucional',
      data: 'Agosto 2024',
      titulo: 'Equipe apresenta resultados no Congresso Técnico do IFF',
      resumo: 'Membros da Baja Griffon apresentaram o relatório técnico do ciclo 2023–2024 no congresso académico interno do IFF Campos Centro.',
      destaque: false,
    },
    {
      categoria: 'Projeto',
      data: 'Junho 2024',
      titulo: 'Suspensão do Vitinho passa por redesenho completo',
      resumo: 'Com base nos dados coletados nas competições, o subsistema de Dinâmica Veicular revisou e otimizou toda a geometria de suspensão para a temporada 2025.',
      destaque: false,
    },
    {
      categoria: 'Seletivo',
      data: 'Março 2024',
      titulo: 'Processo seletivo 2024.1 recebe 47 candidatos',
      resumo: 'O maior processo seletivo da história da equipe encerrou com 47 inscritos. Doze novos membros foram integrados em diferentes subsistemas.',
      destaque: false,
    },
  ];

  const categorias = ['Todos', 'Competição', 'Projeto', 'Parcerias', 'Institucional', 'Seletivo'];
  const [catAtiva, setCatAtiva] = React.useState('Todos');

  const filtradas = catAtiva === 'Todos' ? noticias : noticias.filter(n => n.categoria === catAtiva);
  const [destaque, ...resto] = filtradas;

  const corCat = cat => ({ Competição: '#F97316', Projeto: '#0A0A0A', Parcerias: '#16a34a', Institucional: '#7c3aed', Seletivo: '#0284c7' }[cat] || '#555');

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.06), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>Notícias</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(44px,6vw,80px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, margin: '0 0 24px' }}>
            Tudo que<br /><span style={{ color: '#F97316' }}>acontece.</span>
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 480, lineHeight: 1.75, margin: 0 }}>
            Acompanhe as novidades, resultados e marcos da Baja Griffon.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <div style={{ borderBottom: '1px solid #eee', background: '#fff', position: 'sticky', top: 72, zIndex: 10 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {categorias.map(c => (
            <button key={c} onClick={() => setCatAtiva(c)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Oswald, sans-serif', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: catAtiva === c ? '#F97316' : '#888',
              padding: '16px 20px',
              borderBottom: catAtiva === c ? '2px solid #F97316' : '2px solid transparent',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>{c}</button>
          ))}
        </div>
      </div>

      <section style={{ padding: '64px 48px 96px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Notícia destaque */}
          {destaque && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', marginBottom: 32, cursor: 'pointer', transition: 'box-shadow 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ background: '#F8F8F8', minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 80, fontWeight: 700, color: 'rgba(0,0,0,0.04)', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>BG</span>
              </div>
              <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: corCat(destaque.categoria), background: `${corCat(destaque.categoria)}14`, padding: '3px 10px', borderRadius: 3 }}>{destaque.categoria}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#aaa' }}>{destaque.data}</span>
                </div>
                <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 28, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.1, margin: '0 0 16px' }}>{destaque.titulo}</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>{destaque.resumo}</p>
              </div>
            </div>
          )}

          {/* Grid de notícias */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {resto.map((n, i) => (
              <div key={i} style={{
                border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ background: '#F8F8F8', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 48, fontWeight: 700, color: 'rgba(0,0,0,0.05)', textTransform: 'uppercase' }}>BG</span>
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: corCat(n.categoria), background: `${corCat(n.categoria)}14`, padding: '3px 8px', borderRadius: 3 }}>{n.categoria}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#bbb' }}>{n.data}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 18, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.2, margin: '0 0 10px' }}>{n.titulo}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#777', lineHeight: 1.7, margin: 0 }}>{n.resumo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { NoticiasPage });
