import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 25vh;
    text-align: center;
    background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);

    @media (max-width: 414px) {
        height: 50vh;
    }
`;

const Banner = styled.h1`

`;

const Title = styled.div`
    padding-top: 20px;
    color: #fff;
`

const Header = () => {
    return(
       <Container>
        <Banner>
            <Title>Controle Financeiro</Title>
        </Banner>
       </Container>
    )
}

export default Header 