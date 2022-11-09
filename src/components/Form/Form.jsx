import React, { useState} from 'react'
import styled from 'styled-components'
import Grid from '../Grid/Grid'

const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 90%;
    background: rgba(255, 255, 255, 0.37);
    backdrop-filter: blur(9.5px);
    border: 1px solid rgba(255, 255, 255, 0.47);
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px;


    @media (max-width: 750px) {
        display: grid;
    }
`

const InputContent = styled.div`
    display: flex;
    flex-direction: column;

`

const Label = styled.label``

const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`

const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: #000;
        margin-top: 0;
    }
`

const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);

    @media(max-width: 414px) {
        height: 40px;
    }
`

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState("")

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if(!desc || !amount) {
            alert("Informe a descrição e o valor")
            return 
        } else if(amount < 1) {
            alert("O valor tem que ser positivo")
            return 
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc("")
        setAmount("")
    }


    return(
        <>
        <Container>
            <InputContent>
                <Label>Descrição</Label>
                <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </InputContent>
            <InputContent>
                <Label>Valor</Label>
                <Input
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(e.target.value)} />
            </InputContent>
                <RadioGroup>
                    <Input 
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)} />
                    <Label htmlFor="rIncome">Entrada</Label>
                    <Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)} />
                    <Label htmlFor="rExpenses">Saida</Label>
                </RadioGroup>
                <Button onClick={handleSave}>Adicionar</Button>
        </Container>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    )
}

export default Form 