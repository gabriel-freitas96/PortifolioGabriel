import { useState } from 'react'
import TelaInicial from './components/TelaInicial'
import Hud from './components/Hud'
import Mapa from './components/Mapa'
import MapaMundi from './components/MapaMundi'
import Fase from './components/Fase'
import { fases } from './data/portfolio'
import { useProgresso } from './hooks/useProgresso'

function App() {
  const [tela, setTela] = useState('inicio')
  const [posicao, setPosicao] = useState(0)
  const [mapaAberto, setMapaAberto] = useState(false)
  const [viagens, setViagens] = useState(0)
  const { concluidas, concluir, reiniciar } = useProgresso()

  function abrirFase(id) {
    concluir(id)
    setPosicao(fases.findIndex((fase) => fase.id === id))
    setTela(id)
    window.scrollTo(0, 0)
  }

  function irParaMapa() {
    setTela('mapa')
    window.scrollTo(0, 0)
  }

  function viajarPara(indice) {
    setPosicao(indice)
    setViagens(viagens + 1)
    setMapaAberto(false)
    irParaMapa()
  }

  if (tela === 'inicio') {
    return <TelaInicial onIniciar={irParaMapa} />
  }

  const indice = fases.findIndex((fase) => fase.id === tela)

  return (
    <>
      <Hud
        concluidas={concluidas.length}
        total={fases.length}
        onMundo={irParaMapa}
        onAbrirMapa={() => setMapaAberto(true)}
      />

      <main className="jogo" key={`${tela}-${viagens}`}>
        {tela === 'mapa' ? (
          <Mapa
            posicao={posicao}
            setPosicao={setPosicao}
            concluidas={concluidas}
            onAbrir={abrirFase}
            onReiniciar={reiniciar}
          />
        ) : (
          <Fase
            fase={fases[indice]}
            numero={indice + 1}
            proxima={fases[indice + 1]}
            onAbrir={abrirFase}
            onMapa={irParaMapa}
          />
        )}
      </main>

      {mapaAberto && (
        <MapaMundi
          posicao={posicao}
          concluidas={concluidas}
          onViajar={viajarPara}
          onFechar={() => setMapaAberto(false)}
        />
      )}
    </>
  )
}

export default App