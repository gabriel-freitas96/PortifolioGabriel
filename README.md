<div align="center">

# 🎮 Portfólio Gamer: Gabriel Lacerda

**Um portfólio interativo em formato de jogo: corra pelo mundo, entre nos portais e descubra meus projetos fase por fase.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-puro-1572B6?style=for-the-badge&logo=css3&logoColor=white)

[LinkedIn](https://www.linkedin.com/in/gabriellacerda22/) · [GitHub](https://github.com/gabriel-freitas96) · [Contato](mailto:gabrieldevlacerda@gmail.com)

</div>

---

## 🕹️ Sobre o projeto

Em vez de um portfólio tradicional com menu e páginas, aqui o visitante **joga**. Um personagem em pixel art corre por um cenário com efeito parallax, e cada seção do portfólio é uma **fase**:

| Fase | Conteúdo |
| --- | --- |
| 1 · A Origem | Sobre mim |
| 2 · Inventário | Habilidades técnicas |
| 3 a 8 · Missões | Um projeto por fase |
| 9 · Chefão Final | Contato |

Conforme o visitante entra nas fases, a **barra de XP** do HUD enche. O progresso fica salvo no navegador e, ao visitar todas as fases, aparece a tela de **100% completo**.

---

## ✨ Funcionalidades

- **Tela inicial** estilo arcade com "PRESS START"
- **Personagem em pixel art** desenhado em SVG, com animação de corrida e respiração
- **Mundo com rolagem lateral** e cenário em parallax (estrelas, prédios e chão em velocidades diferentes)
- **Portais** para cada fase, com destaque para o chefão final
- **Mapa do mundo** com caminho em zigue-zague, trecho percorrido aceso e **viagem rápida**
- **HUD** com level e barra de XP baseada nas fases concluídas
- **Progresso salvo** com `localStorage`
- **Controles por teclado, mouse e toque**
- **Responsivo**: funciona no computador e no celular
- **Sem bibliotecas de UI**: todo o visual é feito com CSS puro (gradientes, animações e variáveis)

---

## 🎯 Controles

| Ação | Teclado | Mouse / Toque |
| --- | --- | --- |
| Correr | `←` `→` ou `A` `D` | Botões ◀ ▶ |
| Entrar na fase | `↑` | Clicar no portal ou em "Entrar na fase" |
| Sair da fase | `↓` | Botão "Sair da fase" |
| Abrir o mapa do mundo | — | Botão "◈ MAPA" no topo |
| Fechar o mapa | `Esc` | Botão ✕ ou clicar fora |
| Ir direto para uma fase | — | Atalhos numerados abaixo do mundo |

---

## 🛠️ Tecnologias

- **[React 19](https://react.dev/)**: componentes, estado e hooks
- **[Vite](https://vite.dev/)**: ambiente de desenvolvimento e build
- **JavaScript (ES Modules)**
- **CSS3**: variáveis, gradientes, `@keyframes`, `clamp()` e media queries
- **SVG**: sprite do personagem e caminho do mapa
- **ESLint**: padronização do código

---

## 📁 Estrutura de pastas

```
portfolio-gamer/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── TelaInicial.jsx    → tela "PRESS START"
│   │   ├── Hud.jsx            → barra superior com level e XP
│   │   ├── Mapa.jsx           → mundo com rolagem lateral
│   │   ├── MapaMundi.jsx      → mapa do mundo com viagem rápida
│   │   ├── Personagem.jsx     → sprite em pixel art
│   │   ├── Fase.jsx           → moldura de cada fase
│   │   ├── ProjectCard.jsx    → card de projeto
│   │   ├── Skills.jsx         → inventário de habilidades
│   │   ├── Sobre.jsx          → sobre mim
│   │   ├── Contato.jsx        → contatos
│   │   └── XpBar.jsx          → barra de XP reutilizável
│   ├── data/
│   │   └── portfolio.js       → todos os dados do portfólio
│   ├── hooks/
│   │   └── useProgresso.js    → salva as fases concluídas
│   ├── App.jsx                → controla as telas
│   ├── index.css              → estilos do jogo
│   └── main.jsx
├── index.html
└── package.json
```

---

## 🚀 Como rodar o projeto

**Pré-requisito:** [Node.js](https://nodejs.org/) 22 (LTS) ou superior.

```bash
git clone https://github.com/gabriel-freitas96/portfolio-gamer.git
cd portfolio-gamer
npm install
npm run dev
```

Depois, abra `http://localhost:5173` no navegador.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Mostra a versão de produção localmente |
| `npm run lint` | Verifica o código com o ESLint |

---

## ➕ Como adicionar um novo projeto

Todo o conteúdo fica em `src/data/portfolio.js`. Para criar uma fase nova, basta adicionar um objeto na lista `projetos`:

```js
{
  id: 'meu-projeto',
  nome: 'Meu Projeto',
  descricao: 'O que o projeto faz.',
  tecnologias: ['React', 'Node.js'],
  nivel: 'EPIC',
  status: 'COMPLETO',
  xp: 100,
  github: 'https://github.com/gabriel-freitas96/meu-projeto',
}
```

O projeto vira automaticamente uma nova fase no mundo, no mapa e nos atalhos.

---

## 🗺️ Próximas atualizações

- [ ] Pulo com a barra de espaço
- [ ] Moedas de XP espalhadas pelo caminho
- [ ] Efeitos sonoros com opção de mudo
- [ ] Nova fase: Monitor de Preços

---

## 👨‍💻 Autor

**Gabriel Lacerda**: Desenvolvedor Full Stack e estudante de Sistemas de Informação na UNIFACISA.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-gabriellacerda22-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/gabriellacerda22/)
[![GitHub](https://img.shields.io/badge/GitHub-gabriel--freitas96-181717?style=flat-square&logo=github)](https://github.com/gabriel-freitas96)
[![Email](https://img.shields.io/badge/Email-gabrieldevlacerda%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:gabrieldevlacerda@gmail.com)

<div align="center">

**⭐ Se gostou do projeto, deixe uma estrela no repositório!**

</div>
