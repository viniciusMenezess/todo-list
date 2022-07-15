import { Trash } from 'phosphor-react'
import { Container, FormCheck } from './styles'

import { Checkbox } from '../Checkbox'

interface TaskProps {
  content: string
}

export function Task({ content }: TaskProps) {
  return (
    <Container>
      <FormCheck>
        <Checkbox />
      </FormCheck>

      <div>
        <p>{content}</p>
      </div>

      <button>
        <Trash size={24} />
      </button>
    </Container>
  )
}
