// História Page — Alternating Timeline
const HistoriaPage = () => {
  const isMobile = window.innerWidth <= 768;
  const marcos = [
    { data: '2022–2023', titulo: 'Estruturação da Equipe', desc: 'Processo inicial de formação, estruturação e organização interna da equipe Baja Griffon, preparando o terreno para os projetos futuros.', lado: 'direita', destaque: true, tag: 'Fundação' },
    { data: '2024', titulo: 'O Primeiro Carro e Estreia', desc: 'Conclusão da fabricação do nosso primeiro protótipo e a grande estreia da equipe nas pistas durante a competição Regional de 2024.', lado: 'esquerda', tag: 'Desenvolvimento' },
    { data: '2024–2025', titulo: 'Aprendizado e Crescimento', desc: 'Período de intenso aprendizado prático e amadurecimento técnico com as competições, fortalecendo a cultura de engenharia e a união do grupo.', lado: 'direita', tag: 'Evolução' },
    { data: 'Final de 2025', titulo: 'Fim do Ciclo Vitinho', desc: 'Marca oficialmente o encerramento do ciclo do nosso primeiro carro, o Vitinho, abrindo espaço para uma nova geração de projetos e inovações da equipe.', lado: 'esquerda', tag: 'Transição' },
    { data: 'Janeiro de 2026', titulo: 'Início do BG02', desc: 'Com o Vitinho encerrando seu ciclo competitivo, a equipe lança oficialmente o desenvolvimento técnico do BG02. O novo projeto incorpora todas as lições aprendidas, com foco total em conformidade regulatória SAE e máxima competitividade.', lado: 'direita', destaque: true, tag: 'Novo Projeto' },
    { data: '2026', titulo: 'Regional Sudeste', desc: 'Participação no Regional Sudeste com o BG02, testando o veículo em condições de competição oficial pela primeira vez. Os dados coletados alimentam o refinamento final para a competição nacional.', lado: 'esquerda', tag: 'Competição 2026', futuro: true },
    { data: '2027', titulo: 'Competição Nacional Baja SAE', desc: 'Meta máxima do ciclo BG02: participar da Competição Nacional Baja SAE com o veículo mais preparado da história da equipe, consolidando a Baja Griffon como referência nacional em equipes de base universitária.', lado: 'direita', tag: 'Meta Nacional', futuro: true }
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* HERO */}
      <section className="resp-hero" style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.06), transparent)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>2022 → 2027</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(44px,6vw,80px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, margin: '0 0 24px' }}>
            Nossa <span style={{ color: '#F97316' }}>História.</span>
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>
            De uma ideia no Instituto Federal Fluminense à presença nas competições nacionais de engenharia.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: isMobile ? '48px 20px 64px' : '80px 48px 120px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          {/* Center line — desktop only */}
          {!isMobile && <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, #F97316, rgba(10,10,10,0.1) 85%, transparent)',
            transform: 'translateX(-50%)'
          }} />}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {marcos.map((m, i) => {
              if (isMobile) {
                return (
                  <div key={i} style={{ marginBottom: 16 }}>
                    <TimelineCard m={m} />
                  </div>
                );
              }
              const isDireita = m.lado === 'direita';
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 48, position: 'relative' }}>
                  <div style={{ flex: 1, paddingRight: isDireita ? 0 : 56, display: 'flex', justifyContent: 'flex-end' }}>
                    {!isDireita && <TimelineCard m={m} />}
                  </div>
                  <div style={{ width: 64, flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: m.futuro ? 'transparent' : (i % 2 === 0 ? '#F97316' : '#0A0A0A'),
                      border: m.futuro ? '2px dashed rgba(249,115,22,0.5)' : '4px solid rgba(10,10,10,0.15)',
                      boxShadow: m.destaque ? '0 0 0 6px rgba(249,115,22,0.07)' : 'none',
                    }} />
                  </div>
                  <div style={{ flex: 1, paddingLeft: isDireita ? 56 : 0 }}>
                    {isDireita && <TimelineCard m={m} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>);

};

const TimelineCard = ({ m }) =>
<div style={{
  background: '#fff',
  borderRadius: 8,
  padding: '28px 32px',
  border: m.destaque ? '1.5px solid rgba(249,115,22,0.3)' : '1px solid #eee',
  boxShadow: m.destaque ? '0 8px 32px rgba(249,115,22,0.07)' : '0 2px 12px rgba(0,0,0,0.04)',
  maxWidth: 440, width: '100%',
  transition: 'all 0.25s',
  opacity: m.futuro ? 0.7 : 1
}}
onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)';e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)';e.currentTarget.style.opacity = '1';}}
onMouseLeave={(e) => {e.currentTarget.style.transform = 'none';e.currentTarget.style.boxShadow = m.destaque ? '0 8px 32px rgba(249,115,22,0.07)' : '0 2px 12px rgba(0,0,0,0.04)';e.currentTarget.style.opacity = m.futuro ? '0.7' : '1';}}>
  
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
      <span style={{
      fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: m.destaque ? '#F97316' : '#999',
      background: m.destaque ? 'rgba(249,115,22,0.08)' : '#F0F0F0',
      padding: '3px 10px', borderRadius: 3
    }}>{m.tag}</span>
      {m.futuro && <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'rgba(249,115,22,0.7)', fontStyle: 'italic' }}>Em andamento</span>}
    </div>
    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 12, color: '#F97316', letterSpacing: '0.1em', marginBottom: 6, textTransform: 'uppercase' }}>{m.data}</div>
    <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.01em', margin: '0 0 12px' }}>{m.titulo}</h3>
    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.75, margin: 0 }}>{m.desc}</p>
  </div>;

Object.assign(window, { HistoriaPage, TimelineCard });