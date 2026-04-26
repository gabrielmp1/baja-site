// Patrocinadores Page
const PatrocinadoresPage = () => {
  const niveis = [
    {
      nivel: 'Ouro',
      cor: '#B8860B',
      bg: '#FEFBF0',
      border: '#E8C84A',
      desc: 'Maior visibilidade — logo em destaque no veículo, macacão e materiais oficiais.',
      patrocinadores: [
        { nome: 'Empresa Parceira A', area: 'Usinagem e Fabricação' },
        { nome: 'Empresa Parceira B', area: 'Materiais e Insumos' },
      ],
    },
    {
      nivel: 'Prata',
      cor: '#6B7280',
      bg: '#F9F9F9',
      border: '#D1D5DB',
      desc: 'Logo no veículo e materiais digitais oficiais da equipa.',
      patrocinadores: [
        { nome: 'Empresa Parceira C', area: 'Tecnologia' },
        { nome: 'Empresa Parceira D', area: 'Logística' },
        { nome: 'Empresa Parceira E', area: 'Ferramentas' },
      ],
    },
    {
      nivel: 'Bronze',
      cor: '#92400E',
      bg: '#FFF8F5',
      border: '#F97316',
      desc: 'Reconhecimento nas redes sociais e relatórios técnicos oficiais.',
      patrocinadores: [
        { nome: 'Empresa Parceira F', area: 'Serviços' },
        { nome: 'Empresa Parceira G', area: 'Consultoria' },
        { nome: 'Empresa Parceira H', area: 'Eletrônica' },
        { nome: 'Empresa Parceira I', area: 'Comunicação' },
      ],
    },
  ];

  const beneficios = [
    { titulo: 'Visibilidade de Marca', desc: 'Logo em destaque no veículo, macacão, banners e materiais de competição vistos por milhares de pessoas.' },
    { titulo: 'Associação à Inovação', desc: 'Sua empresa ligada à formação de engenheiros e ao desenvolvimento tecnológico regional.' },
    { titulo: 'Responsabilidade Social', desc: 'Apoio direto à educação pública e ao desenvolvimento de jovens talentos no interior do Rio de Janeiro.' },
    { titulo: 'Rede de Contatos', desc: 'Acesso à comunidade SAE Brasil e às empresas, professores e alunos conectados ao projeto.' },
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* HERO */}
      <section style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.06), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>Patrocinadores</div>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(44px,6vw,80px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, margin: '0 0 24px' }}>
            Quem acredita<br /><span style={{ color: '#F97316' }}>no projeto.</span>
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 500, lineHeight: 1.75, margin: 0 }}>
            Empresas que investem no futuro da engenharia brasileira ao apoiar a Baja Griffon.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: '80px 48px', background: '#F8F8F8', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Por que apoiar</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(24px,2.5vw,36px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 48px' }}>Benefícios para sua empresa.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: 20 }}>
            {beneficios.map((b, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '32px 28px' }}>
                <div style={{ width: 36, height: 3, background: '#F97316', borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 18, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 10px' }}>{b.titulo}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NÍVEIS */}
      <section style={{ padding: '80px 48px 96px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 20 }}>Nossos apoiadores</div>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(24px,2.5vw,36px)', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 48px' }}>Categorias de patrocínio.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {niveis.map((n, i) => (
              <div key={i} style={{ border: `1px solid ${n.border}`, borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ background: n.bg, padding: '24px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${n.border}`, flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22, color: n.cor, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Nível {n.nivel}</span>
                    <div style={{ width: 1, height: 20, background: n.border }} />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#666' }}>{n.desc}</span>
                  </div>
                </div>
                <div style={{ padding: '28px 36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 16 }}>
                  {n.patrocinadores.map((p, j) => (
                    <div key={j} style={{ background: '#F8F8F8', border: '1px solid #eee', borderRadius: 6, padding: '20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 90 }}>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 15, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.02em', textAlign: 'center' }}>{p.nome}</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.area}</div>
                    </div>
                  ))}
                  <div style={{ background: 'transparent', border: `1.5px dashed ${n.border}`, borderRadius: 6, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, minHeight: 90, cursor: 'pointer' }}>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#aaa', textAlign: 'center' }}>Sua empresa aqui</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F97316', padding: '72px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,48px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.01em', margin: '0 0 16px' }}>Quer apoiar o projeto?</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: '0 0 32px' }}>Entre em contato com nossa equipa comercial. Temos planos flexíveis para todos os tamanhos de empresa.</p>
          <a href="#contato" style={{ display: 'inline-block', background: '#fff', color: '#F97316', textDecoration: 'none', fontFamily: 'Oswald, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '15px 36px', borderRadius: 4, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0A0A0A'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#F97316'; }}
          >Falar com o Comercial</a>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { PatrocinadoresPage });
