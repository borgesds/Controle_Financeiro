import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa'
import { Td, Tr } from './styles'

export function GridItem({ item, onDelete }) {
  return (
    <Tr>
      <Td>{item.desc}</Td>
      <Td>{item.amount}</Td>
      <Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Td>
      <Td aligCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </Td>
    </Tr>
  )
}
