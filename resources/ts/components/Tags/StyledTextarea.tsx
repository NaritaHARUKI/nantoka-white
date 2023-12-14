import styled from "styled-components";

const StyledTextare = styled.textarea`
    width: 100%;
    height: 450px;
    box-sizing: border-box;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	border: none;
	border: 2px solid #1b2538;
    background: transparent;
    margin-top: 0px;

    &:focus{
      outline: none;
      border: 2px solid #da3c41;
    }
`

export default StyledTextare