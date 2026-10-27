function XpBar({ esquerda, direita, valor }) {
  return (
    <div className="xp">
      <div className="xp-info">
        <span>{esquerda}</span>
        <span>{direita}</span>
      </div>
      <div className="xp-bar">
        <div className="xp-progress" style={{ width: `${valor}%` }} />
      </div>
    </div>
  )
}

export default XpBar