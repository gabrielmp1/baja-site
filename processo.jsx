// Processo Seletivo Page
const ProcessoPage = () => {
  const fases = [
    {
      num: '01',
      titulo: 'Inscrição Online',
      periodo: 'Abertura do Edital',
      desc: 'Preencha o formulário de inscrição com seus dados académicos, curso e motivação. Em seguida, nossa equipa realiza a análise dos currículos e cartas de motivação enviados.',
      requisitos: ['Formulário online', 'Currículo atualizado', 'Carta de motivação', 'Sem experiência prévia exigida'],
    },
    {
      num: '02',
      titulo: 'Entrevista',
      periodo: '1ª semana após inscrições',
      desc: 'Conversa individual com líderes da equipa sobre motivação, disponibilidade e área de interesse. Valorizamos comprometimento, trabalho em equipa e vontade de aprender.',
      requisitos: ['15–20 minutos por candidato', 'Banca com 2–3 membros', 'Realizada no laboratório'],
    },
    {
      num: '03',
      titulo: 'Dinâmica em Grupo',
      periodo: '2ª semana após inscrições',
      desc: 'Atividade coletiva para avaliar colaboração, comunicação e raciocínio sob pressão. Os candidatos trabalham em equipa para resolver um desafio técnico ou criativo.',
      requisitos: ['Grupos de 4–6 pessoas', 'Duração: 60 minutos', 'Observação por membros seniores'],
    },
    {
      num: '04',
      titulo: 'Trainee',
      periodo: '3ª semana — integração',
      desc: 'Candidatos aprovados entram no período de trainee: 30 dias acompanhados por um membro sênior do subsistema designado. Ao fim do período, a integração é confirmada.',
      requisitos: ['30 dias de trainee', 'Mentoria garantida', 'Avaliação ao final do período', 'Designação por perfil e preferência'],
    },
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.06), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>Processo Seletivo</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(44px, 6vw, 80px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, margin: '0 0 24px' }}>
            Junte-se à<br /><span style={{ color: '#F97316' }}>equipa.</span>
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 520, lineHeight: 1.75, margin: 0 }}>
            Abrimos seleção periodicamente para estudantes do IFF e instituições parceiras. Veja abaixo como funciona o processo.
          </p>
        </div>
      </section>

      {/* STATUS BANNER */}
      <div style={{ background: '#F97316', padding: '20px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Inscrições em breve — Edital 2026.2</span>
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>Fique atento às nossas redes sociais para o anúncio oficial.</span>
        </div>
      </div>

      {/* FASES */}
      <section style={{ padding: '96px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Como funciona</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3vw,44px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: 0 }}>Quatro etapas.</h2>
          </div>

          {/* Timeline horizontal */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative', marginBottom: 48 }}>
            {/* Linha conectora */}
            <div style={{ position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(to right, #F97316, #0A0A0A)', zIndex: 0 }} />
            {fases.map((f, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: i === 0 ? '#F97316' : i === fases.length - 1 ? '#0A0A0A' : '#fff',
                  border: `3px solid ${i === 0 ? '#F97316' : '#0A0A0A'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, color: i === 0 || i === fases.length - 1 ? '#fff' : '#0A0A0A' }}>{f.num}</span>
                </div>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.04em', textAlign: 'center' }}>{f.titulo}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
            {fases.map((f, i) => (
              <div key={i} style={{
                border: i === 0 ? '1.5px solid #F97316' : '1px solid #eee',
                borderRadius: 8, overflow: 'hidden', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = i === 0 ? '#F97316' : '#eee'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ background: i === 0 ? '#F97316' : '#F8F8F8', padding: '24px 32px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 52, color: i === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(10,10,10,0.07)', lineHeight: 1 }}>{f.num}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: i === 0 ? 'rgba(255,255,255,0.7)' : '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8, textAlign: 'right', maxWidth: 120 }}>{f.periodo}</span>
                </div>
                <div style={{ padding: '24px 32px', background: '#fff' }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 20, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 12px' }}>{f.titulo}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#555', lineHeight: 1.75, margin: '0 0 20px' }}>{f.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {f.requisitos.map((r, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#F97316', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#444' }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 48px', background: '#F8F8F8', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Dúvidas Frequentes</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(24px,2.5vw,36px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 48px' }}>Perguntas frequentes.</h2>
          {[
            { q: 'Preciso ter experiência em engenharia automotiva?', r: 'Não. Valorizamos vontade de aprender, comprometimento e trabalho em equipa. A experiência técnica é desenvolvida dentro da equipa.' },
            { q: 'Posso fazer parte de mais de um subsistema?', r: 'Inicialmente você é alocado em um subsistema. Com o tempo, conforme disponibilidade e desempenho, é possível colaborar em outros setores.' },
            { q: 'Qual é o nível de comprometimento exigido?', r: 'Aproximadamente 10 horas semanais, incluindo reuniões, tarefas e presença no laboratório. Nos períodos de competição, a dedicação aumenta.' },
            { q: 'O processo seletivo é pago?', r: 'Não. A inscrição e todas as etapas do processo são totalmente gratuitas.' },
          ].map((item, i) => (
            <FaqItem key={i} q={item.q} r={item.r} />
          ))}
        </div>
      </section>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  );
};

const FaqItem = ({ q, r }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e8e8e8', padding: '20px 0', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 16, color: '#0A0A0A', margin: 0 }}>{q}</h3>
        <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', transform: open ? 'rotate(45deg)' : 'none', background: open ? '#F97316' : 'transparent', borderColor: open ? '#F97316' : '#ddd' }}>
          <svg width="12" height="12" fill="none" stroke={open ? '#fff' : '#888'} strokeWidth="2" strokeLinecap="round"><path d="M6 2v8M2 6h8"/></svg>
        </div>
      </div>
      {open && <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.75, margin: '14px 0 0' }}>{r}</p>}
    </div>
  );
};

Object.assign(window, { ProcessoPage, FaqItem });
