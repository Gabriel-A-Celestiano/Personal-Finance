import React from 'react'
import styled from 'styled-components'
import GridItem from '../GridItem/GridItem'

const Table = styled.table`
    width: 90%;
    background: rgba(255, 255, 255, 0.37);
    backdrop-filter: blur(9.5px);
    border: 1px solid rgba(255, 255, 255, 0.47);
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`

const Thead = styled.thead``

const Tbody = styled.tbody``

const Tr = styled.tr``

const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    text-align: ${(props => (props.alignCenter ? "center" : "start"))};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`

const Grid = ({ itens, setItens}) => {

    const onDelete = ID => {
        const newArray = itens.filter((transaction) => transaction.id !== ID)
        setItens(newArray)
        localStorage.setItem("transactions", JSON.stringify(newArray))
    }

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th width={40}>Descrição</Th>
                    <Th width={40}>Valor</Th>
                    <Th width={10} alignCenter>Tipo</Th>
                    <Th width={10}></Th>
                </Tr>
            </Thead>
            <Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </Tbody>
        </Table>
    )
}

export default Grid 