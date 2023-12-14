import styled, { css } from "styled-components"

type IStyledButton = {
    selected? : boolean
    width?: string 
}

const StyledButton = styled.button<IStyledButton>`
    width: 150px;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    background: transparent;
    text-align: center;

    ${({ selected }) => selected && css `
        border-top: 2px solid #333;
        border-left: 2px solid #333;
        border-right: 2px solid #333;
        border-bottom: none;
    `};

    ${({ width }) => width && css `
        width: ${width};
    `};
`

export default StyledButton