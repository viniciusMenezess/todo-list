import { Container } from './styles'
import { PlusCircle } from 'phosphor-react'

export function Button() {
  return (
    <Container>
      <button>
        Criar
        <PlusCircle size={22} />
      </button>
    </Container>
  )
}
