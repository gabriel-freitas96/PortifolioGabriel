import { contatos } from '../data/portfolio'

function Contato() {
  return (
    <>
      <p className="nota">
        Para vencer o chefão final, é só me mandar uma mensagem. Adoro conversar
        sobre projetos, tecnologia e novas oportunidades!
      </p>

      <ul className="contatos">
        {contatos.map(({ rotulo, texto, link }) => (
          <li key={rotulo}>
            <strong>{rotulo}</strong>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {texto}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Contato