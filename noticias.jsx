// Notícias Page
const NoticiasPage = () => {
  const noticias = [
    {
      categoria: 'Competição',
      data: 'Março 2025',
      titulo: 'Baja Griffon confirma presença no Regional Sudeste 2025',
      resumo: 'Após meses de preparação intensa, a equipe confirma inscrição na competição regional com o Vitinho totalmente revisado e dentro das normas SAE.',
      conteudo: 'Após meses de preparação intensa e revisão completa do veículo Vitinho, a Baja Griffon confirmou oficialmente sua inscrição no Regional Sudeste 2025. O processo envolveu revisão de todos os subsistemas — powertrain, dinâmica veicular, chassi e elétrica — para garantir plena conformidade com as normas SAE.\n\nA equipe realizou testes extensivos nas semanas anteriores à inscrição, coletando dados de desempenho e identificando pontos de melhoria. O Vitinho chega à competição com geometria de suspensão reformulada e sistema de freios revisado.\n\nEsse será um dos últimos eventos competitivos do Vitinho antes do encerramento do seu ciclo em 2026, tornando a participação ainda mais especial para todos os membros da equipe.',
      destaque: true,
    },
    {
      categoria: 'Projeto',
      data: 'Janeiro 2026',
      titulo: 'Início oficial do desenvolvimento do BG02',
      resumo: 'Com o ciclo competitivo do Vitinho encerrado, a equipe lança o projeto do segundo veículo com foco na Competição Nacional 2027.',
      conteudo: 'A Baja Griffon deu início oficial ao desenvolvimento do BG02, o segundo veículo da equipe. O projeto representa um salto qualitativo em relação ao Vitinho, incorporando todas as lições aprendidas ao longo dos anos de competição.\n\nO BG02 é projetado desde o início com foco absoluto na conformidade regulatória SAE e na competitividade nas etapas nacionais. As principais inovações incluem novo conceito de chassi tubular, revisão completa da geometria de suspensão e um sistema elétrico com telemetria aprimorada.\n\nA meta é participar do Regional Sudeste 2026 para validação do veículo e, em seguida, disputar a Competição Nacional Baja SAE de 2027 com o veículo mais preparado da história da equipe.',
      destaque: false,
    },
    {
      categoria: 'Parcerias',
      data: 'Novembro 2024',
      titulo: 'Nova parceria com empresa de usinagem regional',
      resumo: 'Acordo de fornecimento de peças usinadas com empresa local fortalece o ecossistema de parceiros da Baja Griffon.',
      conteudo: 'A Baja Griffon firmou um importante acordo de parceria com uma empresa de usinagem da região de Campos dos Goytacazes. O acordo prevê o fornecimento de peças usinadas com precisão para os subsistemas mecânicos do veículo, reduzindo custos e prazos de produção.\n\nAlém do fornecimento de peças, a parceria inclui suporte técnico e acesso às instalações da empresa para testes e validação de componentes. Essa colaboração fortalece o ecossistema produtivo local e cria oportunidades para que os membros da equipe vivenciem o ambiente industrial real.\n\nA equipe agradece a confiança dos novos parceiros e espera que essa relação se consolide ao longo dos próximos ciclos competitivos.',
      destaque: false,
    },
    {
      categoria: 'Institucional',
      data: 'Agosto 2024',
      titulo: 'Equipe apresenta resultados no Congresso Técnico do IFF',
      resumo: 'Membros da Baja Griffon apresentaram o relatório técnico do ciclo 2023–2024 no congresso académico interno do IFF Campos Centro.',
      conteudo: 'Representantes da Baja Griffon participaram do Congresso Técnico Interno do IFF Campos Centro, apresentando os resultados e aprendizados do ciclo competitivo 2023–2024. A apresentação reuniu professores, alunos e gestores do campus.\n\nO relatório técnico abordou os principais desafios enfrentados durante o desenvolvimento e a competição, os dados coletados em pista e as melhorias implementadas ao longo do ciclo. A apresentação foi bem recebida pela comunidade acadêmica, reforçando a importância do projeto Baja Griffon como laboratório de aprendizagem prática.\n\nEssa participação consolida o papel da equipe como referência em projetos de engenharia aplicada no IFF e abre portas para novas parcerias com professores e laboratórios da instituição.',
      destaque: false,
    },
    {
      categoria: 'Projeto',
      data: 'Junho 2024',
      titulo: 'Suspensão do Vitinho passa por redesenho completo',
      resumo: 'Com base nos dados coletados nas competições, o subsistema de Dinâmica Veicular revisou e otimizou toda a geometria de suspensão para a temporada 2025.',
      conteudo: 'O subsistema de Dinâmica Veicular concluiu o redesenho completo da geometria de suspensão do Vitinho. O trabalho foi fundamentado nos dados coletados durante as competições de 2023 e 2024, que identificaram pontos de melhoria na estabilidade e no comportamento do veículo em terrenos irregulares.\n\nAs principais mudanças incluem ajuste dos ângulos de cáster e câmber, revisão da geometria de anti-mergulho e anti-arfagem, além da substituição de componentes desgastados por peças de maior durabilidade. Testes em pista foram realizados para validar as alterações.\n\nO resultado foi uma melhora significativa na estabilidade em curvas e na absorção de impactos, preparando o Vitinho para uma temporada 2025 mais competitiva.',
      destaque: false,
    },
    {
      categoria: 'Seletivo',
      data: 'Março 2024',
      titulo: 'Processo seletivo 2024.1 recebe 47 candidatos',
      resumo: 'O maior processo seletivo da história da equipe encerrou com 47 inscritos. Doze novos membros foram integrados em diferentes subsistemas.',
      conteudo: 'O processo seletivo do primeiro semestre de 2024 foi o maior da história da Baja Griffon, com 47 candidatos inscritos disputando vagas em todos os subsistemas da equipe. O processo seguiu as quatro etapas tradicionais: inscrição, entrevista individual, dinâmica em grupo e período de trainee.\n\nAo final, 12 novos membros foram integrados à equipe, distribuídos entre os subsistemas operacionais (Powertrain, Elétrica, Dinâmica Veicular, Chassi e Segurança) e administrativos (Gestão, Comercial e Marketing).\n\nA alta procura pelo processo seletivo demonstra o crescimento da visibilidade da Baja Griffon no campus e a qualidade do projeto como oportunidade de formação prática para estudantes de engenharia e áreas afins.',
      destaque: false,
    },
  ];

  const categorias = ['Todos', 'Competição', 'Projeto', 'Parcerias', 'Institucional', 'Seletivo'];
  const [catAtiva, setCatAtiva] = React.useState('Todos');
  const [noticiaAberta, setNoticiaAberta] = React.useState(null);

  const filtradas = catAtiva === 'Todos' ? noticias : noticias.filter(n => n.categoria === catAtiva);
  const [destaque, ...resto] = filtradas;

  const corCat = cat => ({ Competição: '#F97316', Projeto: '#0A0A0A', Parcerias: '#16a34a', Institucional: '#7c3aed', Seletivo: '#0284c7' }[cat] || '#555');

  const abrirNoticia = (n) => {
    setNoticiaAberta(n);
    document.body.style.overflow = 'hidden';
  };

  const fecharNoticia = () => {
    setNoticiaAberta(null);
    document.body.style.overflow = '';
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* MODAL */}
      {noticiaAberta && (
        <div
          onClick={fecharNoticia}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 12,
              maxWidth: 720, width: '100%',
              maxHeight: '90vh', overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
            }}
          >
            {/* Header da modal */}
            <div style={{ background: '#0A0A0A', padding: '36px 40px 32px', borderRadius: '12px 12px 0 0', position: 'relative' }}>
              <button
                onClick={fecharNoticia}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer',
                  width: 36, height: 36, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <svg width="16" height="16" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: corCat(noticiaAberta.categoria),
                  background: `${corCat(noticiaAberta.categoria)}22`,
                  padding: '4px 12px', borderRadius: 3,
                }}>{noticiaAberta.categoria}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{noticiaAberta.data}</span>
              </div>
              <h2 style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700,
                fontSize: 'clamp(22px,3vw,32px)', color: '#fff',
                textTransform: 'uppercase', letterSpacing: '-0.01em',
                lineHeight: 1.1, margin: 0,
              }}>{noticiaAberta.titulo}</h2>
            </div>

            {/* Conteúdo */}
            <div style={{ padding: '36px 40px 40px' }}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#F97316',
                fontWeight: 600, lineHeight: 1.7, margin: '0 0 24px',
              }}>{noticiaAberta.resumo}</p>
              <div style={{ width: 40, height: 3, background: '#F97316', borderRadius: 2, marginBottom: 24 }} />
              {noticiaAberta.conteudo.split('\n\n').map((paragrafo, i) => (
                <p key={i} style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15,
                  color: '#444', lineHeight: 1.85, margin: '0 0 18px',
                }}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="resp-hero" style={{ background: '#0A0A0A', padding: '140px 48px 80px', position: 'relative', overflow: 'hidden' }}>
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
            <div
              className="resp-grid"
              onClick={() => abrirNoticia(destaque)}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', marginBottom: 32, cursor: 'pointer', transition: 'box-shadow 0.25s' }}
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
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 24px' }}>{destaque.resumo}</p>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#F97316', letterSpacing: '0.05em' }}>Ler mais →</span>
              </div>
            </div>
          )}

          {/* Grid de notícias */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {resto.map((n, i) => (
              <div
                key={i}
                onClick={() => abrirNoticia(n)}
                style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.25s' }}
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
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#777', lineHeight: 1.7, margin: '0 0 16px' }}>{n.resumo}</p>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#F97316' }}>Ler mais →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .modal-content { padding: 24px 20px 28px !important; }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { NoticiasPage });
