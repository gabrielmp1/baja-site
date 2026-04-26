// Home Page — video hero + equipa integrada no scroll
const HomePage = ({ setPage }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {setTimeout(() => setVisible(true), 80);}, []);

  const fadeIn = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
  });

  const setores = [
  { id: 'powertrain', label: 'Powertrain', tipo: 'Operacional', icon: '⚙', desc: 'Motor, transmissão e CVT. Performance e confiabilidade mecânica em pistas severas.' },
  { id: 'eletrica', label: 'Elétrica & Eletrônica', tipo: 'Operacional', icon: '⚡', desc: 'Instrumentação, telemetria e sistemas de ignição e controlo eletrônico.' },
  { id: 'dinamica', label: 'Dinâmica Veicular', tipo: 'Operacional', icon: '◎', desc: 'Suspensão, freios e geometria. Estabilidade otimizada em diferentes terrenos.' },
  { id: 'chassi', label: 'Chassi & Estrutura', tipo: 'Operacional', icon: '▣', desc: 'Projeto e fabricação do chassi tubular em aço conforme regulamento SAE.' },
  { id: 'seguranca', label: 'Segurança & Ergonomia', tipo: 'Operacional', icon: '◈', desc: 'EPI, rollcage, cinto e ergonomia do piloto. Proteção total regulamentar.' },
  { id: 'comercial', label: 'Comercial', tipo: 'Administrativo', icon: '◉', desc: 'Captação de patrocinadores, parcerias estratégicas e gestão de contratos.' },
  { id: 'gestao', label: 'Gestão', tipo: 'Administrativo', icon: '◆', desc: 'Planeamento, cronograma, controlo financeiro e coordenação entre subsistemas.' },
  { id: 'marketing', label: 'Marketing', tipo: 'Administrativo', icon: '◐', desc: 'Comunicação institucional, redes sociais e identidade visual da equipa.' }];


  const [tabAtivo, setTabAtivo] = React.useState('Operacional');

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* ── HERO: vídeo full-screen ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 560, overflow: 'hidden' }}>

        {/* Vídeo / placeholder */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#0A0A0A',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Placeholder visual para o vídeo */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(135deg, #111 0px, #111 20px, #0d0d0d 20px, #0d0d0d 40px)',
            opacity: 0.8
          }} />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, opacity: 0.25 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 0, height: 0, borderTop: '14px solid transparent', borderBottom: '14px solid transparent', borderLeft: '24px solid #fff', marginLeft: 6 }} />
            </div>
            <span style={{ color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Insira o vídeo aqui</span>
          </div>
        </div>

        {/* Gradiente sobre o vídeo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)'
        }} />

        {/* Conteúdo sobreposto */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',

          maxWidth: 1280, margin: '0 auto', left: 0, right: 0, gap: "10px", padding: "0px 48px 80px"
        }}>
          <div style={{ ...fadeIn(0.1), display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, width: 'fit-content' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>BG02 em desenvolvimento · 2027</span>
          </div>

          <h1 style={{
            ...fadeIn(0.2),
            fontFamily: 'Oswald, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(52px, 9vw, 120px)',
            color: '#fff',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
            textTransform: 'uppercase',
          }}>
            Mais que<br />
            <span style={{ display: 'block', marginTop: '0.15em' }}>Um <span style={{ color: '#F97316' }}>veículo.</span></span>
          </h1>

          <p style={{
            ...fadeIn(0.35),
            fontFamily: 'DM Sans, sans-serif', fontSize: 17,
            color: 'rgba(255,255,255,0.7)', lineHeight: 1.7,
            maxWidth: 480, margin: '0 0 36px'
          }}>
            No IFF Campus Campos Centro, construímos engenheiros. O Baja Griffon é o nosso laboratório vivo.
          </p>

          <div style={{ ...fadeIn(0.5), display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#equipa" style={{
              background: '#F97316', color: '#fff', textDecoration: 'none',
              fontFamily: 'Oswald, sans-serif', fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
              textTransform: 'uppercase', padding: '14px 32px', borderRadius: 4, transition: 'background 0.2s',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#ea580c'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#F97316'}>
              Conhecer a Equipa</a>
            <button onClick={() => setPage('historia')} style={{
              background: 'transparent', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.35)', cursor: 'pointer',
              fontFamily: 'Oswald, sans-serif', fontSize: 15, fontWeight: 500, letterSpacing: '0.06em',
              textTransform: 'uppercase', padding: '14px 32px', borderRadius: 4, transition: 'border-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'}>
              Nossa História</button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 4,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6
        }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))', animation: 'lineDown 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── MISSÃO ── */}
      <section style={{ padding: '96px 48px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>Nossa Missão</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(32px,3.5vw,52px)', color: '#0A0A0A', letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1.05, margin: '0 0 0' }}>
              Formando engenheiros<br />para o mercado global.
            </h2>
          </div>
          <div>
            <div style={{ width: 3, height: 64, background: '#F97316', marginBottom: 28, borderRadius: 2 }} />
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: '#444', lineHeight: 1.85, margin: '0 0 20px' }}>
              A Baja Griffon transcende a construção de um veículo off-road — somos um <strong style={{ color: '#0A0A0A' }}>ecossistema de aprendizagem acelerada</strong> que integra estudantes de diversos níveis e instituições.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: '#444', lineHeight: 1.85, margin: 0 }}>
              Conectamos alunos do ensino médio técnico à graduação num laboratório onde a teoria é validada pelo rigor das pistas. Nossa missão é fomentar o <strong style={{ color: '#0A0A0A' }}>desenvolvimento tecnológico regional</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── VEÍCULOS ── */}
      <section style={{ padding: '96px 48px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Projetos Veiculares</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3vw,44px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: 0 }}>Da consolidação à próxima geração.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Vitinho */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
              <div style={{ background: '#0A0A0A', padding: '40px 44px' }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Primeiro Protótipo · 2022–2026</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 48, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>Vitinho</h3>
              </div>
              <div style={{ background: '#fff', padding: '36px 44px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.8, margin: 0 }}>
                  O primeiro veículo a consolidar a Baja Griffon como força competitiva. Após anos de presença em competições regionais, o Vitinho encerra seu ciclo em <strong style={{ color: '#0A0A0A' }}>2026</strong>, cumprindo sua missão de formar a próxima geração.
                </p>
              </div>
            </div>
            {/* BG02 */}
            <div style={{ borderRadius: 8, overflow: 'hidden', border: '1.5px solid #F97316' }}>
              <div style={{ background: '#F97316', padding: '40px 44px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Próxima Geração · 2026→</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: 2 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'pulse 2s infinite' }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#fff', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Em Dev.</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 48, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0 }}>BG02</h3>
              </div>
              <div style={{ background: '#fff', padding: '36px 44px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 24px' }}>
                  Iniciado em <strong style={{ color: '#0A0A0A' }}>janeiro de 2026</strong>, projetado com foco absoluto em conformidade regulatória SAE e competitividade nas competições nacionais de <strong style={{ color: '#0A0A0A' }}>2027</strong>.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ l: 'Início', v: 'Jan 2026' }, { l: 'Meta', v: 'Nac. 2027' }].map((m) =>
                  <div key={m.l} style={{ background: '#F8F8F8', border: '1px solid #eee', borderRadius: 4, padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{m.l}</div>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 20, color: '#F97316' }}>{m.v}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPA (integrada, âncora) ── */}
      <section id="equipa" style={{ padding: '96px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Subsistemas</div>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3vw,44px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: 0, lineHeight: 1.05 }}>Organizado como<br />uma empresa real.</h2>
            </div>
            <div style={{ display: 'flex', gap: 0, border: '1px solid #e8e8e8', borderRadius: 4, overflow: 'hidden' }}>
              {['Operacional', 'Administrativo'].map((tab) =>
              <button key={tab} onClick={() => setTabAtivo(tab)} style={{
                background: tabAtivo === tab ? '#0A0A0A' : '#fff',
                color: tabAtivo === tab ? '#fff' : '#666',
                border: 'none', cursor: 'pointer',
                fontFamily: 'Oswald, sans-serif', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em',
                textTransform: 'uppercase', padding: '11px 24px', transition: 'all 0.2s'
              }}>{tab}</button>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {setores.filter((s) => s.tipo === tabAtivo).map((s) =>
            <div key={s.id} style={{
              background: '#F8F8F8', borderRadius: 6, padding: '32px 28px',
              border: '1px solid #eee', transition: 'all 0.25s', cursor: 'default'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.background = '#fff';e.currentTarget.style.borderColor = '#F97316';e.currentTarget.style.transform = 'translateY(-3px)';e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.07)';}}
            onMouseLeave={(e) => {e.currentTarget.style.background = '#F8F8F8';e.currentTarget.style.borderColor = '#eee';e.currentTarget.style.transform = 'none';e.currentTarget.style.boxShadow = 'none';}}>
              
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 28, marginBottom: 20, opacity: 0.7 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 20, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 10px' }}>{s.label}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#F97316', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(32px,4vw,56px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 16px' }}>FAÇA PARTE DA EQUIPE.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: '0 0 36px' }}>Processo seletivo aberto para estudantes do IFF e instituições parceiras.</p>
          <button onClick={() => setPage('processo')} style={{
            background: '#fff', color: '#F97316', border: 'none', cursor: 'pointer',
            fontFamily: 'Oswald, sans-serif', fontSize: 15, fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', padding: '16px 40px', borderRadius: 4, transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {e.currentTarget.style.background = '#0A0A0A';e.currentTarget.style.color = '#fff';}}
          onMouseLeave={(e) => {e.currentTarget.style.background = '#fff';e.currentTarget.style.color = '#F97316';}}>
            Ver Processo Seletivo</button>
        </div>
      </section>

      <style>{`
        @keyframes lineDown { 0%,100%{opacity:0;transform:scaleY(0.3)} 50%{opacity:1;transform:scaleY(1)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>);

};

Object.assign(window, { HomePage });