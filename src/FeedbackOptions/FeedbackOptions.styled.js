import styled from "styled-components";

export const Btn = styled.button`
color: grey;
border: solid 1px aqua;
&:not(:last-child){
    margin-right: 10px;
}
&:hover{
    background-color: #0302647c;
}
`