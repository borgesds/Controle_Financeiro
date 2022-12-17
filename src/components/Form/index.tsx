import { useState } from 'react'
import { Grid } from '../Grid'
import {
  Button,
  Container,
  FormContainer,
  Input,
  InputContent,
  Label,
  RadioGroup,
} from './styles'

interface HandleAddTransition {
  handleAdd: () => string | number | boolean
  transactionsList: []
  setTransactionsList: []
}

interface AddData {
  id: number
  desc: string
  amount: number
  expense: boolean
}

export function Form({
  handleAdd,
  transactionsList,
  setTransactionsList,
}: HandleAddTransition) {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState(0)
  const [isExpense, setExpense] = useState(false)

  // criar um id aleatório
  const generateId = () => Math.round(Math.random() * 1000)

  const OnChangeDesc = (e: any) => setDesc(e.target.value)
  const OnChangeAmount = (e: any) => setAmount(e.target.value)
  const OnChangeIsExpense = () => setExpense(!isExpense)

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição do valor!!!')
      return
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!!!')
      return
    }

    const transition: AddData = {
      id: generateId(),
      desc,
      amount,
      expense: isExpense,
    }

    handleAdd(transition)

    setDesc('')
    setAmount(0)
  }

  return (
    <FormContainer>
      <Container>
        <InputContent>
          <Label>Descrição</Label>
          <Input value={desc} onChange={OnChangeDesc} />
        </InputContent>

        <InputContent>
          <Label>Valor</Label>
          <Input value={amount} type="number" onChange={OnChangeAmount} />
        </InputContent>

        <InputContent>
          <RadioGroup>
            <Input
              type="radio"
              id="rIncome"
              defaultChecked
              name="group1"
              onChange={OnChangeIsExpense}
            />
            <Label htmlFor="rIncome">Entrada</Label>

            <Input
              type="radio"
              id="rExpenses"
              name="group1"
              onChange={OnChangeIsExpense}
            />
            <Label htmlFor="rExpenses">Saída</Label>
          </RadioGroup>
        </InputContent>

        <Button onClick={handleSave}>ADICIONAR</Button>
      </Container>

      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </FormContainer>
  )
}
