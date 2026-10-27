import { useState } from 'react'

const CHAVE = 'portfolio-progresso'

function lerSalvo() {
  try {
    return JSON.parse(sessionStorage.getItem(CHAVE)) ?? []
  } catch {
    return []
  }
}

function salvar(lista) {
  try {
    sessionStorage.setItem(CHAVE, JSON.stringify(lista))
  } catch {
    return
  }
}

export function useProgresso() {
  const [concluidas, setConcluidas] = useState(lerSalvo)

  function concluir(id) {
    if (concluidas.includes(id)) return
    const novas = [...concluidas, id]
    setConcluidas(novas)
    salvar(novas)
  }

  function reiniciar() {
    setConcluidas([])
    salvar([])
  }

  return { concluidas, concluir, reiniciar }
}

