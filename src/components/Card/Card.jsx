import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.37);
    backdrop-filter: blur(9.5px);
    border: 1px solid rgba(255, 255, 255, 0.47);
    border-radius: 5px;
    padding: 5px 35px;
    width: 30%;

    @media (max-width: 750px) {
        width: 20%

        p {
            font-size: 12px;
        }

        span {
            font-size: 20px
        }

        svg {
            display: none;
        }
    }

    @media (max-width: 414px) {
        width:90%;
    }
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg {
        width: 25px;
        height: 25px;
    }
`

const HeaderTitle = styled.p`
    font-size: 20px;
`

const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`

const Card = ({title, Icon, value}) => {
    return(
       <Container>
        <Header>
            <HeaderTitle>{title}</HeaderTitle>
            <Icon />
        </Header>
        <Total>{value}</Total>
       </Container>
    )
}

export default Card 