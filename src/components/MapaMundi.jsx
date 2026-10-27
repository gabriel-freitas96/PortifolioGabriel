import { useEffect } from 'react'
import Personagem from './Personagem'
import { fases } from '../data/portfolio'

const COLUNAS = 3
const LARGURA = 600
const ALTURA_LINHA = 170

function coordenadas(indice) {
  const linha = Math.floor(indice / COLUNAS)
  const passo = indice % COLUNAS
  const coluna = linha % 2 === 0 ? passo : COLUNAS - 1 - passo
  return { x: 100 + coluna * 200, y: 60 + linha * ALTURA_LINHA }
}

const pontos = fases.map((_, indice) => coordenadas(indice))
const altura = Math.ceil(fases.length / COLUNAS) * ALTURA_LINHA

function posicaoNaTela({ x, y }) {
  return { left: `${(x / LARGURA) * 100}%`, top: `${(y / altura) * 100}%` }
}

function MapaMundi({ posicao, concluidas, onViajar, onFechar }) {
  useEffect(() => {
    function aoApertar(evento) {
      evento.stopPropagation()
      if (evento.key === 'Escape') onFechar()
      if (evento.key.startsWith('Arrow')) evento.preventDefault()
    }

    window.addEventListener('keydown', aoApertar, true)
    return () => window.removeEventListener('keydown', aoApertar, true)
  }, [onFechar])

  return (
    <div className="mm-fundo" onClick={onFechar}>
      <div className="mm-janela" onClick={(evento) => evento.stopPropagation()}>
        <div className="mm-topo">
          <h2>MAPA DO MUNDO</h2>
          <button className="mm-fechar" onClick={onFechar}>
            ✕
          </button>
        </div>

        <p className="nota">
          Você está na <strong>FASE {posicao + 1} · {fases[posicao].titulo}</strong>.
          Clique numa fase para viagem rápida.
        </p>

        <div className="mm-area" style={{ aspectRatio: `${LARGURA} / ${altura}` }}>
          <svg className="mm-caminho" viewBox={`0 0 ${LARGURA} ${altura}`}>
            {pontos.slice(1).map((ponto, indice) => {
              const anterior = pontos[indice]
              const feito =
                concluidas.includes(fases[indice].id) &&
                concluidas.includes(fases[indice + 1].id)

              return (
                <line
                  key={fases[indice + 1].id}
                  className={feito ? 'feito' : ''}
                  x1={anterior.x}
                  y1={anterior.y}
                  x2={ponto.x}
                  y2={ponto.y}
                />
              )
            })}
          </svg>

          {fases.map((fase, indice) => {
            const feita = concluidas.includes(fase.id)
            const classes = [
              'mm-no',
              fase.tipo === 'contato' && 'chefao',
              feita && 'feita',
              indice === posicao && 'atual',
            ]

            return (
              <button
                key={fase.id}
                className={classes.filter(Boolean).join(' ')}
                style={posicaoNaTela(pontos[indice])}
                onClick={() => onViajar(indice)}
              >
                {feita ? '✓' : indice + 1}
                <span className="mm-rotulo">{fase.titulo}</span>
              </button>
            )
          })}

          <div className="mm-personagem" style={posicaoNaTela(pontos[posicao])}>
            <Personagem andando={false} olhandoEsquerda={false} />
          </div>
        </div>

        <p className="dica">ESC ou ✕ para fechar</p>
      </div>
    </div>
  )
}

export default MapaMundi