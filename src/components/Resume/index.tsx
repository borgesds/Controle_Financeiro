import { ResumeItem } from '../ResumeItem'
import { Container } from './styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

export function Resume() {
  return (
    <Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={'1000'} />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={'1000'}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={'1000'} />
    </Container>
  )
}
