import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  color: #eee;
  border-radius: 12px;
  font-size: 10px;
  font-weigth: bold;
  background-color: #282a35;
  cursor: pointer;
  padding: 8px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`