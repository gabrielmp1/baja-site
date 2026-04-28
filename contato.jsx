// Contato Page
const ContatoPage = () => {
  const isMobile = window.innerWidth <= 768;
  const [form, setForm] = React.useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [enviado, setEnviado] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {setLoading(false);setEnviado(true);}, 1200);
  };

  const canais = [
  { label: 'Instagram', handle: '@bajagriffon', link: 'https://instagram.com', icon: 'IG' },
  { label: 'LinkedIn', handle: '@bajagriffon', link: 'https://linkedin.com', icon: 'IN' },
  { label: 'E-mail', handle: '@bajagriffon', link: 'mailto:iffgriffonracing@gmail.com', icon: '@' }];


  const assuntos = ['Patrocínio / Parceria', 'Processo Seletivo', 'Imprensa / Mídia', 'Dúvida Geral', 'Outro'];

  const inputStyle = {
    width: '100%', fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#0A0A0A',
    background: '#F8F8F8', border: '1.5px solid #eee', borderRadius: 6,
    padding: '14px 18px', outline: 'none', transition: 'border-color 0.2s',
    appearance: 'none'
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* HERO */}
      <section className="resp-hero" style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.06), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>Contato</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(44px,6vw,80px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, margin: '0 0 24px' }}>
            Fale com<br /><span style={{ color: '#F97316' }}>A EQUIPE.</span>
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 460, lineHeight: 1.75, margin: 0 }}>
            Para patrocínios, parcerias, imprensa ou qualquer dúvida — estamos disponíveis.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section style={{ padding: '80px 48px 96px', background: '#fff' }}>
        <div className="resp-grid" style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>

          {/* Canais */}
          <div>
            <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Canais</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 28, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 36px' }}>Onde nos encontrar.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
              {canais.map((c, i) =>
              <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none',
                border: '1px solid #eee', borderRadius: 8, padding: '18px 24px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#F97316';e.currentTarget.style.background = '#FEFAF7';}}
              onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#eee';e.currentTarget.style.background = '#fff';}}>
                
                  <div style={{ width: 44, height: 44, borderRadius: 6, background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: '0.04em' }}>{c.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#0A0A0A', fontWeight: 500 }}>{c.handle}</div>
                  </div>
                </a>
              )}
            </div>

            {/* Localização */}
            <div style={{ padding: '28px', background: '#F8F8F8', borderRadius: 8, border: '1px solid #eee' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 14, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Localização</div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.75, margin: 0 }}>
                Instituto Federal Fluminense<br />
                Campus Campos Centro<br />
                Rua Dr. Siqueira, 273 - Parque Dom Bosco,<br />
                Campos dos Goytacazes - RJ, 28030-130<br />
                Laboratório de Projetos Automotivos<br />
                <span style={{ color: '#F97316', fontWeight: 500 }}>→ Toca do Grifo - B55</span>
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Formulário</div>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 28, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 36px' }}>Envie uma mensagem.</h2>

            {enviado ?
            <div style={{ border: '1.5px solid #F97316', borderRadius: 8, padding: '48px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 24, color: '#0A0A0A', textTransform: 'uppercase', margin: '0 0 10px' }}>Mensagem enviada!</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#666', lineHeight: 1.7, margin: '0 0 24px' }}>Entraremos em contato em breve. Obrigado pelo interesse.</p>
                <button onClick={() => {setEnviado(false);setForm({ nome: '', email: '', assunto: '', mensagem: '' });}} style={{ background: 'none', border: '1.5px solid #eee', borderRadius: 6, padding: '10px 24px', fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#888', cursor: 'pointer' }}>Enviar outra mensagem</button>
              </div> :

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="resp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>Nome</label>
                    <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome completo" required style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#F97316'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'} />
                  
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>E-mail</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" required style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#F97316'}
                  onBlur={(e) => e.target.style.borderColor = '#eee'} />
                  
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>Assunto</label>
                  <select name="assunto" value={form.assunto} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={(e) => e.target.style.borderColor = '#F97316'}
                onBlur={(e) => e.target.style.borderColor = '#eee'}>
                  
                    <option value="">Selecione um assunto</option>
                    {assuntos.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>Mensagem</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Descreva sua mensagem..." required rows={6} style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
                onFocus={(e) => e.target.style.borderColor = '#F97316'}
                onBlur={(e) => e.target.style.borderColor = '#eee'} />
                
                </div>
                <button type="submit" disabled={loading} style={{
                background: loading ? '#ccc' : '#F97316', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'Oswald, sans-serif', fontSize: 15, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '16px 40px', borderRadius: 6, transition: 'background 0.2s', alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => {if (!loading) e.currentTarget.style.background = '#ea580c';}}
              onMouseLeave={(e) => {if (!loading) e.currentTarget.style.background = '#F97316';}}>
                {loading ? 'Enviando...' : 'Enviar Mensagem'}</button>
              </form>
            }
          </div>
        </div>
      </section>
    </div>);

};

Object.assign(window, { ContatoPage });