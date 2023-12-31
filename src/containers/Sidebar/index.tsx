import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Guerra-BR</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        JavaFox
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        FullStack Java, Tecnico Mecatrônico
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Troca Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
