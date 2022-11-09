import React from "react"
import styled from "styled-components"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
  } from "react-icons/fa";

const Tr = styled.tr``

const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    work-break: break-all;

    svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
`

const GridItem = ({ item, onDelete}) => {
    return(
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
            <Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </Td>
        </Tr>
    )
}

export default GridItem 