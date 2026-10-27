import { useEffect, useRef, useState } from 'react'
import Personagem from './Personagem'
import { fases } from '../data/portfolio'

const ESPACO = 260
const TEMPO_POR_FASE = 450
const TEMPO_MAXIMO = 2500

function Mapa({ posicao, setPosicao, concluidas, onAbrir, onReiniciar }) {
  const [andando, setAndando] = useState(false)
  const [duracao, setDuracao] = useState(0)
  const [olhandoEsquerda, setOlhandoEsquerda] = useState(false)
  const timer = useRef(null)

  const faseAtual = fases[posicao]
  const deslocamento = posicao * ESPACO
  const zerou = concluidas.length === fases.length

  function irPara(destino, entrarAoChegar = false) {
    if (andando || destino < 0 || destino >= fases.length) return

    if (destino === posicao) {
      if (entrarAoChegar) onAbrir(fases[destino].id)
      return
    }

    const tempo = Math.min(Math.abs(destino - posicao) * TEMPO_POR_FASE, TEMPO_MAXIMO)
    setOlhandoEsquerda(destino < posicao)
    setDuracao(tempo)
    setAndando(true)
    setPosicao(destino)

    timer.current = setTimeout(() => {
      setAndando(false)
      if (entrarAoChegar) onAbrir(fases[destino].id)
    }, tempo)
  }

  function entrar() {
    if (!andando) onAbrir(faseAtual.id)
  }

  useEffect(() => {
    const id = timer
    return () => clearTimeout(id.current)
  }, [])

  useEffect(() => {
    function aoApertar(evento) {
        const acoes = {
        arrowright: () => irPara(posicao + 1),
        d: () => irPara(posicao + 1),
        arrowleft: () => irPara(posicao - 1),
        a: () => irPara(posicao - 1),
        arrowup: entrar,
      }

      const acao = acoes[evento.key.toLowerCase()]
      if (!acao) return

      evento.preventDefault()
      acao()
    }

    window.addEventListener('keydown', aoApertar)
    return () => window.removeEventListener('keydown', aoApertar)
  })

  return (
    <section className="mapa">
      <div className="cena" style={{ '--duracao': `${duracao}ms` }}>
        <div className="camada estrelas" style={{ backgroundPositionX: `${-deslocamento * 0.1}px` }} />
        <div className="camada predios" style={{ backgroundPositionX: `${-deslocamento * 0.4}px` }} />
        <div className="camada chao" style={{ backgroundPositionX: `${-deslocamento}px` }} />

        <div className="mundo" style={{ transform: `translateX(${-deslocamento}px)` }}>
          {fases.map((fase, indice) => {
            const feita = concluidas.includes(fase.id)
            const classes = [
              'portal',
              fase.tipo === 'contato' && 'chefao',
              feita && 'feita',
              indice === posicao && !andando && 'ativo',
            ]

            return (
              <button
                key={fase.id}
                className={classes.filter(Boolean).join(' ')}
                style={{ left: indice * ESPACO }}
                onClick={() => irPara(indice, true)}
              >
                <span className="portal-nome">
                  <small>{fase.subtitulo}</small>
                  {fase.titulo}
                </span>
                <span className="portal-porta">{feita ? '✓' : indice + 1}</span>
              </button>
            )
          })}
        </div>

        <Personagem andando={andando} olhandoEsquerda={olhandoEsquerda} />
      </div>

      <div className="painel">
        <button className="seta" onClick={() => irPara(posicao - 1)} disabled={posicao === 0}>
          ◀
        </button>

        <div className="painel-info">
          <p className="fase-rotulo">
            FASE {posicao + 1} · {faseAtual.subtitulo.toUpperCase()}
          </p>
          <h2>{faseAtual.titulo}</h2>
              <p className="dica">← → para correr · ↑ para entrar · ou clique num portal</p>
        </div>

        <button
          className="seta"
          onClick={() => irPara(posicao + 1)}
          disabled={posicao === fases.length - 1}
        >
          ▶
        </button>
      </div>

      <p className="dica">← → para correr · ENTER para entrar · ou clique num portal</p>

      <div className="atalhos">
        {fases.map((fase, indice) => {
          const classes = [
            'atalho',
            concluidas.includes(fase.id) && 'feita',
            indice === posicao && 'atual',
          ]

          return (
            <button
              key={fase.id}
              className={classes.filter(Boolean).join(' ')}
              onClick={() => irPara(indice)}
              title={fase.titulo}
            >
              {indice + 1}
            </button>
          )
        })}
      </div>

      {zerou && (
        <div className="vitoria">
          <strong>100% COMPLETO!</strong>
          <p>Você zerou o portfólio. Que tal me chamar para o próximo nível?</p>
        </div>
      )}

      {concluidas.length > 0 && (
        <button className="reiniciar" onClick={onReiniciar}>
          REINICIAR PROGRESSO
        </button>
      )}
    </section>
  )
}

export default Mapa