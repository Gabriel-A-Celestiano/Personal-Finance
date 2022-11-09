import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import { BsWallet2, BsCashCoin, BsBank } from "react-icons/bs"



const Container = styled.div`
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    margin-top: -50px;
    justify-content: space-around;

    @media (max-width: 414px) {
        flex-wrap: wrap;
        margin-top: -83%;
    }
`

const Resume = ({income, expense, total}) => {
    return(
    <Container>
        <Card title="Entradas" Icon={BsWallet2} value={income}/>
        <Card title="Saidas" Icon={BsCashCoin} value={expense}/>
        <Card title="Total" Icon={BsBank} value={total}/>
    </Container>
    )
}

export default Resume 