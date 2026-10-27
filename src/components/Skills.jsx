import { habilidades } from '../data/portfolio'

function Skills() {
  return (
    <div className="grid">
      {habilidades.map(({ categoria, itens }) => (
        <div className="card" key={categoria}>
          <span className="card-nivel">◈ {categoria}</span>

          <div className="tags">
            {itens.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills