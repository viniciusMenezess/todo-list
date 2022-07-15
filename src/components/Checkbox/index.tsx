import { Container } from './styles'

export function Checkbox() {
  return (
    <Container>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label htmlFor="checkbox"></label>
    </Container>
  )
}
