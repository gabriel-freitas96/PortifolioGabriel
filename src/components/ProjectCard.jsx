import XpBar from './XpBar'

function ProjectCard({ descricao, tecnologias, nivel, status, xp, github }) {
  return (
    <article className="card">
      <div className="card-topo">
        <span className="card-nivel">◈ {nivel}</span>
        <span className="card-status">{status}</span>
      </div>

      <p>{descricao}</p>

      <div className="tags">
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>

      <XpBar esquerda="PROJETO XP" direita={`${xp}%`} valor={xp} />

      {github ? (
        <a className="botao" href={github} target="_blank" rel="noopener noreferrer">
          VER NO GITHUB
        </a>
      ) : (
        <span className="botao desativado">SEM REPOSITÓRIO</span>
      )}
    </article>
  )
}

export default ProjectCard