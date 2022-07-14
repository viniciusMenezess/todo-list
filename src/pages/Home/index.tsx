import { Wrapper } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <>
      <Header />

      <Wrapper>
        <div>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </div>
      </Wrapper>
    </>
  )
}
