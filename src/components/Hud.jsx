import XpBar from './XpBar'
import { jogador } from '../data/portfolio'

function Hud({ concluidas, total, onMundo, onAbrirMapa }) {
  const progresso = Math.round((concluidas / total) * 100)

  return (
    <header className="hud">
      <button className="hud-logo" onClick={onMundo}>
        GABRIEL.EXE
      </button>

      <div className="hud-status">
        <XpBar
          esquerda={`LEVEL ${jogador.nivel}`}
          direita={`${concluidas}/${total} FASES`}
          valor={progresso}
        />
      </div>

      <button className="hud-mapa" onClick={onAbrirMapa}>
        ◈ MAPA
      </button>
    </header>
  )
}

export default Hud