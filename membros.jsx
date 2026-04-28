// Membros Page
const MembrosPage = () => {
  const subsistemas = [
    {
      nome: 'Capitania',
      membros: [
        { nome: 'Davi Rodrigues Cedro de Brito', cargo: 'Capitão', curso: '' },
        { nome: 'Gabriel Moço Pessanha', cargo: 'Gerente Operacional', curso: '' },
        { nome: 'Leonarda de Souza Silva', cargo: 'Gerente Administrativa', curso: '' },
      ],
    },
    {
      nome: 'Powertrain',
      membros: [
        { nome: 'Davi Rodrigues Cedro de Brito', cargo: 'Líder de Subsistema', curso: '' },
        { nome: 'Carlos Bruno Gomes Ribeiro', cargo: 'Membro', curso: '' },
        { nome: 'João Vitor Ribeiro dos Santos', cargo: 'Membro', curso: '' },
        { nome: 'Lucas Azevedo Manhães', cargo: 'Membro', curso: '' },
        { nome: 'Mucci David Neto', cargo: 'Membro', curso: '' },
      ],
    },
    {
      nome: 'Elétrica & Eletrônica',
      membros: [
        { nome: 'Gabriel Moço Pessanha', cargo: 'Líder de Subsistema', curso: '' },
        { nome: 'Maria Eduarda Silva de Azeredo Araújo', cargo: 'Membro', curso: '' },
        { nome: 'Daniel Luis Eduardo dos Santos Silva', cargo: 'Membro', curso: '' },
        { nome: 'Tobias Martins Concebida', cargo: 'Membro', curso: '' },
        { nome: 'Sérgio Miguel Almeida dos Santos Silva', cargo: 'Membro', curso: '' },
      ],
    },
    {
      nome: 'Dinâmica Veicular',
      membros: [
        { nome: 'Breno Moreira Rangel', cargo: 'Líder de Subsistema', curso: '' },
        { nome: 'Carlos Eduardo Senra Braga Sanches', cargo: 'Membro', curso: '' },
        { nome: 'Leonan Rodrigues Goulart', cargo: 'Membro', curso: '' },
        { nome: 'Marco Antônio de Souza Silva Junior', cargo: 'Membro', curso: '' },
        { nome: 'João Pedro Guimarães Rodrigues', cargo: 'Membro', curso: '' },
        { nome: 'Daniel Costa de Abreu Sousa', cargo: 'Membro', curso: '' },
        { nome: 'João Pedro Moura', cargo: 'Membro', curso: '' },
        { nome: 'Vitor Hugo', cargo: 'Membro', curso: '' },
        { nome: 'Gabriel José Azevedo Palagar', cargo: 'Membro', curso: '' },
      ],
    },
    {
      nome: 'Chassi & Estrutura',
      membros: [
        { nome: 'Esther Anomal da Silva Almeida', cargo: 'Membro', curso: '' },
        { nome: 'Rennan Barros da Fonseca', cargo: 'Membro', curso: '' },
        { nome: 'Gabriel Nunes', cargo: 'Membro', curso: '' },
      ],
    },
    {
      nome: 'Segurança & Ergonomia',
      membros: [
        { nome: 'Kauã Araújo da Silva', cargo: 'Líder de Subsistema', curso: '' },
        { nome: 'João Marcelo Fernandes Teixeira', cargo: 'Membro', curso: '' },
      ],
    },
    {
      nome: 'Gestão',
      membros: [
        { nome: 'Leonardo José Faria Viana', cargo: 'Líder de Subsistema', curso: '' },
        { nome: 'Núbia Santana de Barros', cargo: 'Membro', curso: '' },
      ],
    },
    {
      nome: 'Marketing',
      membros: [
        { nome: 'Rafaela Mamedes Nogueira', cargo: 'Líder de Subsistema', curso: '' },
        { nome: 'Maycon Carvalho de Sáles de Azevedo', cargo: 'Membro', curso: '' },
        { nome: 'Lícia Lousada Belmont', cargo: 'Membro', curso: '' },
        { nome: 'Pedro Marcus Louzada Barbosa', cargo: 'Membro', curso: '' },
        { nome: 'Camilly Terra', cargo: 'Membro', curso: '' },
        { nome: 'Kamilly Ohanna Marques Silva', cargo: 'Membro', curso: '' },
      ],
    },
  ];

  const [subsAtivo, setSubsAtivo] = React.useState('Todos');
  const todasNomes = ['Todos', ...subsistemas.map(s => s.nome)];
  const filtrados = subsAtivo === 'Todos' ? subsistemas : subsistemas.filter(s => s.nome === subsAtivo);

  const totalMembros = subsistemas.reduce((acc, s) => acc + s.membros.length, 0);

  const Avatar = ({ nome }) => {
    const iniciais = nome.split(' ').slice(0,2).map(p => p[0]).join('');
    return (
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: 'linear-gradient(135deg, #0A0A0A, #333)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 16, color: '#fff', letterSpacing: '0.04em' }}>{iniciais}</span>
      </div>
    );
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* HERO */}
      <section className="resp-hero" style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '35%', height: '100%', background: 'linear-gradient(to left, rgba(249,115,22,0.06), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div style={{ display: 'inline-block', background: '#F97316', color: '#fff', fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 2, marginBottom: 24 }}>Membros</div>
            <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 'clamp(44px,6vw,80px)', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 0.95, margin: '0 0 16px' }}>
              As almas<br /><span style={{ color: '#F97316' }}>do projeto.</span>
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.6)', maxWidth: 440, lineHeight: 1.75, margin: 0 }}>Conheça quem constrói, planeja e representa a Baja Griffon.</p>
          </div>
          <div className="resp-stats" style={{ display: 'flex', gap: 32 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 48, color: '#F97316', lineHeight: 1 }}>{totalMembros}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>Membros Ativos</div>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 48, color: '#F97316', lineHeight: 1 }}>{8}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>Subsistemas</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTRO TABS */}
      <div style={{ borderBottom: '1px solid #eee', background: '#fff', position: 'sticky', top: 72, zIndex: 10, overflowX: 'auto' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'flex', gap: 0 }}>
          {todasNomes.map(n => (
            <button key={n} onClick={() => setSubsAtivo(n)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Oswald, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: subsAtivo === n ? '#F97316' : '#888',
              padding: '15px 16px',
              borderBottom: subsAtivo === n ? '2px solid #F97316' : '2px solid transparent',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>{n}</button>
          ))}
        </div>
      </div>

      {/* MEMBROS */}
      <section style={{ padding: '64px 48px 96px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          {filtrados.map((sub, i) => (
            <div key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid #f0f0f0' }}>
                <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 20, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>{sub.nome}</h2>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#aaa', background: '#F0F0F0', padding: '2px 10px', borderRadius: 100 }}>{sub.membros.length} membros</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 16 }}>
                {sub.membros.map((m, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    border: '1px solid #eee', borderRadius: 8, padding: '20px 24px',
                    transition: 'all 0.2s', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.background = '#FEFAF7'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.background = '#fff'; }}
                  >
                    <Avatar nome={m.nome} />
                    <div>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 16, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{m.nome}</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#F97316', fontWeight: 500, marginTop: 2 }}>{m.cargo}</div>
                      {m.curso ? <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#aaa', marginTop: 2 }}>{m.curso}</div> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { MembrosPage });
