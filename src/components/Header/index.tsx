import { Container } from './styles'

import rocketSvg from '../../assets/rocket.svg'

export function Header() {
  return (
    <Container>
      <img src={rocketSvg} alt="logo do foguete" />

      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </Container>
  )
}
