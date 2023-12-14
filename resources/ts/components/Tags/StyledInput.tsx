import { css, styled } from "styled-components";

type IStyledInput = {
    fontSize?: string
}

const StyledInput = styled.input<IStyledInput>`
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    font-size: 150%;
	box-sizing: border-box;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	border: none;
	border-bottom: 2px solid #1b2538;
	background: transparent;
     &:focus {
        outline: none;
        border-bottom: 2px solid #da3c41;
    }

    ${({ fontSize }) => top && css `font-size: ${fontSize}` };
`

export default StyledInput