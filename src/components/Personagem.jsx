const CORES = {
  cabelo: '#2b1d14',
  pele: '#f0c08a',
  olho: '#111',
  fone: '#00995a',
  moletom: '#00e07a',
  sombra: '#00b863',
  calca: '#2d3b55',
  tenis: '#e8e8ee',
}

const CORPO = [
  [3, 0, 6, 2, 'cabelo'],
  [2, 1, 1, 3, 'cabelo'],
  [4, 2, 5, 4, 'pele'],
  [3, 2, 1, 1, 'cabelo'],
  [3, 3, 1, 2, 'fone'],
  [7, 3, 1, 1, 'olho'],
  [3, 6, 6, 5, 'moletom'],
  [4, 6, 4, 1, 'sombra'],
  [5, 7, 2, 3, 'sombra'],
  [5, 10, 2, 1, 'pele'],
  [3, 11, 6, 1, 'calca'],
]

const PERNAS_PARADO = [
  [3, 12, 2, 3, 'calca'],
  [7, 12, 2, 3, 'calca'],
  [3, 15, 3, 1, 'tenis'],
  [7, 15, 3, 1, 'tenis'],
]

const PERNAS_PASSO_A = [
  [3, 12, 2, 2, 'calca'],
  [2, 14, 2, 1, 'calca'],
  [1, 15, 3, 1, 'tenis'],
  [7, 12, 2, 2, 'calca'],
  [8, 14, 2, 1, 'calca'],
  [8, 15, 3, 1, 'tenis'],
]

const PERNAS_PASSO_B = [
  [5, 12, 2, 3, 'calca'],
  [5, 15, 3, 1, 'tenis'],
  [3, 12, 2, 2, 'calca'],
  [2, 13, 2, 1, 'tenis'],
]

function Pixels({ lista }) {
  return lista.map(([x, y, largura, altura, cor]) => (
    <rect
      key={`${x}-${y}-${cor}`}
      x={x}
      y={y}
      width={largura}
      height={altura}
      fill={CORES[cor]}
    />
  ))
}

function Personagem({ andando, olhandoEsquerda }) {
  const classes = ['personagem', andando && 'correndo', olhandoEsquerda && 'esquerda']

  return (
    <div className={classes.filter(Boolean).join(' ')}>
      <div className="sprite">
        <svg viewBox="0 0 12 16" width="48" height="64" shapeRendering="crispEdges">
          <Pixels lista={CORPO} />
          <g className="pernas-parado">
            <Pixels lista={PERNAS_PARADO} />
          </g>
          <g className="pernas-a">
            <Pixels lista={PERNAS_PASSO_A} />
          </g>
          <g className="pernas-b">
            <Pixels lista={PERNAS_PASSO_B} />
          </g>
        </svg>
      </div>
      <span className="sombra-chao" />
    </div>
  )
}

export default Personagem