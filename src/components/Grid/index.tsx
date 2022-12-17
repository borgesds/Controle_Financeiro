import { GridItem } from '../GridItem'
import { Table, Tbody, Th, Thead, Tr } from './styles'

interface ItensTransition {
  itens: []
  setItens: () => string | number | boolean
}

export function Grid({ itens, setItens }: ItensTransition) {
  const onDelete = (ID: any) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID)

    setItens(newArray)

    localStorage.setItem('transactions', JSON.stringify(newArray))
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={40}>Descrição</Th>
          <Th width={40}>Valor</Th>
          <Th width={10} alignCenter>
            Tipo
          </Th>
          <Th width={10}></Th>
        </Tr>
      </Thead>

      <Tbody>
        {itens.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Tbody>
    </Table>
  )
}
