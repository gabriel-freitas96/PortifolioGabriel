import { jogador } from '../data/portfolio'

function TelaInicial({ onIniciar }) {
  return (
    <main className="tela-inicial">
      <p className="ini-topo">PORTFÓLIO · EDIÇÃO 2026</p>
      <h1>{jogador.nome}</h1>
      <p className="subtitulo">{jogador.classe}</p>

      <button className="press-start" onClick={onIniciar} autoFocus>
        ▶ PRESS START
      </button>

      <p className="ini-rodape">© 2026 GABRIEL LACERDA · TODOS OS DIREITOS RESERVADOS</p>
    </main>
  )
}

export default TelaInicial