
// Equipa Page
const EquipaPage = () => {
  const [activeSection, setActiveSection] = React.useState('projeto');

  const setores = [
    { id: 'powertrain', label: 'Powertrain', tipo: 'Operacional', cor: '#0A0A0A', icon: '⚙️', desc: 'Motor, transmissão e CVT. Responsável pela performance e confiabilidade mecânica do veículo em pistas severas.' },
    { id: 'eletrica', label: 'Elétrica e Eletrônica', tipo: 'Operacional', cor: '#0A0A0A', icon: '⚡', desc: 'Sistemas elétricos, instrumentação, telemetria e sistemas de ignição e controlo eletrônico.' },
    { id: 'dinamica', label: 'Dinâmica Veicular', tipo: 'Operacional', cor: '#0A0A0A', icon: '🏎', desc: 'Suspensão, freios, pneus e geometria. Otimiza a performance e estabilidade em diferentes terrenos.' },
    { id: 'chassi', label: 'Chassi e Estrutura', tipo: 'Operacional', cor: '#0A0A0A', icon: '🔩', desc: 'Projeto e fabricação do chassi tubular em aço, garantindo integridade estrutural e conformidade regulatória.' },
    { id: 'seguranca', label: 'Segurança e Ergonomia', tipo: 'Operacional', cor: '#0A0A0A', icon: '🛡️', desc: 'EPI, rollcage, cinto e ergonomia do piloto. Assegura proteção total conforme o regulamento SAE.' },
    { id: 'comercial', label: 'Comercial', tipo: 'Administrativo', cor: '#b45309', icon: '🤝', desc: 'Captação de patrocinadores, parcerias estratégicas e gestão de contratos com empresas apoiadoras.' },
    { id: 'gestao', label: 'Gestão', tipo: 'Administrativo', cor: '#b45309', icon: '📋', desc: 'Planeamento, cronograma de projeto, controlo financeiro e coordenação entre subsistemas.' },
    { id: 'marketing', label: 'Marketing', tipo: 'Administrativo', cor: '#b45309', icon: '📣', desc: 'Comunicação institucional, redes sociais, identidade visual e divulgação da equipe.' },
  ];

  const operacionais = setores.filter(s => s.tipo === 'Operacional');
  const administrativos = setores.filter(s => s.tipo === 'Administrativo');

  const scrollRef = React.useRef(null);

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: '#F8F9FC', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{
        position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(150deg, #0A0A0A 0%, #111 60%, #222 100%)',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)' , backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 32px 100px', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316' }} />
            <span style={{ color: '#F97316', fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>IFF · Campos Centro</span>
          </div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,5vw,68px)', color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 24px', maxWidth: 700 }}>
            A Equipe por trás<br />do <span style={{ color: '#F97316' }}>Baja Griffon.</span>
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 520, lineHeight: 1.75, margin: 0 }}>
            Subsistemas integrados que funcionam como uma empresa real, formando engenheiros prontos para o mercado global.
          </p>
        </div>

        {/* Animated scroll indicator */}
        <div onClick={scrollDown} style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer', zIndex: 2
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Explorar</span>
          <div style={{ animation: 'bounce 1.6s infinite ease-in-out' }}>
            <svg width="24" height="24" fill="none" stroke="rgba(249,115,22,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* PROJETO INFO */}
      <section ref={scrollRef} style={{ background: '#fff', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.08)', color: '#F97316', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 20 }}>Projetos Veiculares</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,3vw,44px)', color: '#0A0A0A', letterSpacing: '-0.025em', margin: '0 0 56px', lineHeight: 1.1 }}>Da consolidação à próxima geração.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {/* Vitinho card */}
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(10,18,42,0.08)', background: '#F8F9FC' }}>
              <div style={{ background: 'linear-gradient(135deg, #0A0A0A, #1a1a1a)', padding: '36px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Primeiro Protótipo</div>
                    <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 800, fontSize: 36, color: '#fff', margin: 0, letterSpacing: '-0.03em' }}>Vitinho</h3>
                  </div>
                  <div style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 100, padding: '5px 14px' }}>
                    <span style={{ color: '#F97316', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>2022–2026</span>
                  </div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />
                <div style={{ display: 'flex', gap: 8 }}>
                  {['Competitivo', 'Aprendizagem', 'Fundação'].map(t => (
                    <span key={t} style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: 11, padding: '4px 10px', borderRadius: 6 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: '32px 40px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#444', lineHeight: 1.8, margin: 0 }}>
                  O Vitinho representa o alicerce da Baja Griffon: o primeiro veículo a consolidar a equipe como uma força competitiva. Após anos de aprendizado intensivo e presença em competições regionais, o Vitinho encerra seu ciclo competitivo em <strong style={{ color: '#0A0A0A' }}>2026</strong>, cumprindo sua missão de formar a próxima geração de engenheiros.
                </p>
              </div>
            </div>

            {/* BG02 card */}
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(249,115,22,0.2)', background: '#F8F9FC' }}>
              <div style={{ background: 'linear-gradient(135deg, #c2410c, #F97316)', padding: '36px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Próxima Geração</div>
                    <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 800, fontSize: 36, color: '#fff', margin: 0, letterSpacing: '-0.03em' }}>BG02</h3>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 100, padding: '5px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'pulse 2s infinite' }} />
                    <span style={{ color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>Em Desenvolvimento</span>
                  </div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '20px 0' }} />
                <div style={{ display: 'flex', gap: 8 }}>
                  {['Nacional 2027', 'Conformidade', 'Competitividade'].map(t => (
                    <span key={t} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: 11, padding: '4px 10px', borderRadius: 6 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: '32px 40px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#444', lineHeight: 1.8, margin: '0 0 20px' }}>
                  Iniciado em <strong style={{ color: '#0A0A0A' }}>janeiro de 2026</strong>, o BG02 é projetado com foco absoluto na conformidade regulatória e competitividade nas competições nacionais. Cada decisão de engenharia é orientada por dados e pela meta de excelência no Regional Sudeste e na Competição Nacional Baja SAE de <strong style={{ color: '#0A0A0A' }}>2027</strong>.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ label: 'Início do Projeto', value: 'Jan 2026' }, { label: 'Meta Competitiva', value: 'Nac. 2027' }].map(m => (
                    <div key={m.label} style={{ background: '#fff', border: '1px solid rgba(249,115,22,0.12)', borderRadius: 10, padding: '14px 16px' }}>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{m.label}</div>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, color: '#F97316' }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SETORES */}
      <section style={{ background: '#F8F9FC', padding: '96px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(249,115,22,0.08)', color: '#F97316', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 16 }}>Subsistemas</div>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 800, fontSize: 'clamp(28px,3vw,44px)', color: '#0A0A0A', letterSpacing: '-0.025em', margin: 0, lineHeight: 1.1 }}>Organizado como<br />uma empresa real.</h2>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['operacional', 'administrativo'].map(tab => (
                <button key={tab} onClick={() => setActiveSection(tab)} style={{
                  background: activeSection === tab ? '#0A0A0A' : 'transparent',
                  color: activeSection === tab ? '#fff' : '#666',
                  border: '1.5px solid', borderColor: activeSection === tab ? '#0A0A0A' : 'rgba(10,18,42,0.15)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600,
                  padding: '10px 20px', borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s',
                  textTransform: 'capitalize'
                }}>{tab === 'operacional' ? 'Operacional' : 'Administrativo'}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 20 }}>
            {(activeSection === 'operacional' ? operacionais : administrativos).map((s) => (
              <div key={s.id} style={{
                background: '#fff', borderRadius: 16, padding: '32px 28px',
                border: '1px solid rgba(10,18,42,0.06)',
                boxShadow: '0 2px 16px rgba(10,18,42,0.04)',
                transition: 'all 0.25s', cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,18,42,0.09)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(10,18,42,0.04)'; e.currentTarget.style.borderColor = 'rgba(10,18,42,0.06)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: activeSection === 'operacional' ? 'rgba(10,18,42,0.06)' : 'rgba(249,115,22,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{s.icon}</div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: activeSection === 'operacional' ? '#666' : '#b45309', background: activeSection === 'operacional' ? 'rgba(10,18,42,0.05)' : 'rgba(249,115,22,0.08)', padding: '4px 10px', borderRadius: 100 }}>{s.tipo}</span>
                </div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, color: '#0A0A0A', margin: '0 0 10px', letterSpacing: '-0.02em' }}>{s.label}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { EquipaPage });
