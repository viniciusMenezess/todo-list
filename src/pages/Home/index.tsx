import { Wrapper, Infos, AddTask, TaskList } from './styles'

import clipboardSvg from '../../assets/Clipboard.svg'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Task } from '../../components/Task'

export function Home() {
  return (
    <>
      <Header />

      <Wrapper>
        <AddTask>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </AddTask>

        <Infos>
          <div>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>

          <div>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </Infos>

        <TaskList>
          <Task content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          {/* <img src={clipboardSvg} alt="Imagem de uma prancheta" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p> */}
        </TaskList>
      </Wrapper>
    </>
  )
}
