# Site da Baja Griffon

Site oficial da equipe **Baja Griffon**, do IFF Campos Centro, que projeta e constrói um
protótipo off-road para a competição Baja SAE Brasil.

**No ar:** [bajagriffon.com.br](https://bajagriffon.com.br)

## Páginas

- **Início:** apresentação da equipe e do projeto
- **História:** trajetória da equipe
- **Processo seletivo:** como entrar na equipe
- **Notícias:** novidades e competições
- **Patrocinadores:** quem apoia o projeto
- **Membros:** integrantes por setor
- **Contato:** formas de falar com a equipe

## Como funciona

Site estático, sem etapa de build: o `index.html` carrega React 18 e o Babel pelo navegador,
e cada página fica num arquivo `.jsx` próprio (`home.jsx`, `historia.jsx`, `membros.jsx` etc.).
O layout é responsivo para celular. Para rodar localmente, sirva a pasta com qualquer servidor
estático, por exemplo:

```bash
npx serve .
```

## Autoria

Desenvolvido por **Gabriel Pessanha** ([@gabrielmp1](https://github.com/gabrielmp1)), membro da
equipe, com o auxílio do [Claude Code](https://claude.com/claude-code) na escrita do código.
Conteúdo, estrutura, identidade visual e revisão de cada alteração ficaram comigo.
