import styled from "styled-components";

const StyledSubmit = styled.input`
    margin-top: 30px;
    width: 100px;
    padding: 10px;
    border: 2px solid #333;
    background-color: #eee;
    text-align: center;

    &:hover{
        transition: .3s all;
        border: 2px solid #eee;
        background-color: #333;
        color: #eee;
    }
`

export default StyledSubmit