import { useEffect } from 'react'
import Sobre from './Sobre'
import Skills from './Skills'
import ProjectCard from './ProjectCard'
import Contato from './Contato'

function Fase({ fase, numero, proxima, onAbrir, onMapa }) {
  useEffect(() => {
    function aoApertar(evento) {
      if (evento.key !== 'ArrowDown') return
      evento.preventDefault()
      onMapa()
    }

    window.addEventListener('keydown', aoApertar)
    return () => window.removeEventListener('keydown', aoApertar)
  }, [onMapa])

  return (
    <section className="fase">
      <p className="fase-rotulo">
        FASE {numero} · {fase.subtitulo.toUpperCase()}
      </p>
      <h2>{fase.titulo}</h2>

      <div className="fase-conteudo">
        {fase.tipo === 'sobre' && <Sobre />}
        {fase.tipo === 'habilidades' && <Skills />}
        {fase.tipo === 'projeto' && <ProjectCard {...fase.projeto} />}
        {fase.tipo === 'contato' && <Contato />}
      </div>

      <nav className="fase-nav">
        <button className="botao" onClick={onMapa}>
          ▼ SAIR DA FASE
        </button>

        {proxima && (
          <button className="botao destaque" onClick={() => onAbrir(proxima.id)}>
            PRÓXIMA FASE ▶
          </button>
        )}
      </nav>

       <p className="dica">↓ para sair da fase</p>
    </section>
  )
}

export default Fase